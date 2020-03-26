import { updateAPIsData } from './requests-emitters/requests-emitters.js';

const newDataArrivedEvent = 'newDataArrived';

const header = "header";
loadHTML(header, header, `${header}.html`);

const twoPhotos = "two-photos";
loadHTML(twoPhotos, twoPhotos, `${twoPhotos}.html`);

const vaccineStatusPerLab = "vaccine-status-per-lab";
loadHTML(vaccineStatusPerLab, vaccineStatusPerLab, `${vaccineStatusPerLab}.html`);

const vaccinePrecentagePerLab = "vaccine-percentage-per-lab";
loadHTML(vaccinePrecentagePerLab, vaccinePrecentagePerLab, `${vaccinePrecentagePerLab}.html`);

const soldiersAtQuarantineCounter = "soldiers-at-quarantine-counter";
loadHTML(soldiersAtQuarantineCounter, soldiersAtQuarantineCounter, `${soldiersAtQuarantineCounter}.html`);

const soldiersAtHomeCounter = "soldiers-at-home-counter";
loadHTML(soldiersAtHomeCounter, soldiersAtHomeCounter, `${soldiersAtHomeCounter}.html`);

const distanceBetweenQuarantinedSoldiers = "distance-between-quarantined-soldiers";
loadHTML(distanceBetweenQuarantinedSoldiers, distanceBetweenQuarantinedSoldiers, `${distanceBetweenQuarantinedSoldiers}.html`);

const celebration = "celebration";
loadHTML(celebration, celebration, `${celebration}.html`);


function loadHTML(containerId, fileDirectory, filename) {
    $(function(){
        $(`#${containerId}`).load(`./contents/${fileDirectory}/${filename}`);
    });
}

// Activating popup after X time
function setAlertUptimeTimeout() {
    setTimeout(alertUptimeTimoutCallback, 30000);
}

function alertUptimeTimoutCallback() {
    let alertModal = document.createElement("alert-modal");
    alertModal.message = "והבדידות והבדידים החברים היחידים שנשארו לי";
    alertModal.onClickOK = () => {
        document.body.removeChild(alertModal);
        setAlertUptimeTimeout();
    };
    document.body.appendChild(alertModal);
}

setAlertUptimeTimeout();

// updates APIs data
setInterval(() => {
    updateAPIsData();
    $(`#${vaccineStatusPerLab}`).trigger(newDataArrivedEvent);
    $(`#${vaccinePrecentagePerLab}`).trigger(newDataArrivedEvent);
    $(`#${soldiersAtQuarantineCounter}`).trigger(newDataArrivedEvent);
    $(`#${soldiersAtHomeCounter}`).trigger(newDataArrivedEvent);
// }, 193000);
}, 10000);