
const loadWeatherData = (city) => {
    const API_KEY = "45aa5629fd856daff54cff3b43dd14e6";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayWebData(data))
}

const displayWebData = data => {

}

document.getElementById('btn-search').addEventListener('click', function(){
     const searchValue = document.getElementById('input-field').value;
     loadWeatherData(searchValue)
});

loadWeatherData('dhaka')

