
// // public date; of moment.js type
// // - public temperature; of int type
// // - public weather_type; of int or string type to show the correct icon
// // sun/cloud
// import axios from 'axios'



// var nameValue
//     var tempValue
//     var tempValueC
//     var dateValue
//     var descValue
//     var iconValue
//     var iconPNG
//     var j : number = 0
//     var element
//     var nElement
//     var weatherData : any


// export function weatherInfo(api: string, iTimes: any) {
  

//     axios.get(api)
//         .then((response: any) => {
  


//              nameValue = response.data['city']['name']
            
//              tempValue = response.data['list'][(iTimes.toString())]['main']['temp']
//              tempValueC = (parseInt(tempValue) - 273.15).toFixed(0) //Kelvin To Celsius

//              dateValue = response.data['list'][iTimes.toString()]['dt_txt']
            
//              descValue = response.data['list'][iTimes.toString()]['weather']['0']['description']
            
//              iconValue = response.data['list'][iTimes.toString()]['weather']['0']['icon']
//              iconPNG = 'http://openweathermap.org/img/wn/' + iconValue + '@2x.png'
  
//              weatherData = { name: nameValue, temp: tempValueC, date: dateValue, desc: descValue, icon: iconPNG }
            
      
//              setWeatherElements(iTimes , weatherData.name)
//              setWeatherElements(iTimes , weatherData.temp)
//              setWeatherElements(iTimes , weatherData.date)
//              setWeatherElements(iTimes , weatherData.desc)
//             element = document.getElementById(iTimes)
//             nElement = document.createElement('img')
//             nElement.src = weatherData.icon.toString()
            

//         })
  


// }



// function setWeatherElements(iTimes: any, property: any ){
//     element = document.getElementById(iTimes)
//     nElement = document.createTextNode(property)
//     element.appendChild(nElement)
   
// }
   

    


    