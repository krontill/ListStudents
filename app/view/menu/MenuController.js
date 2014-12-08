Ext.define('ListStudents.view.MenuController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.MenuController',

    init: function () {
        this.control({
            'menuView': {
                select: this.onGridSelect
            }
        });
    },

    onGridSelect: function (grid, record, index, eOpts) {
        // grab a reference to the Detail view...
        // we could have used a controller "ref", but those can also be problematic
        var studentView = Ext.ComponentQuery.query('studentView')[0];
        var Viewport = Ext.ComponentQuery.query('Viewport')[0];

        var radioMale = Ext.getCmp('radioMale');
        var radioFemale = Ext.getCmp('radioFemale');
        if (record.data.gender == 'male') {
            radioMale.setValue(true);
            radioFemale.setValue(false);
        } else {
            radioMale.setValue(false);
            radioFemale.setValue(true);
        }

        //set the form's ViewModel binding
        studentView.getViewModel().setData({ rec: record });
        // Сделал ассоциации, терь в record.data нет полей уроков а есть тут:
        //console.log(record._listLessons.config.data[0].data.name);
        //console.log(record._listLessons.data.items[0].data.name);

        Viewport.getViewModel().setData({ title: record.data.fio });

    }

/*
    loadOrders: function(){
        var rec = this.active,
            name = rec.get('name'),
            owner = this.ownerCt,
            orders;


        orders = rec.orders();
        if (orders.isLoading()) {
            Logger.log('Begin loading orders: ' + rec.getId(), true);
        }
        orders.on('load', function(){
            Logger.log('Order store loaded - ' + rec.getId(), false);
        });
        owner.add({
            title: 'Orders - ' + rec.getId(),
            customer: rec,
            xtype: 'ordergrid',
            store: orders
        });
        owner.getLayout().next();
    }*/

});