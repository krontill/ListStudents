Ext.application({
    name: 'ListStudents',

    models: ['Student', 'Lesson'],
    stores: ['Students'],
    view: ['Student', 'Lesson', 'Menu'],



    autoCreateViewport: true
});