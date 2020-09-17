
function passCity1()
{
const content = event.target.innerHTML
document.getElementById("weatherLocation").innerHTML = content.toString()
// console.log(content.toString())
return content
}

