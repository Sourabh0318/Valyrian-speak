var textInput = document.querySelector("#inputText");
var translateBtn = document.querySelector("#btn");
var output = document.querySelector("#outputBox");
var serverUrl = "https://api.funtranslations.com/translate/valyrian.json";

function constructUrl(text){
    return serverUrl + "?" + "text=" + text;
}

function clickHandler(){
    var input = textInput.value;
    fetch(constructUrl(input))
    .then(response => response.json())
    .then(json => {
        var translate = json.contents.translated;
        output.innerText = translate;
    })
}

translateBtn.addEventListener("click", clickHandler);