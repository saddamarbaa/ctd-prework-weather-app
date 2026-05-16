"use client";

import { useState } from 'react';
import SearchForm from '@/components/SearchForm';
import ForecastList from '@/components/ForecastList';
import { geocodeCity, fetchForecast } from '@/lib/api';
import { GeocodedLocation, DailyForecast } from '@/lib/types';
import styles from '../page.module.css';

interface ForecastResult {
  location: GeocodedLocation;
  daily: DailyForecast;
}

export default function ForecastPage() {
  const [result, setResult] = useState<ForecastResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (city: string) => {
    if (!city) {
      setError("Please enter a city name.");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const location = await geocodeCity(city);
      if (!location) {
        setError("City not found. Please check spelling and try again.");
        setLoading(false);
        return;
      }

      const daily = await fetchForecast(location.latitude, location.longitude);
      setResult({ location, daily });
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Could not connect. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.title}>7-Day Forecast</h1>
        <p className={styles.subtitle}>Plan ahead with a detailed weekly outlook</p>
      </header>

      <SearchForm onSearch={handleSearch} isLoading={loading} />

      {error && (
        <div role="alert" className={styles.error}>
          {error}
        </div>
      )}

      {loading && (
        <div role="status" aria-live="polite" className={styles.status}>
          Loading...
        </div>
      )}

      {result && !loading && !error && (
        <ForecastList forecast={result.daily} location={result.location} />
      )}
    </div>
  );
}
