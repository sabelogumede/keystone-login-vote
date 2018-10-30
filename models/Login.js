var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Login Model
 * =============
 */

var Login = new keystone.List('Login', {
	nocreate: true,
	noedit: true,
});

Login.add({
	email: { type: Types.Email, required: true },
	password: { type: Types.Password, initial: true, required: true },
});

Login.defaultColumns = 'email, password';
Login.register();
