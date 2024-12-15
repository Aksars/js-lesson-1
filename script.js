/* Можно объявить вспомогательную переменную */
function changeColorRed(){
   let someDiv = document.querySelector(".block-1")
   someDiv.style.backgroundColor = "red"
}

// function changeColorYellow(){
//     let someDiv = ???????
//     ??????.?????.???????????? = ???????
// }

/* А можно сразу менять блок */
function changeBlockHeight(){
    document.querySelector(".block-3").style.height = "400px"
}
// function changeBlockWidth(){
//     document.querySelector(??????????).style.?????? = ??????
// }





/* Изменение текста */
function changeBlockText(){
    let someDiv = document.querySelector(".block-5")
    someDiv.innerHTML = "Васян прийдет в четверг"
}


/* Добавление текста */
function addBlockText1(){
    let someDiv = document.querySelector(".block-6")
    let старыйТекст = someDiv.innerHTML
    let новыйТекст = старыйТекст + "Кукуруза!!"
    someDiv.innerHTML = новыйТекст
}

/* А можно то же самое, но покороче */
function addBlockText2(){    
    let someDiv = document.querySelector(".block-6")  
    someDiv.innerHTML += "Кукуруза!!"
}

/* А можно еще покороче */
// function addBlockText3(){       
//     document.querySelector(??????).innerHTML += "Кукуруза!!"
// }