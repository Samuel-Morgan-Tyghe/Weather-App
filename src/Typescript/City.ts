// OOP model with:
// - public name; string for displaying on button
// - public key; string for API usage

export function getCity() {
    const city = (<Element>event.target).innerHTML.toString()
     city
return city
}

export function getApi(city: string) {
    
    document.getElementById("weatherLocation").innerHTML = city
    const api = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=ab57b33912fbd3d3015d3f296505d3a8'

 return api
}