Balanced.Event = Balanced.Model.extend({
	transaction: Balanced.Model.belongsTo('entity', 'Balanced.Transaction'),
	eventCallbacks: Balanced.Model.hasMany('callbacks', 'Balanced.EventCallback'),
	uri: '/events',
	page_title: Balanced.computed.fmt('type', 'id', '%@ #%@')
});

Balanced.TypeMappings.addTypeMapping('event', 'Balanced.Event');
