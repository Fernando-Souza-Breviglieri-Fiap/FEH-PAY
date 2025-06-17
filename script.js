const ctx = document.getElementById('graficoResumo').getContext('2d');
let entradas = 0;
let saidas = 0;

const graficoResumo = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Entradas', 'Saídas'],
        datasets: [{
            data: [entradas, saidas],
            backgroundColor: ['#28a745', '#dc3545'],
            borderColor: '#1c1f22',
            borderWidth: 3
        }]
    },
    options: {
        cutout: '60%',
        plugins: {
            legend: {
                labels: {
                    color: 'white',
                    font: { size: 14 }
                }
            }
        }
    }
});

document.getElementById('formTransacao').addEventListener('submit', function (e) {
    e.preventDefault();

    const tipo = document.getElementById('tipo').value;
    const valor = parseFloat(document.getElementById('valor').value);

    if (tipo === 'entrada') {
        entradas += valor;
    } else if (tipo === 'saida') {
        saidas += valor;
    }

    graficoResumo.data.datasets[0].data = [entradas, saidas];
    graficoResumo.update();

    this.reset(); // Limpa o formulário
});
