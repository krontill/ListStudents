Ext.define('ListStudents.view.ViewportModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.viewportModel', // connects to viewModel/type below

    data: {
        title: 'ФИО первого студента в списке или мб null если не выбран?',
        group: 'МТ-202'
    }

});
