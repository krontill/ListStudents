Ext.define('ListStudents.view.LessonForm', {
    extend: 'Ext.window.Window',
    xtype: 'LessonForm',

    bind: {
        title: '{title}'
    },

    layout: 'fit',
    modal: true,
    width: 500,
    height: 300,
    closable: true,

    items: {
        xtype: 'form',
        reference: 'form',
        bodyPadding: 10,
        border: false,
        modelValidation: true,
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        defaults: {
            bodyPadding: 10,
            labelWidth: 150
        },
        items: [
            {
                xtype: 'textfield',
                fieldLabel: 'Предмет',
                allowBlank: false,
                msgTarget: 'side', //Где будет находится ошибка валидации
                bind: '{rec.listLessons.name}'
            },
            {
                xtype: 'textfield',
                fieldLabel: 'Всего часов',
                allowBlank: false,
                msgTarget: 'side',
                bind: '{rec.listLessons.totalHours}'
            },
            {
                xtype: 'textfield',
                fieldLabel: 'Пропущено',
                allowBlank: false,
                msgTarget: 'side',
                bind: '{rec.listLessons.skipped}'
            },
            {
                xtype: 'textfield',
                fieldLabel: 'По уважительной причине',
                allowBlank: false,
                msgTarget: 'side',
                bind: '{rec.listLessons.goodCause}'
            }
        ]
    },

    buttons: [
        {
            text: 'Сохранить',
            handler: 'onSaveClick'
        },
        {
            text: 'Отмена',
            handler: 'onCancelClick'
        }
    ]
});