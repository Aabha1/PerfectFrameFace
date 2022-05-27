# The Perfect Frame Project Part One

## About

Above is the first part of the project where the task of face recognition is performed.
You may choose the images from the sample provided or even select an image from your album.
The image should contain one person only. If it includes more than one person, the person with the highest recognition ratio is selected and passed as input. The age and gender of the person are recognised. On submitting the image, the page is directed to the next part of the project, which will display the selected products on the website. If the face is not recognised or there is no face, then the algorithm will generate a link, and you will get no output and go back to the shopping screen on submitting. The submit button connects the two parts of the project.

## Hosted on

```
https://perfect-frame-face.herokuapp.com/
```

Please use the above link to visit the website.

## Run Locally

### 1. Clone repo

```
$ git clone git@github.com:Aabha1/PerfectFrameFace.git
```

### 2. To Run

Open the folder.
Please run it in a live server extension and not use Node.js since this file does not contain @tensorflow.js/tfjs-node. I could not build it using Node.js because if I make it a node js file, then I am required to install @tensorflow.js/tfjs-node, which was not supported on my system. This file has not been installed on win-32/ia32(the system I am using).
Thus, to run it locally,
In VS Code, install the live-server extension {or if you are on any other platform, just install the live-server extension.}
Then right-click on home.html
Choose the option "Open with live-server."
It opens and works.

## For input images

A folder named "sample pictures" is provided. It contains pictures of all the seven categories I have divided the people into. You can use any other image.

## Details

The models' folder and face-api.min.js are pre-built folders and libraries, which I am using to build this prototype. The image is downloaded from Unsplash and stored here. The composer.json file and index.php file are demo files used so that this website could be hosted on Heroku since Heroku does not host regular static websites. The rest of the files are built by me as a part of the project.

### Reference to Part 2:

```
https://github.com/Aabha1/PerfectFrame
```

### Website link for the final prototype

```
https://perfect-frame-face.herokuapp.com/
```

Thank you for visiting
