const mongoose = require('mongoose')

const db = () => {
    mongoose.connect("mongodb+srv://ramsakalpatel253:9etsoqVRBxScUOY4@cluster0.q67hkxz.mongodb.net/crud", {

    }).then(() => {
        console.log("connection created...")
    }).catch((err) => {
        console.log("error..")
    })
}

module.exports = db