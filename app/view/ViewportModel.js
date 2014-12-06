Ext.define('ListStudents.view.ViewportModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.viewportModel',

    data: {
        title: 'ФИО первого студента в списке или мб null если не выбран?',
        group: 'МТ-202'
    },

    formulas: {
        fio: {
            get: function (get) {
                return get('title') + get('group');
            }
        }
    }

});
