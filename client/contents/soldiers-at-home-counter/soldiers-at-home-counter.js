import { soldiersResponse } from '../../requests-emitters/requests-emitters.js';

$("#soldiers-at-home-count").text(soldiersResponse.soldiers.filter(soldier => soldier.location.toLowerCase() === "home").length.toString());