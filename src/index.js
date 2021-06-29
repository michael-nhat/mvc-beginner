const path = require('path')
const express =require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const mysql = require('mysql')

require('dotenv').config();

const app = express()
const port = 3000

const route = require('./routes/')
const db = require('./config/db')

db.connect_mongodb()
db.connect_mysql()

// var query_test = 'select * from table1'
// db.sql_connection.query(query_test)

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({
    extended: true
}))
    
app.use(express.json())

app.use(morgan('combined'))
app.engine('hbs', handlebars({
    extname: '.hbs',
    helpers: {
        sum: (a, b) => a + b,
    }
}))
app.set('view engine', 'hbs')
app.set('views',path.join(__dirname, 'resources', 'views'))


route(app)
// console.log('PATH: ', path.join(__dirname, 'resources/views'))

// app.get('/', (req, res) => {
//     res.render('home') 
//     // return res.send("hello")
// })

// app.get('/news', (req, res) => {
//     res.render('news')
// })

// app.get('/search', (req, res) => {
//     res.render('search')
// })

// app.post('/search', (req, res) => {
//     console.log(req.body)
//     res.send('')

// })

app.listen(port, () => console.log(`Example app: ${port}`))
