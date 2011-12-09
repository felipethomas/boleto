Ext.define('Boleto.controller.Opcoes', {
	extend : 'Ext.app.Controller',
	models : ['Opcao'],

	init : function() {
		this.control({
			'opcao' : {
				opcaoselecionada : function(opcao, titulo, url) {
					//alert(titulo);
				}
			}
		});
	}
});
