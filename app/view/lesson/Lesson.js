Ext.define('ListStudents.view.Lesson', {
    extend: 'Ext.grid.Panel',
    xtype: 'lessonView',

    viewModel: 'LessonModel',

    title: 'Списочек посещаемых предметов',
    bind: '{rec.listLessons}',

    columns: [
        {text: 'Предмет', dataIndex: 'name', width: '39%'},
        {text: 'Всего часов', dataIndex: 'totalHours', width: '15%'},
        {text: 'Пропущено', dataIndex: 'skipped', width: '15%'},
        {text: 'По уважительной причине', dataIndex: 'goodCause', width: '30%'}
    ]

});