import { labsResponse } from '../../requests-emitters/requests-emitters.js';

function sortLabsByName(labs) {
    return labs.sort((a, b) => a.name.toString().localeCompare(b.name.toString()));
}

function mapLabsNames(labs) {
    labs = sortLabsByName(labs);
    return labs.map(lab => lab.name);
}

function mapLabsPercentile(labs) {
    labs = sortLabsByName(labs);
    return labs.map(lab => lab.progress_percentile);
}

let chart = null;

function createChart(labs){
    const labsNames = mapLabsNames(labs);
    const labsPercentile = mapLabsPercentile(labs);
    console.log(labsNames);
    let ctx = document.getElementById('vaccine-percentage-per-lab-chart').getContext('2d');
    chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labsNames,
            datasets: [{
                label: 'Vaccine Development Percentage',
                data: labsPercentile,
                backgroundColor: [
                    'rgba(255, 102, 102, 0.35)',
                    'rgba(255, 178, 102, 0.35)',
                    'rgba(255, 255, 102, 0.35)',
                    'rgba(178, 255, 102, 0.35)',
                    'rgba(102, 255, 102, 0.35)',
                    'rgba(102, 255, 178, 0.35)',
                    'rgba(102, 255, 255, 0.35)',
                    'rgba(102, 178, 255, 0.35)',
                    'rgba(102, 102, 255, 0.35)',
                    'rgba(178, 102, 255, 0.35)',
                    'rgba(255, 102, 255, 0.35)',
                    'rgba(255, 102, 178, 0.35)',
                ],
                borderColor: [
                    'rgba(255, 102, 102, 1)',
                    'rgba(255, 178, 102, 1)',
                    'rgba(255, 255, 102, 1)',
                    'rgba(178, 255, 102, 1)',
                    'rgba(102, 255, 102, 1)',
                    'rgba(102, 255, 178, 1)',
                    'rgba(102, 255, 255, 1)',
                    'rgba(102, 178, 255, 1)',
                    'rgba(102, 102, 255, 1)',
                    'rgba(178, 102, 255, 1)',
                    'rgba(255, 102, 255, 1)',
                    'rgba(255, 102, 178, 1)',
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

function updateData(labs) {
    chart.data.datasets[0].data = mapLabsPercentile(labs);
    chart.update(0)
}

createChart(labsResponse.labs);
$("#vaccine-percentage-per-lab").on("newDataArrived", () => { updateData(labsResponse.labs) });