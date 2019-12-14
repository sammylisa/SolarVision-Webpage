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

let farmData

(async () => {
    farmData = await getData()
    let homesPowered = Math.round(farmData.energy_today / 28.9)
    document.getElementById("totaloutput").innerHTML = farmData.energy_today
    document.getElementById("homes").innerHTML = homesPowered
})()

/**
 * displays the data for each panel
 */
async function displayInfo(event) {
    let panels = setData()
    let panelInfo = panels[event.target.id]
    document.getElementById('donorName').innerHTML = 'Donor: ' + panelInfo.donor
    document.getElementById('energy').innerHTML = 'Energy generated today: ' + panelInfo.energy_today + ' kilowatt hours'
}

/**
* sets the data for the solar panel farm
* @returns an array containing the info for each panel
*/
function setData() {

    // total farm data / # of panels
    let panelData = Math.round(farmData.energy_today / 12);

    let panelInfo = [
        {
            donor: 'Mike',
            energy_today: panelData
        },
        {
            donor: 'Laura',
            energy_today: panelData
        },
        {
            donor: 'Sammy',
            energy_today: panelData
        },
        {
            donor: 'Thomas',
            energy_today: panelData
        },
        {
            donor: 'Greg',
            energy_today: panelData
        },
        {
            donor: 'Jake',
            energy_today: panelData
        },
        {
            donor: 'Jeff',
            energy_today: panelData
        },
        {
            donor: 'Oscar',
            energy_today: panelData
        },
        {
            donor: 'Anna',
            energy_today: panelData
        },
        {
            donor: 'James',
            energy_today: panelData
        },
        {
            donor: 'Blair',
            energy_today: panelData
        },
        {
            donor: 'Trevor',
            energy_today: panelData
        },
    ]

    for (let i = 0; i < 12; i++) {
        panelInfo[i].id = parseInt(i)
    }
    return panelInfo
}
