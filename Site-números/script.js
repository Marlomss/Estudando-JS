let numeros = []
let num = document.querySelector('input#txtnum')
let lista = document.getElementById('txts')
let final = querySelector('div#fim')


function enumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function nalista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    
    if(enumero(num.value) && !nalista(num.value, numeros)){
       numeros.push(Number(num.value))
       var item = document.createElement('option')
       item.text = `valor ${num.value} adicionado`
       txts.appendChild(item)
       fim.innerHTML = ''
    }else{
        window.alert('Valor inválido ou já encontrado na lista')
    
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(numeros.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = numeros.length
        let maior = numeros[0]
        let menor = numeros[0]
        let soma = 0
        let media = 0
        for(let pos in numeros){
            soma += numeros[pos]
            if(numeros[pos] > maior)
                maior = numeros[pos]
            if(numeros[pos] < menor)
                menor = numeros[pos]
        }
        media = soma / tot
        fim.innerHTML = ''
        fim.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        fim.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        fim.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        fim.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        fim.innerHTML += `<p>A média dos valores digitados é ${media}</p>`



    }
}
