/**
 * Ext JS Library 4.0.7
 * Copyright(c) 2006-2011 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
 *
 * Projeto Boleto
 * Fortaleza - Ceara
 *
 * @author Felipe Andrade
 */
Ext.Loader.setConfig({
	enabled : true
});

Ext.application({
	name : 'Boleto',

	appFolder : 'app',

	launch : function() {
		Ext.BLANK_IMAGE_URL = 'resources/images/s.gif';

		Ext.create('Ext.container.Viewport', {
			layout : 'fit',
			items : [{
				xtype : 'panel',
				title : 'Users',
				html : 'List of users will go here'
			}]
		});
	}
});
