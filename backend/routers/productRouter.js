const express = require('express');
const router = express.Router();
const Model = require('../models/productModel');

router.get('/add', (req, res) => {
    res.send('response from product add');
});

router.get('/getall', (req, res) => {
    res.send('response from product getall');
});

router.get('/getbyid', (req, res) => {
    res.send('response from product getbyid');
});

module.exports = router;