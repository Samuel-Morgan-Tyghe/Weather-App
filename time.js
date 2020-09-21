



function time(){
    let time = moment().calendar();
    document.getElementById("todaysdate").innerHTML = time
}

 setInterval(function(){time();}, 1000);
