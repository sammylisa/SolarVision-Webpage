/**
 * This file is used to communicate with the Enlighten Systems API,
 * fetching the panel data
 */

// request url for farm data
let url = "https://api.enphaseenergy.com/api/v2/systems?key=69d4c9621525a3d486399b3405058174&user_id=4e6a457a4e5467300a"

/**
 * grab the panel from Enlighten
 * @returns solar panel data, in JSON format
 */
async function getData() {
    let response = await fetch(url)
    let data = await response.json()
    console.log(data.systems[0])
    return data
}