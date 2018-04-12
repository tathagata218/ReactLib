const express = require('express');
const router = express.Router();
const DBControls = require('../controllers/dbController');

// In this file '/' is equivalent to '/api' router because the server.js file ---- app.use('/api'apiCall) ----- initialization
// make sure to use /api for the utils routes for the front end part



router.route('/allBooks')
    .get(DBControls.getAllBooks);

router.route('/allDvds')
    .get(DBControls.getAllDvd);


router.route('/addBook')
    .post(DBControls.addBook)


router.route('/addDvd')
    .post(DBControls.addDvd)

    module.exports = router;