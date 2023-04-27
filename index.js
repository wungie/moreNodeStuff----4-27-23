import chalk from 'chalk';
import main from './main.js'
import {configs} from './main.js'
import axios from 'axios'


// console.log(chalk.blue('Hello World'))
main()
configs()
console.log(process.env.API_KEY)

let api_url = `https://dog.ceo/api/breeds/image/random?key=${process.env.API_KEY}`

axios.get(api_url)
.then (res=>{
    console.log(res.data)
})