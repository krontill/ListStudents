Ext.define('ListStudents.model.Lesson', {
    extend: 'Ext.data.Model',

    fields: [
        'name',
        {name: "totalHours", type: 'int'},
        {name: "skipped", type: 'int'},
        {name: "goodCause", type: 'int'}
    ],

    reference: 'listLessons'

});