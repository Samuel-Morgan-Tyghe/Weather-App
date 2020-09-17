

// City button onClick -> axios GET -> handle request and construct
// 7 WeatherDay objects -> render those 7 objects on the page

import { weatherData } from './WeatherDay'
import { getCity } from './City'
import { whichApi } from './City'



document.querySelectorAll('.allButtons').forEach(item => {
    item.addEventListener('click', event => {
      //handle click 
        // class WeatherReading is a 
        var city = getCity()
        var api = whichApi(city)
        weatherData(api)
        
    })
  })