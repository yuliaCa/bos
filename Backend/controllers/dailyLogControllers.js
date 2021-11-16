const DailyLog = require("../models/dailyLogSchema.js");

exports.getDailyLogByUserEmail = (req, res) => {
    //req.params.userEmail
    DailyLog.find({ userEmailAddress: req.params.userEmail })
        .exec()
        .then(results => {
            res.status(200).json(results);
        })
        .catch(error => res.status(500).send(error));
};


exports.postDailyLogByDay = (req, res) => {

    let newDailyLog = new DailyLog({
        userEmailAddress: req.params.userEmail,
        objRoutineLog: req.body.objRoutineLog,
        overallRate: req.body.overallRate,
        dailyLogDate: req.body.dailyLogDate
    });

    newDailyLog.save().then(result => {
            res.status(201).json({
                data: newDailyLog,
                url: `/dailyroutine/${newDailyLog._id}`
            });
        })
        .catch(error => res.status(500).send(error));
};