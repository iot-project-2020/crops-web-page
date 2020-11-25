import Firebase from 'firebase'
import 'firebase/firestore';
var config = {
    apiKey: "AIzaSyAHrMtWQWrhMCuMwCsB-eegLgPtw_pzN44",
    authDomain: "iot-crops.firebaseapp.com",
    databaseURL: "https://iot-crops.firebaseio.com",
    projectId: "iot-crops",
    storageBucket: "iot-crops.appspot.com",
    messagingSenderId: "651312315120",
    appId: "1:651312315120:web:098f118cc965c0fccb2035",
    measurementId: "G-REN9PY7WT1"
};
let app = Firebase.initializeApp(config)
export const db = app.database()