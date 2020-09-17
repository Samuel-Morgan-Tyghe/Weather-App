console.log('city')
export class City{
    passCity()
    {
        console.log('innercity')
    
    const content =   (<Element>event.target).innerHTML
    document.getElementById("weatherLocation").innerHTML = content.toString()
    return content
    }

    
}
