import express, { Application } from "express";
import bodyParser from "body-parser";

const app: Application = express();

app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
