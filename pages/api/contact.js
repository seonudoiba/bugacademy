// import nodemailer from "nodemailer";

// export default function (req, res) {
	
	
// 	const body = JSON.parse(req.body);
// 	console.log(body)
// 	res.status(200).json({Hi:"Hi"});
// }


export default function (req, res) {
	require('dotenv').config()
	
	let nodemailer = require('nodemailer')
	const transporter = nodemailer.createTransport({
	  port: 465,
	  host: "smtp.gmail.com",
	  auth: {
		user: 'biodunrahman05@gmail.com',
		pass: "abdulrahman",
	  },
	  secure: true,
	})
	const mailData = {
	  from: 'biodunrahman05@gmail.com',
	  to: 'abiodunstarr@gmail.com',
	  subject: `Message From ${req.body.name}`,
	  text: req.body.message + " | Sent from: " + req.body.email,
	  html: `<div>${req.body.message}</div><p>Sent from:
	  ${req.body.email}</p>`
	}
	transporter.sendMail(mailData, function (err, info) {
	  if(err)
		console.log(err)
	  else
		console.log(info)
	})
	res.status(200)
  }