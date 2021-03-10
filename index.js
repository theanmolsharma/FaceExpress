// Selecting video element form DOM to display feed from camera
const camera = document.getElementById("camera");

//Loading models for detection
Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
    faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
    faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
    faceapi.nets.faceExpressionNet.loadFromUri("/models")
]).then(startCam)

//function to start camera
function startCam() {
    navigator.getUserMedia(
        { video: {}},
        stream => camera.srcObject = stream,
        error => console.error(error)
    )
}

//function to start face detection
camera.addEventListener('play', () => {

    //create canvas and add canvas to DOM
    const canvas = faceapi.createCanvasFromMedia(camera)
    document.body.append(canvas)

    //store display size in a object
    const dispSize = {
        width: camera.offsetWidth,
        height: camera.offsetHeight
    }

    faceapi.matchDimensions(canvas, dispSize)
    setInterval(async() => {
        const detections = await faceapi.detectAllFaces(camera, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
        const resizedDetections = faceapi.resizeResults(detections, dispSize)
        canvas.getContext('2d').clearRect(0,0, canvas.width, canvas.height)
        faceapi.draw.drawDetections(canvas, resizedDetections)
        faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
        faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
    }, 100)
})