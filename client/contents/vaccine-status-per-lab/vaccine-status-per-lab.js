import { labsResponse } from '../../requests-emitters/requests-emitters.js';

const devStatus = {
    IN_PROGRESS: "in_progress",
    FAILED: "failed",
    SUCCESS: "success"
};

function mapLabsNames(labs) {
    return labs.map(lab => lab.name);
}

let chart = null;

function mapStatuses(labs) {
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
                        stepSize: 1
                    }
                }]
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