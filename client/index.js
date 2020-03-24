function loadHTML(containerId, fileDirectory, filename) {
    $(function(){
        $(`#${containerId}`).load(`./contents/${fileDirectory}/${filename}`);
    });
}

const header = "header";
loadHTML(header, header, `${header}.html`);

const twoPhotos = "two-photos";
loadHTML(twoPhotos, twoPhotos, `${twoPhotos}.html`);

const vaccineStatusPerLab = "vaccine-status-per-lab";
loadHTML(vaccineStatusPerLab, vaccineStatusPerLab, `${vaccineStatusPerLab}.html`);

const vaccinePrecentagePerLab = "vaccine-percentage-per-lab";
loadHTML(vaccinePrecentagePerLab, vaccinePrecentagePerLab, `${vaccinePrecentagePerLab}.html`);

const counters = "counters";
loadHTML(counters, counters, `${counters}.html`);

const celebration = "celebration";
loadHTML(celebration, celebration, `${celebration}.html`);

function setAlertUptimeTimeout() {
    setTimeout(alertUptimeTimoutCallback, 10000);
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