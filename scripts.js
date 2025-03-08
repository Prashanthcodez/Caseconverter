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
