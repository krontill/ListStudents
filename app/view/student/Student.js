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

    items: {
        xtype: 'container',

        layout: {
            type: 'hbox',
            align: 'stretch'
        },

        bodyPadding: 10,

        defaults: {
            bodyPadding: 10
        },

        items: [
            {
                flex: 1,
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },

                bodyPadding: 10,

                defaults: {
                    bodyPadding: 10
                },

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
                    }
                ]
            },
            {
                flex: 1,

                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },

                items: [/*
                    {
                        xtype: 'grid',
                        bind: '{rec.listLessons}',
                        title: 'Списочек посещаемых предметов',
                        margin: '0 0 20 0',
                        columns: [
                            {text: 'Предмет', dataIndex: 'name', width: '39%'},
                            {text: 'Всего часов', dataIndex: 'totalHours', width: '15%'},
                            {text: 'Пропущено', dataIndex: 'skipped', width: '15%'},
                            {text: 'По уважительной причине', dataIndex: 'goodCause', width: '30%'}
                        ]
                    },*/
                    {
                        xtype: 'lessonView'
                    }
                ]
            }

        ]
    },

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