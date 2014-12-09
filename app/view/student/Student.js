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
                        }/*,
                         {
                         xtype: 'hiddenfield',
                         bind: '{rec.id}'
                         }*/
                    ]
                },
                {
                    flex: 1,

                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },

                    items: [
                        /*
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
        {
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
                    xtype: 'cartesian',
                    width: '50%',
                    height: 300,
                    legend: {
                        docked: 'right'
                    },
                    bind: {
                        store: '{rec.listLessons}'
                    },
                    insetPadding: 30,
                    flipXY: true,//поворот оси
                    sprites: {
                        type: 'text',
                        text: 'Статистика по учебным предметам',
                        fontSize: 22,
                        width: 100,
                        height: 30,
                        x: 40, // the sprite x position
                        y: 20  // the sprite y position
                    },
                    axes: [
                        {// ось по горизонтали
                            type: 'numeric',
                            //fields: 'name',
                            position: 'bottom',
                            grid: true,
                            minimum: 0,
                            //maximum: 100,
                            majorTickSteps: 20 // на сколько отрезков делим график по горизонтали
                            /* По идее в часах лучше чем в процентах
                             renderer: function (v) {
                             return v + '%';
                             }*/
                        },
                        {// ось по вертикали
                            type: 'category',
                            fields: 'name',
                            position: 'left',
                            grid: true
                        }
                    ],
                    series: [
                        {
                            type: 'bar',
                            title: [ 'Всего часов', 'Пропущено', 'По уважительной причине'],
                            xField: 'name',
                            yField: [ 'totalHours', 'skipped', 'goodCause' ],
                            axis: 'bottom',
                            stacked: true,
                            style: {
                                opacity: 0.80
                            },
                            highlight: {
                                fillStyle: 'yellow'
                            },
                            tooltip: {
                                trackMouse: true,
                                style: 'background: #fff',
                                renderer: function (storeItem, item) {
                                    var hoursItem = item.series.getTitle()[Ext.Array.indexOf(item.series.getYField(), item.field)];
                                    //console.log(storeItem);
                                    //console.log(item);
                                    //var sotka = storeItem.get('totalHours') + storeItem.get('skipped') + storeItem.get('goodCause');
                                    this.setHtml(hoursItem + ' по предмету ' + storeItem.get('name') + ': ' + storeItem.get(item.field) + ' часов');
                                }
                            }
                        }
                    ]
                },
                {
                    xtype: 'polar',
                    width: '50%',
                    height: 400,
                    bind: {
                        store: '{rec.listLessons}'
                    },
                    insetPadding: 40,
                    innerPadding: 20,
                    legend: {
                        docked: 'right'
                    },
                    interactions: ['rotate', 'itemhighlight'],
                    sprites: {
                        type: 'text',
                        text: 'Соотношение объема учебных программ',
                        fontSize: 22,
                        width: 100,
                        height: 30,
                        x: 40, // the sprite x position
                        y: 20  // the sprite y position
                    },
                    series: [
                        {
                            type: 'pie',
                            angleField: 'totalHours',
                            donut: 50,
                            label: {
                                field: 'name',
                                display: 'outside'
                            },
                            highlight: {
                                fillStyle: 'yellow'
                            },
                            tooltip: {
                                trackMouse: true,
                                style: 'background: #fff',
                                renderer: function (storeItem, item) {
                                    this.setHtml(storeItem.get('name') + ': ' + storeItem.get('totalHours') + ' часов');
                                }
                            }
                        }
                    ]
                }
            ]
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

});