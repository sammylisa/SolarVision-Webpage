/*
 * The main JavaScript file for SolarVision's solar panel site.
 * Developed and maintained by Sammy Lisa.
 */

panel.onclick = displayInfo


/*
 * declare global var containing panel data and load as soon as window loads.
 * this way, the data is all loaded at once and there is no lag when grabbing
 * data from different panels
 */

let panelData

(async () => {
    panelData = await getData()
})()

/**
 * displays the data for each panel
 */
async function displayInfo(event) {
    let panels = await setData()
    let panelInfo = panels[event.target.id]
    document.getElementById('donorName').innerHTML = 'Donor: ' + panelInfo.donor
    document.getElementById('energy').innerHTML = 'Energy generated today: ' + panelInfo.energy_today + ' kilowatts'
}

/**
* sets the data for the solar panel farm
* @returns an array containing the info for each panel
*/
async function setData() {

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
