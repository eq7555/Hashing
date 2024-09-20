function processValues() {
    var inputText = document.getElementById('inputText').value;
    var values = inputText.split(',').map(value => value.trim());
    var originalValues = [];
    var hashedValues = [];

    values.forEach(function (value) {
        originalValues.push(value);
        hashedValues.push(hashFunction(value));
    });

    displayResults(originalValues, hashedValues);
}

function hashFunction(value) {
    return CryptoJS.SHA256(value).toString();
}

function displayResults(originalValues, hashedValues) {
    var resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    for (var i = 0; i < originalValues.length; i++) {
        resultsDiv.innerHTML += `<div class="result"><strong>Sin Encriptar:</strong> ${originalValues[i]} - <strong>Encriptados:</strong> ${hashedValues[i]}</div>`;
    }
}