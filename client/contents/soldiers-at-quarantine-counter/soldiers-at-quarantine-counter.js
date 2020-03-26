import { soldiersResponse } from '../../requests-emitters/requests-emitters.js';

function updateData() {
    $("#soldiers-at-quarantine-count").text(soldiersResponse.soldiers.filter(soldier => soldier.quarantine).length.toString());
}

$("#soldiers-at-quarantine-counter").on("newDataArrived", updateData);
updateData();