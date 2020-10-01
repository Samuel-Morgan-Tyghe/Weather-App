import axios from 'axios'



    export function getWeatherData(api : string) {
            
        return axios.get(api)
        .then(function (response) {
            return response.data
        })
        .catch(function(error){
           console.log(error)
        })
        }







