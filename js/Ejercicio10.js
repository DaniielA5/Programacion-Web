function convertir() {
    var grad1 =document.getElementById("grad1").value;
    if (grad1 === "") {
        alert("Por favor ingresa un número");
        return; 
    }

    if (isNaN(grad1)) {
        alert("Por favor ingresa un número válido");
        return; 
    }

    var gradNum = parseFloat(grad1);

    if (gradNum < 0 ) {
        alert("El numero ingresado es negativo.");
        return;
    }
    var resultado =((parseFloat(grad1) * 9/5 ) + 32);

    document.getElementById("resultado").value = resultado.toFixed(2);
}