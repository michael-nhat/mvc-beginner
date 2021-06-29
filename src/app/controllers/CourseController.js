const Course = require('../models/Course')
const { mongoosesToObj } = require('../../util/mongoose')

class CourseController {
    // /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug})
        .then(course => {
            res.render('courses/show', { course: mongoosesToObj(course)})
        })
    }

    create(req, res, next){
        res.render('courses/create')
    }

    store(req, res, next){
        // res.json(req.body)
        const formData = req.body
        formData.image = `https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`
        const course = new Course(formData)
        course.save()
        // res.send(course.timestamps)
        res.json(course)
    }
    // [get] /courses/:id/edit
    edit(req, res, next){
        Course.findById(req.params.id)
        .then(course => res.render('courses/edit',{
            course: mongoosesToObj(course)
        }))
        .catch(next)
    }
}

module.exports = new CourseController