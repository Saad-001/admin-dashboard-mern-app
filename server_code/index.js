import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import mongoose from "mongoose";
import morgan from "morgan";
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";

// data import
// import { dataAffiliateStat } from "./data/index.js";
// import AffiliateStat from "./models/AffiliateStat.js";

// configaration

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// routes
app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

// mongoose setup

const PORT = process.env.PORT || 8080;
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: process.env.DB_NAME,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`connected to server port: ${PORT}`);
    });
    // AffiliateStat.insertMany(dataAffiliateStat);
  })
  .catch((err) => {
    console.log(`${err} did not connect`);
  });
