const input = document.querySelector(".input");
const output = document.querySelector(".output");
const translateBtn = document.querySelector(".app-btn");

const API_URL = "https://api.funtranslations.com/translate/yoda.json";

const getTranslationURL = text => {
    return API_URL + "?text=" + text;
}

const setText = text => {
    outputContainer.innerText = text;
}  

translateBtn.addEventListener('click', () => {
    const inputText = input.value;
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(res => {
        const result = res.contents;
        const { translated: yodaText } = result;
        output.innerText = yodaText;
    })
    .catch(err => {
        console.log("The API limit is exhausted!");
    })
})
