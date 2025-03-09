function convertToUpper() {
    const input = document.getElementById("textInput").value;
    const output = input.toUpperCase();
    document.getElementById("textOutput").value = output;
}

function convertToLower() {
    const input = document.getElementById("textInput").value;
    const output = input.toLowerCase();
    document.getElementById("textOutput").value = output;
}

function convertToTitle() {
    const input = document.getElementById("textInput").value;
    const output = input.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
    document.getElementById("textOutput").value = output;
}
function convertToSentence() {
    const input = document.getElementById("textInput").value;
    const output = input.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, function(txt) {
        return txt.toUpperCase();
    });
    document.getElementById("textOutput").value = output;
}
function convertToAlternating() {
    let textInput = document.getElementById("textInput").value;
    let alternatingText = '';
    for (let i = 0; i < textInput.length; i++) {
        if (i % 2 === 0) {
            alternatingText += textInput[i].toLowerCase();
        } else {
            alternatingText += textInput[i].toUpperCase();
        }
    }
    document.getElementById("textOutput").value = alternatingText;
}
