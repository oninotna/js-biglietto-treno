// RACCOLTA DATI
const tripDistance = Number(prompt("inserisci il numero di km che vuoi percorrere"));
const agePassenger = Number(prompt("inserisci la tua età"));
const priceForKm = 0.21;
const totalPrice = tripDistance * priceForKm;

const discountUn = (totalPrice * 20) / 100;
const discountOv = (totalPrice * 40) / 100;

// INIZIO SINTASSI
if (tripDistance > 1 && agePassenger > 14) {
    if (agePassenger < 18) {
        const totalPriceUn = totalPrice - discountUn;
        alert(`${"Ciao, sei un passegero minorenne, quindi il costo del tuo biglietto sarà scontato del 20%, quindi il totale è:"} ${totalPriceUn.toFixed(2)} ${"€"}`)
    }
    else if (agePassenger > 65) {
        const totalPriceOv = totalPrice - discountOv;
        alert(`${"Ciao, sei un passegero con età superiore ai 65 anni, quindi il costo del tuo biglietto sarà scontato del 40%, quindi il totale è:"} ${totalPriceOv.toFixed(2)} ${"€"}`)

    }
    else {
        alert(`${"Ciao, il totale del biglietto è è:"} ${totalPrice.toFixed(2)} ${"€"}`)
    }
}
else if (tripDistance > 1 && agePassenger < 14) {
    alert("Non hai l'età minima per poter viaggiare da solo")
}
else if (tripDistance < 1 && agePassenger > 14) {
    alert("Non hai inserito correttamente il numero di km da percorrere")
}
else {
    alert("Reinserisci i dati correttamente")
}