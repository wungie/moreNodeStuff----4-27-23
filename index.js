import chalk from 'chalk';
import main from './main.js'
import {configs} from './main.js'
import axios from 'axios'


// console.log(chalk.blue('Hello World'))
main()
configs()

axios.get("https://dog.ceo/api/breeds/image/random?key=587ac573444c34df3cdcc47693dcc377")
.then (res=>{
    console.log(res.data)
})