

// City button onClick -> axios GET -> handle request and construct
// 7 WeatherDay objects -> render those 7 objects on the page
import axios from 'axios'
import { getWeatherData } from './WeatherDay'
import { appendDataToDiv } from './WeatherDay'
import { dataToDivs } from './WeatherDay'
import { getCity } from './City'
import { getApi } from './City'

var howManyReadings = 7


document.querySelectorAll('.allButtons').forEach(item => {
  item.addEventListener('click', event => {
      main()
    })
})
  
function main() {
  var city = getCity()
  var api = getApi(city)

  
  getWeatherData(api).then(weatherData => {
    clearDivs()
    addContainerDivs(howManyReadings)
    let dataArray = dataToDivs(weatherData, howManyReadings)
    appendDataToDiv(dataArray)
  })
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

