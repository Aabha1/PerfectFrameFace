const image = document.getElementById('image');
let age;
let gender;
let link;

Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
    faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
    faceapi.nets.ageGenderNet.loadFromUri('/models')
]).then(start)

function start() {
    console.log("loaded");
    image.addEventListener('change', async() => {
        const input = await faceapi.bufferToImage(image.files[0])
        const detections = await faceapi.detectAllFaces(input, new faceapi.TinyFaceDetectorOptions()).withAgeAndGender()

        try {
            age = detections[0].age;
            gender = detections[0].gender;
        } catch {
            console.log("Face not detected");
            age = "none";
            gender = "none";
        }
        switch (gender) {
            case "none":
                link = "https://perfect-frame.herokuapp.com/#/?q=notDetected";
                break;
            case "male":
                if (age < 11) {
                    link = "https://perfect-frame.herokuapp.com/#/?q=ToddlerBoy";
                } else if (age < 31) {
                    link = "https://perfect-frame.herokuapp.com/#/?q=YoungMan";
                } else {
                    link = "https://perfect-frame.herokuapp.com/#/?q=AdultMan";
                }
                break;
            case "female":
                if (age < 9) {
                    link = "https://perfect-frame.herokuapp.com/#/?q=ToddlerGirl";
                } else if (age < 16) {
                    link = "https://perfect-frame.herokuapp.com/#/?q=SmallGirl";
                } else if (age < 31) {
                    link = "https://perfect-frame.herokuapp.com/#/?q=YoungWoman";
                } else {
                    link = "https://perfect-frame.herokuapp.com/#/?q=AdultWoman";
                }
                break;
            default:
                console.log("in default");
        }
        console.log(link);
        const form = document.querySelector("#submit");
        form.action = link;
        const btn = document.querySelector("#now");
        if (link.startsWith('https://')) {
            btn.classList.add('now');
            btn.removeAttribute('disabled');
        }
    })
}