//fase di preparazione
const prezzoBigliettoKm = 0.21
let km = prompt("Quanti chilometri devo percorrere con il treno?")
let eta = parseInt( prompt("Quanti anni hai?") )
let scontoMinorenni = 0.20
let scontoOver = 0.40
let prezzoBiglietto

//fase di elaborazione
if( eta < 18 ){
    prezzoBiglietto = (prezzoBigliettoKm * km) * scontoMinorenni
}
if ( eta > 65) {
    prezzoBiglietto = (prezzoBigliettoKm * km) * scontoOver
}
else {
    (prezzoBigliettoKm * km)
}

//fase di output
console.log(`il prezzo del tuo biglietto è: ${ prezzoBiglietto.toFixed(2)}`);