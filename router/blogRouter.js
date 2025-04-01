const {Router} = require('express')
const authMiddleware = require('../middleware/tokenMiddleware')
const { createABlog, getAllBlogs, getOneBlog, updateBlog, deleteBlog } = require('../controller/blogController')

const router = Router()

router.post('/blog', authMiddleware, createABlog)
router.get('/blogs', getAllBlogs)
router.get('/blog/:id', getOneBlog )
router.put('/blog/:id', authMiddleware, updateBlog)
router.delete('/blog/:id', authMiddleware, deleteBlog)

module.exports = router