import express, { Application } from "express";
import carValueRoutes from "./routes/carValueRoutes";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app: Application = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(bodyParser.json());

app.use("/api/carvalue", carValueRoutes);

const port: number = Number(process.env.PORT) || 8000;
app.listen(port, () => {
  console.log(`Server started and listening on port ${port}`);
});