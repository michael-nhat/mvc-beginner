const express = require('express')
const router = express.Router()

const userController = require('../app/controllers/UserController.js')

router.get('/', userController.show)
router.get('/create', userController.create)
router.post('/store', userController.store)
router.get('/:id/delete', userController.delete)
router.get('/:id/edit', userController.edit)
router.post('/:id/update', userController.update)

module.exports = router
