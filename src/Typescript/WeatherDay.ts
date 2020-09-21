
// // public date; of moment.js type
// // - public temperature; of int type
// // - public weather_type; of int or string type to show the correct icon
// // sun/cloud
import axios from 'axios'

export async function weatherData(api : string) {
    let indexOf = 1
    let i = 0

    

    try {
        axios.get(api)
            .then((response: any) => {
                for (i = 0; i <= 3; i++) {
                    var nameValue = response.data['city']['name']
            
                    var tempValue = response.data['list'][i.toString()]['main']['temp']
            
                    var dateValue = response.data['list'][i.toString()]['dt_txt']
            
                    var descValue = response.data['list'][i.toString()]['weather']['0']['description']
            
                    var iconValue = response.data['list'][i.toString()]['weather']['0']['icon']
  
    
                    var tempValueC = (parseInt(tempValue) - 273.15).toFixed(0) //Kelvin To Celsius
                    document.getElementById("i" + indexOf.toString()).innerHTML = nameValue
                    indexOf++
                    document.getElementById("i" + indexOf.toString()).innerHTML = tempValueC + 'C'
                    indexOf++
                    document.getElementById("i" + indexOf.toString()).innerHTML = dateValue
                    indexOf++
                    document.getElementById("i" + indexOf.toString()).innerHTML = descValue
                    indexOf++
                    (<HTMLImageElement>document.getElementById("i" + indexOf.toString())).src = 'http://openweathermap.org/img/wn/' + iconValue + '@2x.png'
                    indexOf++
                    if (indexOf > 20) { indexOf = 1 }
   
                } i = 0

            })
    
        return api
    
    } catch (error) {
        alert(error)
    }
}


    