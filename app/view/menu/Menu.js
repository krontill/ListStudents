Ext.define('ListStudents.view.Menu', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.menuView',

    store: 'Students',
    controller: 'MenuController',
    viewModel: {
        type: 'MenuModel'
    },

    hideHeaders: true,

    columns: [
        {dataIndex: 'fio', width: '98%'}
    ],

    tbar: [
        {
            text: 'Добавить студента',
            handler: 'onAddStudentClick'
        }
    ]

});
