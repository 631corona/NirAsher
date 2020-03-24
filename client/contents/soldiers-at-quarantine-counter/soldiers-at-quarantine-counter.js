import { soldiersResponse } from '../../requests-emitters/requests-emitters.js';

$("#soldiers-at-quarantine-count").text(soldiersResponse.soldiers.filter(soldier => soldier.quarantine).length.toString());