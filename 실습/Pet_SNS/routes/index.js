const express = require('express');
const router = express.Router();
const authRouter = require('./auth');
const postrouter = require('./posts');
const postCtr = require('../controller/postCtr');

router.get('/', postCtr.list);

router.use('/auth', authRouter);
router.use('/posts', postrouter);

module.exports = router;
