/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('QuickStart.Application', {
    extend: 'Ext.app.Application',

    name: 'QuickStart',

    // The application is launched using the mainView config in app.js
    //
    // launch: function () {
    //     Implement this method to do a custom launch.
    // },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
