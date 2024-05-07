import {inventory} from "../../constants/inventory.js";


export function soldTvsCounter() {
    let totalRemaining = 0;

    for (let i = 0; i < inventory.length; i++) {
        totalRemaining += inventory[i].originalStock - inventory[i].sold;
    }

    console.log(totalRemaining); // Log the total remaining stock
    return totalRemaining;
}
