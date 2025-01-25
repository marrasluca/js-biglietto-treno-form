const btn = document.getElementById('bottone')
const prezzo = 0.21

btn.addEventListener('click', function() {
    const nome = document.getElementById( 'nome' ).value
    const eta = document.getElementById( 'fascia-eta').value
    const km = document.getElementById( 'km' ).value
    const costo = document.getElementById('costo')

    console.log (nome, eta, km)

    const bigliettoFinale = document.getElementById('biglietto')

    bigliettoFinale.classList.remove('hidden')
    bigliettoFinale.classList.add('show')

    const nomePasseggero = document.getElementById('nome-passeggero')
    const offertaApplicata = document.getElementById('offerta-applicata')

    nomePasseggero.innerHTML = nome

    if( eta == "maggiorenne" ){
        offertaApplicata.innerHTML = "Biglietto Standard"
        costo.innerHTML = prezzo * km
    }else if ( eta == "minorenne"){
        offertaApplicata.innerHTML = "Biglietto Ridotto"
        costo.innerHTML = (prezzo * km) * 0.80
    }else{
        offertaApplicata.innerHTML = "Biglietto over 65"
        costo.innerHTML = (prezzo * km) * 0.60
    }

    carrozza.innerHTML = randomNumber (1, 99)
    codice.innerHTML = randomNumber(1111, 9999)


})


function randomNumber(min, max){
    return Math.floor(Math.random() * max) + min
}