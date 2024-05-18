# Geo-Location Backend Repo
## Overview
This API allows users to query a saved set of geolocations. It is built with TypeScript, Express, MongoDB, and Mongoose, providing efficient and robust geolocation querying capabilities. The API supports searching for geolocations within a specified radius and other complex query conditions.

## Technologies Used
- TypeScript: Strongly typed programming language that builds on JavaScript.
- Express: Fast, minimalist web framework for Node.js.
- MongoDB: NoSQL database for storing the data.
- Mongoose: Elegant MongoDB object modeling for Node.js.

## Getting Started
### Prerequisites
- Node.js (version 14.x or higher)
- MongoDB (version 6.x or higher)

### Installation
- Clone the repository. `git clone https://github.com/fob413/geolocation-based-search.git`
- Navigate to directory. `cd geolocation-based-search/backend`
- Install the dependencies. `npm install`
- Create a `.env` file in the root directory based off the `.env_example` file and replace with the values.
- Seed database. `npm run seed`
- Create `geospatial index` in mongodb, following the instructions here: [https://www.mongodb.com/docs/atlas/atlas-search/tutorial/run-geo-query/#std-label-run-geo-search-tutorial](https://www.mongodb.com/docs/atlas/atlas-search/tutorial/run-geo-query/#std-label-run-geo-search-tutorial)
- Start the application. `npm run dev`
- Additionally, the application can be run with docker.
  - Navigate back to the project's root directory `cd ../`
  - Start application with docker `docker-compose up`

The API will be available at http://localhost:3000.

## API Endpoints
### Query Geolocations
GET `/search?q=Londo&latitude=43.70011...&longitude=-79.4163`

This endpoint allows you to query geolocations.

#### Parameters
- longitude (optional): Longitude of the center point.
- latitude (optional): Latitude of the center point.
- q (optional): search term.

## Tests
To run the tests after the installation of the application: `npm test`

## Contributing
Contributions are welcome! Please open an issue or submit a pull request on GitHub.
