Ext.define('ListStudents.store.Students', {
    extend: 'Ext.data.Store',
    model: 'ListStudents.model.Student',

    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'data/info.json'
    }// Лучше во viewmodel прописывать, а не отдельно store создавать.

});