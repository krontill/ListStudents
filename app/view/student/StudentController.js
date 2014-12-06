Ext.define('ListStudents.view.StudentController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.StudentController',

    onSaveChangeStudentClick: function () {
        Ext.Msg.alert('Студент ххх изменен', 'Сохранили изменения!');
    },

    onDeleteStudentClick: function () {
        Ext.Msg.alert('Студент ххх изменен', 'Delete!');
    }

});