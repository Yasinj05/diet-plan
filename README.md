# Diet Plan Management System 📝

This project implements a RESTful API for managing diet plans using Node.js, Express.js, MongoDB, and TypeScript.

## Features 💡

- **Create** a new diet plan for a user.
- **Retrieve** diet plans for specific users, weeks, and years.
- **Update** existing diet plans.
- **Delete** diet plans.
- **Navigate** between previous and next week's diet plans.
- **Swagger** documentation for API endpoints

## Technologies Used

- Node.js
- Express.js
- TypeScript
- MongoDB with Mongoose
- Swagger for API documentation
- Jest for unit testing

## Getting Started 🚀

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Installation 📥

1. **Clone the repository:**

   ```
   git clone https://github.com/Yasinj05/diet-plan.git
   ```

2. **Navigate to the project directory:**

   ```
   cd diet-plan
   ```

3. **Install dependencies:**

   ```
   npm install
   ```

4. **Create a .env file in the root directory and add your MongoDB connection string:**

   ```
   MONGODB_URI=mongodb://localhost:27017/dietPlanDB
   PORT=your-port
   ```

5. **Start the server:**

   ```
   npm run start
   ```

## Unit Tests

Unit tests are implemented using Jest and Supertest to ensure the reliability of the API endpoints and controller functions. To run the tests, use the following command:

    npm test

## API Documentation 🧪

The API is documented using Swagger. Once the server is running, you can access the documentation at `http://localhost:3000/api-docs`.

## API Endpoints 🖇️

#### Create Diet Plan

- URL: POST `/api/diet-plans`

#### Retrieve Diet Plan

- URL: GET `/api/diet-plans/:userId/week/:week/year/:year`

#### Update Diet Plan

- URL: PUT `/api/diet-plans/:userId/week/:week/year/:year`

#### Delete Diet Plan

- URL: DELETE `/api/diet-plans/:userId/week/:week/year/:year`

#### Get the previous week's diet plan

- URL: GET `/api/diet-plans/:userId/week/:week/year/:year/previous`

#### Get the next week's diet plan

- URL: GET `/api/diet-plans/:userId/week/:week/year/:year/next`

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss any changes.

## License ⚖️

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
