import { DailyForecast, GeocodedLocation } from '@/lib/types';
import { describeWeather } from '@/lib/weatherCodes';
import styles from './ForecastList.module.css';

interface ForecastListProps {
  forecast: DailyForecast;
  location: GeocodedLocation;
}

export default function ForecastList({ forecast, location }: ForecastListProps) {
  // We expect parallel arrays of 7 elements
  const daysCount = forecast.time.length;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        7-Day Forecast for {location.name}{location.country ? `, ${location.country}` : ''}
      </h2>
      <div className={styles.list}>
        {Array.from({ length: daysCount }).map((_, i) => {
          // Format date from "YYYY-MM-DD" to a more readable format
          const dateStr = forecast.time[i];
          // Adding UTC string ensures the date isn't offset by timezone differences
          const date = new Date(dateStr + 'T00:00:00');
          const formattedDate = new Intl.DateTimeFormat('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric'
          }).format(date);

          return (
            <div key={dateStr} className={styles.row}>
              <div className={styles.date}>{formattedDate}</div>
              <div className={styles.condition}>
                {describeWeather(forecast.weathercode[i])}
              </div>
              <div className={styles.temps}>
                <span className={styles.high}>H: {forecast.temperature_2m_max[i]}°C</span>
                <span className={styles.low}>L: {forecast.temperature_2m_min[i]}°C</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
