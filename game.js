var numOfSquares = 6;
var color = generateRandomColors(numOfSquares);
var square = document.querySelectorAll('.square');
var pickedColor = picked();
var colorDisplay = document.querySelector('#colorDisplay');
colorDisplay.innerHTML = pickedColor;
var messageDisplay = document.getElementById('message');
var h1 = document.getElementsByTagName('h1')[0];
var newColors = document.getElementById('newColors');
newColors.textContent = "New Colors";
var easy = document.getElementById('easy');
var hard = document.getElementById('hard');

easy.addEventListener('click', function(e) {
    easy.classList.add("selected");
    hard.classList.remove("selected");
    for (var i = 3; i < numOfSquares; i++) {
        square[i].style.display = "none";
    }
    numOfSquares = 3;
    reset(numOfSquares);


});

hard.addEventListener('click', function(e) {
    easy.classList.remove("selected");
    hard.classList.add("selected");
    for (var i = 3; i < numOfSquares; i++) {
        square[i].style.display = "block";
    }
    numOfSquares = 6;
    reset(numOfSquares);
});

newColors.addEventListener('click', function() {
    reset(numOfSquares);
});

function reset(numOfSquares) {
    color = generateRandomColors(numOfSquares);
    pickedColor = picked();
    colorDisplay.innerHTML = pickedColor;
    h1.style.background = "steelblue";
    messageDisplay.textContent = null;
    newColors.textContent = "New Colors";
    for (var i = 0; i < numOfSquares; i++) {
        square[i].style.background = color[i];
    }
}

for (var i = 0; i < square.length; i++) {
    //color of each sqaure
    square[i].style.background = color[i];

    square[i].addEventListener('click', function(e) {
        //color of square clicked
        var colorOfSquare = this.style.background;
        //compares color of clicked sqaure to choosen color
        if (colorOfSquare === pickedColor) {
            messageDisplay.textContent = "Correct!";
            newColors.textContent = "Play Again?"
            changeColor();
        } else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again?";

        }

    });
}

function changeColor(color) {
    for (var i = 0; i < square.length; i++) {
        square[i].style.background = pickedColor;
        h1.style.background = pickedColor;
    }
}

function picked() {
    var random = Math.floor(Math.random() * color.length)
    return color[random];
}

function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);

        arr.push("rgb(" + r + ", " + g + ", " + b + ")");
    }
    return arr;
}
