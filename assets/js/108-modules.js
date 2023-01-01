import showAlert, {showConfirm } from "../modules/messages.js"

document.getElementById("btn1").addEventListener("click", ()=>{
    showAlert("This is modules alert function")
})


document.getElementById("btn2").addEventListener("click", ()=>{
    showConfirm("This is modules confirm function");
})