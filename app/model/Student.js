Ext.define('ListStudents.model.Student', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: "fio",
            convert: function (v, record) {
                return record.data.name + ' ' + record.data.family + ' ' + record.data.patronymic;
            }
        },
        {name: "id", type: 'int'},
        "guid",
        "name",
        "family",
        "patronymic",
        "gender",
        {name: "dateBirth", type: 'date'},
        {name: "dateReceipt", type: 'date'},
        {name: "totalHours", type: 'int'}/*,
         {
         name: 'listLessons',
         reference: 'ListStudents.model.Lesson'
         }*/
    ],

    associations: [
        {
            model: 'ListStudents.model.Lesson',
            name: 'listLessons',
            type: 'hasMany',
            autoLoad: true
        }
    ]

    /*
     validators: {
     name: { type: 'length', min: 2, message: 'В поле имени должно быть болье 2 символов!' },
     family: { type: 'length', min: 2, message: 'В поле фамилии должно быть болье 2 символов!' },
     patronymic: { type: 'length', min: 2, message: 'В поле отчества должно быть болье 2 символов!' },
     gender: { type: 'inclusion', list: ['Male', 'Female'] }

     },

     hasMany: {
     model: 'ListStudents.model.Lesson',
     name: 'listLessons',
     //foreignKey: 'guid'
     autoLoad: true
     }
     */
    /*
     ,


     */
});