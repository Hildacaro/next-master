// Primero, instala axios con npm install axios
import axios from 'axios';

// base de la API
const apiUrl = 'https://hilda.v2.proyectosdwa.es/api/public/api';

// data.js
export async function getWeatherData() {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=madrid&lang=es&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`;
  const response = await axios.get(URL);
  return response.data;
}

export async function fetchNews() {
  const response = await axios.get(apiUrl + '/news');
  return response.data;
}

export async function fetchFAQs() {
  const response = await axios.get(apiUrl + '/faqs');
  return response.data;
}

export async function fetchTeam() {
  const response = await axios.get(apiUrl + '/team');
  return response.data;
}