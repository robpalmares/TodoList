const Task = require('../models/task.model');
const router = require('express').Router();

router.route('/tasks')
    .get(function(req, res) {
        Task.find({}, function(err, tasks) {
            res.json(tasks);
        })
    })
    .post(function(req, res, next) {
        if (req.body.task) {
            Task.create({ task: req.body.task }, function(err, task) {
                if(err) return next(err);
                res.redirect('/');
            })
        } else {
            console.error("Bad Request Error: No request body found!");
            return next();
        }
    })

module.exports = router;