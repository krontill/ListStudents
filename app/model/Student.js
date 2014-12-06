Ext.define('ListStudents.model.Student', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: "fio",
            convert: function (v, record) {
                return record.data.name + ' ' + record.data.family + ' ' + record.data.patronymic;
            }},
        {name: "id", type: 'int'},
        "guid",
        "name",
        "family",
        "patronymic",
        "gender",
        {name: "dateBirth", type: 'date'},
        {name: "dateReceipt", type: 'date'}
    ]

});