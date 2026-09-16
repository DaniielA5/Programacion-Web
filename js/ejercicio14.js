function calcular() {
    var valor = document.getElementById("num").value;

    if(valor === "" ) {
        alert("Por favor ingresa valores valida");
        return;
    }
    var arreglo = valor.split(",");

    var numeros = arreglo.map(Number);
    var inval = numeros.some(n => isNaN(n));
    if (inval) {
        alert("Por favor ingresa solo numeros")
        return;
    }
    var mayor = Math.max(...numeros);
    var menor = Math.min(...numeros);


    let suma = numeros.reduce((acc, valor) => acc + valor, 0);
    let promedio = suma / numeros.length;

    document.getElementById("mayor").value = mayor ;
    document.getElementById("menor").value = menor ;
    document.getElementById("promedio").value = promedio; 
}