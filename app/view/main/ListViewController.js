Ext.define('QuickStart.view.main.ListViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.listview',

    onPopupForm: function (view, index, item, record) {
        Ext.Viewport.add({
            xtype: 'popupform',
            width: 400,
            record: record,
            viewModel : {
                data: {
                    employee: record
                }
            }
        });
    }
});
