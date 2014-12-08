Ext.define('ListStudents.view.Student', {
    extend: 'Ext.form.Panel',
    xtype: 'studentView',
    referenceHolder: true,

    store: 'Students',
    viewModel: {
        type: 'StudentModel'
    },
    controller: 'StudentController',
    reference: 'listLessons',

    items: [
        {
            xtype: 'textfield',
            name: 'family',
            fieldLabel: 'Фамилия',
            allowBlank: false,// Обязательное поле
            emptyText: 'Фамилия',
            bind: '{rec.family}'
        },
        {
            xtype: 'textfield',
            name: 'name',
            fieldLabel: 'Имя',
            allowBlank: false,
            emptyText: 'Имя',
            bind: '{rec.name}'
        },
        {
            xtype: 'textfield',
            name: 'patronymic',
            fieldLabel: 'Отчество',
            emptyText: 'Отчество',
            bind: '{rec.patronymic}'
        },
        {
            xtype: 'radiofield',
            name: 'gender',
            fieldLabel: 'Пол',
            boxLabel: 'Мужской',
            id: 'radioMale'
        },
        {
            xtype: 'radiofield',
            name: 'gender',
            fieldLabel: '',
            boxLabel: 'Женский',
            hideEmptyLabel: false,
            id: 'radioFemale'
        },
        {
            xtype: 'datefield',
            format: 'Y-m-d',
            name: 'dateBirth',
            fieldLabel: 'Дата рождения',
            maxValue: new Date(),
            bind: '{rec.dateBirth}'
        },
        {
            xtype: 'datefield',
            format: 'Y-m-d',
            name: 'dateReceipt',
            fieldLabel: 'Дата поступления',
            maxValue: new Date(),
            bind: '{rec.dateReceipt}'
        },
        {
            xtype: 'hiddenfield',
            bind: '{rec.id}'
        },
        {
            xtype: 'displayfield',
            bind: '{rec.listLessons}'
        },
        {
            xtype: 'displayfield',
            bind: '{lesson.listLessons}'
        },
        {
            xtype: 'displayfield',
            bind: '{rec.totalHours}'
        },
        {
            xtype: 'displayfield',
            bind: '{lesson.totalHours}'
        }
        ,
        {
            xtype: 'grid',

            columns: [
                {
                    text: 'listLessons',
                    dataIndex: '{lesson.listLessons}'
                },
                {text: 'Предмет', dataIndex: '{lesson.name}'},
                {text: 'Всего часов', dataIndex: '{lesson.totalHours}'},
                {text: 'Пропущено', dataIndex: 'skipped'},
                {text: 'По уважительной причине', dataIndex: 'rec.goodCause'}
            ]
        },
        {
            title: 'Списочек посещаемых предметов',
            xtype: 'lessonView',
            margin: '20 0 0 0'
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