import { soldiersResponse } from '../../requests-emitters/requests-emitters.js';

function updateData() {
    $("#soldiers-at-home-count").text(soldiersResponse.soldiers.filter(soldier => soldier.location.toLowerCase() === "home").length.toString());
}

$("#soldiers-at-home-counter").on("newDataArrived", updateData);
updateData();