const express = require("express");
const dotenv = require("dotenv").config()
const app = express();
const port = process.env.PORT || 5000;
const contactRoutes = require("./routes/contactRoutes");
const errorHandler = require("./middleware/errorHandler");
const connectdb = require("./config/dbConnect");

connectdb();
app.use(express.json());
app.use("/api/contacts",contactRoutes);
app.use(errorHandler);
app.listen(port, ()=>{
    console.log(`Server running on the port http://localhost:${port}`)
});