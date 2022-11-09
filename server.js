

const express = require('express')
const app = express()
app.use(express.json())
app.use(express.static('website'))



app.post('/weather',AddData)

let weatherData =[];

app.get('/all',(req,res) =>{
    res.send(weatherData)
    // console.log(weatherData)
    weatherData =[];
})

function AddData(req,res){
    let projectData = {};
  projectData = {
    temp:req.body.temp,
    Date:req.body.date,
    feelings: req.body.I_am_feeling
  }

  weatherData.push(projectData)
  res.send(weatherData)
  // console.log(weatherData)
}



app.listen(5000,() => {console.log('running on port:5000')})