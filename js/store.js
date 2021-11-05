const products = [
    {
        id: 1,
        name: "Cristal Genesis",
        price: 0.99,
        image: "./recursos/recharge Cristal Genesis/GC1.png",
        isRecomended: true,
        isBestSeller: false,
        description: "This coin is the Genesis Crystal, which can be exchanged 1: 1 for Protogems (60 Genesis Crystal = 60 Protogem).",
        type: "Cristal",
    },
    {
        id: 2,
        name: "Cristal Genesis",
        price: 4.99, 
        image: "./recursos/recharge Cristal Genesis/GC2.png",
        isRecomended: true,
        isBestSeller: false,
        description: "This coin is the GenesisCrystal, which can be exchanged 1: 1 for Protogems (300 GenesisCrystal = 300 Protogem)",
        type: "Cristal",
    },
    {
        id: 3,
        name: "Cristal Genesis",
        price: 14.99, 
        image: "./recursos/recharge Cristal Genesis/GC3.png",
        isRecomended: true,
        isBestSeller: false,
        description: "This coin is the GenesisCrystal, which can be exchanged 980: 980 for Protogems (980 GenesisCrystal = 980 Protogem)",
        type: "Cristal",
    },
    {
        id: 4,
        name: "Cristal Genesis",
        price: 29.99, 
        image: "./recursos/recharge Cristal Genesis/GC4.png",
        isRecomended: true,
        isBestSeller: false,
        description: "This coin is the GenesisCrystal, which can be exchanged 1: 1 for Protogems (300 GenesisCrystal = 300 Protogem)",
        type: "Cristal",
    },
    {
        id: 5,
        name: "Cristal Genesis",
        price: 49.99, 
        image: "./recursos/recharge Cristal Genesis/GC5.png",
        isRecomended: true,
        isBestSeller: false,
        description: "This coin is the GenesisCrystal, which can be exchanged 1: 1 for Protogems (300 GenesisCrystal = 300 Protogem)",
        type: "Cristal",
    },
    {
        id: 7,
        name: "Cristal Genesis",
        price: 99.99, 
        image: "./recursos/recharge Cristal Genesis/GC6.png",
        isRecomended: true,
        isBestSeller: false,
        type: "Cristal",
    },
    {
        id: 8,
        name: "Lunar Blessing",
        price: 4.99, 
        image: "./recursos/recharge Cristal Genesis/lunarPass.png",
        isRecomended: false,
        isBestSeller: true,
        type: "Battle pass",    
    },
    {
        id: 9,
        name: "Battle Pass/Gnosis Hymn - Basic",
        price:  9.99, 
        image: "./recursos/recharge Cristal Genesis/battlePass.png",
        isRecomended: false,
        isBestSeller: true,
        type: "Battle pass",    
    },
    {
        id: 10,
        name: "Battle Pass/Gnosis Hymn - Advance",
        price: 19.99, 
        image: "./recursos/recharge Cristal Genesis/battlePass.png",
        isRecomended: true,
        isBestSeller: false,
        type: "Battle pass"
    },
    {
        id: 11,
        name: "Sea Breeze Dandelion",
        price: 1600, 
        image: "./recursos/recharge Cristal Genesis/jeanskin.png",
        isRecomended: true,
        isBestSeller: false,
        description: "Jean’s summer wear. Light and cool, but no less elegant for it. A perfect match for a seaside trip.",
        type: "Skin",
    },
    {
        id: 12,
        name: "SummerTime Sparkle",
        price: 1600, 
        image: "./recursos/recharge Cristal Genesis/barbaraSkin.png",
        isRecomended: true,
        isBestSeller: false,
        description: "Barbara’s beach attire. The lovely short skirt brims with summer vitality and carries the fresh air of the ocean.",
        type: "Skin",
    },
];

const cart = [
];

const productsSection = document.getElementById("products");

const product = document.createElement("a");
product.className = "product";

const producTamplate = (item) => {

    product.setAttribute("product", `./product.html?id=${item.id}`);
    
    const product = document. createElement("a");
    produc.className = "product";

    product.setAttribute("href", `./product.html?id=${item.id}`);

    let tagHtml;
    if(item.isRecommended){
    tagHtml = `<span class="product__tag product__tag--recommended">Recomended</span>`;
    } else if (item.isRecommended){
    tagHtml = `<span class="product__tag product__tag--best-seller">Best seller</span>`;
    }else{
    tagHtml = "";
    }   

    const isAdded = cart.some(productCart => productCart.id === item.id);
    let buttonHtml;

    if(isAdded){
    buttonHtml = `<buttom class="product__cart" disabled>Productio añadido
    </buttom>`;
    } else {
    buttonHtml = `<button class="product__cart">Add in the shopping car
    </button>`;
    }

    product.innerHTML = `
    <img src="${item.image}"alt ="${item.name}" class="product__image">
    <div class = "product__description">
    ${tagHtml}
    <h3 class = "product__price">$ ${item.price}</h3>
    <h2 class = "product__name">${item.name}</h2>
    ${buttonHtml}
    </div>
    `;

    productsSection.appendChild(product);

    const productCartButton = product.querySelector(".product__cart");

    productCartButtom.addEventListener("click", e => {
    e.preventDefault();
    const productAdded ={
        id: item.id,
        name: item.name,
        image: item.image,
        price: item,price,
    };

    cart.push(productAdded);

    productCartButton.setAttribute("disabled", true);
    });

    products.forEach(product =>{
        productTemplate(product);
    });
};



const filterByCategory = document.getElementById("categories");

filterByCategory.addEventListener("change", e => {
    const category = filterByCategory.value;

    productsSection.innerHTML = "";

    let filteredProductsByCategory;

    if(category !== ""){
        filteredProductsByCategory = products.filter((product) => product.
        type === "category");
    } else {
        filteredProductsByCategory = products;
    }

    // const filteredProductsByCategory = products.filter((product) => product.
    // type === category);

    filteredProductsByCategory.forEach(product =>{
        productTemplate(product);
    });
});

products.forEach(product =>{
    productTemplate(product);
});
