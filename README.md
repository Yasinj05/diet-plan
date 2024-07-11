# Diet Plan Management System 📝

This project is a diet plan management system built using MongoDB, Express.js, and TypeScript. It allows users to create, view, update, and delete their weekly diet plans. The API also includes functionality to retrieve the previous and next week's diet plans.

## Features

- **Create Diet Plan**: Allows users to create a new diet plan for a specified week and year.
- **Retrieve Diet Plan**: Fetches a user's diet plan for a given week and year.
- **Update Diet Plan**: Updates an existing diet plan for a specified week and year.
- **Delete Diet Plan**: Deletes an existing diet plan for a specified week and year.
- Retrieve the previous week's diet plan
- Retrieve the next week's diet plan
- Swagger documentation for API endpoints

## Technologies Used

- Node.js
- Express.js
- TypeScript
- MongoDB with Mongoose
- Swagger for API documentation

## Getting Started 🚀

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Installation

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
