Ext.define('ListStudents.view.StudentController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.StudentController',

    onSaveChangeStudentClick: function () {
        var studentView = Ext.ComponentQuery.query('studentView')[0];
        var studentFio = studentView.getViewModel().getData();

        var newStudentFio;
        if (studentFio.rec === null) {
            Ext.Msg.alert('Студент не выбран', 'Ничего не изменилось!');
        } else if (studentFio.rec.data === undefined) {
            newStudentFio = studentFio.rec.name + ' ' + studentFio.rec.family + ' ' + studentFio.rec.patronymic;
            changedData();
            Ext.Msg.alert('Новый студент ' + newStudentFio + ' сохранен', 'Сохранили изменения!');
        } else {
            newStudentFio = studentFio.rec.data.name + ' ' + studentFio.rec.data.family + ' ' + studentFio.rec.data.patronymic;
            changedData();
            Ext.Msg.alert('Студент ' + newStudentFio + ' изменен', 'Сохранили изменения!');
        }

        function changedData() {
            studentView.getViewModel().setData({ rec: studentFio.rec });

            var Viewport = Ext.ComponentQuery.query('Viewport')[0];
            Viewport.getViewModel().setData({ title: 'Студент: ' + newStudentFio }); //Изменяем фио в заголовке
            studentFio.rec.data.fio = newStudentFio; //Записываем изменение фио
        }

    },

    onDeleteStudentClick: function () {
        Ext.Msg.alert('Студент удален', 'Delete!');
    }

});