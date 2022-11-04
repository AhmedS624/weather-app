/* Global Variables */
const zip = document.getElementById('zip');
const searchBox = new google.maps.places.SearchBox(zip);
const btn = doxument.getElementById('generate');

searchBox.addListener('places_changed',() => {
    const place = searchBox.getPlaces()[0];
    if(place == null) return
    const lat = place.geometry.location.lat()
    const lng = place.geometry.location.lng()
})
btn.addEventListener('click')
fetch('/weather', {
        method: 'POST', 
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        // Body data type must match "Content-Type" header        
        body: JSON.stringify(data), 
    })


    



// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();