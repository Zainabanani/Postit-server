const router = require ("express").Router()
const {getAllStories, getAstory} = require('../controller/storyController')


//routes to get all stories
router.get("/", getAllStories);
router.get("/:storyId", getAstory)


module.exports = router;