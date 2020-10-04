const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home');

router.get('/', (req, res) => {
    res.send("Working!!!");
});

router.get('/posts', homeController.publicFeed);

module.exports = router;
