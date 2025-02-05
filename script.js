

let searchInput = document.querySelector('#location-search');
let locationName = document.querySelector('#location-name');
let locationTemp = document.querySelector('#location-temp');
let locationFeelsLike = document.querySelector('#location-feelslike');
let locationHumidity = document.querySelector('#location-humidity');

searchInput.addEventListener('keypress', async (e) => {
  if (e.key === 'Enter' && searchInput.value != '') {
    await getWeather(searchInput.value);
    searchInput.value = '';
  }
});

// gets weather information from API
const getWeather = async (searchLocation) => {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchLocation}?key=${apiKey}`
    );
    let data = await response.json();
    // takes weather data and applies it to area on page
    locationName.innerText = `${data.resolvedAddress}`;
    locationTemp.innerText = `${data.currentConditions.temp}°`;
    locationFeelsLike.innerText = `Feels Like: ${data.currentConditions.feelslike}°`;
    locationHumidity.innerText = `Humidity: ${data.currentConditions.humidity}%`;
    console.log(data);
  } catch (error) {
    alert('Not a valid city. Please try again.');
  }
};

getWeather();
