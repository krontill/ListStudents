Ext.define('ListStudents.view.Student', {
    extend: 'Ext.form.Panel',
    xtype: 'studentView',

    store: 'Students',
    viewModel: 'viewportModel',
    controller: 'StudentController',

    // Научиться выводить отдельную запись например фамилию первого чувака.
    items: [
        {
            xtype: 'textfield',
            name: 'name',
            fieldLabel: 'Имя {name} {group}',
            bind: {
                value: 'name: {title}, group1: {group}'
            },
            dataIndex: 'name',
            width: 700
        },
        {
            xtype: 'textfield',
            allowBlank: false,
            fieldLabel: 'Имя',
            name: 'name',
            emptyText: 'user id',
            dataIndex: 'name'
        },
        {
            xtype: 'textfield',
            allowBlank: false,
            fieldLabel: 'Password',
            name: 'pass',
            emptyText: 'password',
            inputType: 'password'
        }
    ],

    buttons: [
        {
            text: 'Сохранить изменения',
            listeners: {
                click: 'onSaveChangeStudentClick'
            }
        },
        {
            text: 'Удалить',
            listeners: {
                click: 'onDeleteStudentClick'
            }
        }
    ]

    /*
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
     ]*/

});