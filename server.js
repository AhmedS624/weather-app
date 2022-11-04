const api_key = process.env.openWeatherApiKey

const call = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}'

const express = require('express')
const app = express()
app.use(express.json())
app.use(express.static('website'))

app.post('/weather',(req,res) => {
    console.log(req.body)
})





app.listen(5000,() => {console.log('running on port:5000')})