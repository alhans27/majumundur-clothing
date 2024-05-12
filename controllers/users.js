const User = require("../models/users");

module.exports = {
    findById: (req, res) => {
        const id = req.params.id;
        User.findById({_id: id})
            .then((user)=>{
                res.status(200);
                res.json({
                    status: "OK",
                    data: user,
                });
            })
            .catch((error)=>{
                res.json({
                    status: "ERROR",
                    message: `error message: "${error}"`,
                });
            });
    },
    add: (req, res) => {
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role,
        });
        user.save()
            .then(()=>{
                    res.status(201);
                    res.json({
                        status: "CREATED",
                        message: "successfully insert new user",
                        data: [req.body],
                    });
            })
            .catch((error)=>{
                res.json({
                    status: "ERROR",
                    message: `error message: "${error}"`,
                });
            });
    },
    update: (req, res) => {
        const user = {
            username: req.body.username,
        };
        
        if (req.body.password !== ""){
            user.password = req.body.password;
        };
        
        const id = req.params.id;
        
        User.findOneAndUpdate({_id : id}, user, {returnDocument:'after'})
            .then((user)=>{
                res.status(201);
                res.json({
                    status: "UPDATED",
                    data: user,
                });
            })
            .catch((error)=>{
                res.json({
                    status: "ERROR",
                    message: `error message: "${error}"`,
                });
            });
    },
    delete: (req, res) => {
        const id = req.params.id;
        User.deleteOne({_id: id})
            .then(()=>{
                res.status(200);
                res.json({
                    status: "OK",
                    message: `successfully deleted user with ID "${id}"`,
                });
            })
            .catch((error)=>{
                res.json({
                    status: "ERROR",
                    message: `error message: "${error}"`,
                });
            });
    },
}