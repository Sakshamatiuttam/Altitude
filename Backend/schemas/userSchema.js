/** @format */
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => console.log("Connected to MongoDB"))
	.catch((error) => console.error("MongoDB connection error:", error));
const userSchema = new mongoose.Schema({
	fullname: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
});

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
