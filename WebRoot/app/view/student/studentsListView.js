Ext.define('swyma.view.student.studentsListView' ,{
    extend: 'Ext.grid.Panel',
    id:'studentInformation',
    title : '学生信息列表',
    store: 'studentsStore',
    columns: [
        { header : '学号' ,  dataIndex : 'no' },
        { header : '姓名' , dataIndex : 'name' },
        { header : '性别' , dataIndex : 'sex' },
        { header : '邮箱' , dataIndex : 'email' },
        { header : '电话' , dataIndex : 'phone' }
    ],
    tbar : [
    	'-', {
			text : '增加',
			id : 'add'
		}, '-'
    ]
});

