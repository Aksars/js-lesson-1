// 11111111111111111111111111111111111111
/* Можно объявить вспомогательную переменную */
function changeColorRed(){
   let someDiv = document.querySelector(".block-1")
   someDiv.style.backgroundColor = "red"
}
// 222222222222222222222222222222222222222
// function changeColorYellow(){
//     let someDiv = ???????
//     ??????.?????.???????????? = ???????
// }

// 333333333333333333333333333333333333333
/* А можно сразу менять блок */
function changeBlockHeight(){
    document.querySelector(".block-3").style.height = "400px"
}
// 444444444444444444444444444444444444444
// function changeBlockWidth(){
//     document.querySelector(??????????).style.?????? = ??????
// }



// 55555555555555555555555555555555555555
/* Изменение текста */
function changeBlockText(){
    let someDiv = document.querySelector(".block-5")
    someDiv.innerHTML = "Васян прийдет в четверг"
}

// 66666666666666666666666666666666666666
/* Добавление текста */
function addBlockText1(){
    let someDiv = document.querySelector(".block-6")
    let старыйТекст = someDiv.innerHTML
    let новыйТекст = старыйТекст + "Кукуруза!!"
    someDiv.innerHTML = новыйТекст
}

// 7777777777777777777777777777777777777
/* А можно то же самое, но покороче */
function addBlockText2(){    
    let someDiv = document.querySelector(".block-6")  
    someDiv.innerHTML += "Кукуруза!!"
}

// 8888888888888888888888888888888888888
/* А можно еще покороче */
// function addBlockText3(){       
//     document.querySelector(??????).innerHTML += "Кукуруза!!"
// }

// 9999999999999999999999999999999999999
function changeImage(){
    let someDiv = document.querySelector(".block-7 > img")  
    someDiv.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBVKXn5wmojzPeBAoEG0-j_7KPaC7t8COwMIxSjcyMmTRW0QHIQYHDYygthH5qkY7VmdE&usqp=CAU"
}