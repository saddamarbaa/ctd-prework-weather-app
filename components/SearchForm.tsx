"use client";

import { useState } from 'react';
import styles from './SearchForm.module.css';

interface SearchFormProps {
  onSearch: (city: string) => void;
  isLoading: boolean;
}

export default function SearchForm({ onSearch, isLoading }: SearchFormProps) {
  const [city, setCity] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="city-search" className={styles.visuallyHidden}>
        Enter a city name
      </label>
      <input
        id="city-search"
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="e.g. New York, Tokyo, London"
        className={styles.input}
        disabled={isLoading}
        required
      />
      <button 
        type="submit" 
        className={styles.button}
        disabled={isLoading || !city.trim()}
      >
        {isLoading ? 'Searching...' : 'Search'}
      </button>
    </form>
  );
}
