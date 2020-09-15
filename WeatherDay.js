function onclicks(){


fetch('https://api.openweathermap.org/data/2.5/forecast?q='+event.target.innerHTML.toString()+'&appid=ab57b33912fbd3d3015d3f296505d3a8')
.then(response => response.json())
.then(data => {
    console.log(data)
var nameValue = data['city']['name']
var tempValue = data ['list']['0']['main']['temp']
var dateValue = data ['list']['0']['dt_text']
var descValue = data['list']['0']['weather']['0']['description']
var iconValue = data['list']['0']['weather']['0']['icon']

dateValue - 273.15 //Kelvin To Celsius
var img = new Image()
img.src = 'http://openweathermap.org/img/wn/'+iconValue+'@2x.png'

document.getElementById("i1").innerHTML = nameValue
document.getElementById("i2").innerHTML = tempValue
document.getElementById("i3").innerHTML = dateValue
document.getElementById("i4").innerHTML = descValue
document.getElementById("i5").replaceWith (img)





})
.catch(function (error) {console.log(error.message)})
}
