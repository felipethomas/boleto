Ext.define('Boleto.view.Opcao', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.opcao',

	title : 'Menus do Sistema',
	layout : 'accordion',
	region : 'north',
	split : true,
	height : 360,
	minSize : 150,
	autoScroll : true,
	items : [{
		title : 'Principal',
		html : '&lt;empty panel&gt;'
	}]
});