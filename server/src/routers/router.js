const express = require("express");
const router = express.Router()

const { createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
    userLogin } = require("../controllers/users/users")



router.post("/user/create", createUser);
router.get("/user/get", getUsers);
router.get("user/getById", getUserById);
router.get("user/update", updateUser);
router.get("user/delete", deleteUser);
router.get("user/login", userLogin);


module.exports = router;


