Ext.define('ListStudents.view.Student', {
    extend: 'Ext.grid.Panel',
    xtype: 'studentView',

    store: 'Students',

    columns: [
        {text: 'Id', dataIndex: 'id'},
        {text: 'guid', dataIndex: 'guid'},
        {text: 'Имя', dataIndex: 'name'},
        {text: 'Фамилия', dataIndex: 'family'},
        {text: 'Отчество', dataIndex: 'patronymic'},
        {text: 'gender', dataIndex: 'gender'},
        {
            text: 'dateBirth',
            dataIndex: 'dateBirth',
            xtype: 'datecolumn',
            format: 'Y-m-d'
        },
        {text: 'dateReceipt', dataIndex: 'dateReceipt'}
    ]

});