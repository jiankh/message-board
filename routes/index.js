const express = require('express');

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
];

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board', messages:messages });
});

router.get("/new", function(req,res,next) {
    res.render('form')
} )

router.post("/new", function(req,res,next) {
    messages.push({
        text: req.body.message,
        user: req.body.author,
        added: new Date()
    })
    res.redirect("/")
})

module.exports = router;
