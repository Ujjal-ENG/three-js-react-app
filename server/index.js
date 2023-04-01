import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import dallheRoutes from "./routes/dalle.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/dalle", dallheRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello From Dall" });
});

app.listen(8080, () =>
  console.log(`Server is start at http://localhost:${8080}`)
);
