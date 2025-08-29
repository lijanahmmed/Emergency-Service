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
        alert("Copied the service number" + " " + serviceNumber);
        const copyCounter = parseInt(document.getElementById("copy-count").innerText);
        const increaseCopyCount = copyCounter + 1;
        document.getElementById("copy-count").innerText = increaseCopyCount;
    })
};


// Call Button Functionalities

const callButtons = document.getElementsByClassName("call-btn");
for (const callButton of callButtons) {
    callButton.addEventListener("click", function () {
        const serviceTitle = callButton.parentNode.parentNode.children[1].innerText;
        const serviceName = callButton.parentNode.parentNode.children[2].innerText;
        const serviceNumber = callButton.parentNode.parentNode.children[3].innerText;
        const availableCoin = parseInt(document.getElementById("coin-count").innerText);
        const now = new Date();
        const localTime = now.toLocaleTimeString();
        if (availableCoin < 20) {
            alert("❌ You don't have enough coins. You need at least 20 coins to make a call");
            return;
        }
        alert("📞 Calling" + " " + serviceName + " " + serviceNumber + "...");
        const currentCoin = availableCoin - 20;
        document.getElementById("coin-count").innerText = currentCoin;

        const historyContainer = document.getElementById("history-container");
        const newContainer = document.createElement("div");
        newContainer.innerHTML = `
        <div class="flex md:flex-col lg:flex-row justify-between items-center md:items-start lg:items-center p-2 bg-gray-100 rounded-lg">
                    <div>
                        <p class="font-bold">${serviceTitle}</p>
                        <p class="text-gray-600">${serviceNumber}</p>
                    </div>
                    <p class="md:mt-2 lg:mt-0 text-gray-600">${localTime}</p>
                </div>
            </div>
        `
        historyContainer.prepend(newContainer);
    })
};


// Clear Button Functionalities

const clearButton = document.getElementById("clear-btn");
clearButton.addEventListener("click", function () {
    const historyContainer = document.getElementById("history-container");
    historyContainer.innerHTML = "";
});