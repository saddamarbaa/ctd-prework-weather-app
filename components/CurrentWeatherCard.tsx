import { CurrentWeather, GeocodedLocation } from '@/lib/types';
import { describeWeather } from '@/lib/weatherCodes';
import styles from './CurrentWeatherCard.module.css';

interface CurrentWeatherCardProps {
  weather: CurrentWeather;
  location: GeocodedLocation;
}

export default function CurrentWeatherCard({ weather, location }: CurrentWeatherCardProps) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>
        {location.name}{location.country ? `, ${location.country}` : ''}
      </h2>
      <div className={styles.grid}>
        <div className={styles.dataPoint}>
          <span className={styles.label}>Temperature</span>
          <span className={styles.value}>{weather.temperature}°C</span>
        </div>
        <div className={styles.dataPoint}>
          <span className={styles.label}>Conditions</span>
          <span className={styles.value}>{describeWeather(weather.weathercode)}</span>
        </div>
        <div className={styles.dataPoint}>
          <span className={styles.label}>Wind Speed</span>
          <span className={styles.value}>{weather.windspeed} km/h</span>
        </div>
      </div>
    </div>
  );
}
