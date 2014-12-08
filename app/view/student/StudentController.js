Ext.define('ListStudents.view.StudentController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.StudentController',

    onSaveChangeStudentClick: function () {
        var studentView = Ext.ComponentQuery.query('studentView')[0];
        var studentFio = studentView.getViewModel().getData();

        if (studentFio.rec === null) {
            Ext.Msg.alert('Студент не выбран', 'Ничего не изменилось!');
        } else if (studentFio.rec.data === undefined) {
            studentFio = studentFio.rec.name + ' ' + studentFio.rec.family + ' ' + studentFio.rec.patronymic;
            Ext.Msg.alert('Новый студент ' + studentFio + ' сохранен', 'Сохранили изменения!');
        } else {
            studentFio = studentFio.rec.data.name + ' ' + studentFio.rec.data.family + ' ' + studentFio.rec.data.patronymic;
            Ext.Msg.alert('Студент ' + studentFio + ' изменен', 'Сохранили изменения!');
        }


    },

    onDeleteStudentClick: function () {
        Ext.Msg.alert('Студент ххх изменен', 'Delete!');
    }

});