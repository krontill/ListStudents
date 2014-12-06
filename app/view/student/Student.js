Ext.define('ListStudents.view.Student', {
    extend: 'Ext.form.Panel',
    xtype: 'studentView',

    store: 'Students',
    //viewModel: 'viewportModel',
    controller: 'StudentController',

    // Научиться выводить отдельную запись например фамилию первого чувака.
    items: [
        {
            xtype: 'textfield',
            name: 'family',
            fieldLabel: 'Фамилия',
            allowBlank: false,// Обязательное поле
            /*
             bind: {
             value: '{family}'
             },
             */
            emptyText: 'Фамилия'
        },
        {
            xtype: 'textfield',
            name: 'name',
            fieldLabel: 'Имя',
            allowBlank: false,
            emptyText: 'Имя'
        },
        {
            xtype: 'textfield',
            name: 'patronymic',
            fieldLabel: 'Отчество',
            emptyText: 'Отчество'
        },
        {
            checked: true,
            xtype: 'radiofield',
            name: 'gender',
            fieldLabel: 'Пол',
            boxLabel: 'Мужской'
        },
        {
            xtype: 'radiofield',
            name: 'gender',
            fieldLabel: '',
            boxLabel: 'Женский',
            hideEmptyLabel: false
        },
        {
            xtype: 'datefield',
            format: 'Y-m-d',
            name: 'dateBirth',
            fieldLabel: 'Дата рождения',
            bind: '{birthDate}',
            maxValue: new Date()
        },
        {
            xtype: 'datefield',
            format: 'Y-m-d',
            name: 'dateReceipt',
            fieldLabel: 'Дата поступления',
            maxValue: new Date()
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