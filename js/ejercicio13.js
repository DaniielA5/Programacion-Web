function verificar() {
    var edad = document.getElementById("edad").value;
    if(edad === "" ) {
        alert("Por favor ingresa una edad valida");
        return;
    }
    if (isNaN(edad)) {
        alert("Por favor ingresa una edad valida");
        return;
    }
    
    var edadNum = parseInt(edad, 10 );
    if (edadNum < 0 ) {
        alert("La edad debe ser mayor a O");
        return;
    }

    var resultado = document.getElementById("resultado");

    if( edadNum >= 18) {
         resultado.value ="Puedes votar";    
    } else { 
        resultado.value = "No puedes votar";
    }
} 