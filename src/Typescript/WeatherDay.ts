
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





export function dataToDivs(weatherData: any, howManyReadings: any) {

    let dataArray = []
    for (let i = 0; i < howManyReadings; i++) {
        let j = 0
        let innerDataArray = []

        //open closed principle, add information or take it away without breaking outside functions, if img add source, if int parse to string

        let tempInC = ((parseInt(weatherData['list'][i.toString()]['main']['temp'])) - 273.15).toFixed(0)
        let tempDiv = document.createElement('div')
        tempDiv.innerText = tempInC + '°C'
        innerDataArray[j] = tempDiv
        j++

        let nameDiv = document.createElement('div')
        nameDiv.innerText = weatherData['city']['name']
        innerDataArray[j] = nameDiv
        j++

        let timeDiv = document.createElement('div')
        timeDiv.innerText = weatherData['list'][i.toString()]['dt_txt']
        innerDataArray[j] = timeDiv
        j++

        let descDiv = document.createElement('div')
        descDiv.innerText = weatherData['list'][i.toString()]['weather']['0']['description']
        innerDataArray[j] = descDiv
        j++

        let iconDiv = document.createElement('img')
        let iconValue = (weatherData['list'][i.toString()]['weather']['0']['icon']).toString()
        let iconLink = 'https://openweathermap.org/img/wn/' + iconValue + '@2x.png'
        iconDiv.src = iconLink
        innerDataArray[j] = iconDiv
        j++



        dataArray[i] = innerDataArray 
    }
   
return dataArray
}

export function appendDataToDiv(dataArray: any) {
    let li = document.getElementsByClassName("weatherInnerContainer")
    let nI = li.length
    for (let i = 0; i < nI; i++) {
        for (let j = 0; j < dataArray[i].length; j++) {

            li[i].appendChild(dataArray[i][j])

        }

    }


}