
// // public date; of moment.js type
// // - public temperature; of int type
// // - public weather_type; of int or string type to show the correct icon
// // sun/cloud
import axios from 'axios'



    export function getWeatherData(api : string) {
            
        return axios.get(api)
        .then(function (response) {
            return response.data
        })
        .catch(function(error){
           console.log(error)
        })
        }




export function addDataToDivs(weatherData: any) {
    let li = document.getElementsByClassName("weatherInnerContainer")
    let nI = li.length
    for (let i = 0; i < nI; i++) {

        let tempInC = ((parseInt(weatherData['list'][i.toString()]['main']['temp'])) - 273.15).toFixed(0)
        let tempDiv = document.createElement('div')
        tempDiv.innerText = tempInC + 'C'
        li[i].appendChild(tempDiv )

        let nameDiv = document.createElement('div')
        nameDiv.innerText = weatherData['city']['name']
        li[i].appendChild(nameDiv)

        let timeDiv = document.createElement('div')
        timeDiv.innerText = weatherData['list'][i.toString()]['dt_txt']
        li[i].appendChild(timeDiv)

        let descDiv = document.createElement('div')
        descDiv.innerText = weatherData['list'][i.toString()]['weather']['0']['description']
        li[i].appendChild(descDiv)

        let iconDiv = document.createElement('img')
        let iconValue = (weatherData['list'][i.toString()]['weather']['0']['icon']).toString()
        let iconLink = 'https://openweathermap.org/img/wn/' + iconValue + '@2x.png'
        iconDiv.src = iconLink
        li[i].appendChild(iconDiv)

    }
}