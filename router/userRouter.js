const {Router} = require('express')
const {register, userLogin, deleteUser} = require('../controller/userController')
const authMiddleware = require('../middleware/tokenMiddleware')



const router = Router()

.post('/user/signup', register)
.post('/user/login', userLogin)
.delete('/user/:id', authMiddleware, deleteUser)

module.exports = router