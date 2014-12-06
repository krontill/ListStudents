Ext.define('ListStudents.view.StudentController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.StudentController',

    titleCount: 0,

    onSaveChangeStudentClick: function () {
        console.log(this.getViewModel().get('title'));
        var newtitle = this.getViewModel().getData();

        console.log(newtitle['title']);
        console.log(newtitle.title);
        this.getViewModel().set('title', 'New Title ' + ++this.titleCount);
        Ext.Msg.alert('Студент ххх изменен', 'Сохранили изменения!');
    },

    onDeleteStudentClick: function () {
        Ext.Msg.alert('Студент ххх изменен', 'Delete!');
    }

});