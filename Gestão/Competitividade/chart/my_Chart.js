document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('myChart');
    const earning = document.getElementById('earning');

```
#005F26
```

    if (ctx && earning) {
        new Chart(ctx, {
            type: 'polarArea',
            data: {
                labels: ['Clinico Geral', 'Ortopedista', 'Dentista', 'Pediatra', 'Niticionista', 'Outros'],
                datasets: [{
                    label: 'Especialidades',
                    data: [15, 12, 6, 18, 7, 3],
                    backgroundColor: [
                        '#2DAB62',
                        '#6EBB81',
                        '#005F26',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'right'
                    }
                }
            }
        });

        new Chart(earning, {
            type: 'bar',
            data: {
                labels: ['Dress', 'Bag', 'T-Shirt', 'Hat', 'Body', 'Swetter'],
                datasets: [{
                    label: 'Valor',
                    data: [1120, 1990, 480, 900, 890, 3670],
                    backgroundColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
});