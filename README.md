# FaceExpress
This website used face-api to implement face recognition based on the uses expression. If you are smiling, it says happy. If you are pissed off, it says angry. This also uses face_expression_model, face_landmark_68_model, tiny_face_detection_model and face_recognition_model.

## Motivation
During my college holidays, I wanted to work on a project on face recognition. Since I was just a beginner, I couldn't find anything beginner friendly. Already proficient in web development, I decided to make a website to detect people's expressions and show their emotion.

## Tech/Frameworks used
This project makes use of <a href="https://justadudewhohacks.github.io/face-api.js/docs/index.html">face-api.js<a> and its various face detection models such as tinyFaceDetector, faceLandmark68Net, faceRecognitionNet and faceExpressionNet. The face recognition model uses a ResNet-34 like architecture which is implemented to compute a face descriptor (a feature vector with 128 values) from any given face image, which is used to describe the characteristics of a persons face. This projects also uses basic HTML and CSS for designing of layout of project.

## Features
* Realtime face detection through live feed from camera.
* Fast and responsive.
* Accurate facial expression detection

## Installation
Clone this repository using `git clone https://github.com/theanmolsharma/FaceExpress.git`
Open the project in VS Code(preferred) or any other development IDE.(The IDE should have a local live server to run the project)
Open the website on browser using local live server.

## License
This software is licensed under the terms in the file named "LICENSE" in this directory.
