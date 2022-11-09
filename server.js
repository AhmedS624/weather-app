

const express = require('express')
const app = express()
app.use(express.json())
app.use(express.static('website'))



app.post('/weather',AddData)

let projectData = {};

app.get('/all',(req,res) =>{
    res.send(projectData)
    // console.log(projectData)
})

function AddData(req,res){
  projectData = {
    temp:req.body.temp,
    Date:req.body.date,
    feelings: req.body.I_am_feeling
  }

  // console.log(projectData)
  res.send(projectData)
}



app.listen(5000,() => {console.log('running on port:5000')})