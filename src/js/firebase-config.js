// src/js/firebase-config.js

const firebase = window.firebase;

const firebaseConfig = {
  apiKey: "AIzaSyDeSMupn_VL2zYk-wB6h0Z8WF9ggBUC5i4",
  authDomain: "min-test-b8823.firebaseapp.com",
  projectId: "min-test-b8823",
  storageBucket: "min-test-b8823.firebasestorage.app",
  messagingSenderId: "944016610108",
  appId: "1:944016610108:web:de03d89b2922fb8dea4439",
  measurementId: "G-V1Q14GW202"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const db = firebase.firestore();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
// 현재는 모든 구글 계정 로그인 허용 (로그인 시 계정 선택 창 표시)
googleProvider.setCustomParameters({ prompt: 'select_account' });
