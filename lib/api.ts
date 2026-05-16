import { GeocodedLocation, CurrentWeather, DailyForecast } from './types';

export async function geocodeCity(city: string): Promise<GeocodedLocation | null> {
  try {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    if (!data.results || data.results.length === 0) {
      return null;
    }
    const result = data.results[0];
    return {
      name: result.name,
      country: result.country,
      latitude: result.latitude,
      longitude: result.longitude,
    };
  } catch (error) {
    if (error instanceof Error && error.message.startsWith('HTTP error')) {
      throw error;
    }
    throw new Error('Could not connect. Please try again later.');
  }
}

export async function fetchCurrentWeather(lat: number, lon: number): Promise<CurrentWeather> {
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    if (!data.current_weather) {
      throw new Error('Current weather data is missing from the response.');
    }
    return data.current_weather as CurrentWeather;
  } catch (error) {
    if (error instanceof Error && (error.message.startsWith('HTTP error') || error.message.includes('missing'))) {
      throw error;
    }
    throw new Error('Could not connect. Please try again later.');
  }
}

export async function fetchForecast(lat: number, lon: number): Promise<DailyForecast> {
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    if (!data.daily) {
      throw new Error('Daily forecast data is missing from the response.');
    }
    return data.daily as DailyForecast;
  } catch (error) {
    if (error instanceof Error && (error.message.startsWith('HTTP error') || error.message.includes('missing'))) {
      throw error;
    }
    throw new Error('Could not connect. Please try again later.');
  }
}
