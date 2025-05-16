document.addEventListener('DOMContentLoaded', function () {
    console.log("Dashboard carregado com sucesso!");
    // Aqui você pode adicionar interatividade futura, como gráficos, animações, etc.
});

window.onload = function () {
    const bpCtx = document.getElementById('bpChart').getContext('2d');
    const sugarCtx = document.getElementById('sugarChart').getContext('2d');
    const heartCtx = document.getElementById('heartChart').getContext('2d');

    new Chart(bpCtx, {
        type: 'line',
        data: {
            labels: ['10/04', '16/04', '24/04'],
            datasets: [{
                label: 'Blood Pressure (mmHg)',
                data: [120, 130, 125],
                borderColor: '#00BFA5',
                backgroundColor: 'rgba(0, 191, 165, 0.2)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    labels: { color: '#333' }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { color: '#555' }
                },
                x: {
                    ticks: { color: '#555' }
                }
            }
        }
    });

    new Chart(sugarCtx, {
        type: 'line',
        data: {
            labels: ['10/04', '16/04', '24/04'],
            datasets: [{
                label: 'Sugar Level (mg/dL)',
                data: [90, 140, 180],
                borderColor: '#FF7043',
                backgroundColor: 'rgba(255, 112, 67, 0.2)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    labels: { color: '#333' }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { color: '#555' }
                },
                x: {
                    ticks: { color: '#555' }
                }
            }
        }
    });

    new Chart(heartCtx, {
        type: 'line',
        data: {
            labels: ['10/04', '16/04', '24/04'],
            datasets: [{
                label: 'Heart Rate (bpm)',
                data: [75, 85, 80],
                borderColor: '#42A5F5',
                backgroundColor: 'rgba(66, 165, 245, 0.2)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    labels: { color: '#333' }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { color: '#555' }
                },
                x: {
                    ticks: { color: '#555' }
                }
            }
        }
    });

    // Interação no perfil do paciente
    const profileCard = document.querySelector('.card');
    profileCard.style.cursor = 'pointer';
    profileCard.addEventListener('mouseenter', () => {
        profileCard.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
    });
    profileCard.addEventListener('mouseleave', () => {
        profileCard.style.boxShadow = '';
    });
    profileCard.addEventListener('click', () => {
        alert('Mais informações sobre Juana: \n- Histórico Médico\n- Contatos de Emergência\n- Planos de Tratamento');
    });
};
