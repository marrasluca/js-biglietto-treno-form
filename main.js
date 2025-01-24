const btn = document.getElementById('bottone')

btn.addEventListener('click', function() {
    const nome = getElementById('nome').value
    const eta = getElementById( 'fascia.eta').value
    const km = getElementById('km').value

    console.log (nome, eta, km)

    constBigliettoFinale = document.getElementById('biglietto')

    bigliettoFinale.classList.remove('hidden')
    bigliettoFinale.classList.add('show')

})