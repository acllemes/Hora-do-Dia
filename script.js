//Função externa
function exemplo(){
    
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    
    //Data atual
    var data = new Date()

    //Hora em texto (toString)
    var hora = data.getHours().toString()

    //tempo = condição ? seVerdadeira : seFalsa;

    hora = hora.length == 2 ? hora : "0" + hora

    //Minuto em texto (toString)
    var minuto = data.getMinutes().toString()
    
    minuto = minuto.length == 2 ? minuto : "0" + minuto

    //Segundo em texto (toString)
    var segundo = data.getSeconds().toString()
   
    segundo = segundo.length == 2 ? segundo : "0" + segundo;

    msg.innerHTML = `Agora são ${hora}:${minuto}:${segundo} horas.`

    if (hora >= 0 && hora < 12) {
        img.src = 'img/fotomanha.png'
        document.body.style.background = '#e2cd9f';
    }
    else if (hora >= 12 && hora <= 18) {
        img.src = 'img/fototarde.png'
        document.body.style.background = '#b9846f';
    }
    else {
        img.src = 'img/fotonoite.png'
        document.body.style.background = '#515154';
    }
}

//Função externa
function carregar() {

    //chamando a função de exemplo()
    exemplo()

    //repetindo a cada 1000 mlisegundos a função
    //exemplo
    setInterval(exemplo, 1000);

}