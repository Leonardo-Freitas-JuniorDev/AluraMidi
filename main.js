function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') {
        console.log("Elemento encontrado: " + instrumento)
        elemento.play();
    }
    else {
        console.log("Elemento não encontrado ou inválido")
    }
}



const listaDeTeclas = document.querySelectorAll('.tecla');


for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const teclas = listaDeTeclas[contador];
    const instrumento = teclas.classList[1];
    const id = `#som_${instrumento}`


    function tocaSom(seletorAudio) {
        const elemento = document.querySelector(seletorAudio);

        if (elemento != null && elemento.localName === 'audio') {
            console.log("Elemento encontrado: " + instrumento)
            elemento.play();
        }
        else {
            console.log("Elemento não encontrado ou inválido")
        }
    }


    teclas.onclick = function () {
        tocaSom(id);
    }

    teclas.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            teclas.classList.add('ativa');
        }

    }

    teclas.onkeyup = function () {
        teclas.classList.remove('ativa');
    }

}
