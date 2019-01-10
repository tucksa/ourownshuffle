$(document).ready(function() {

  // Array for word colors
  var colorsOfText = [];

  // Target word
  var targetColor= [];

  // Target word color
  var targetColorOfText= [];

  // User"s selection
  var userAnswer;

  // Array for words
  var colors = [
    "brown",
    "blue",
    "magenta",
    "teal",
    "coral",
    "black"
  ];
 var Copy1= [...colors]
  function randomInt() {
        
        return Math.floor(Math.random()*Copy1.length);
      } 
console.log(randomInt());
console.log(colors[randomInt()]);


      //targetColor.push(colors[randomInt()]);
      for(var i= randomInt(); i<Copy1.length; i= randomInt()){
        targetColor.push(Copy1[i]);
        Copy1.splice(i,1);        
      };
        console.log(targetColor);

        for(var i= 0; i< colors.length; i++) {
          div = document.createElement("li");
          $("#color-picker").append(div);
          $(div).attr("color" ,targetColor[i]).text(targetColor[i]);
          $(div).css("color", targetColorOfText[i]);

        }

      });
