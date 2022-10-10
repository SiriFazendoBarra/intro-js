const main = document.querySelector("#main")
const aside = document.querySelector("#aside")
const section = document.querySelector("#section")
const cardTitle = document.querySelector("#cardTitle")
const button = document.querySelector("#button")
const pPrecio = document.querySelector("#pPrecio")
const inputCantidad = document.querySelector("#inputCantidad")
const inputColor = document.querySelector("#inputColor")
const pTotal = document.querySelector("#pTotal")
const pCantidad = document.querySelector("#pCantidad")
const pColor = document.querySelector("#pColor")
const divColor = document.querySelector("#divColor")
const imgCard = document.querySelector("#imgCard")

let itemID = "Laptop Gamer AMD"
let cantidad
let precio = 6450000
let total = precio * cantidad

////// main ///////

main.style.display = "flex"
main.style.justifyContent = "center"
main.style.alignItems = "center"


///// section /////
section.style.backgroundColor = "green"
section.style.minWidth = "400px"
section.style.paddingBlock = "2rem"
section.style.borderRadius = "1rem"
section.style.border = "1px solid green"
section.style.display = "flex"
section.style.flexDirection = "column"
section.style.alignItems = "center"

///// aside //////
aside.style.width = "200px"
aside.style.display = "none"
aside.style.backgroundColor = "white"
aside.style.padding = "2rem"

///// imgCard /////

imgCard.src = "assets/img/img-card.jpg"
imgCard.style.display = "block"
imgCard.style.width = "100%"

///// cardTitle //////

cardTitle.style.color = "white"
cardTitle.textContent = itemID

///// inputCatidad //////


inputCantidad.style.display = "block"
// inputCantidad.value = 1
inputCantidad.style.display = "block"
inputCantidad.style.height = "51px"
inputCantidad.style.width = "80%"
inputCantidad.style.borderRadius = "8px"
inputCantidad.style.marginBlock = "1rem"
inputCantidad.placeholder = "Ingrese una cantidad"

///// inputColor //////

inputColor.style.display = "block"
inputColor.style.height = "51px"
inputColor.style.width = "80%"
inputColor.style.borderRadius = "8px"
inputColor.style.marginBlock = "1rem"

///// pPrecio /////

pPrecio.textContent = `Precio: ${precio}`

///// pTotal /////


///// pCantidad /////


/////pColor//////
pColor.textContent = `Color:`

/////divColor//////

divColor.style.borderRadius = "15px"
divColor.style.width = "30px"
divColor.style.height = "30px"


//// button /////
button.style.width = "200px"
button.style.padding = "1rem"

//// EVENTOS ///

inputColor.addEventListener("input", () => {

    divColor.style.backgroundColor = inputColor.value
})

button.addEventListener("click", () => {
    aside.style.display = "block"
    cantidad = inputCantidad.value
    pCantidad.textContent = `Cantidad: ${cantidad}`
    total = precio * cantidad
    pTotal.textContent = `Total: ${total}`
})
