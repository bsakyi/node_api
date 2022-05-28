const express = require("express");
const workoutController = require("../../controllers/workoutController")


const router = express.Router();

router.get("/", (req, res) => {
    res.send("Get all workouts");
});

router.get("/:workoutId", (req, res) =>{
    res.send("Get an existing workout");
} );

router.post("/", (req, res) => {
    res.send("Create a new workout");
});

router.patch("/:workoutId", (req, res) => {
    res.send("Update an existing workout");
});

router.delete("/:workoutId", workoutController.deleteOneWorkout);

module.exports = router;