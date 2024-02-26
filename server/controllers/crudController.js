
const UserModel = require('../User')

const all = (req, res) => {
    UserModel.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
}

const get = (req, res) => {
    const id = req.params.id 
    UserModel.findById({_id: id})
    .then(post => res.json(post))
    .catch(err => console.log(err))
}
 

const post = (req, res) => {
    UserModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
}

const update = (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id: id}, {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    }).then(user => res.json(user))
    .catch(err => res.json(err))
}
 
const del = (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id: id})
    .then(response => res.json(response))
    .catch(err => res.json(err))
}
 
 module.exports = {
        all,
        get,
        post,
        update,
        del
 }