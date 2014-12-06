Ext.define('ListStudents.view.LessonModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.LessonModel',

    data: {
        title: 'ФИО',
        group: 'Мdfg'
    },

    store: 'Lessons',

    formulas: {
        fio: {
            get: function (get) {
                return get('title') + get('group');
            }
        }
    }

});
