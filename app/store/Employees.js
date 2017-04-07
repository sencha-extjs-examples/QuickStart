Ext.define('QuickStart.store.Employees', {
    extend: 'Ext.data.Store',
    alias: 'store.employees',

    fields: [
        'firstName',
        'lastName',
        {
            name: 'officeLocation',
            convert: function(value) {
                if (value && value.isModel) {
                    return value.get('text');
                }
                return value;
            }
        },
        'phoneNumber'
    ],

    proxy: {
        type: 'ajax',
        url: 'data/data.json'
    }
});
