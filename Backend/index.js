/** @format */

const express = require("express");
const app = express();
const users = require("./schemas/userSchema.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hello");
});
app.post("/signup", async (req, res) => {
	try {
		const { fullname, email, password } = req.body;
		let exists = await users.findOne({ email: email });
		if (exists) {
			return res.status(400).send("User already exists");
		} else {
			const salt = await bcrypt.genSalt(10);
			const hash = await bcrypt.hash(password, salt);
			await users.create({
				fullname,
				email,
				password: hash,
			});
			return res.status(201).send("User saved");
		}
	} catch (err) {
		console.error("Error saving user:", err.message);
		return res.status(500).send("Error saving user");
	}
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
