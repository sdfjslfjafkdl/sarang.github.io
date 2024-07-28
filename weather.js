const API_KEY = '524196ac4264a3f0fb4b75ed2df9ae79'

function onGeoOK(position){
    const lat = position.coords.latitude
    const lng = position.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(response => response.json())
    .then((data) => {
        const weatherContainer = document.querySelector('#weather span:first-child')
        const cityContainer = document.querySelector('#weather span:last-child')
        cityContainer.innerText = data.name
        weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp}`
    })
}
function onGeoError(){
    alert("Can't find you. No weather for you.")
    
}
navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError)