import { getWeatherData } from './WeatherDay';
import { getCity } from './City';
import { getApi } from './City'

let howManyReadings = 4

function main() {

    var city = getCity()
    var api = getApi(city)
  
  getWeatherData(api).then((weatherData: any) => {
    clearDivs()


    addContainerDivs(howManyReadings)
    for (let i = 0; i < howManyReadings; i++) {
      let weatherReading = new weatherReadings(weatherData, i)
      weatherReading.convertDataToDivReady()
      weatherReading.appendDataToDiv(i)
    }
    })
  }

  


class weatherReadings{
  temp
  city: any
  date: any
  description
  icon

  constructor(weatherData: any, switchTimeOfData: any) {
    this.temp = weatherData['list'][switchTimeOfData.toString()]['main']['temp']
    // this.city = weatherData['city']['name']
    // this.date = weatherData['list'][switchTimeOfData.toString()]['dt_txt']
    this.description = weatherData['list'][switchTimeOfData.toString()]['weather']['0']['description']
    this.icon = weatherData['list'][switchTimeOfData.toString()]['weather']['0']['icon']
  }
  
    convertDataToDivReady() {
      this.temp = (parseInt(this.temp) - 273.15).toFixed(0).toString() + 'C'
      this.icon = 'https://openweathermap.org/img/wn/' + this.icon + '@2x.png'

  }

  appendDataToDiv(i: any ){
    let tempDiv
    let dataArray = Object.values(this)
    let li = document.getElementsByClassName("weatherInnerContainer")

    for (let j = 0; j < dataArray.length; j++) {
      if (dataArray[j] == this.icon) {
        tempDiv = document.createElement('img')
        tempDiv.src = this.icon
      } else {
        tempDiv = document.createElement('div')
        tempDiv.innerHTML = dataArray[j]
      }
      li[i].appendChild(tempDiv)
    }
    }
    
  }
  


function clearDivs() {
     
  const myNode = document.getElementById("weatherOuterContainer")
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }
}
   
function addContainerDivs(howManyReadings: number) {
  const myNode = document.getElementById("weatherOuterContainer")
  for (let i = 0; i < howManyReadings; i++) {
    myNode.appendChild (document.createElement('div')).classList.add("weatherInnerContainer")
  }

}



var buttons = document.getElementsByClassName('allButtons')
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
      main()
    })
}   
