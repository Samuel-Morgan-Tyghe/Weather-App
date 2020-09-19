

// City button onClick -> axios GET -> handle request and construct
// 7 WeatherDay objects -> render those 7 objects on the page
import axios from 'axios'
import { weatherData } from './WeatherDay'
import { getCity } from './City'
import { getApi } from './City'



document.querySelectorAll('.allButtons').forEach(item => {
  item.addEventListener('click', event => {
      main()
    })
})
  
function main() {
  
  var city = getCity()
  var api = getApi(city)
  weatherData(api)
 

}


   