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

    modelValidation: true,

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
                        bodyPadding: 10,
                        labelWidth: 150
                    },

                    items: [
                        {
                            xtype: 'textfield',
                            name: 'family',
                            fieldLabel: 'Фамилия',
                            allowBlank: false,// Обязательное поле
                            emptyText: 'Фамилия',
                            msgTarget: 'side',
                            bind: '{rec.family}'
                        },
                        {
                            xtype: 'textfield',
                            name: 'name',
                            fieldLabel: 'Имя',
                            allowBlank: false,
                            emptyText: 'Имя',
                            msgTarget: 'side',
                            bind: '{rec.name}'
                        },
                        {
                            xtype: 'textfield',
                            name: 'patronymic',
                            fieldLabel: 'Отчество',
                            allowBlank: false,
                            emptyText: 'Отчество',
                            msgTarget: 'side',
                            bind: '{rec.patronymic}'
                        },
                        {
                            xtype: 'radiofield',
                            name: 'gender',
                            fieldLabel: 'Пол',
                            boxLabel: 'Мужской',
                            id: 'radioMale',
                            listeners: {
                                click: {
                                    element: 'el',
                                    fn: 'clickMale'
                                }
                            }
                        },
                        {
                            xtype: 'radiofield',
                            name: 'gender',
                            fieldLabel: '',
                            boxLabel: 'Женский',
                            hideEmptyLabel: false,
                            id: 'radioFemale',
                            listeners: {
                                click: {
                                    element: 'el',
                                    fn: 'clickFemale'
                                }
                            }
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
                        }
                    ]
                },
                {
                    flex: 1,

                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },

                    items: [
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

            /*
            bind: {
                hidden: '{!rec}'
            }, // из-за этого частенько глючило отображение - не подгружались графики пока размер экрана не изменишь.
            */

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
                        fontSize: 18,
                        width: 100,
                        height: 30,
                        x: 40, // the sprite x position
                        y: 20  // the sprite y position
                    },
                    axes: [
                        {// ось по горизонтали
                            type: 'numeric',
                            position: 'bottom',
                            grid: true,
                            minimum: 0,
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
                        fontSize: 18,
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
            text: 'Удалить',
            bind: {
                disabled: '{!rec}'
            },
            listeners: {
                click: 'onDeleteStudentClick'
            }
        }
    ]

});