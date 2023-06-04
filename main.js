/* Steven Montoya
CIS 166
Project 1S */

//The intent of this css code is to style the project requirement in yellow so it can be easily seen by the evaluator. The requierment is a first and last name h1 element//

var h1Elements = document.getElementsByTagName("h1");  //variable declared has h1 elements and uses the html tag name in the .get method

function makeYellow() {  //process that turns the h1 element into yellow
  for (var i = 0; i < h1Elements.length; i++) { //for loop defined until h1 length ends
    h1Elements[i].style.backgroundColor = "#ff0"; //all length of the h1 element will be yellow
  }
}

makeYellow(); // method to peform the make yellow function