const express = require('express');
const router = express.Router();
// making a router object here
// this router object can figure out what code to run in response to request...
// usually based on the url, and the method (GET, POST, etc)

// our function responses to get request to home page /
router.get('/', function(req, res, next) {
    // req = request, res = response, next = used to pass request on if request response is invalid
    // name of Handlebars file - name of a template, optional object with data for the template
    // .render function generates HTML
    res.render('index', {
        title: 'Feedback Application',
        author: 'Candace',
        timePageLoadedAt: new Date()
    })
})
// explains to our router what to do if it receives a request from our homepage
// GET request to the home page


// route to new page to access student feedback form
router.get('/feedback-form', function(req, res, next) {
    res.render('student_feedback_form')
})


// need route handlers for every specific webpage
router.post('/submit-feedback', function(req, res, next) {
    // access form data
    // for a GET request - read the URL query...
    // for a POST request - read the body of the request
    const formData = req.body
    console.log(formData)
    // shows form data from our user into console log


    // todo- save to a database
    // automatically email someone when feedback form is submitted

    // need to render thank_you page
    // need to extract data from formData
    res.render('thank_you',{
        name: formData.name,
        email: formData.email,
        comments: formData.comments,
        currentStudent: formData['current-student']
    })
})

module.exports = router
// return router object to other handlers that require this file
// module.exports = router needs to be the very last line in our code
