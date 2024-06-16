var seg=00
var min=00
var hora=00
var interval

function doisDigitos(digito){
    if (digito<10){
        return('0'+digito)
    } 
        else{
            return(digito)
        }
    }



function iniciar(){
       interval = setInterval(contador, 1000)
       document.getElementById('start').disabled=true
   
}

function pausar(){
    clearInterval(interval)
    document.getElementById('start').disabled=false
}

function zerar(){
    seg=00
    min=00
    hora=00
    document.getElementById('timer').innerText='00:00:00'
    document.getElementById('start').disabled=false
}

function contador(){
    seg++
    if (seg==60){
        min++
        seg=0

        if (min==60){
            hora++
            min=0
        }
    }

    document.getElementById('timer').innerText=doisDigitos(hora)+':'+doisDigitos(min)+':'+doisDigitos(seg)
}