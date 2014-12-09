Ext.define('ListStudents.store.Lessons', {
    extend: 'Ext.data.Store',
    model: 'ListStudents.model.Lesson'
/*
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'data/info.json',
        reader: {
            type: 'json',
            rootProperty: 'listLessons'
        }
    }
*/
});