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
updateAPIsData();

function updateAPIsData(){
    settleLabs();
    settleSoldiers();
}

export { labsResponse, soldiersResponse, updateAPIsData };