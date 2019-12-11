/**
 * The main JavaScript file for SolarVision's solar panel site.
 * Developed and maintained by Sammy Lisa.
 */

panel.onclick = handler;

/**
 * Highlights the panel being hovered over.
 * Logs the data for each panel
 */
async function handler(event) {
    let panelInfo = await setData()
    console.log(panelInfo[event.target.id])
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
        {
            donor: 'James',
            energy_today: panelData.energy_today
        },
        {
            donor: 'Blair',
            energy_today: panelData.energy_today
        },
        {
            donor: 'Trevor',
            energy_today: panelData.energy_today
        },
    ]

    for (let i = 0; i < 12; i++) {
        panelInfo[i].id = parseInt(i)
    }
    return panelInfo
}
