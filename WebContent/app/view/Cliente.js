Ext.define('Boleto.view.Cliente', {
	extend : 'Ext.form.Panel',
	alias : 'widget.cliente',

	id : 'form-cliente',

	items : [{
		xtype : 'fieldset',
		title : 'informa&ccedil;&otilde;es do cliente',
		margin : 5,
		defaults : {
			labelWidth : 100,
			layout : 'anchor'
		}
	}]
});
