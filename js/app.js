
const loadWeatherData = (city) => {
    const API_KEY = "45aa5629fd856daff54cff3b43dd14e6";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayWebData(data))
}

const displayWebData = data => {
    console.log(data);
    const cityName = document.getElementById('city');
    cityName.innerText = data.name;
    const temperature = document.getElementById('temperature');
    temperature.innerText = data?.main?.temp;
    const status = document.getElementById('status');
    status.innerText = data?.weather[0]?.main;

    
}

document.getElementById('btn-search').addEventListener('click', function(){
     const searchField = document.getElementById('input-field');
     const searchValue = searchField.value;
     loadWeatherData(searchValue)
     searchField.value = '';
});


document.getElementById('input-field').addEventListener('keypress', function(e){
    if( e.key === "Enter"){
        const searchField = document.getElementById('input-field');
        const searchValue = searchField.value;
        loadWeatherData(searchValue)
        searchField.value = '';
    }
});


loadWeatherData('dhaka')

