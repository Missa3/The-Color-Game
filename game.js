var numOfSquares = 6;
var color = generateRandomColors(numOfSquares);
var pickedColor = picked();
var colorDisplay = document.querySelector('#colorDisplay');
colorDisplay.innerHTML = pickedColor;
var messageDisplay = document.getElementById('message');
var h1 = document.getElementsByTagName('h1')[0];
var newColors = document.getElementById('newColors');
newColors.textContent = "New Colors";
var mode = document.querySelectorAll('.mode');
var container = document.querySelector('#container');
var square = document.querySelectorAll('.square');
for (var i = 0; i < numOfSquares; i++) {
    container.innerHTML += "<div class='square'></div>";
    var square = document.querySelectorAll('.square');
    square[i].style.background = color[i];
}

for (var i = 0; i < numOfSquares; i++) {
    //color of each square

    square[i].style.background = color[i];

}
rightWrong();

function rightWrong() {
    for (var i = 0; i < numOfSquares; i++) {
        square[i].addEventListener('click', function() {
            //console.log(this.style.background);
            //color of square clicked
            var colorOfSquare = this.style.background;
            //compares color of clicked square to choosen color
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
}


for (var i = 0; i < mode.length; i++) {

    mode[i].addEventListener('click', function() {
        for (var j = 0; j < mode.length; j++) {
            mode[j].classList.remove("selected");
        }
        this.classList.add("selected");
        (this.textContent === 'Easy') ? numOfSquares = 3: numOfSquares = 6;
        reset(numOfSquares);
    });

}


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
    container.innerHTML = "";
    for (var i = 0; i < numOfSquares; i++) {
        var div = document.createElement('div');
        div.className = 'square';
        container.appendChild(div);
        square = document.querySelectorAll('.square');
        console.log(square[i]);
        square[i].style.background = color[i];
    }
    rightWrong();
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
