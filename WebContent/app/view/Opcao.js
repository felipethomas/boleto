Ext.define('Boleto.view.Opcao', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.opcao',

	title : 'Menus do Sistema',
	animCollapse : true,
	layout : 'fit',
	region : 'north',
	split : true,
	height : 360,
	minSize : 150,
	autoScroll : false,

	initComponent : function() {
		Ext.apply(this, {
			items : this.criarOpcoes()
		});

		this.addEvents(
		/**
		 * @event opcaoselecionada lancada quando uma opcao é selecionada
		 * @param {Opcao} this
		 * @param {String} titulo O titulo da opcao
		 * @param {String} url A url da opcao
		 */'opcaoselecionada');

		this.callParent(arguments);
	},
	/**
	 * Create the DataView to be used for the feed list.
	 * @private
	 * @return {Ext.view.View}
	 */
	criarOpcoes : function() {
		this.view = Ext.create('widget.dataview', {
			store : Ext.create('Ext.data.Store', {
				model : 'Boleto.model.Opcao',
				data : this.opcoes

			}),
			selModel : {
				mode : 'SINGLE',
				listeners : {
					scope : this,
					selectionchange : this.onSelectionChange
				}
			},
			listeners : {
				scope : this,
				contextmenu : this.onContextMenu,
				viewready : this.onViewReady
			},
			trackOver : true,
			cls : 'feed-list',
			itemSelector : '.feed-list-item',
			overItemCls : 'feed-list-item-hover',
			tpl : '<tpl for="."><div class="feed-list-item">{titulo}</div></tpl>'
		});
		return this.view;
	},
	/**
	 * Used when view selection changes so we can disable toolbar buttons.
	 * @private
	 */
	onSelectionChange : function() {
		var selecionada = this.obterOpcaoSelecionada();
		this.lerOpcao(selecionada);
	},
	/**
	 * Listens for the context menu event on the view
	 * @private
	 */
	onContextMenu : function(view, index, el, event) {
		var menu = this.menu;

		event.stopEvent();
		menu.activeFeed = view.store.getAt(index);
		menu.showAt(event.getXY());
	},
	onViewReady : function() {
		this.view.getSelectionModel().select(this.view.store.first());
	},
	/**
	 * Gets the currently selected record in the view.
	 * @private
	 * @return {Ext.data.Model} Returns the selected model. false if nothing is selected.
	 */
	obterOpcaoSelecionada : function() {
		return this.view.getSelectionModel().getSelection()[0] || false;
	},
	/**
	 * Loads a feed.
	 * @private
	 * @param {Ext.data.Model} rec The feed
	 */
	lerOpcao : function(rec) {
		if(rec) {
			this.fireEvent('opcaoselecionada', this, rec.get('titulo'), rec.get('url'));
		}
	}
});
