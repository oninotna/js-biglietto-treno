// RACCOLTA DATI
const tripDistance = Number(prompt("inserisci il numero di km che vuoi percorrere"));
const agePassenger = Number(prompt("inserisci la tua età"));
const priceForKm = 0.21;
const totalPrice = tripDistance * priceForKm;


// INIZIO SINTASSI
if ((tripDistance < 1 || agePassenger < 14) || (isNaN(tripDistance) || isNaN(agePassenger))) {
    alert("inserisci i dati correttamente");
}
else if (tripDistance > 1 && agePassenger > 14) {
    if (agePassenger < 18) {
        const discountUn = (totalPrice * 20) / 100;
        const totalPriceUn = totalPrice - discountUn;
        alert(`${"Ciao, sei un passegero minorenne, quindi il costo del tuo biglietto sarà scontato del 20%, quindi il totale è:"} ${totalPriceUn.toFixed(2)} ${"€"}`);
    }
    else if (agePassenger > 65) {
        const discountOv = (totalPrice * 40) / 100;
        const totalPriceOv = totalPrice - discountOv;
        alert(`${"Ciao, sei un passegero con età superiore ai 65 anni, quindi il costo del tuo biglietto sarà scontato del 40%, quindi il totale è:"} ${totalPriceOv.toFixed(2)} ${"€"}`);

    }
    else {
        alert(`${"Ciao, il totale del biglietto è è:"} ${totalPrice.toFixed(2)} ${"€"}`);
    }
}