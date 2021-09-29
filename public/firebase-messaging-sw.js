// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js');

/*
Initialize the Firebase app in the service worker by passing in the messagingSenderId.
*/
//All these values are from Firebase Project Settings
//Firebase Project >  Web App > Project Settings > General > Your Apps > Config
firebase.initializeApp({
    apiKey: "AIzaSyDxIpIel71l8uSeLD5FEpJK4oDnFzelL28",
    authDomain: "laravelwebpushnotificationdemo.firebaseapp.com",
    projectId: "laravelwebpushnotificationdemo",
    storageBucket: "laravelwebpushnotificationdemo.appspot.com",
    messagingSenderId: "801959816247",
    appId: "1:801959816247:web:7ff051ba7765ee718e63b2",
    measurementId: "G-QDV26ZNYPE"
});


// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
    console.log("Message received.", payload);

    const title = "Hello world is awesome";
    const options = {
        body: "Your notificaiton message .",
        icon: "/firebase-logo.png",
    };

    return self.registration.showNotification(
        title,
        options,
    );
});