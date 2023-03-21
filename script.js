function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var img = document.getElementById('imagem')
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente')
    }
     else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value // auqi
        res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        if (fsex[0].checked){
            genero = 'homem' 
            if (idade >= 0 && idade < 10){
                //criança
                img.src = 'menino.png'
            } else if(idade < 21){
                //jovem
                img.src = 'jovemh.png'
            } else if (idade < 50){
                //adulto
                img.src = 'homem.png'
            } else {
                //idoso
                img.src = 'idoso.png'
            }
        } else if (fsex[1].checked){
            genero = 'mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.src = 'menina.png'
            } else if(idade < 21){
                //jovem
                img.src = 'jovemm.png'
            } else if (idade < 50){
                //adulto
                img.src = 'mulher.png'
            } else {
                //idoso
                img.src = 'idosa.png'
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}