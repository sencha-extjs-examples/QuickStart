Ext.define('QuickStart.view.main.ListViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.listview',

    onPopupForm: function (view, index, item, record) {
        var popupWindow = new QuickStart.view.main.PopupForm({
            id: 'rec_update',
            width:  400,
            height: 400,
            centered: true,
            modal: true,
            record: record,
            viewModel : {
                data: {
                    employee: record
                }
            }
        });
        Ext.Viewport.add(popupWindow);
        popupWindow.show();
    }
});
