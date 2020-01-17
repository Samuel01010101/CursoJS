function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fAno.value.length == 0 || fAno.value > ano){
        window.alert('Verifique o ano e tente novamente')
    }
    else{
        var Vsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        res.innerHTML = `Idade Calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(Vsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 11){
                //criança
                img.setAttribute('src', 'img/foto-bebe-m.png')
            }
            else if(idade < 24){
                //ador ele sente
                img.setAttribute('src', 'img/foto-jovem-m.png')
            }
            else if(idade < 50){
                //adulto
                img.setAttribute('src', 'img/foto-adulto-m.png')
            }
            else{
                //Idoso
                img.setAttribute('src', 'img/foto-idoso-m.png')
            }
        }
        else if(Vsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 11){
                //criança
                img.setAttribute('src', 'img/foto-bebe-f.png')
            }
            else if(idade < 24){
                //ador ele sente
                img.setAttribute('src', 'img/foto-jovem-f.png')
            }
            else if(idade < 50){
                //adulto
                img.setAttribute('src', 'img/foto-adulto-f.png')
            }
            else{
                //Idoso
                img.setAttribute('src', 'img/foto-idoso-f.png')
            }
        }
        res.innerHTML = `Detectamos  ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}