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
        var view = this.getView();

        this.dialog = view.add({
            xtype: 'LessonForm',
            /*
             viewModel: {
             data: {
             title: 'Добавить предмет'
             }*/
            // If we are passed a record, a copy of it will be created in the newly spawned session.
            // Otherwise, create a new phantom customer in the child.
            /*
             links: {
             lessons: {
             type: 'ListStudents.model.Lesson',
             create: true
             }
             }*/
            //},
            viewModel: {
                type: 'StudentModel'
            },
            reference: 'listLessons',
            model: 'Lesson'
            //bind: '{rec.listLessons}',
            //store: 'Lessons'

            // Creates a child session that will spawn from the current session
            // of this view.
            //session: true
        });

        this.dialog.show();
    },

    onDeleteLessonClick: function () {
        var studentView = Ext.ComponentQuery.query('lessonView')[0];
        var selection = studentView.getSelectionModel().getSelection()[0];
        selection.drop();
    },

    onSaveClick: function () {
        // Save the changes pending in the dialog's child session back to the
        // parent session.
        var dialog = this.dialog;
        var form = this.lookupReference('form');
        var id;

        if (form.isValid()) {

            // Since we're not editing, we have a newly inserted record. Grab the id of
            // that record that exists in the child session
            console.log(dialog.getViewModel());
            console.log(dialog.getViewModel().type);
            console.log(dialog.getViewModel().getId());
            console.log(dialog.getViewModel().get('StudentModel'));
            //id = dialog.getViewModel().get('StudentModel').id;
            id = dialog.getViewModel().type.id;
            console.log(id);

            //dialog.getSession().save();

            // Use the id of that child record to find the phantom in the parent session,
            // we can then use it to insert the record into our store
            //this.getStore('Students').add(this.getSession().getRecord('StudentModel', id));
            this.getStore('Students').add(getRecord('StudentModel', id));

            this.onCancelClick();
        }
    },

    onCancelClick: function () {
        this.dialog = Ext.destroy(this.dialog);
    }

});