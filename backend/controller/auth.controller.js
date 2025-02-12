import User from "./../model/user.model.js";
import bcrypt from "bcryptjs";
import {generateToken} from "../utils/token.js"

export const signup = async (req, res) => {
  try {
     const { email, phone, password, firstname, lastname, confirmPassword } =
       req.body;

     if (
       !email ||
       !phone ||
       !password ||
       !firstname ||
       !lastname ||
       !confirmPassword
     ) {
      console.log(confirmPassword);
      
       return res.status(400).json({ error: "All fields are required" });
     }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ error: "Password must be at least 6 characters" });
    }

    if (phone.length !== 10) {
      return res
        .status(400)
        .json({ error: "Phone number must be 10 characters" });
    }

    const existingUser = await User.findOne({ email, phone });

    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({
      email,
      phone,
      password: hashedPassword,
      firstname,
      lastname,
    });

    if (newUser) {
      generateToken(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        message: "User created successfully",

        _id: newUser._id,
        email: newUser.email,
        phone: newUser.phone,
        firstname: newUser.firstname,
        lastname: newUser.lastname,
      });
    }
  } catch (error) {
    console.log("signup auth controller error", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
