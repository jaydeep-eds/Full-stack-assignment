const userModel = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET_KEY = "OnmQ9v78qs"


const signup = async (req, res) => {



    const { username, email, password } = req.body;

    try {

        // Checking if existing User is already present in the database
        const existingUser = await userModel.findOne({ email: email });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hashing the password 
        const hasshedPassword = await bcrypt.hash(password, 10);

        //Creation for User
        const result = await userModel.create({
            email: email,
            password: hasshedPassword,
            username: username
        });

        // Token Generator

        const token = jwt.sign({ email: result.email, id: result._id }, SECRET_KEY);
        res.status(201).json({ user: result, token: token });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }

}


const signin = async (req, res) => {


    const { username, email, password } = req.body;

    try {

        // Checking if the given eamil of the User is present in the database
        const existingUser = await userModel.findOne({ email: email });

        if (!existingUser) {
            return res.status(401).json({ message: "User Not Found " });
        }

        //Checking if the credentials given is matched or not

        const matchPassword = await bcrypt.compare(password, existingUser.password);

        if (!matchPassword) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Token Generator

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, SECRET_KEY);
        res.status(200).json({ user: existingUser, token: token });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });

    }
}

module.exports = { signin, signup }