function inserir(campo){ //função INSERIR que recebe o valor inserido no campo e guarda esse valor
    let valor = document.getElementById(campo).value
    alert(valor)
}

function calc(){
    let valor1 = document.getElementById('vlr1').value
    let valor2 = document.getElementById('vlr2').value
    let valor3 = document.getElementById('vlr3').value
    let valor4 = document.getElementById('vlr4').value

    //if (valor1 == 0 || valor2 == 0 || valor3 == 0 || valor4 == 0) {window.alert(`Certifique-se de que preencheu todas as caixas para calcular o percentual!`)document.getElementById('v5').innerHTML = 'Certifique-se de que todas as caixas para calcular o percentual!'}

    let total = parseInt(valor1)+parseInt(valor2)+parseInt(valor3)+parseInt(valor4)


    let percent1 = (valor1*100)/total
    let percent2 = (valor2*100)/total
    let percent3 = (valor3*100)/total
    let percent4 = (valor4*100)/total

    document.getElementById('v1').innerHTML = percent1+'%'
    document.getElementById('v2').innerHTML = percent2+'%'
    document.getElementById('v3').innerHTML = percent3+'%'
    document.getElementById('v4').innerHTML = percent4+'%'

    document.getElementById('v5').innerHTML = 'R$'+total+' Investidos na empresa.'
}

function limpar(){
    document.getElementById('vlr1').value = ''
    document.getElementById('vlr2').value = ''
    document.getElementById('vlr3').value = ''
    document.getElementById('vlr4').value = ''

    document.getElementById('v1').innerHTML = ''
    document.getElementById('v2').innerHTML = ''
    document.getElementById('v3').innerHTML = ''
    document.getElementById('v4').innerHTML = ''

    document.getElementById('v5').innerHTML = 'Calcule novamente.'
}

