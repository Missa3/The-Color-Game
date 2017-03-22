var color = [
    "rgb(225, 0, 0)",
    "rgb(0, 225, 0)",
    "rgb(0, 0, 225)",
    "rgb(225, 225, 0)",
    "rgb(225, 0, 225)",
    "rgb(0, 225, 225)",
];

var square = document.querySelectorAll('.square');
var pickedColor = picked();
var colorDisplay = document.querySelector('#colorDisplay');
colorDisplay.innerHTML = pickedColor;
var messageDisplay = document.getElementById('message');

for (var i = 0; i < square.length; i++) {
    //color of each sqaure
    square[i].style.background = color[i];

    square[i].addEventListener('click', function(e) {
        //color of square clicked
        var colorOfSquare = this.style.background;
        //compares color of clicked sqaure to choosen color
        if (colorOfSquare == pickedColor) {
            messageDisplay.textContent = "Correct";
            changeColor();
        } else {
            this.style.background = " #232323";
            messageDisplay.textContent = "Try Again";
        }

    });
}

function changeColor(color) {
    for (var i = 0; i < square.length; i++) {
        square[i].style.background = pickedColor;
    }
}

function picked() {
    var random = Math.floor(Math.random() * color.length)
    return color[random];
}
