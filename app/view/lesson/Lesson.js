Ext.define('ListStudents.view.Lesson', {
    extend: 'Ext.grid.Panel',
    xtype: 'lessonView',

    viewModel: 'LessonModel',
    store: 'Lessons',

    bind: '{lesson.name}',

    columns: [
        /*
        {
            text: 'listLessons',
            dataIndex: 'listLessons'
        },*/
        {text: 'Предмет', dataIndex: 'lesson.name'},
        {text: 'Всего часов', dataIndex: '{lesson.totalHours}'},
        {text: 'Пропущено', dataIndex: 'skipped'},
        {text: 'По уважительной причине', dataIndex: 'goodCause'}
    ]

});