const btn = document.getElementById('bottone')

btn.addEventListener('click', function() {
    const nome = document.getElementById( 'nome' ).value
    const eta = document.getElementById( 'fascia-eta').value
    const km = document.getElementById( 'km' ).value

    console.log (nome, eta, km)

    const bigliettoFinale = document.getElementById('biglietto')

    bigliettoFinale.classList.remove('hidden')
    bigliettoFinale.classList.add('show')

    const nomePasseggero = document.getElementById('nome-passeggero')
    const offertaApplicata = document.getElementById('offerta-applicata')

    nomePasseggero.innerHTML = nome

    if( eta == "maggiorenne" ){
        offertaApplicata.innerHTML = "Biglietto Standard"

    }else if ( eta == "minorenne"){
        offertaApplicata.innerHTML = "Biglietto Ridotto"
        
    }else{
        offertaApplicata.innerHTML = "Biglietto over 65"
    }

})