Ext.define('ListStudents.view.Menu', {
    extend: 'Ext.grid.Panel',
    xtype: 'menuView',

    store: 'Students',
    controller: 'MenuController',
    viewModel: {
        type: 'MenuModel'
    },

    hideHeaders: true,

    columns: [
        {dataIndex: 'fio', width: 180}
    ]

});
