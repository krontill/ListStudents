Ext.define('ListStudents.view.Menu', {
    extend: 'Ext.grid.Panel',
    xtype: 'menuView',

    store: 'Students',
    controller: 'MenuController',

    hideHeaders: true,

    columns: [
        {dataIndex: 'fio', width: 180}
    ]

});
