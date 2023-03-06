function verificarNumero() {

    const numero = parseInt(document.getElementById('numero').value);

    let a = 0;
    let b = 1;
    let c = 1;
    while (c < numero) {
      c = a + b;
      a = b;
      b = c;
    }

    if (c === numero) {
      document.getElementById('resultado').textContent = `${numero} Pertence à sequência de Fibonacci.`;
    } else {
      document.getElementById('resultado').textContent = `${numero} Não pertence à sequência de Fibonacci.`;
    }

    return false;
  }