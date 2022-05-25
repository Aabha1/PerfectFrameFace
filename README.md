# The Perfet Frame Project Part One

## About

This is the first part of the project where the task of face recognisation is performed.
You may choose the images from sample provided or you can even choose any image of your choice.
The image should contain 1 person only. If it contains more than 1 person, the person with highest regonisation ratio is selected and passed as input. The age and gender of the person is recognized and on submitting the image, the page is directed to the next part of the project which will display the selected products on the website. If the face is not recognised or there is no face then too a link will be generated and you will get no output and back to shopping screen on submitting. The submit button connects the two parts of the project.

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
Please run it in a live server extension and do not use Node.js since this file does not contain @tensorflow.js/tfjs-node. I colud not build it using Node.js because if I make it a node js file then I am required to install @tensorflow.js/tfjs-node which was not supported on my system. This file is not been installed on win-32/ia32(the system i am using).
Thus, to run it locally,
In VS Code install live-server extension {or if you are on any other platfrom just install live-server extension.}
Then right click on home.html
Choose the option "Open with live-server"
It opens and works.

## For input images

A folder named "sample pictures" is provided. This contains pictures for all the seven categories which i have didvided the people in. You can use any other image.

## Details

The models folder and face-api.min.js are pre-bliut folder and library which I am using to bluid-up this prototype. The image is downloaded from unsplash and stored here. The composer.json file and index.php file are demo files used so that this website could be hosted on heroku since heroku do not host normal static websites. The rest of the files are bluid in by me as a part of the project.

### Reference to Part 2:

```
https://github.com/Aabha1/PerfectFrame
```

### Website link for final prototype

```
https://perfect-frame-face.herokuapp.com/
```

Thank you for visiting
