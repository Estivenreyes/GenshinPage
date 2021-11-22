const firebaseConfig = {
    apiKey: "AIzaSyADo3PwQB6pTfKo6zaxF_A54Y6sbR5CeJo",
    authDomain: "shopping-cart-790a7.firebaseapp.com",
    projectId: "shopping-cart-790a7",
    storageBucket: "shopping-cart-790a7.appspot.com",
    messagingSenderId: "925482071152",
    appId: "1:925482071152:web:2a240fee616627056870b5",
  };

const formatCurrency = (price) => {
    return new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0,
    }).format(price);
};