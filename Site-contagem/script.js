function contar(){
var inicio = document.getElementById('txtin')
var fim = document.getElementById('txtfim')
var passo = document.getElementById('txtpa')

if (inicio.value == "" || fim.value == "" || passo.value == ""){
         resp.textContent = 'Impossível contar'
    } else if (passo === 0){
      window.alert('Passo inválido considerando passo 1')
        passo++
    } else if (Number(inicio.value) > Number(fim.value)){
        inicio = Number(inicio.value)
        fim = Number(fim.value)
        passo = Number(passo.value)

        resp.innerHTML = 'Contando:\n'
         for(var i = inicio;i >= fim; i -= passo){
                 resp.innerHTML += "\n"+ i +String.fromCodePoint(0x1F449)+ "\n"
    }
   resp.innerHTML += String.fromCodePoint(0x1F4A3)
    } else if (Number(inicio.value) < Number(fim.value)){
        inicio = Number(inicio.value)
        fim = Number(fim.value)
        passo = Number(passo.value)

        resp.innerHTML = 'Contando:\n'
         for(var c = inicio;c <= fim; c += passo){
                 resp.innerHTML += "\n"+ c +String.fromCodePoint(0x1F449)+ "\n"
    }
   resp.innerHTML += String.fromCodePoint(0x1F4A3)
  }
  
}
