Ext.define('Boleto.controller.Opcoes', {
	extend : 'Ext.app.Controller',
	models : ['Opcao'],
	
	conteudo: null,

	init : function() {
		var me = this;
					
		this.control({
			'viewport' : {
				render : function(vport, e) {
					me.conteudo = vport.down('#content-panel'); 
				}
			},
			
			'opcao' : {
				opcaoselecionada : me.gerenciarOpcoes 
			}
		});
	},
	
	gerenciarOpcoes: function(opcao, titulo, url) {
		switch(url) {
			case 'apresentacao' : {
				this.exibirApresentacao(titulo);
			}
		};
	},
	
	exibirApresentacao: function(titulo) {
		var tab = this.conteudo.getComponent('conteudo-apresentacao');
		
		if(!tab) {
			var panel = Ext.create('Boleto.view.Apresentacao'),
				tab = this.conteudo.add(panel);
				
			tab.setTitle(titulo);
			
			panel.getEl().load({
				url: 'resources/html/apresentacao.html',
				scripts: true
			});
		}
		
		this.conteudo.setActiveTab(tab);
	}
});
