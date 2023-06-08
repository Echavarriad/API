const workoutService = require("../services/workoutService");

const getAllWorkouts = (req, res) => {
  const allWorkouts = workoutService.getAllWorkouts();
  res.send({ status: "OK", data: allWorkouts });
};

const getOneWorkout = (req, res) => {
  const oneWorkout = workoutService.getOneWorkout(req.params.workoutId);
  res.send(`Get workout ${req.params.workoutId}`);
};

const creatNewWorkout = (req, res) => {
  const { body } = req;
  if (
    !body.name ||
    !body.mode ||
    body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ) {
    return;
  }

  const newWorkout = {
    name: body.name,
    mode: body.mone,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  };
  console.log(newWorkout);
  const creatNewWorkout = workoutService.creatNewWorkou(newWorkout);
  res.status(201).send({ status: "OK", data: creatNewWorkout });
};

const updateWorkout = (req, res) => {
  const updatedWorkout = workoutService.updateWorkout(req.params.workoutId);
  res.send(`Update workout ${req.params.workoutId}`);
};

const deleteWorkout = (req, res) => {
  workoutService.deleteWorkout(req.params.workoutId);
  res.send(`Delete workout ${req.params.workoutId}`);
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  creatNewWorkout,
  updateWorkout,
  deleteWorkout,
};
