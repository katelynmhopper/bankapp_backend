const express = require("express"); 
const {  getAllUsers, updateUser } = require('../controller/user-controller');
const router = express.Router(); 


router.get('/', getAllUsers);

router.put('/', updateUser);

module.exports = router; 