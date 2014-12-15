Ext.define('ListStudents.view.MenuController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.MenuController',

    init: function () {
        this.control({
            'menuView': {
                select: this.onGridSelect
            }
        });
    },

    onGridSelect: function (grid, record, index, eOpts) {
        var studentView = Ext.ComponentQuery.query('studentView')[0];
        var Viewport = Ext.ComponentQuery.query('Viewport')[0];

        var radioMale = Ext.getCmp('radioMale');
        var radioFemale = Ext.getCmp('radioFemale');
        if (record.data.gender == 'male') {
            radioMale.setValue(true);
            radioFemale.setValue(false);
        } else {
            radioMale.setValue(false);
            radioFemale.setValue(true);
        }

        //set the form's ViewModel binding
        studentView.getViewModel().setData({ rec: record });
        Viewport.getViewModel().setData({ title: record});
    },

    onAddStudentClick: function () {
        var menuView = Ext.ComponentQuery.query('menuView')[0];
        var totalCount = menuView.getStore().data.items.length;

        var newStudent = new ListStudents.model.Student({
            "id": totalCount,
            "name": "Имя",
            "family": "Фамилия",
            "patronymic": "Отчество",
            gender: 'female',// феминистки в восторге =)
            dateBirth: Ext.Date.clearTime(new Date()),
            dateReceipt: Ext.Date.clearTime(new Date())
        });

        menuView.getStore().insert(0, newStudent);
    }

});