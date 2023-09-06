import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import Connection from "./database/db.js";
import Routes from "./routes/route.js";

const PORT = process.env.PORT || 8000;
dotenv.config();
const app = express();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", Routes);

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const URL = process.env.MONGODB_URI || `mongodb+srv://${username}:${password}@crud-app.xhltclq.mongodb.net/?retryWrites=true&w=majority`;

Connection(URL);

if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'))
}


app.listen(PORT, () => console.log(`Server is at port ${PORT}`));
