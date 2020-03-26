import { labsResponse } from '../../requests-emitters/requests-emitters.js';

const devStatus = {
    IN_PROGRESS: "in_progress",
    FAILED: "failed",
    SUCCESS: "success"
};

function sortLabsByName(labs) {
    return labs.sort((a, b) => a.name.toString().localeCompare(b.name.toString()));
}

function mapLabsNames(labs) {
    labs = sortLabsByName(labs);
    return labs.map(lab => lab.name);
}

function mapStatuses(labs) {
    labs = sortLabsByName(labs);
    return labs.map((lab) => {
        switch (lab.status.toLowerCase()){
            case devStatus.FAILED.toLowerCase():
                return 0;
            case devStatus.SUCCESS.toLowerCase():
                return 1;
            case devStatus.IN_PROGRESS.toLowerCase():
                return 2;
        }
    });
}

let chart = null;

function createChart(labs){
    const labsNames = mapLabsNames(labs);
    const labsStatuses = mapStatuses(labs);
    let ctx = document.getElementById('vaccine-status-per-lab-chart').getContext('2d');
    chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labsNames,
            datasets: [{
                label: 'Vaccine Development Status',
                data: labsStatuses,
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
                        stepSize: 1
                    }
                }]
            },
            legend: {
                display: false
            }
        }
    });
}

function updateData(labs) {
    chart.data.datasets[0].data = mapStatuses(labs);
    chart.update(0)
}

createChart(labsResponse.labs);
$("#vaccine-status-per-lab").on("newDataArrived", () => { updateData(labsResponse.labs) });