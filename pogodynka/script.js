const wf = new WeatherForecast()
document
    .querySelector('#btnShowForecast')
    .addEventListener('click', onBtnShowForecastClick)

async function onBtnShowForecastClick() {
    const city = document.querySelector('#city').value
    const forecast = await getCityForecast(city)
    showForecast(city, forecast)
}

function getCityForecast(city) {
    return wf.getForecast('cracow')
}

function showForecast(city, forecast) {
    const forecastDiv = document.createElement('div')
    forecastDiv.innerHTML = `
  <h3>${city}</h3>
  <div> Temperature: ${forecast.temp}</div>
  <div> Humidity: ${forecast.humidity}</div>
  `
    document
        .querySelector('#forecast')
        .appendChild(forecastDiv)
}