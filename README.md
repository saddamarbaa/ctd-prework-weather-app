# Weather App | CTD Advanced Pre-Work

A modern, responsive weather application built to view current conditions and a 7-day forecast for any city worldwide.

## Description

This project was built for the Code the Dream Advanced Pre-Work assignment. It consists of two main pages: a Current Weather search page, and a 7-Day Forecast search page. It uses the Open-Meteo API to seamlessly translate city names into coordinates and fetch real-time weather data.

## How to run it locally

1. **Clone the repo**
   ```bash
   git clone https://github.com/saddamarbaa/ctd-prework-weather-app.git
   cd ctd-prework-weather-app
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Run the development server**
   ```bash
   npm run dev
   ```
4. **View the app**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

> **Build for production:**
> To create an optimized production build, run:
> ```bash
> npm run build && npm start
> ```

## Features

- **Current Weather Search:** Enter any city to view the current temperature, weather condition, and wind speed.
- **7-Day Forecast:** View the next 7 days of daily high/low temperatures and conditions for any city.
- **Robust Error Handling:** Graceful error states for empty inputs, unmatched cities, and network failures.
- **Fast Navigation:** Instant client-side routing between pages without full reloads.
- **Responsive Design:** Clean, modern UI that works perfectly on mobile and desktop.

## APIs Used

- [Open-Meteo Geocoding API](https://open-meteo.com/en/docs/geocoding-api) - Resolves city names to latitude and longitude.
- [Open-Meteo Forecast API](https://open-meteo.com/en/docs) - Provides the current weather and daily forecast data.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (Strict Mode)
- **UI:** React 19 (Client Components)
- **Styling:** CSS Modules & Native CSS Variables
- **Data Fetching:** Native `fetch` API

## Project Structure

```text
ctd-prework-weather-nextjs/
├── app/
│   ├── layout.tsx              # Root layout with shared <Navbar />
│   ├── page.tsx                # Page 1 — Current Weather
│   ├── forecast/
│   │   └── page.tsx            # Page 2 — 7-Day Forecast
│   ├── globals.css             # Global resets and CSS variables
│   └── page.module.css         # Shared page-level styles
├── components/
│   ├── Navbar.tsx              # Navigation between routes
│   ├── SearchForm.tsx          # Reusable search input form
│   ├── CurrentWeatherCard.tsx  # Displays current weather data
│   └── ForecastList.tsx        # Displays the 7-day forecast grid
├── lib/
│   ├── api.ts                  # API fetching logic
│   ├── types.ts                # TypeScript interfaces
│   └── weatherCodes.ts         # Weather code to description mapping
└── README.md
```

## Author

**Saddam Arbaa**
*Built for the Code the Dream Advanced Pre-Work Assignment (Summer 2026, Data Engineering with Python track).*

---

## Pre-Submission Verification Checklist

*Use this checklist to manually verify the application meets all requirements before final submission.*

- [ ] **Valid City Test:** Enter "Tokyo" on both pages and ensure correct data is rendered.
- [ ] **Empty Input Test:** Submit the form with an empty input; expect "Please enter a city name."
- [ ] **Fake City Test:** Enter an invalid string (e.g., "zzzzz"); expect "City not found. Please check spelling and try again."
- [ ] **Offline/Network Error Test:** Disconnect from the internet and submit; expect "Could not connect. Please try again later."
- [ ] **Navigation Test:** Click links in the navbar and ensure routing is instant without a full page reload.
- [ ] **Mobile Layout Test:** Resize the window to mobile width (<600px); ensure the layout stacks gracefully.
- [ ] **Console Check:** Open Developer Tools > Console and verify there are no React warnings or error logs.
- [ ] **Build Check:** Run `npm run build` to ensure TypeScript compilation succeeds with no errors.
