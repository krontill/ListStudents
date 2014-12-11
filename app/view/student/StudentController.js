Ext.define('ListStudents.view.StudentController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.StudentController',

    onSaveChangeStudentClick: function () {
        var studentView = Ext.ComponentQuery.query('studentView')[0];
        var studentData = studentView.getViewModel().getData();

        var newStudentFio;
        if (studentData.rec === null) {
            Ext.Msg.alert('Студент не выбран', 'Ничего не изменилось!');
        } else if (studentData.rec.data === undefined) {
            newStudentFio = studentData.rec.name + ' ' + studentData.rec.family + ' ' + studentData.rec.patronymic;
            changedData();
            Ext.Msg.alert('Новый студент ' + newStudentFio + ' сохранен', 'Сохранили изменения!');
            //Надо запилить его в меню
        } else {
            newStudentFio = studentData.rec.data.name + ' ' + studentData.rec.data.family + ' ' + studentData.rec.data.patronymic;
            changedData();
            Ext.Msg.alert('Студент ' + newStudentFio + ' изменен', 'Сохранили изменения!');
        }

        function changedData() {
            studentView.getViewModel().setData({ rec: studentData.rec });

            var Viewport = Ext.ComponentQuery.query('Viewport')[0];
            Viewport.getViewModel().setData({ title: 'Студент: ' + newStudentFio }); //Изменяем фио в заголовке
            studentData.rec.data.fio = newStudentFio; //Записываем изменение фио
        }

    },

    onDeleteStudentClick: function () {
        var menuView = Ext.ComponentQuery.query('menuView')[0];
        var selection = menuView.getSelectionModel().getSelection()[0];
        selection.drop();

        var studentView = Ext.ComponentQuery.query('studentView')[0];
        studentView.getViewModel().setData({ rec: null });

        var Viewport = Ext.ComponentQuery.query('Viewport')[0];
        Viewport.getViewModel().setData({ title: 'Студент удален. Выберите нового.'});
    }

});