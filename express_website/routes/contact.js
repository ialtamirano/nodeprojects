var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/send', function(req, res, next) {
    
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth:{
            user: 'ivan.altamirano@gmail.com',
            pass: 'algo'
        }
    });
    
    var mailOptions = {
        from: 'Ivan <ivan.altamirano@gmail.com>',
        to:  'ivan.altamirano@mtk.com.mx',
        subject: "You have a new email",
        text: 'You have a new email with the following details... Name: ' + req.body.name + ' Email:'+ req.body.email+' Message:'+req.body.message,
        html: '<p>You have a new email with the following details...</p> <ul><li>Name: ' + req.body.name + '</li></li> Email:'+ req.body.email+'</li><li> Message:'+req.body.message+'</li></ul>',
    };  
  
    transporter.sendMail(mailOptions,function(error,info){
        if(error){
            console.log(error);
        }
    });
});


module.exports = router;
