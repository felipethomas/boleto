Ext.define('Boleto.view.Detalhe', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.detalhe',

	id : 'details-panel',
	title : 'Informa&ccedil;&otilde;es Adicionais',
	region : 'center',
	bodyStyle : 'padding-bottom:15px;background:#eee;',
	autoScroll : true,
	html : '<p class="details-info">When you select a layout from the tree, additional details will display here.</p>'
});