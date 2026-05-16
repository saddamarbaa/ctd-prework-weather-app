"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link href="/" className={styles.logoLink}>
            <svg className={styles.logoIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4V2M12 22V20M4 12H2M22 12H20M17.6569 6.34315L16.2426 7.75736M7.75736 16.2426L6.34315 17.6569M17.6569 17.6569L16.2426 16.2426M7.75736 7.75736L6.34315 6.34315" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className={styles.logoText}>WeatherApp</span>
          </Link>
        </div>

        <div className={styles.links}>
          <Link 
            href="/" 
            className={`${styles.link} ${pathname === '/' ? styles.active : ''}`}
          >
            Current Weather
          </Link>
          <Link 
            href="/forecast" 
            className={`${styles.link} ${pathname === '/forecast' ? styles.active : ''}`}
          >
            7-Day Forecast
          </Link>
        </div>

        <div className={styles.socialContainer}>
          <a 
            href="https://github.com/saddamarbaa/ctd-prework-weather-app" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.githubLink}
            aria-label="GitHub Repository"
          >
            <svg className={styles.githubIcon} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.477 2 2 6.484 2 12.017C2 16.438 4.868 20.193 8.847 21.503C9.347 21.595 9.53 21.285 9.53 21.021C9.53 20.787 9.52 20.009 9.515 19.141C6.733 19.745 6.146 17.801 6.146 17.801C5.691 16.645 5.034 16.336 5.034 16.336C4.127 15.717 5.103 15.729 5.103 15.729C6.105 15.8 6.634 16.76 6.634 16.76C7.525 18.286 8.971 17.844 9.548 17.587C9.64 16.93 9.903 16.488 10.194 16.236C7.973 15.983 5.635 15.125 5.635 11.455C5.635 10.41 6.007 9.553 6.641 8.887C6.541 8.634 6.21 7.663 6.737 6.353C6.737 6.353 7.556 6.09 9.508 7.411C10.287 7.194 11.127 7.086 11.961 7.082C12.793 7.086 13.633 7.194 14.414 7.411C16.364 6.09 17.18 6.353 17.18 6.353C17.71 7.663 17.379 8.634 17.28 8.887C17.915 9.553 18.284 10.41 18.284 11.455C18.284 15.138 15.942 15.98 13.712 16.228C14.077 16.542 14.402 17.16 14.402 18.113C14.402 19.479 14.39 20.581 14.39 20.916C14.39 21.286 14.57 21.602 15.077 21.503C19.13 20.19 22 16.438 22 12.017C22 6.484 17.522 2 12 2Z" />
            </svg>
            <span className={styles.githubText}>Source Code</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
