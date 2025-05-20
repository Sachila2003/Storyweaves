const firebaseConfig = {
  apiKey: "AIzaSyCT4kmUL71qkvfcCf5tfV3NIRlvNo2hrUQ",
  authDomain: "storyweaves-e0acb.firebaseapp.com",
  databaseURL: "https://storyweaves-e0acb-default-rtdb.firebaseio.com",
  projectId: "storyweaves-e0acb",
  storageBucket: "storyweaves-e0acb.firebasestorage.app",
  messagingSenderId: "363937838466",
  appId: "1:363937838466:web:36d2c96f3e369ede2c4b9b",
  measurementId: "G-WNBQBMM3JV"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();