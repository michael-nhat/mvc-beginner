
const User = require('../models/User')

class UserController {
     show(req, res, next) {
         User.show().then(listUser =>{
             res.render('users/show',{listUser})
         })
        // User.show()
        // .then(listUser => {
        //     console.log(listUser,"list usrer wtf")
        //     res.render("users/show",{listUser})
        // })
        // var listUser = await User.show()
        // res.render("users/show",{listUser})
    }


    create(req, res, next){
        res.render('users/create')
    }

    store(req, res, next){
        const formData = req.body
        User.create(formData.name, formData.fullname,formData.email)
        .then(() => res.send('created'))
        .catch(err => res.send('erroed!'))
    }

    delete(req, res, next){
        User.delete(req.params.id)
        .then(() => res.send('deleted'))
        .catch(err => {
            res.send('errored')
        })
    }

    // [get] /courses/:id/edit
    edit(req, res, next){
        User.findByID(req.params.id)
        .then(user => res.render('users/edit',{
            user:user
        }))
    }
    
    update(req, res, next){
        // res.json(req.body)
        const formData = req.body
        User.update(formData.id,formData.name,formData.fullname,formData.email)
        .then(() => res.send('updated'))
        .catch(err => res.send('erroed!'))
    }
}

module.exports = new UserController