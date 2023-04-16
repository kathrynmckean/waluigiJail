
console.log("your script has loaded");

const onWaluigiClick = () => {
    console.log("waaaah you clicked me!");
    const waluigiContainer = document.querySelector(".WaluigiJail");
    const waluigiSpeech = document.createElement("h2");
    waluigiSpeech.setAttribute("class", "WaluigiText");
    waluigiSpeech.textContent = "Wahhhh";
    waluigiContainer.appendChild(waluigiSpeech);
}

const relieveWaluigiOfHisPain = () => {
    const waluigiTexts = document.querySelectorAll(".WaluigiText");
    console.log(waluigiTexts)
    // if waluigiTexts is truthy remove the h2s
    if (waluigiTexts.length > 0) {
        for (const item of waluigiTexts) {
            item.remove();
        }
        console.log("you have laid waluigi to rest... he thanks you");
    }
};
