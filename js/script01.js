/*let nome = "Ana";
let idade = 26;

alert("Nome: " + nome + " idade: " + idade);*/

//document.getElementById("txtNumero").value = "Valor preenchido no script"

/*function mostraMenor(){
    let nr1 = parseInt(document.getElementById("txtNumero1").value);
    let nr2 = parseInt(document.getElementById("txtNumero2").value);
    let objDiv = document.getElementById("resultado");
    let resultado = ""

    if(nr1 > nr2)
        resultado = "Numero 1 > Numero 2"
    else if(nr1 == nr2)
        resultado = "Os números são iguais";
    else
        resultado = "Numero 2 > Numero 1";

    objDiv.innerHTML = resultado

    //document.location.reload(true)

}*/

function mostraMenor(pNum1, pNum2){
    let nr1 = parseInt(pNum1);
    let nr2 = parseInt(pNum2);
    let objDiv = document.getElementById("resultado");
    let resultado = ""

    if(nr1 > nr2)
        resultado = "Numero 1 > Numero 2"
    else if(nr1 == nr2)
        resultado = "Os números são iguais";
    else
        resultado = "Numero 2 > Numero 1";

    objDiv.innerHTML = resultado

}

