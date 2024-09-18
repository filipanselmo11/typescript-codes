var soma = function (x, y) {
    var res = x + y;
    return res;
};

const handleCalcular = document.getElementById('calcular').addEventListener('click', () => {
    let x = parseInt(document.getElementById('x').value);
    let y = parseInt(document.getElementById('y').value);

    if (isNaN(x) || isNaN(y)) {
        alert('Insira números válidos');
        return;
    }

    let resultado = soma(x, y);
    document.getElementById('resultado').innerHTML = resultado;
});
