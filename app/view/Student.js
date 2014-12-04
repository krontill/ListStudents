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
        {text: 'Пол', dataIndex: 'gender'},
        {
            text: 'Дата рождения',
            dataIndex: 'dateBirth',
            width: 130,
            xtype: 'widgetcolumn',
            widget: {
                xtype: 'datefield',
                format: 'Y-m-d'
            }
        },
        {
            text: 'Дата поступления',
            dataIndex: 'dateReceipt',
            width: 130,
            xtype: 'widgetcolumn',
            widget: {
                xtype: 'datefield',
                format: 'Y-m-d'
            }
        }
    ]

});