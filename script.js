// script.js

function checkAnswer() {
    var answer = document.getElementById("answer").value; // get user input from text box
    if (answer == "glove" || answer== "gloves") {
        alert("Correct!"); // show a message box
        window.location.href = "correct.html"; // go to a specific page
    } else {
        //alert("Incorrect!"); // show a message box
        window.location.href = "incorrect.html"; // go to a different page
    }
}