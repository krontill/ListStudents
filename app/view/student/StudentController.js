Ext.define('ListStudents.view.StudentController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.StudentController',

    onDeleteStudentClick: function () {
        var menuView = Ext.ComponentQuery.query('menuView')[0];
        var selection = menuView.getSelectionModel().getSelection()[0];
        selection.drop();

        var studentView = Ext.ComponentQuery.query('studentView')[0];
        studentView.getViewModel().setData({ rec: null });

        var Viewport = Ext.ComponentQuery.query('Viewport')[0];
        Viewport.getViewModel().setData({ title: { fio: 'Студент удален. Выберите нового.'} });
    }

});