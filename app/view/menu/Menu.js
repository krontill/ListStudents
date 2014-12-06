Ext.define('ListStudents.view.Menu', {
    extend: 'Ext.grid.Panel',
    xtype: 'menuView',

    store: 'Students',
    controller: 'MenuController',

    columns: [
        {
            text: 'ФИО',
            dataIndex: 'name'
        },
        {text: 'ФИО', dataIndex: 'family'},
        {text: 'ФИО', dataIndex: 'patronymic'}
    ]

    //bind: '{fullName}'
    // формуляр испоьзовать чтобы сделать ФИО и забиндить в один столбец все фио.

});
