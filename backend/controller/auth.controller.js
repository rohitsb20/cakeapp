import User from "./../model/user.model.js";

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
      return res.status(400).json({ error: "All fields are required" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    const existingUser = await User.findOne({ email, phone });

    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const newUser = new User({
      email,
      phone,
      password,
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
