const popUp = document.querySelector(".tasketekoray")
const exit = document.querySelector (".exit")
const body = document.querySelector (".container")

exit.addEventListener("click", ()=>{
    popUp.style.display = "none"
    body.style.filter = "none"
})
console.log(popUp);

function tasketeh () {
    popUp.style.display = "block"
    body.style.filter = "blur(5px)"
    popUp.style.filter= "none"

}