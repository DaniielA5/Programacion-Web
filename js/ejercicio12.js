function convertir() {
    var pesos = document.getElementById("pesos").value;
    if (pesos === ""){
        alert("Por favor ingresa un numero ");
        return;
    }

    if(isNaN(pesos)) {
        alert("Por favor ingresa un numero valido");
        return;
    }

    var pesosNum = parseFloat(pesos);

    if ( pesosNum < 0) {
        alert("El numero ingresado es negativo");
        return;
    }
    
    var resultado = ((parseFloat(pesos) / 18.18 ));

    document.getElementById("resultado").value = resultado.toFixed(2);
}