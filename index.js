function loadHTML(containerId, fileDirectory, filename) {
    $(function(){
        $(`#${containerId}`).load(`./contents/${fileDirectory}/${filename}`);
    });
}

const header = "header";
loadHTML(header, header, `${header}.html`);

const twoPhotos = "two-photos";
loadHTML(twoPhotos, twoPhotos, `${twoPhotos}.html`);