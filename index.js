function loadHTML(containerId, fileDirectory, filename) {
    $(function(){
        $(`#${containerId}`).load(`./contents/${fileDirectory}/${filename}`);
    });
}

const twoPhotos = "two-photos";
loadHTML(twoPhotos, twoPhotos, `${twoPhotos}.html`);