# Geo-Location Frontend Repo
## Overview
This frontend application interacts with the Geolocation Query API to allow users to search and display a set of saved geolocations. The application is built using modern web technologies and provides a user-friendly interface for querying geolocations.

## Technologies Used
- TypeScript: Strongly typed programming language that builds on JavaScript.
- Vite: Next-generation front-end tooling for fast builds and development.
- React: JavaScript library for building user interfaces.
- Leaflet: Open-source JavaScript library for interactive maps.

## Getting Started
### Prerequisites
- Node.js (version 14.x or higher)

### Installation
- Clone the repository. `git clone https://github.com/fob413/geolocation-based-search.git`
- Navigate to directory. `cd geolocation-based-search/frontend`
- Install the dependencies. `npm install`
- Create a `.env` file in the root directory based off the `.env_example` file and replace with the values.
- Start the application. `npm run dev`
- Additionally, the application can be run with docker.
    - Navigate back to the project's root directory `cd ../`
    - Start application with docker `docker-compose up`

The API will be available at http://localhost:5173.

## Features
- Geolocation Search: Search for geolocations within the database.
- Interactive Map: Visualize geolocations on an interactive map.
- Responsive Design: Optimized for both desktop and mobile devices.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request on GitHub.
