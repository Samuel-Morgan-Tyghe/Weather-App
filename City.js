
function passCity()
{
const content = event.target.innerHTML
document.getElementById("weatherLocation").innerHTML = content.toString()
console.log(content.toString())
onclicks(event)
return content
}

