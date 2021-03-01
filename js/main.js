// const for DOM ------------------ //
const btn = document.querySelector("button")
const squares = document.querySelectorAll(".square")
const sqOne = document.querySelector("#one")
const sqTwo = document.querySelector("#two")
const sqThree = document.querySelector("#three")
const sqFour = document.querySelector("#four")
const sqFive = document.querySelector("#five")
const sqSix = document.querySelector("#six")
const sqSeven = document.querySelector("#seven")
const sqEight = document.querySelector("#eight")
const sqNine = document.querySelector("#nine")

// expr for logic ------------------ //
squares.forEach(item => { // The purpose of this loop is to make every square listened
  item.addEventListener("click", function(){
    item.style.backgroundColor = "red"; // This line is for making the clicked square turns red
    // conditionals for bot ----------- //
    setTimeout(function(){
      if (getComputedStyle(item).backgroundColor === "rgb(255, 0, 0)"){
        // first row ------------------ //
        if(Math.random() < 1/3){
          if(Math.random() < 1/3){
            sqOne.style.backgroundColor = "blue"
          }else if(1/3 < Math.random() < 2/3){
            sqTwo.style.backgroundColor = "blue"
          }else{
            sqThree.style.backgroundColor = "blue"
          }
        }
        // second row ---------------- //
        else if(1/3 < Math.random() < 2/3){
          if(Math.random() < 1/3){
            sqFour.style.backgroundColor = "blue"
          }else if(1/3 < Math.random() < 2/3){
            sqFive.style.backgroundColor = "blue"
          }else{
            sqSix.style.backgroundColor = "blue"
          }
        }
        // third row ---------------- //
        else{
          if(Math.random() < 1/3){
            sqSeven.style.backgroundColor = "blue"
          }else if(1/3 < Math.random() < 2/3){
            sqEight.style.backgroundColor = "blue"
          }else{
            sqNine.style.backgroundColor = "blue"
          }
        }






        // if (Math.random()*50+1 < 5.67){
        //   sqOne.style.backgroundColor = "blue"
        // }else if (Math.random()*50+1 < 11.34){
        //   sqTwo.style.backgroundColor = "blue"
        // }else if (Math.random()*50+1 < 17.01){
        //   sqThree.style.backgroundColor = "blue"
        // }else if (Math.random()*50+1 < 22.68){
        //   sqFour.style.backgroundColor = "blue"
        // }else if (Math.random()*50+1 < 28.35){
        //   sqFive.style.backgroundColor = "blue"
        // }else if (Math.random()*50+1 < 34.02){
        //   sqSix.style.backgroundColor = "blue"
        // }else if (Math.random()*50+1 < 39.69){
        //   sqSeven.style.backgroundColor = "blue"
        // }else if (Math.random()*50+1 < 45.36){
        //   sqEight.style.backgroundColor = "blue"
        // }else{
        //   sqNine.style.backgroundColor = "blue"
        // }
      }
    }, 300)
  })
  // expr for new Game ---------------- //
  btn.addEventListener("click", function(){
    item.removeAttribute("style")
  })

})
