function tabuada(){
    var n = document.getElementById('txtnum')
    var tab = document.getElementById('seltab')
    
    tab.innerHTML = ''
    if(n.value == ""){
        window.alert('Por favor digite um número')
    }else{
    n = Number(n.value)
    num = 0

    for(var c = 1; c <= 10; c++){
        var num = c * n
    
            let item = document.createElement('option')
            item.text = `${c} x ${n} = ${num}`
            item.value = `tab${c}`
            tab.appendChild(item)
       
    }
}
    }