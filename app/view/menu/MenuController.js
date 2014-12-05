Ext.define('ListStudents.view.MenuController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.MenuController',

    init: function () {
        console.log('MenuController');
    },

    onMenuClick: function () {
        //Ext.Msg.alert('', '');
        //Ext.msg.alert('Menu click!');
        console.log('Menu click');
    }

});