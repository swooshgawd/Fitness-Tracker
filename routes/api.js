const router = require("express").Router()
const Workout = require("../models/Workout")
router.get("/workouts", (req, res) => {
    Workout.find()
        .then(workoutData => {
            res.json(workoutData)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.put("/workouts/:id", (req,res) =>{
    Workout.findByIdAndUpdate(req.params.id, {
        $push: {exercises: req.body}
    })
    .then(workoutData => {
        res.json(workoutData)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.post("/workouts", (req, res) =>{
    Workout.create(req.body)
    .then(workoutData => {
        res.json(workoutData)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.get("/workouts/range", (req, res) =>{
    Workout.find().sort({day: -1}).limit(7).sort({day: 1})
    .then(workoutData => {
        res.json(workoutData)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router