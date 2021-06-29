const Course = require('../models/Course')
const { multipleMongooseToObj } = require('../../util/mongoose')

class SiteController {

    // [GET] /news
    index(req, res, next) {
        // res.render('home')
        // Course.find({}, function (err, courses)  {
        //     if (!err) res.json(courses)
        //     else
        //     res.status(404).json({
        //         error: 'ddfsfjklsss'
        //     })
        // })
        Course.find({})
            .then(courses => { 
                // courses = courses.map(courses => courses.toObject())
                // res.render('home', {courses})
                res.render('home', {
                    courses: multipleMongooseToObj(courses)
                })
            })
            .catch(next)
    }

    search(req, res) {
        res.send('This is  search!!')
    }
}

module.exports = new SiteController