// class dataFromAPI {
//     constructor() {
//         static this.labsResponse = null;
//         this.soldiersResponse = null;
//         this.updateData();
//     }
//
//     updateData() {
//         this.labsResponse = getLabs();
//         this.soldiersResponse = getSoldiers();
//     }
// }

function settleLabs() {
    $.get("http://localhost:3000/api/v1/labs")
        .done(data => labsResponse = data);
}

function settleSoldiers() {
    $.get("http://localhost:3000/api/v1/soldiers")
        .done(data => soldiersResponse = data);
}

let labsResponse;
let soldiersResponse;
updateData();

function updateData(){
    settleLabs();
    settleSoldiers();
}

export { labsResponse, soldiersResponse, updateData };