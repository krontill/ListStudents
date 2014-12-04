Ext.define('ListStudents.view.Viewport', {
    extend: 'Ext.Viewport',

    requires: ['ListStudents.view.Student', 'ListStudents.view.Lesson'],

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    items: [
        {
            xtype: 'studentView'

        },{
            xtype: 'lessonView'
        }
    ]
});