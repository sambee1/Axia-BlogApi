const {Router} = require('express')

const authMiddleware = require('../middleware/tokenMiddleware')
const { postComment, getABlogComments } = require('../controller/commentController')




const router = Router()
router.post('/blog/comment/:id', authMiddleware, postComment)
router.get('/blog/comments/:id', getABlogComments)

module.exports = router