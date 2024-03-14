// Primero, instala axios con npm install axios
import axios from 'axios';

// data.js
export async function getWeatherData() {
  console.log("🚀 ~ getWeatherData ~ process:", process)
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=madrid&lang=es&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`;
  const response = await axios.get(URL);
  console.log("🚀 ~ getWeatherData ~ response:", response)
  return response.data;
}

export async function fetchNews() {
  const URL = `http://localhost:8000/api/news`;
  const response = await axios.get(URL);
  console.log("🚀 ~ fetchNews ~ response:", response)
  console.log("🚀 ~ fetchNews ~ URL:", URL)
  return response.data;
}

export async function fetchFAQs() {
  const URL = `http://localhost:8000/api/faqs`;
  const response = await axios.get(URL);
  console.log("🚀 ~ fetchNews ~ response:", response)
  console.log("🚀 ~ fetchNews ~ URL:", URL)
  return response.data;
}

export async function fetchTeam() {
  const URL = `http://localhost:8000/api/team`;
  const response = await axios.get(URL);
  console.log("🚀 ~ fetchTeam ~ response:", response)
  console.log("🚀 ~ fetchTeam ~ URL:", URL)
  return response.data;
}