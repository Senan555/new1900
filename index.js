const siyahi = ["kagiz.png" , "scissors.png","stone.png"]

//DOM document object model

const kagiz = document.getElementById(`kagiz`)
const qayci = document.getElementById(`qayci`)
const das = document.getElementById(`das`)


const  komputerinSecimi = document.getElementById(`komputer-secim`)
const neticeniYaz = document.getElementById(`netice`)

kagiz.onclick = seciminiEle
qayci.onclick = seciminiEle
das.onclick = seciminiEle


function seciminiEle() {

}

function RandomSecim(){
    const say = Math.round(Math.random()*2) // 0-2 arasinda qiymet alacaq
    komputerinSecimi.src = `img/${siyahi[say]}` //template literal
}