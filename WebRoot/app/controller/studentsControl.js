Ext.define('swyma.controller.studentsControl', {
    extend: 'Ext.app.Controller',
    stores: ['studentsStore'],
    models: ['studentsModel'],
    views: ['student.studentsListView','student.addStudentView'],
    refs: [
       /* {
            ref: '#add',
           	selector: 'add'
        },
        {
            ref: Ext.getCmp('addStudentView'),
            selector: 'add'
        }*/
    ],
    init: function() {
        this.control({
        	'#add': {
                click: function(){
                	this.showWin()
                }
            }
        });
    },
    showWin : function(){
    	Ext.create('swyma.view.student.addStudentView').show();    	
    }
});

