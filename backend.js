/**
 * This file is used to communicate with the Enlighten Systems API,
 * fetching the panel data
 */


// used for testing purposes
let demoURL = "https://api.enphaseenergy.com/api/v2/systems/67/summary?key=96a7de32fabc1dd8ff68ec43eca21c06&user_id=4d7a45774e6a41320a"

/**
 * grab the panel from Enlighten
 * @returns solar panel data, in JSON format
 */
async function getData() {
    let response = await fetch(demoURL)
    let data = await response.json()
    return data
}