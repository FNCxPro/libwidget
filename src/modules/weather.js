const APIBASE   = 'https://api.weather.com'
const APIKEY    = 'd522aa97197fd864d36b418f39ebb323' // weather.com's API key

const weather = {
  current: {},
  forecast: {}
}

const getWeather = async (zip, longitude) => {
  const res = await fetch(`${APIBASE}/v1/location/${zip}:4:US/observations/current`)
  const body = await res.json()
  
}

module.exports = {
  weather,
  getWeather
}