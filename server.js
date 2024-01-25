const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
dotenv.config()

const nodemailer = require('nodemailer')
const app = express()

const cors = require('cors');






// const app = express()
const port = process.env.PORT || 5000


const buildPath = path.join(__dirname, 'build')


app.use(express.static(buildPath))
app.use(express.json())
app.use(cors())



app.post('/pet', (req,res) => {
    const { hasPetted } = req.body;
    if(hasPetted === true) {
      res.json({message: "♡", image: "happypanda"});
    } else {
      res.json({message: "..Why did you stop? T.T", image: "sadpanda"});
    }
  })





// gets the static files from the build folder
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'))
})


// Showing that the server is online and running and listening for changes
app.listen(port, () => {
  console.log(`Server is online on port: ${port}`)
})



const transporter = nodemailer.createTransport("SMTP", {
  host: "smtp-mail.outlook.com", // hostname
  secureConnection: false, // TLS requires secureConnection to be false
  port: 587, // port for secure SMTP
  auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
  },
  tls: {
      ciphers:'SSLv3'
  }
});
// *
// const transporter = nodemailer.createTransport("SMTP",{
//   host: "smtp-mail.outlook.com", //replace with your email provider
//   port: 587,
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.PASSWORD
//   }
// });



// verify connection configuration
transporter.verify(function(error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});




app.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var subject = req.body.subject
  var message = req.body.message

  var mail = {
    from: name,
    to: email,
    subject: subject,
    text: message
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
})



