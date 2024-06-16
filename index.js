var cent = 0
var seg = 0
var min = 0
var hora = 0
var interval
var isRunning = false


function doisDigitos(digito) {
    if (digito < 10) {
        return ('0' + digito)
    }
    else {
        return (digito)
    }
}

function trocarBotao() {
    if (!isRunning) {
        iniciar()
    }
    else {
        pausar()
    }

}

function iniciar() {
    interval = setInterval(contador, 16, 66666666666667)
    document.getElementById('start').style.display = 'none'
    document.getElementById('pause').style.display = 'inline'
    isRunning = true

}

function pausar() {
    clearInterval(interval)
    document.getElementById('start').style.display = 'inline'
    document.getElementById('pause').style.display = 'none'
    isRunning = false
}

function zerar() {
    clearInterval(interval)
    isRunning = false
    document.getElementById('start').style.display = 'inline'
    document.getElementById('pause').style.display = 'none'
    cent = 0
    seg = 0
    min = 0
    hora = 0
    document.getElementById('timer').innerText = '00:00:00:00'


}

function contador() {
    cent++
    if (cent == 60) {
        seg++
        cent = 0

        if (seg == 60) {
            min++
            seg = 0

            if (min == 60) {
                hora++
                min = 0
            }
        }
    }

    document.getElementById('timer').innerText = doisDigitos(hora) + ':' + doisDigitos(min) + ':' + doisDigitos(seg) + ':' + doisDigitos(cent)
}