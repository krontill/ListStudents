Ext.define('ListStudents.view.Lesson', {
    extend: 'Ext.grid.Panel',
    xtype: 'lessonView',

    store: 'Lessons',

    columns: [
        {text: 'Предмет', dataIndex: 'name'},
        {text: 'Всего часов', dataIndex: 'totalHours'},
        {text: 'Пропущено', dataIndex: 'skipped'},
        {text: 'По уважительной причине', dataIndex: 'goodCause'}
    ]

});