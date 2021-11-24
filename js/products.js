import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const products = [
    {
        id: 1,
        name: "Cristal Genesis",
        price: 0.99,
        image: "./recursos/rechargeCristalGenesis/GC1.png",
        isRecomended: true,
        isBestSeller: false,
        isPromotional: true,
        description:
            "This coin is the Genesis Crystal, which can be exchanged 1: 1 for Protogems (60 Genesis Crystal = 60 Protogem).",
        type: "cristal",
    },
    {
        id: 2,
        name: "Cristal Genesis",
        price: 4.99,
        image: "./recursos/rechargeCristalGenesis/GC2.png",
        isRecomended: true,
        isBestSeller: false,
        isPromotional: false,
        description:
            "This coin is the GenesisCrystal, which can be exchanged 1: 1 for Protogems (300 GenesisCrystal = 300 Protogem)",
        type: "cristal",
    },
    {
        id: 3,
        name: "Cristal Genesis",
        price: 14.99,
        image: "./recursos/rechargeCristalGenesis/GC3.png",
        isRecomended: true,
        isBestSeller: false,
        isPromotional: false,
        description:
            "This coin is the GenesisCrystal, which can be exchanged 980: 980 for Protogems (980 GenesisCrystal = 980 Protogem)",
        type: "cristal",
    },
    {
        id: 4,
        name: "Cristal Genesis",
        price: 29.99,
        image: "./recursos/rechargeCristalGenesis/GC4.png",
        isRecomended: true,
        isBestSeller: false,
        isPromotional: false,
        description:
            "This coin is the GenesisCrystal, which can be exchanged 1: 1 for Protogems (300 GenesisCrystal = 300 Protogem)",
        type: "cristal",
    },
    {
        id: 5,
        name: "Cristal Genesis",
        price: 49.99,
        image: "./recursos/rechargeCristalGenesis/GC5.png",
        isRecomended: true,
        isBestSeller: false,
        isPromotional: false,
        description:
            "This coin is the GenesisCrystal, which can be exchanged 1: 1 for Protogems (300 GenesisCrystal = 300 Protogem)",
        type: "cristal",
    },
    {
        id: 6,
        name: "Cristal Genesis",
        price: 99.99,
        image: "./recursos/rechargeCristalGenesis/GC6.png",
        isRecomended: true,
        isBestSeller: false,
        isPromotional: true,
        type: "cristal",
    },
    {
        id: 7,
        name: "Lunar Blessing",
        price: 4.99,
        image: "./recursos/rechargeCristalGenesis/lunarPass.png",
        isRecomended: false,
        isBestSeller: true,
        isPromotional: false,
        type: "battlePass",
    },
    {
        id: 8,
        name: "Battle Pass/Gnosis Hymn - Basic",
        price: 9.99,
        image: "./recursos/rechargeCristalGenesis/battlePass.png",
        isRecomended: false,
        isBestSeller: true,
        isPromotional: false,
        type: "battlePass",
    },
    {
        id: 9,
        name: "Battle Pass/Gnosis Hymn - Advance",
        price: 19.99,
        image: "./recursos/rechargeCristalGenesis/battlePass.png",
        isRecomended: true,
        isBestSeller: false,
        isPromotional: false,
        type: "battlePass",
    },
    {
        id: 10,
        name: "Sea Breeze Dandelion",
        price: 29.99,
        image: "./recursos/rechargeCristalGenesis/jeanskin.png",
        isRecomended: true,
        isBestSeller: false,
        isPromotional: false,
        description:
            "Jean’s summer wear. Light and cool, but no less elegant for it. A perfect match for a seaside trip.",
        type: "skin",
    },
    {
        id: 11,
        name: "SummerTime Sparkle",
        price: 29.99,
        image: "./recursos/rechargeCristalGenesis/barbaraSkin.png",
        isRecomended: true,
        isBestSeller: false,
        isPromotional: false,
        description:
            "Barbara’s beach attire. The lovely short skirt brims with summer vitality and carries the fresh air of the ocean.",
        type: "skin",
    },
];

products.forEach(async (product) => {
    await setDoc(doc(db, "product", `01289FB374BFA2F${product.id}`), product);
});
