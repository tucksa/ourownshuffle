 function randomInt(optArg= false) {
        let x
        if (optArg===false){
          x= colors.length
        }else{
          x = optArg
        }
        return Math.floor(Math.random()*x);
      } 
        for (var i=0; i< 7; i++) {
          Copy1= [...colors];
          Copy2 = [...colors];
          targetColor.push(Copy1.splice(randomInt(colors.length- i), 1));
          targetColorOfText.push(Copy2.splice(randomInt(colors.length- i), 1));
        };
        console.log(targetColor);
        console.log(targetColorOfText);.

        for(var i= 0; i< 7; i++) {
          div = document.createElement("li");
          $("#color-picker").append(div);
          $(div).attr("color" ,targetColor[i]).text(targetColor[i]);
          $(div).css("color", targetColorOfText[i]);

        }
