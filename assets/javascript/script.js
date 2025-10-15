/* 
Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
*/

/* 
TOOLS:
- prompt km (actually, it's an input in html)
- propmt age
- function
- const/let
- standard price 0.21euro/km
- 20% under 18
- 40% over 65
*/
console.log("it works");

const distanceEl = document.getElementById("distance")
const ageEl = document.getElementById("age")
const sendEl = document.getElementById("send")
const nameEl = document.getElementById("name")

const form = document.querySelector("form")
// js const tracking back to html + values

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const distance = distanceEl.value
    const price = distance * 0.21
    const age = ageEl.value
    const nameImput = nameEl.value

    let finalPrice = 0

    if (age < 18) {
        finalPrice = price - ((price * 20) / 100)
    }
    else if (age >= 65) {
        finalPrice = price - ((price * 40) / 100)
    }
    else {
        finalPrice = price
    }
    console.log(finalPrice);
    // 1st milestone with if conditions and its function
    const final = document.getElementById("infoFinal") 
    final.innerHTML = finalPrice.toFixed(2)
    // add 2 digit number after the period
    const userKm = document.getElementById("userKm")
    userKm.innerHTML = distance

    const userAge = document.getElementById("userAge")
    userAge.innerHTML = age
    // These print the user inserted values + the final result on the website page (inside the <p></p>)
    // 2nd Milestone with print on HTML complete

    const userName = document.getElementById("userName")
    userName.innerHTML = nameImput
    
})


