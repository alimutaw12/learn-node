const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
		sgMail.send({
				to: email,
				from: 'ahmd.mutawalli@gmail.com',
				subject: 'Thanks for joining in!',
				text: `Welcome, ${name}`
		})
}

module.exports = {
		sendWelcomeEmail
}
