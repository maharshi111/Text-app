import React from 'react'

function ColorPallet() {
    function ChangeColor(){
        var color1 = document.querySelector(".color1");
        var color2 = document.querySelector(".color2");
        
        function setGradient(){
            document.body.style.background = "linear-gradient(to right,"+color1.value+","+color2.value+")";
            // css.textContent = body.style.background + ";";
        }
        color1.addEventListener("input",setGradient);
         color2.addEventListener("input",setGradient);
    }
  return (
    <>
      <input className = "color1"  onChange={ChangeColor()} type="color" name="color1" value="#00ff00" />
	  <input className = "color2" type="color" name="color2" value="#ff0000"/>
        {/* var color1 = document.querySelector(".color1");
        var color2 = document.querySelector(".color2"); */}
        {/* var body = document.getElementById("gradient");
        function setGradient(){
            body.style.background = "linear-gradient(to right,"+color1.value+","+color2.value+")";
            css.textContent = body.style.background + ";";
        }


        color1.addEventListener("input",setGradient);
        color2.addEventListener("input",setGradient); */}
    </>
  )
}

export default ColorPallet
