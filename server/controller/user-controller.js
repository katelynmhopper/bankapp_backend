const User = require('../model/User');

const addUser = (req, res) => {
    const user = new User (req.body); 
    user
        .save()
        .then(user => res.send(user))
        .catch(err => res.send(err))
}

const getAllUsers = (req, res) => {
    User
        .find({})
        .then(users => res.send(users))
        .catch(err => res.send(err))
}

const updateUser = (req, res) => {
    User
        .findOneAndUpdate({ id: req.body.id}, {name: req.body.name})
        .then((results) => res.send(results))
        .catch(err => res.send(err))
}

module.exports = { getAllUsers, updateUser};