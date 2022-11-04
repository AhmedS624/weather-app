/* Global Variables */
const zip = document.getElementById('zip');
const searchBox = new google.maps.places.SearchBox(zip);
searchBox.addListener('places_changed',() => {
    const place = searchBox.getPlaces()[0];
    if(place == null)
})
const btn = doxument.getElementById('generate');
btn.addEventListener('click',async(zip) => {
    const data = await fetch()
})


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();