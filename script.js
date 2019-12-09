/**
 * The main JavaScript file for SolarVision's solar panel site.
 * Developed and maintained by Sammy Lisa.
 */

/**
 * Highlights the panel being hovered over.
 * Logs the donor data for each panel
 */

panel.onmouseover = panel.onmouseout = handler;

function handler(event) {
    let panelInfo = setData()
    let selection = event.target

    if (event.type == 'mouseover') {
        selection.style.background = 'pink'
        console.log('Panel ID: ' + selection.id + ', Panel Donor: ' + panelInfo.get(parseInt(selection.id)))
    }
    if (event.type == 'mouseout') {
        selection.style.background = 'white'
    }
}

/**
* blank map used to test the data-fetching system.
*/
function setData() {
    let panelInfo = new Map
    let panelDonors = ['Mike', 'Laura', 'Sammy', 'Thomas', 'Greg', 'Jake', 'Jeff', 'Oscar', 'Anna']

    for (let i = 1; i < 10; i++) {
        panelInfo.set(i, panelDonors[i-1])
    }
    return panelInfo
}
