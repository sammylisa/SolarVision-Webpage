/**
 * The main JavaScript file for SolarVision's solar panel site.
 * Developed and maintained by Sammy Lisa.
 */

panel.onmouseover = panel.onmouseout = handler;

/**
 * Highlights the panel being hovered over.
 * Logs the data for each panel
 */
async function handler(event) {
    let panelInfo = await setData()
    let selection = event.target

    if (event.type == 'mouseover') {
        selection.style.background = 'pink'
        console.log(panelInfo[selection.id - 1])
    }
    if (event.type == 'mouseout') {
        selection.style.background = 'white'
    }
}

/**
* blank map used to test the data-fetching system
* @returns an array containing the info for each panel
*/
async function setData() {
    let panelData = await getData()

    let panelInfo = [
        {
            donor: 'Mike',
            energy_today: panelData.energy_today
        },
        {
            donor: 'Laura',
            energy_today: panelData.energy_today
        },
        {
            donor: 'Sammy',
            energy_today: panelData.energy_today
        },
        {
            donor: 'Thomas',
            energy_today: panelData.energy_today
        },
        {
            donor: 'Greg',
            energy_today: panelData.energy_today
        },
        {
            donor: 'Jake',
            energy_today: panelData.energy_today
        },
        {
            donor: 'Jeff',
            energy_today: panelData.energy_today
        },
        {
            donor: 'Oscar',
            energy_today: panelData.energy_today
        },
        {
            donor: 'Anna',
            energy_today: panelData.energy_today
        },
    ]

    for (let i = 1; i < 10; i++) {
        panelInfo[i-1].id = parseInt(i)
    }
    return panelInfo
}
