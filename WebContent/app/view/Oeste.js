Ext.define('Boleto.view.Oeste', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.oeste',

	layout : 'border',
	id : 'layout-browser',
	region : 'west',
	border : false,
	split : true,
	margins : '2 0 5 5',
	width : 275,
	minSize : 100,
	maxSize : 500,
	items : [{
		xtype : 'opcao',
		opcoes : [{
            titulo: 'Apresenta&ccedil;&atilde;o',
            url: 'apresentacao'
        }, {
            titulo: 'Clientes',
            url: 'clientes'
        }, {
            titulo: 'Boleto',
            url: 'boleto'
        }]
	}, {
		xtype : 'detalhe'
	}]
});