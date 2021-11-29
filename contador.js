var counterVal = 0;

function incrementClick() {
    updateDisplay(++counterVal);
}

function resetCounter() {
    counterVal = 0;
    updateDisplay(counterVal);
}

function updateDisplay(val) {
    document.getElementById("counter-label").innerHTML = val;}

    var num1="10"
    var num2="2"

    var conversao1= parseInt(num1)
    var conversao2= parseInt(num2)
    console.log(conversao1)
    
    var calculo= conversao1+conversao2
    alert(calculo)