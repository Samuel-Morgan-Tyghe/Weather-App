
// public date; of moment.js type
// - public temperature; of int type
// - public weather_type; of int or string type to show the correct icon
// sun/cloud
import axios from 'axios'






export function weatherInfo(api: string, iTimes: any) {
    var nameValue
    var tempValue
    var tempValueC
    var dateValue
    var descValue
    var iconValue
    var iconPNG
    var j = 0
    var element
    var nElement


    axios.get(api)
        .then((response: any) => {
  


             nameValue = response.data['city']['name']
            
             tempValue = response.data['list'][(iTimes.toString())]['main']['temp']
             tempValueC = (parseInt(tempValue) - 273.15).toFixed(0) //Kelvin To Celsius

             dateValue = response.data['list'][iTimes.toString()]['dt_txt']
            
             descValue = response.data['list'][iTimes.toString()]['weather']['0']['description']
            
             iconValue = response.data['list'][iTimes.toString()]['weather']['0']['icon']
             iconPNG = 'http://openweathermap.org/img/wn/' + iconValue + '@2x.png'
  
           const weatherData = { name: nameValue, temp: tempValueC, date: dateValue, desc: descValue, icon: iconPNG }


            console.log(iconValue)

            console.log(weatherData)
            var oLength = Object.keys(weatherData).length;
          
            for (j > oLength - 1; j++;) {
                element = document.getElementById(iTimes)
                nElement = document.createTextNode(weatherData.entries(j))
                element.appendChild(nElement)
                iTimes++
            }
            element = document.getElementById(iTimes)
            nElement = document.createElement('img')
            nElement.src = weatherData.icon


        })
  


}




   

    


    