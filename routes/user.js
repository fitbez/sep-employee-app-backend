const router = require("express").Router();
const User = require("../model/user");

router.post("/user", async (req, res) => {
  const newUser = new User({
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const savedUserData = await newUser.save();
    res.status(200).json(savedUserData);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* GET ALL USERS*/
router.get("/user", async (req, res) => {
  try {
    const getAllUsers = await User.find({});
    res.status(200).json(getAllUsers);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
