import axios from 'axios';

const api = axios.create({
//   baseURL:"https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=17c6ff7a68ddf23b9c99f11ba7456398&units=metric",
  baseURL:"https://api.openweathermap.org",
})

export default api;