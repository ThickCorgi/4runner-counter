


let countEl = document.getElementById("count-el")
// let saveEl = document.getElementById()
let saveEl = document.getElementById("save-btn")
let welcomeEl = document.getElementById("welcome-el")
let saveE = document.getElementById("save-el")

//initialize count to 0
let count =0;
// increment count variable
function incremenet(){
    count=count+1
    countEl.innerText = count
}


function save(){
    let string = ` ${count} - `
    saveE.textContent += string

    //need to set both to zero
    //count is kept track with js
    //countel.innerText kept track with website
    countEl.innerText = 0
    count = 0
}



let rating = "# 1 car in the world; you wont regret nothing"

welcomeEl.innerText = rating




