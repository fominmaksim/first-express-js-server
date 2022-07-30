const MOCK = require("../mock/users.json");

let users = MOCK;

const getUsers = (req, res) => {
  res.send(users);
};

const getUser = (req, res) => {
  const singleUser = users.find((user) => user.id === Number(req.params.id));
  res.send(singleUser);
};

const createUser = (req, res) => {
  const newUser = {
    id: Date.now(),
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
  };
  users.push(newUser);
  res.send(newUser);
};

const updateUser = (req, res) => {
  const singleUser = users.find((user) => user.id === Number(req.params.id));

  singleUser.first_name = req.body.first_name
    ? req.body.first_name
    : singleUser.first_name;
  singleUser.last_name = req.body.last_name
    ? req.body.last_name
    : singleUser.last_name;
  singleUser.email = req.body.email ? req.body.email : singleUser.email;

  res.sendStatus(200);
};

const deleteUser = (req, res) => {
  users = users.filter((user) => user.id !== Number(req.params.id));
  res.sendStatus(200);
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
