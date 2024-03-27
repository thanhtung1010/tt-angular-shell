export const environment = {
  production: false,
  defaultLang: 'vi',
  cookieStorageLangKey: '_lang',
  cookieStorageDeviceIdKey: '_deviceId',
  TOKEN_KEY: '_token',
  ASSETS_URL: 'http://localhost:8080/',
  ASSETS_REACT_MANAGEMENT_URL: 'http://localhost:3000/',
  API_URL: 'http://localhost:9090/',
  email: 'trinhthanhtung1010@gmail.com',
  phoneNumber: '+84836450670',
  defaultPageSize: 10,
  TIME_OUT_MS: 180000,
  SETTING_FORMAT: {
    dateTime: {
      date: "DD/MM/YYYY",
      time: "HH:mm:ss a",
      dateTime: "DD/MM/YYYY HH:mm:ss",
      portfolioDate: "MMM - yyyy",
      portfolioDateResponsive: "yyyy"
    },
  },
  FIREBASE_CONFIG: {
    apiKey: "AIzaSyADMzU8kiEIosqyvJiopulcmF2ff3ppCus",
    authDomain: "my-project-8c416.firebaseapp.com",
    projectId: "my-project-8c416",
    storageBucket: "my-project-8c416.appspot.com",
    messagingSenderId: "468318730006",
    appId: "1:468318730006:web:6de7ec8edebad31bb60237",
    measurementId: "G-P115SDW2ZT"
  },
  GOOGLE_CONFIG: {
    downloadCV: "https://drive.google.com/uc?export=download&id=13GFK_OWfcxseMy5gjG2TyLLbIPcc8LML",
  },
  WEB_COMPONENT: {
    reactManagement: "http://localhost:3000/static/js/bundle.js",
  },
};
