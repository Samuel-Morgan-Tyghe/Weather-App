
let indexOf = 1

function weatherApi1() {
    let i = 0

    axios.get('https://api.openweathermap.org/data/2.5/forecast?q='+event.target.innerHTML.toString()+'&appid=ab57b33912fbd3d3015d3f296505d3a8')
    .then((response) => {
        for( i = 0 ; i <=3; i++ ){

        var nameValue = response.data['city']['name']
        var tempValue = response.data ['list'][i.toString()]['main']['temp']
        var dateValue = response.data ['list'][i.toString()]['dt_txt']
        var descValue = response.data['list'][i.toString()]['weather']['0']['description']
        var iconValue = response.data['list'][i.toString()]['weather']['0']['icon']
  
    
    tempValueC = parseInt (tempValue - 273.15) //Kelvin To Celsius
    document.getElementById("i"+indexOf.toString()).innerHTML = nameValue    
    indexOf++
    document.getElementById("i"+indexOf.toString()).innerHTML = tempValueC +'C'
    indexOf++
    document.getElementById("i"+indexOf.toString()).innerHTML = dateValue
    indexOf++
    document.getElementById("i"+indexOf.toString()).innerHTML = descValue
    indexOf++
    document.getElementById("i"+indexOf.toString()).src = 'http://openweathermap.org/img/wn/'+iconValue+'@2x.png'
    indexOf++
    if (indexOf > 20 ){indexOf=1}
   
        }    i=0

    })
   
}


    