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
// js const tracking back to html + values

send.addEventListener("click", () => {
    const distance = distanceEl.value
    const price = distance * 0.21
    const age = ageEl.value

    if (age < 18) {
        const underage = price - ((price * 20) / 100)
        console.log(underage);
    }
    else if (age >= 65) {
        const senior = price - ((price * 40) / 100)
        console.log(senior);
    }
    else {
        const regular = price
        console.log(regular);
    }
})
// 1st milestone with if conditions and its function
