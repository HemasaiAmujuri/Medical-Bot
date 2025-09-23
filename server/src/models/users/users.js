const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    basicDetails : {
       name : {
        type : String,
       required : true 
    },
      email : {
        type : String,
        required : true
      },
      mobileNumber: {
        type: String,
        required: true
      },
      dob : {
        type : Date
      },
      gender : {
        type : String,
        enum  : ["male", "female", "other"]
      },
      password : {
        type : String,
        required : true
      },
      address : {
        type : String,
      }
    },
    lifeStyle : {
        smoke : {
            type : String,
            enum : ["yes", "no"],
            required : true
        },
        alcohol : {
            type : String,
            enum : ["yes", "no"],
            required : true
        },
        sleep : {
            type : String,
            enum : ["Less than 5", "5-6", "7-8", "More than 8"],
            required : true
        },
        diet : {
            type : String,
            enum : ["Balanced", "Vegetarian", "High in processed or fast foods", "Irregular / Skipped meals"],
            required : true
        },
        wellness : {
            type : [String],
            enum : ["regularExercise", "meditation / mindfulness", "routine-medical-checkups", "staying-hydrated"],
            required : true
        },
       },
       medicalHistory : {
           chronicIllness : {
              type : String,
              required : true
           },
            medications : {
              type : String,
              required : true
           },
            allergies : {
              type : String,
              required : true
           },
            surgeries  : {
              type : String,
              required : true
           },
            healthConcerns : {
              type : String,
              required : true
           },
       },
       isDeleted : {
        type : String,
        enum : ["true", "false"]
       },
},
  { timeStamps : true }
);



module.exports = mongoose.model("users", userSchema)