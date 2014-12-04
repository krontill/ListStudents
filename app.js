Ext.application({
    name: 'ListStudents',

    models: ['Student', 'Lesson'],
    stores: ['Students', 'Lessons'],
    view: ['Student', 'Lesson'],

    autoCreateViewport: true
});