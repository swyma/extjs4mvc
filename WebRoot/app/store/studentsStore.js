Ext.define('swyma.store.studentsStore', {
    extend: 'Ext.data.Store',
    model: 'swyma.model.studentsModel',
    autoLoad: true,    
    proxy: {
        type: 'ajax',
        api: {
            read: './app/data/students.json' 
        },
        reader: {
            type: 'json',
            root: 'students'
        }
    }
});
