// Heart Icons Functionalities

const hearts = document.getElementsByClassName("heart-icon");

for (const heart of hearts) {
    heart.addEventListener("click", function () {
        const heartCounter = parseInt(document.getElementById("heart-count").innerText);
        const increaseHeartCount = heartCounter + 1;
        document.getElementById("heart-count").innerText = increaseHeartCount;
    })
};

