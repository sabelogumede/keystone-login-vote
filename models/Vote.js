var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Vote Model
 * =============
 */

var Vote = new keystone.List('Vote', {
	nocreate: true,
	noedit: true,
});

Vote.add({
	name: { type: Types.Name, required: true },
	organizationType: { type: Types.Select, options: [
		{ value: 'message', label: 'Hello Computer {JHB/CPT}' },
		{ value: 'question', label: 'I\'ve got a question' },
		{ value: 'other', label: 'Something else...' },
	] },
	reasonOne: { type: Types.Markdown, required: true },
	reasonTwo: { type: Types.Markdown, required: true },
	reasonThree: { type: Types.Markdown, required: true },
	createdAt: { type: Date, default: Date.now },
});

Vote.defaultSort = '-createdAt';
Vote.defaultColumns = 'name, organizationType, reasonOne, reasonTwo, reasonThree, createdAt';
Vote.register();
