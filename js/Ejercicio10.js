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

    var resultado =((parseFloat(grad1) * 9/5 ) + 32);

    document.getElementById("resultado").value = resultado.toFixed(2);
}