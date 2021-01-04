import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";
import {
  FIRESTORE_API_KEY,
  FIRESTORE_AUTH_DOMAIN,
  FIRESTORE_PROJECT_ID,
  FIRESTORE_STORAGE_BUCKET,
  FIRESTORE_MESSAGING_SENDER_ID,
  FIRESTORE_APP_ID,
  FIRESTORE_MEASUREMENT_ID,
} from "@env";

const firebaseConfig = {
  apiKey: FIRESTORE_API_KEY,
  authDomain: FIRESTORE_AUTH_DOMAIN,
  projectId: FIRESTORE_PROJECT_ID,
  storageBucket: FIRESTORE_STORAGE_BUCKET,
  messagingSenderId: FIRESTORE_MESSAGING_SENDER_ID,
  appId: FIRESTORE_APP_ID,
  measurementId: FIRESTORE_MEASUREMENT_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
