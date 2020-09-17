import {weatherApi} from './WeatherDay'
import {City} from './City'
import * as _ from 'lodash';

const city = new City()

city.passCity()

console.log('index')

export default function weatherAppjs(){
    console.log('innerindex')
    weatherApi()

}

    

    
    