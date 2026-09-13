// src/js/firebase-config.js

const firebase = window.firebase;

const firebaseConfig = {
  projectId: "better-school-life-260913",
  appId: "1:333970857991:web:8b3165032a7fd38c158aa2",
  storageBucket: "better-school-life-260913.firebasestorage.app",
  apiKey: "AIzaSyDxCDJ-agfDGiFN6sBTdlk6TB-TodfeUDw",
  authDomain: "better-school-life-260913.firebaseapp.com",
  messagingSenderId: "333970857991"
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
