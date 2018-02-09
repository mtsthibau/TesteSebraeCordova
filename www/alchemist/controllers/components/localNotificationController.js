var localNotificationCtrl = {

    simpleNotify: function (notificationObj) {

        for (var i = 0; i < length; i++) {
            cordova.plugins.notification.local.schedule(notificationObj);
        }

       //{
       //         title: 'My first notification',
       //         text: 'Thats pretty easy...',
       //         foreground: true
       //     }
    },
}