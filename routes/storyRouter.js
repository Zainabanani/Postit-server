const router = require("express").Router()

const {getAllStories, getAStory, getAUserStory,
    getAllUserStories, createStory, editStory, deleteStory} = require("../controller/storyController");


   


    // route for uuser
    router.route("/").get(getAllUserStories).get(getAllStories).post(createStory);
    router.route("/:storyId").get(getAUserStory).get(getAStory).patch(editStory).delete(deleteStory);



module.exports = router