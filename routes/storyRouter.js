const router = require ("express").Router()
const {
getAllUserStories,
getAUserStory,
createStory,
editStory,
deleteStory 
} = require ("../controller/storyController")



//routes for user
router.route("/").get(getAllUserStories).post(createStory)
router
.route("/:storyId")
.get(getAUserStory)
.patch(editStory)
.delete(deleteStory)

module.exports = router;