"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
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
      </div>
    </nav>
  );
}
