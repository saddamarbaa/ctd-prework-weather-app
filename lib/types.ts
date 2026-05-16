export interface GeocodedLocation {
  name: string;
  country?: string;
  latitude: number;
  longitude: number;
}

export interface CurrentWeather {
  temperature: number;
  windspeed: number;
  weathercode: number;
  time: string;
}

export interface DailyForecast {
  time: string[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  weathercode: number[];
}
