Ext.Loader.setConfig({
	enabled : true
});
Ext.application({
	name : 'swyma',
	controllers : ['studentsControl'],
	launch : function() {
		var slv=Ext.create('swyma.view.student.studentsListView');
		Ext.create('Ext.container.Viewport', {
			layout : 'fit',
			items : [slv]
		});
	}
});
