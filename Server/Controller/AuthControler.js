const UserModel = require("../Models/Usermodel");
const bcrypt = require("bcryptjs");

//register new user
const registerUser = async (req, res) => {
  const { username, password, firstname, lastname } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashPass = await bcrypt.hash(password, salt);
  const newUser = new UserModel({username,password: hashPass,firstname,lastname,});

  try {
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// API for login page
const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await UserModel.findOne({ username: username});
    if (!user) {
      res.status(401).send("Incorrect email or password");
    } else {
      const validity = await bcrypt.compare(password, user.password);

      if (!validity) {
        res.status(401).send("Incorrect email or password");
      } else {
        res.status(200).send(user);
      }
    }
  } catch (err) {
         res.status(500).send('An error occurred while trying to login');

  }
};


module.exports = { registerUser, loginUser };
