Ext.define('ListStudents.view.MenuController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.MenuController',
/*
    init: function () {
        console.log('MenuController');
    }
*/
    init: function() {
        this.control({
            'menuView': {
                select : this.onGridSelect
            }
        });
    },

    onGridSelect : function(grid, record, index, eOpts) {
        // grab a reference to the Detail view...
        // we could have used a controller "ref", but those can also be problematic
        var detailView = Ext.ComponentQuery.query('studentView')[0];

        //set the form's ViewModel binding
        detailView.getViewModel().setData({ rec: record });
    }

});