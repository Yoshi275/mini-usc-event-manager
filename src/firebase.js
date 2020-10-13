import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyAEjNGr9on1u1oshdQ1oK4k56gTffeuYqA",
authDomain: "event-manager-763fb.firebaseapp.com",
databaseURL: "https://event-manager-763fb.firebaseio.com",
projectId: "event-manager-763fb",
storageBucket: "event-manager-763fb.appspot.com",
messagingSenderId: "97624509765",
appId: "1:97624509765:web:ccd9c35340374bfc72022c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;