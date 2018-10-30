var keystone = require('keystone');
var Login = keystone.list('Login');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'login';
	// locals.enquiryTypes = Login.fields.enquiryType.ops;
	locals.formData = req.body || {};
	locals.validationErrors = {};
	locals.enquirySubmitted = false;

	// On POST requests, add the Enquiry item to the database
	view.on('post', { action: 'login' }, function (next) {

		var newEnquiry = new Login.model();
		var updater = newEnquiry.getUpdateHandler(req);

		updater.process(req.body, {
			flashErrors: true,
			fields: 'email, password',
			errorMessage: 'There was a problem submitting your enquiry:',
		}, function (err) {
			if (err) {
				locals.validationErrors = err.errors;
			} else {
				// locals.enquirySubmitted = true;
				// if logged in redirect to voting page
				res.redirect('/voting');
			}
			next();
		});
	});

	view.render('login');
};
