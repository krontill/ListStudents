Ext.define('ListStudents.view.Viewport', {
    extend: 'Ext.Viewport',

    requires: ['ListStudents.view.Student', 'ListStudents.view.Lesson'],

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    viewModel: 'viewportModel',
    controller: 'ViewportController',

    items: [
        {
            xtype: 'container',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },

            items: [
                {
                    xtype: 'displayfield',
                    bind: '<h2>Список студентов {group}</h2>',
                    padding: '0 10 0 50',
                    flex: 1
                },
                {
                    xtype: 'button',
                    text: 'Распечатать',
                    href: 'javascript:window.print(); void 0;',
                    height: 31,
                    margin: '5 10 15 20',
                    width: 120
                }
            ]
        },
        {
            xtype: 'displayfield',
            bind: '<h2>{title}</h2>'
        },
        {
            layout: 'border',
            height: 400,

            defaults: {
                collapsible: true,
                split: true
            },

            items: [
                {
                    title: 'Меню',
                    region:'west',
                    margin: '5 0 0 0',
                    width: 125,
                    minWidth: 100,
                    maxWidth: 450
                },
                {
                    xtype: 'studentView',
                    title: 'Стандартные личные данные',
                    collapsible: false,
                    region: 'center',
                    margin: '5 0 0 0'
                }
            ]
        },
        {
            xtype: 'lessonView'
        }
    ]
});