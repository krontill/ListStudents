Ext.define('ListStudents.view.Viewport', {
    extend: 'Ext.Viewport',

    requires: ['ListStudents.view.Student', 'ListStudents.view.Lesson'],

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    viewModel: 'viewportModel',

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
            xtype: 'studentView'

        },
        {
            xtype: 'lessonView'
        }
    ]
});