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

    createDialog: function (record) {
        var view = this.getView();

        this.isEdit = !!record;
        this.dialog = view.add({
            xtype: 'LessonForm',
            viewModel: {
                data: {
                    title: record ? 'Изменить: ' + record.get('name') : 'Добавить предмет'
                }
                // If we are passed a record, a copy of it will be created in the newly spawned session.
                // Otherwise, create a new phantom customer in the child.
                /*links: {
                 theCustomer: record || {
                 type: 'Customer',
                 create: true
                 }
                 }*/
            },

            // Creates a child session that will spawn from the current session
            // of this view.
            session: true
        });

        this.dialog.show();
    },

    onAddLessonClick: function () {
        this.createDialog(null);
    },

    onDeleteLessonClick: function () {
        var studentView = Ext.ComponentQuery.query('lessonView')[0];
        var selection = studentView.getSelectionModel().getSelection()[0];
        selection.drop();
    }

});