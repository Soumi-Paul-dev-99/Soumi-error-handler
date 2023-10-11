const mongoose = require("mongoose");

const connectdb = async() =>{
try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log("DATABASE CONNECTED :",connect.connection.host,
    connect.connection.name)
} catch (error) {
    console.log(error);
    process.exit(1);
}
}

module.exports  = connectdb;