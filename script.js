document.getElementById("generateButton").addEventListener("click", function() {
    var minValue = parseInt(document.getElementById("minValue").value);
    var maxValue = parseInt(document.getElementById("maxValue").value);

    if (isNaN(minValue) || isNaN(maxValue) || minValue > maxValue) {
        alert("Please enter valid numbers with the minimum value less than or equal to the maximum value.");
        return;
    }

    var randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

    document.getElementById("randomNumber").textContent = randomNumber;
});
