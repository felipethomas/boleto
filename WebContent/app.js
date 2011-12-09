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

Ext.Loader.setPath('Boleto', 'app');

Ext.require([
	'Ext.container.Viewport',
	'Ext.layout.container.Border',
	'Ext.layout.container.Accordion',
	'Ext.panel.Panel',
	'Ext.Component',
	'Ext.view.View',
	'Ext.data.Store',
	'Ext.selection.Model',
	'Boleto.view.Cabecalho',
	'Boleto.view.Opcao',
	'Boleto.view.Detalhe',
	'Boleto.view.Conteudo',
	'Boleto.view.Oeste'
]);
		
Ext.application({
	name : 'Boleto',

	appFolder : 'app',
	
	controllers: [
        'Opcoes'
    ],

	launch : function() {
		Ext.BLANK_IMAGE_URL = 'resources/images/s.gif';
		
		Ext.create('Ext.Viewport', {
			layout : 'border',
			items : [{
				xtype : 'cabecalho',
			}, {
				xtype : 'oeste'
			}, {
				xtype : 'conteudo'
			}],
			renderTo : Ext.getBody()
		});
	}
});
