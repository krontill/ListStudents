Ext.define('ListStudents.view.Lesson', {
    extend: 'Ext.grid.Panel',
    xtype: 'lessonView',

    viewModel: 'LessonModel',
    controller: 'LessonController',

    title: 'Списочек посещаемых предметов',
    bind: '{rec.listLessons}',

    columns: [
        {
            text: 'Предмет',
            dataIndex: 'name',
            width: '39%',
            editor: {
                xtype: 'textfield'
            }
        },
        {
            text: 'Всего часов',
            dataIndex: 'totalHours',
            width: '15%',
            editor: {
                xtype: 'numberfield'
            }
        },
        {
            text: 'Пропущено',
            dataIndex: 'skipped',
            width: '15%',
            editor: {
                xtype: 'numberfield'
            }
        },
        {
            text: 'По уважительной причине',
            dataIndex: 'goodCause',
            width: '30%',
            editor: {
                xtype: 'numberfield'
            }
        }
    ],

    plugins: [
        {
            ptype: 'rowediting',
            clicksToEdit: 1
        }
    ],

    tbar: [
        {
            text: 'Добавить предмет',
            handler: 'onAddLessonClick'
        },
        {
            text: 'Удалить предмет',
            handler: 'onDeleteLessonClick',
            bind: {
                disabled: '{!lessonGrid.selection}'
            }
        }
    ]

});