Ext.define('ListStudents.view.LessonController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.LessonController',

    init: function () {
        this.getView().getPlugins().push(Ext.create({
            xclass: 'Ext.grid.plugin.RowEditing',
            clicksToMoveEditor: 1,
            autoCancel: true
        }));
    },

    onAddLessonClick: function () {

        var rec = new ListStudents.model.Lesson({
            name: 'Предмет',
            totalHours: 0,
            skipped: 0,
            goodCause: 0
        });

        this.getView('lessonView').getStore().insert(0, rec);

    },

    onDeleteLessonClick: function () {
        var selection = this.getView('lessonView').getSelectionModel().getSelection()[0];
        selection.drop();
    }

});