const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const helmet = require("helmet");
const cors = require("cors");
const contactRoute = require("./src/routes/private/contacts");

dotenv.config();

app.use(cors({ origin: "*" })); //For testing purposes only

/* Constantes */
const PORT = process.env.PORT || 3001;

/* Connect to db */
mongoose.connect(process.env.MONGODB_STRING, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log("Connected to database"));

//Middlewares
app.use(express.json());
app.use(helmet());
//Route middleware
/* app.use("/api/user", authRoute); */
/* app.use("/api/links", linkRoute); */
app.use("/api/contact", contactRoute);

app.listen(PORT, () => console.log(`Server on ${PORT}`));
