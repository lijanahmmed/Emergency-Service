// Heart Icons Functionalities

const hearts = document.getElementsByClassName("heart-icon");
for (const heart of hearts) {
    heart.addEventListener("click", function () {
        const heartCounter = parseInt(document.getElementById("heart-count").innerText);
        const increaseHeartCount = heartCounter + 1;
        document.getElementById("heart-count").innerText = increaseHeartCount;
    })
};


// Copy Button Functionalities

const copies = document.getElementsByClassName("copy-btn");
for (const copy of copies) {
    copy.addEventListener("click", function () {
        const serviceNumber = copy.parentNode.parentNode.children[3].innerText;
        navigator.clipboard.writeText(serviceNumber);
        alert("Copied the service number" +" " + serviceNumber);
        const copyCounter = parseInt(document.getElementById("copy-count").innerText);
        const increaseCopyCount = copyCounter + 1;
        document.getElementById("copy-count").innerText = increaseCopyCount;
    })
};