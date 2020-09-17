console.log('weather')

export function weatherApi() {
    console.log('weatherinner')

  let indexOf = 1

    let i = 0


    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+(<Element>event.target).toString()+'&appid=ab57b33912fbd3d3015d3f296505d3a8')
    .then(response => response.json())
    .then(data => {
    // console.log(data)

        for( i = 0 ; i <=3; i++ ){
    var nameValue = data['city']['name']
    var tempValue = data ['list'][i.toString()]['main']['temp']
    var dateValue = data ['list'][i.toString()]['dt_txt']
    var descValue = data['list'][i.toString()]['weather']['0']['description']
    var iconValue = data['list'][i.toString()]['weather']['0']['icon']

    let tempValueC = (parseInt(tempValue)) - 273 //Kelvin To Celsius
    document.getElementById("i"+indexOf.toString()).innerHTML = nameValue    
    indexOf++
    document.getElementById("i"+indexOf.toString()).innerHTML = tempValueC +'C'
    indexOf++
    document.getElementById("i"+indexOf.toString()).innerHTML = dateValue
    indexOf++
    document.getElementById("i"+indexOf.toString()).innerHTML = descValue
    indexOf++
    (<HTMLImageElement>document.getElementById("i"+indexOf.toString())).src  = 'http://openweathermap.org/img/wn/'+iconValue+'@2x.png'
    indexOf++
    if (indexOf > 20 ){indexOf=1}
   

        }
        i=0
    })
    .catch(function (error) {console.log(error.message)})
}



    