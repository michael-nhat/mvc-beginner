
const Course = require('../models/Course')
const { multipleMongooseToObj } = require('../../util/mongoose')

class meController {

    storedCourses(req, res, next) {
        Course.find({})
        .then(courses => res.render('me/stored-courses', {
            courses: multipleMongooseToObj(courses)
        }))
        .catch(next)
        
    }

    getIndex(req, res, next){
        res.json("hello")
    }
}

module.exports = new meController