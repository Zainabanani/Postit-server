
const router = require ("express").Router();
const {registerUser, loginUser, foundUser} = require ("../controller/auth")

const auth = require("../middleware/authetication");



router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/user", auth, foundUser);



module.exports = router