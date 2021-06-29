const newsRouter = require('./news')
const meRouter = require('./me')
const coursesRouter = require('./courses')
const siteRouter = require('./site')
const usersRouter = require('./users')


function route(app) {
    app.use('/users', usersRouter)
    app.use('/me', meRouter)
    app.use('/courses', coursesRouter)
    app.use('/news', newsRouter)

    app.use('/', siteRouter)
}

module.exports = route