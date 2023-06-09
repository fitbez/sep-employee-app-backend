const mongoose = require("mongoose");

//Creating our schema
const EmployeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    occupation: {
      type: String,
      required: false,
    },
    imageUrl: {
      type: String,
      required: false,
    },
    callMobile: {
      type: String,
      required: true,
    },
    callOffice: {
      type: String,
      required: false,
    },
    sms: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

//creating our model and exporting it
module.exports = mongoose.model("Employee", EmployeeSchema);
