Ext.define('ListStudents.model.Student', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: "fio",
            convert: function (v, record) {
                return record.data.name + ' ' + record.data.family + ' ' + record.data.patronymic;
            },
            depends: ['name', 'family', 'patronymic']
        },
        {name: "id", type: 'int'},
        "guid",
        "name",
        "family",
        "patronymic",
        "gender",
        {name: "dateBirth", type: 'date'},
        {name: "dateReceipt", type: 'date'}
    ],

    associations: [
        {
            model: 'ListStudents.model.Lesson',
            name: 'listLessons',
            type: 'hasMany',
            autoLoad: true
        }
    ],

    validators: {
        name: { type: 'presence', message: 'Это поле не должно быть пустым!' },
        family: { type: 'presence', message: 'Это поле не должно быть пустым!' },
        patronymic: { type: 'presence', message: 'Это поле не должно быть пустым!' }
    }

});