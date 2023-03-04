const API_KEY = `a7c002e8ef4f1dbc98e6ed6ea17626f3`;

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));
}

const displayTemperature = data => {
   setInnerTExtById('temperature', data.main.temp);
   setInnerTExtById('condition', data.weather[0].main)
    
}
const setInnerTExtById = (id, text) => {
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}
document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    const cityName = document.getElementById('city');
    cityName.innerText = city;
    loadTemperature(city);

})
loadTemperature('city');