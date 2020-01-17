function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos`

    if(hora >= 0 && hora < 12){
        img.src = 'img/manha.png'
        document.body.style.background = '#fed17d'
    }
     else if(hora >= 12 && hora <= 18){
        img.src = 'img/tarde.png'
        document.body.style.background = '#f9d11e'
    } 
    else{
        img.src = 'img/noite.png'
        document.body.style.background = '#3c6d88'
    }
}