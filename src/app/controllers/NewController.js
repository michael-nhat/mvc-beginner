
class NewsController {

    // [GET] /news
    index(req, res) {
        res.render('home')
    }

    show(req, res) {
        res.send('News detail!!')
    }
}

module.exports = new NewsController