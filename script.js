function contar(){
    let inicio = document.getElementById('text')
    let fim = document.getElementById('textfim')
    let passo = document.getElementById('textpasso')
    let resultado = document.getElementById('finalresult')
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0)
    {
        window.alert('[ERROR] faltam para completar a operação!')
    }
    else
    {
        resultado.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p==0)
        {
            alert('Passo inválido')
        }
        if(i<f )
        {
            for(let c = i; c <= f; c += p)
            {
               resultado.innerHTML += ` ${c} \u{1F449}`
            }   
    
            resultado.innerHTML += `\u{1F6A7}`
        }
        else{
            for(let c =i; c >= f; c -= p)
            {
               resultado.innerHTML += ` ${c} \u{1F449}`
            }   
    
            resultado.innerHTML += `\u{1F6A7}`
        }
    }
}