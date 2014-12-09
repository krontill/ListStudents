Ext.define('ListStudents.model.Lesson', {
    extend: 'Ext.data.Model',

    fields: [
        'name',
        {name: "totalHours", type: 'int'},
        {name: "skipped", type: 'int'},
        {name: "goodCause", type: 'int'}/*,
        {
            name: 'totalHoursPercent',
            convert: function (value, record) {
                var total = 0;
                Ext.Object.each(record.data, function (key, value) {
                    total += Ext.isNumber(value) ? value : 0;
                });
                //console.log(record.data);
                //return total;
                //return Math.max(0, 100 - total);
            }
        }*/
    ],

    reference: 'listLessons'

});