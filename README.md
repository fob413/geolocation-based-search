# Geo-Location

- [Hosted Link](https://geo-location-search-fend-1c7c6e53d62a.herokuapp.com/)

## Approach to the Challenge
### Backend Development:
For the backend, I utilized Node.js with TypeScript and Express.js to build a type-safe API. The backend is connected to MongoDB, which serves as the primary database for storing geo-location data. I made the following key design decisions for the backend:

- TypeScript for Type Safety: Using TypeScript in the backend provided strong type safety, ensuring fewer runtime errors and better maintainability. It also improved the developer experience with enhanced code completion and error detection.

- Express.js for Routing: Express.js was chosen for its simplicity and flexibility in handling HTTP requests and responses. It allowed me to create RESTful endpoints efficiently.

- MongoDB for Scalability: MongoDB was selected as the database due to its ability to handle large volumes of geo-location data. Its schema-less nature allowed for flexible data modeling, which is ideal for handling various geo-location attributes.

- Indexing for Performance: To optimize search performance, I implemented text search indexes for fields like street, city, county, and country, and geospatial indexes for latitude and longitude. This ensured fast and efficient querying of location data based on user input and proximity searches.

For more information, please go to the [FrontEnd Repo Readme](frontend/README.md)


### Frontend Development:
For the frontend, I chose React with TypeScript and Vite for a fast and modern development experience. The front end interacts with the backend API to fetch and display geo-location data using Leaflet.js for mapping. Key design decisions for the frontend include:

- React for Component-Based Architecture: React's component-based architecture allowed for the modular development of UI components, making the codebase more maintainable and scalable.

- TypeScript for Type Safety: Similar to the backend, TypeScript was used in the frontend to enhance code quality and reduce the likelihood of runtime errors.

- Vite for Fast Development: Vite was chosen for its blazing-fast build tool capabilities, ensuring a smooth and efficient development process with hot module replacement and rapid compilation.

- Leaflet.js for Mapping: Leaflet.js was integrated to handle interactive maps, providing users with a visual representation of geo-locations. Its simplicity and ease of integration with React made it an ideal choice for this project.

For more information, please go to the [Backend Repo Readme](backend/README.md)
