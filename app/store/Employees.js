Ext.define('QuickStart.store.Employees', {
    extend: 'Ext.data.Store',
    alias: 'store.employees',

    proxy: {
        type: 'ajax',
        url: 'data/data.json'
    }
});
