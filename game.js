var color = [
    "rgb(225, 0, 0)",
    "rgb(0, 225, 0)",
    "rgb(0, 0, 225)",
    "rgb(225, 225, 0)",
    "rgb(225, 0, 225)",
    "rgb(0, 225, 225)",
];

var square = document.querySelectorAll('.square');
var pickedColor = color[0];
var colorDisplay = document.querySelector('#colorDisplay');
colorDisplay.innerHTML = pickedColor;

for (var i = 0; i < square.length; i++) {
    square[i].style.background = color[i];

    square[i].addEventListener('click', function(e) {
      var colorOfSquare = this.style.background;
        if (colorOfSquare == pickedColor) {
            alert('Right! Good Job');
        } else {
          alert('Try again');
        }

    });
}
