/* Global Variables */
const Key = 'd2848f5a2e04867432c8613ba7e43898'
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();



document.getElementById('generate').addEventListener('click',function(){
    const zip = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;
    const La_url = `http://api.openweathermap.org/geo/1.0/zip?zip=${zip}&appid=${Key}`
    
    getData(La_url).then((data) => {
        // console.log(data)
        const Weather_url = `https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&appid=${Key}`
        getData(Weather_url).then((Ndata) => {
            // console.log(Ndata)
            postData('/weather',{
                                temp:Ndata.main.temp,            
                                I_am_feeling : feelings,
                                date:newDate})
            .then(
    updateUI()
  )
    })
    })

})



const getData = async (url)=> {
    const res = await fetch(url)
    try{
        let data = await res.json()
        return data
    }catch(error){
        console.log('error',error)
    }

}


const postData = async (url = '',data = {}) =>{
    const res = await fetch(url,{
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
      // Body data type must match "Content-Type" header        
      body: JSON.stringify(data), 
    })
    try{
        const Data = await res.json();
        return Data;
    }catch(error){
        console.log('error',error)
    }
}

const updateUI = async()=>{
     const request = await fetch('/all');
  try{
    const allData = await request.json();
    document.getElementById('temp').innerHTML = allData[0].temp;
    document.getElementById('date').innerHTML = allData[0].Date;
    document.getElementById('content').innerHTML = allData[0].feelings;
}catch(error){
    console.log("error", error);
  }
}
    




