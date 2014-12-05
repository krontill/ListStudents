Ext.define('ListStudents.view.Menu', {
    extend: 'Ext.grid.Panel',
    xtype: 'menuView',

    store: 'Students',
    controller: 'MenuController',

    //bind: '{fullName}',
    columns: [
        {
            text: 'ФИО',
            dataIndex: 'name'
        },
        {text: 'ФИО', dataIndex: 'family'},
        {text: 'ФИО', dataIndex: 'patronymic'}
    ],
    plugins: [
        {
            ptype: 'rowediting',
            listeners: {
                edit: 'onEditComplete',
                click: {
                    element: 'el',
                    fn: 'onMenuClick'
                }
            }
        }
    ],
    listeners: {
        click: {
            element: 'name',
            fn: 'onMenuClick'
        },
        dblclick: {
            element: 'body', //bind to the underlying body property on the panel
            fn: function () {
                console.log('dblclick body');
            }
        }
    }// Научиться обрабатывать клики по ячейкам

    //bind: '{fullName}'
    // формуляр испоьзовать чтобы сделать ФИО и забиндить в один столбец все фио.

});
