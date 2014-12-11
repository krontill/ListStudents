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
    },

    onSaveClick: function () {
        // Save the changes pending in the dialog's child session back to the
        // parent session.
        var dialog = this.dialog,
            form = this.lookupReference('form'),
            isEdit = this.isEdit,
            id;

        if (form.isValid()) {
            if (!isEdit) {
                // Since we're not editing, we have a newly inserted record. Grab the id of
                // that record that exists in the child session
                id = dialog.getViewModel().get('theCustomer').id;
            }
            dialog.getSession().save();
            if (!isEdit) {
                // Use the id of that child record to find the phantom in the parent session,
                // we can then use it to insert the record into our store
                this.getStore('customers').add(this.getSession().getRecord('Customer', id));
            }
            this.onCancelClick();
        }
    },

    onCancelClick: function () {
        this.dialog = Ext.destroy(this.dialog);
    }

});