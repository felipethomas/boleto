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
            titulo: 'Sencha Blog',
            url: 'http://feeds.feedburner.com/extblog'
        }, {
            titulo: 'Sencha Forums',
            url: 'http://sencha.com/forum/external.php?type=RSS2'
        }, {
            titulo: 'Ajaxian',
            url: 'http://feeds.feedburner.com/ajaxian'
        }]
	}, {
		xtype : 'detalhe'
	}]
});