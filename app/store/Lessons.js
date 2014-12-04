Ext.define('ListStudents.store.Lessons', {
    extend: 'Ext.data.Store',
    model: 'ListStudents.model.Lesson',

    data: [
        {
            "name": "Булева алгебра",
            "totalHours": 90,
            "skipped": 41,
            "goodCause": 15
        },
        {
            "name": "Математика",
            "totalHours": 98,
            "skipped": 81,
            "goodCause": 6
        },
        {
            "name": "Астрономия",
            "totalHours": 28,
            "skipped": 20,
            "goodCause": 19
        }
    ]

});