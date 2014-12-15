Ext.define('ListStudents.view.Viewport', {
    extend: 'Ext.Viewport',
    alias: 'widget.Viewport',

    requires: ['ListStudents.view.Student', 'ListStudents.view.Lesson', 'ListStudents.view.Menu'],
    viewModel: 'viewportModel',
    controller: 'ViewportController',

    layout: 'border',
    minWidth: 1250,

    defaults: {
        collapsible: true,
        split: true,
        bodyPadding: 10
    },

    items: [
        {
            region: 'north',

            layout: {
                type: 'hbox',
                align: 'stretch'
            },

            bind: {
                title: 'Список студентов {group}'
            },

            items: [
                {
                    xtype: 'displayfield',
                    bind: '<h2>{title.fio}</h2>',
                    padding: '0 0 0 50',
                    flex: 1
                },
                {
                    xtype: 'button',
                    text: 'Распечатать',
                    href: 'javascript:window.print(); void 0;',
                    height: 31,
                    margin: '5 10 5 20',
                    width: 120
                }
            ]
        },
        {
            region: 'west',
            title: 'Меню',
            xtype: 'menuView',
            margin: '5 0 0 0',
            width: 220,
            minWidth: 200,
            maxWidth: 450
        },
        {
            region: 'center',
            title: 'Стандартные личные данные',
            xtype: 'studentView',
            collapsible: false,
            margin: '5 0 0 0'
        }
    ]

});