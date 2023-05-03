let counter = 0;
let thankYouCounter = 0;
let btnCounter = 0;

const createBtn = () => {
    const btnContainer = document.querySelector('.header')
    const btn = document.createElement("button");
    btn.setAttribute('class', 'FunButton');
    btn.setAttribute('id', 'FunButton');
    btn.textContent = "click here to heal waluigi"
    btn.addEventListener('click', relieveWaluigiOfHisPain);
    console.log("waaaah you clicked me!");
    btnContainer.appendChild(btn);
    btnCounter++;
}

const removeBtn = () => {
    const btnRemoval = document.getElementById('FunButton');
    btnRemoval.parentNode.removeChild(btnRemoval);
    btnCounter = 0;
}

const relieveWaluigiOfHisPain = () => {
    const waluigiTexts = document.querySelectorAll(".WaluigiText");
    console.log(waluigiTexts)
    // if waluigiTexts is truthy remove the h2s
    if (waluigiTexts.length > 0) {
        for (const item of waluigiTexts) {
            item.remove();
        }
        document.getElementById("waluigiPic").src = "happyWa.png";
        console.log("you have laid waluigi to rest... he thanks you");
        counter = 0;

        const thanksContainer = document.querySelector(".WaluigiJail");
        const thankYou = document.createElement("h2");
        thankYou.setAttribute("class", "thankYou");
        thankYou.setAttribute('id', 'thankYou')
        thankYou.textContent = "<3 :)  wahhh  :) <3";
        thanksContainer.appendChild(thankYou);
        thankYouCounter++;

        removeBtn();
    }
};


const removeTY = () => {
    const tyRemoval = document.getElementById('thankYou');
    tyRemoval.parentNode.removeChild(tyRemoval);
    thankYouCounter = 0;
}

const onWaluigiClick = () => {
    const hasbtn = document.querySelector('.header').querySelector('.FunButton');

    if (hasbtn == null) {
        createBtn();
    }
    if (thankYouCounter >= 1) {
        removeTY();
    }

    // if theres 11 wahhhs then return

    if (counter >= 10) {
        return
    }
    const waluigiContainer = document.querySelector(".wahMargin");
    const waluigiSpeech = document.createElement("h2");
    waluigiSpeech.setAttribute("class", "WaluigiText");
    waluigiSpeech.textContent = "Wahhhhh!!";
    waluigiContainer.appendChild(waluigiSpeech);

    const waluigiContainer2 = document.querySelector(".wahMargin2");
    const waluigiSpeech2 = document.createElement("h2");
    waluigiSpeech2.setAttribute("class", "WaluigiText");
    waluigiSpeech2.textContent = "Wahhhhh!!";
    waluigiContainer2.appendChild(waluigiSpeech2);
    counter++;
    document.getElementById("waluigiPic").src = "madWa.png";

}