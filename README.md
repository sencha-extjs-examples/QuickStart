# Taking QuickStart to Production

Let's walk through the steps of creating the app we've been working on above in
a real world environment.

## Download the Ext JS Framework

If you have not already done so, download and unpack the Ext JS framework from
either the Products section of the main Sencha website
([www.sencha.com](http://www.sencha.com)) or from the downloads section of the
Sencha Support portal.

## Download the Sample Application

You can download from Github by clicking the green "Clone or Download" button. Then
just click "Download Zip" and save the file to your machine.

Once downloaded, move the folder to wherever you'd like your application to live.

## Add Sencha Cmd to your App

Once you have your application where you want it, "cd" into its directory in your
Command Line Interface (CLI). Then, issue the following command:

    sencha app install --framework=/path/to/extjs/

This command will update your folder with Sencha Cmd's application scaffold that
allows your application to benefit from Sencha Cmd's many features.

**Note:** "/path/to/extjs/" should be replaced with the path to wherever you
unzipped the Ext JS framework on your machine.

## Build Your Application

Finally, run the following command to build the application:

    sencha app build

You can now visit your application at its local address on your web server.

Alternatively, you can run this command so that Sencha Cmd will provide a web
server for you:

    sencha app watch

You can now visit the resulting address displayed in your console.  It will
usually be found here:

    http://localhost:1841/
