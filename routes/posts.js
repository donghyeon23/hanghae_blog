const express = require('express');
const Post = ('../schemas/post')
const router = express.Router();


router.get('/', (req, res) => {
    res.send('this is home page');
});

router.get('/post', (req, res) => {
    res.send('test page');
});

module.exports = router;