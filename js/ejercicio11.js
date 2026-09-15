function convertir() {
    var kilom = document.getElementById("kilom").value;
    if(kilom === "") {
        alert("Por favor ingresa un numero");
        return;
    }

    if(isNaN(kilom)){
        alert("Por favor ingresa un numero valido");
        return;
    }

    var KilomNum = parseFloat(kilom);

    if (KilomNum < 0) {
        alert("Por favor ingresa un número positivo");
        return;
    }
    var resultado =((parseFloat(kilom) * 0.621371)); 

    document.getElementById("resultado").value = resultado.toFixed(6);
}