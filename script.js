/*
 * The main JavaScript file for SolarVision's solar panel site.
 * Developed and maintained by Sammy Lisa.
 */

panel.onclick = displayInfo
panelmodal.onkeyup = closeModal

/*
 * declare global var containing panel data and load as soon as window loads.
 * this way, the data is all loaded at once and there is no lag when grabbing
 * data from different panels
 */

let farmData
let panels

window.onload = async function () {
    farmData = await getData()
    panels = setData()
    let homesPowered = Math.round(farmData.energy_today / 28.9)
    var countUpTotal = new CountUp('totaloutput', 0, farmData.energy_today, 0, 3)
    var countUpHomes = new CountUp('homes', 0, homesPowered, 0, 3)
    countUpTotal.start()
    countUpHomes.start()
}

/**
 * displays the data for each panel
 */
async function displayInfo(event) {
    let panelInfo = panels[event.target.id]
    document.getElementById('donorName').innerHTML = 'Donor: ' + panelInfo.donor
    document.getElementById('energy').innerHTML = 'Energy generated today: ' + panelInfo.energy_today + ' kilowatt hours'
}

/**
 * close modal when user hits enter key 
 */
function closeModal(e) {
    var key = 'which' in e ? e.which : e.keyCode
    if (key == 13) {
        $('#panelmodal').modal('hide')
        $('#search').value = ""
    }
}

/**
 * finds donor name that matches text input and displays its data on return
 */
document.getElementById('panelsearch').addEventListener('submit', function (e) {
    e.preventDefault()
    let input = document.getElementById('search').value
    panels.forEach(panel => {
        if (panel.donor.toUpperCase() == input.toUpperCase()) {
            document.getElementById(panel.id).click()
        }
    });
}, false);

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
