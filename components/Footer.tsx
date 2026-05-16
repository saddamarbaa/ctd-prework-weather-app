import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          &copy; {currentYear} WeatherApp. Built for the Code the Dream Advanced Pre-Work.
        </p>
        <p className={styles.subtext}>
          Data provided by <a href="https://open-meteo.com/" target="_blank" rel="noopener noreferrer" className={styles.link}>Open-Meteo API</a>.
        </p>
      </div>
    </footer>
  );
}
