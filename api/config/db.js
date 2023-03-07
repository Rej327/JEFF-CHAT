const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Connected: Connected on JEFF CHAT APP Data");
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};

mongoose.set("strictQuery", true);
module.exports = connectDB;
