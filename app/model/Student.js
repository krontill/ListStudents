Ext.define('ListStudents.model.Student', {
    extend: 'Ext.data.Model',

    fields: [
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