const router = require("express").Router();
const employee = require("../model/employee");
const Employee = require("../model/employee");

//get, post, put, delete
//RESTApi standard we can't use verbs to name our endpoints (nouns)

// const obj = {} object literal
// const obj = new Obj({name: "", occupation: ""})
/* ADD AN EMPLOYEE INFO */
router.post("/employee", async (req, res) => {
  const newEmployee = new Employee({
    name: req.body.name,
    occupation: req.body.occupation,
    imageUrl: req.body.imageUrl,
    callMobile: req.body.callMobile,
    callOffice: req.body.callOffice,
    sms: req.body.sms,
    email: req.body.email,
  });

  try {
    const savedEmployeeData = await newEmployee.save();
    res.status(200).json(savedEmployeeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* GET ALL EMPLOYEES*/
router.get("/employees", async (req, res) => {
  try {
    const getAllEmployees = await Employee.find({});
    res.status(200).json(getAllEmployees);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* GET A SPECIFIC EMPLOYEE */
router.get("/:id", async (req, res) => {
  try {
    const findEmployee = await Employee.findById(req.params.id);
    res.status(200).json(findEmployee);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* UPDATE AN EMPLOYEE INFO */
router.put("/:id", async (req, res) => {
  console.log("id", req.params.id);
  try {
    const query = { _id: req.params.id };
    const updatedEmployee = await Employee.findOneAndUpdate(
      query,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedEmployee);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* DELETE AN EMPLOYEE */
router.delete("/:id", async (req, res) => {
  try {
    await Employee.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json("The employee has been deleted!");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
