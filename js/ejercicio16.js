// aplicaciopnn de las listas  

const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : 'Error al dividir por 0';

const operaciones = {
  suma: sumar,
  resta: restar,
  multiplicacion: multiplicar,
  division: dividir
};

const calculo = (tipo) => {
  const val1 = document.getElementById('numero1').value.trim();
  const val2 = document.getElementById('numero2').value.trim();
 
  if (val1 === '' || val2 === '') {
    Swal.fire('Campos vacíos', 'Ingresa ambos números.', 'warning');
    return;
  }
 
  const n1 = Number(val1);
  const n2 = Number(val2);
 
  if (isNaN(n1) || isNaN(n2)) {
    Swal.fire('Valor inválido', 'Ambos campos deben ser números.', 'error');
    return;
  }
 
  const resultado = operaciones[tipo](n1, n2);
 
  if (typeof resultado === 'string') {
    Swal.fire('Error matemático', resultado, 'error');
    return;
  }
 
  document.getElementById('resultado').value = resultado;
};