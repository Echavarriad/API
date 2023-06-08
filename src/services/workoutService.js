const { v4: uuid } = require("uuid");
const workoutModel = require("../database/workoutModel");

const getAllWorkouts = () => {
  const allWorkouts = workoutModel.getAllWorkouts();
  return allWorkouts;
};
const getOneWorkout = () => {
  return;
};
const creatNewWorkou = (newWorkout) => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString("es-CO", { timeZone: "UTC" }),
    updateAt: new Date().toLocaleString("es-CO", { timeZone: "UTC" }),
  };
  const createdWorkout = Workout.creatNewWorkou(workoutToInsert);
  return createdWorkout;
};
const updateWorkout = (req, res) => {
  return;
};
const deleteWorkout = (req, res) => {
  return;
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  creatNewWorkou,
  updateWorkout,
  deleteWorkout,
};
