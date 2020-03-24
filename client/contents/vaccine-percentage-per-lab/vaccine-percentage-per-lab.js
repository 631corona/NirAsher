import { labsResponse } from '../../requests-emitters/requests-emitters.js';

createChart(labsResponse.labs);

function createChart(labs){
    const labsNames = labs.map(lab => lab.name);
    const labsPercentile = labs.map(lab => lab.progress_percentile);
    console.log(labsNames);
    let ctx = document.getElementById('vaccine-percentage-per-lab-chart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labsNames,
            datasets: [{
                label: 'Vaccine Development Percentage',
                data: labsPercentile,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
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
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                    }
                }]
            }
        }
    });
}