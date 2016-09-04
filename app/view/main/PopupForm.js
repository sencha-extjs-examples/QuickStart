Ext.define('QuickStart.view.main.PopupForm', {
    extend: 'Ext.form.Panel',
    xtype: 'popupform',
    controller: 'popupform',

    title: 'Update Record',

    floating: true,
    centered: true,
    modal: true,

    items: [{
        xtype: 'textfield',
        name: 'firstname',
        label: 'First Name',
        bind: '{employee.firstName}'
    }, {
        xtype: 'textfield',
        name: 'lastname',
        label: 'Last Name',
        bind: '{employee.lastName}'

    }, {
        xtype: 'textfield',
        name: 'phonenumber',
        label: 'Phone Number',
        bind: '{employee.phoneNumber}'

    }, {
        xtype: 'selectfield',
        name: 'office',
        label: 'Office Location',
        bind: '{employee.officeLocation}',
        options: [{
            text: "Redwood City, CA",
            value: 'rwcca'
        }, {
            text: "Lawrence, KS",
            value: 'lk'
        }, {
            text: "Frederick, MD",
            value: 'fmd'
        }],
        defaultTabletPickerConfig: {
            height: 200
        }
    }, {
        xtype: 'toolbar',
        docked: 'bottom',
        items: ['->', {
            xtype: 'button',
            text: 'Submit',
            iconCls: 'x-fa fa-check',
            handler: 'submitUpdate'
        }, {
            xtype: 'button',
            text: 'Cancel',
            iconCls: 'x-fa fa-close',
            handler: 'cancelUpdate'
        }]
    }]
});
