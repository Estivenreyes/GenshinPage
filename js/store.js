const products = [
    {
        id: 1,
        name: "Cristal Genesis",
        price: 0.99,
        image: "./recursos/recharge Cristal Genesis/GC1.png",
        isRecomended: true,
        isBestSeller: false,
        description: "This coin is the Genesis Crystal, which can be exchanged 1: 1 for Protogems (60 Genesis Crystal = 60 Protogem).",
        type: "cristal",
    },
    {
        id: 2,
        name: "Cristal Genesis",
        price: 4.99, 
        image: "./recursos/recharge Cristal Genesis/GC2.png",
        isRecomended: true,
        isBestSeller: false,
        description: "This coin is the GenesisCrystal, which can be exchanged 1: 1 for Protogems (300 GenesisCrystal = 300 Protogem)",
        type: "cristal",
    },
    {
        id: 3,
        name: "Cristal Genesis",
        price: 14.99, 
        image: "./recursos/recharge Cristal Genesis/GC3.png",
        isRecomended: true,
        isBestSeller: false,
        description: "This coin is the GenesisCrystal, which can be exchanged 980: 980 for Protogems (980 GenesisCrystal = 980 Protogem)",
        type: "cristal",
    },
    {
        id: 4,
        name: "Cristal Genesis",
        price: 29.99, 
        image: "./recursos/recharge Cristal Genesis/GC4.png",
        isRecomended: true,
        isBestSeller: false,
        description: "This coin is the GenesisCrystal, which can be exchanged 1: 1 for Protogems (300 GenesisCrystal = 300 Protogem)",
        type: "cristal",
    },
    {
        id: 5,
        name: "Cristal Genesis",
        price: 49.99, 
        image: "./recursos/recharge Cristal Genesis/GC5.png",
        isRecomended: true,
        isBestSeller: false,
        description: "This coin is the GenesisCrystal, which can be exchanged 1: 1 for Protogems (300 GenesisCrystal = 300 Protogem)",
        type: "cristal",
    },
    {
        id: 6,
        name: "Cristal Genesis",
        price: 99.99, 
        image: "./recursos/recharge Cristal Genesis/GC6.png",
        isRecomended: true,
        isBestSeller: false,
        type: "cristal",
    },
    {
        id: 7,
        name: "Lunar Blessing",
        price: 4.99, 
        image: "./recursos/recharge Cristal Genesis/lunarPass.png",
        isRecomended: false,
        isBestSeller: true,
        type: "battlePass",    
    },
    {
        id: 8,
        name: "Battle Pass/Gnosis Hymn - Basic",
        price:  9.99, 
        image: "./recursos/recharge Cristal Genesis/battlePass.png",
        isRecomended: false,
        isBestSeller: true,
        type: "battlePass",    
    },
    {
        id: 9,
        name: "Battle Pass/Gnosis Hymn - Advance",
        price: 19.99, 
        image: "./recursos/recharge Cristal Genesis/battlePass.png",
        isRecomended: true,
        isBestSeller: false,
        type: "battlePass"
    },
    {
        id: 10,
        name: "Sea Breeze Dandelion",
        price: 1600, 
        image: "./recursos/recharge Cristal Genesis/jeanskin.png",
        isRecomended: true,
        isBestSeller: false,
        description: "Jean’s summer wear. Light and cool, but no less elegant for it. A perfect match for a seaside trip.",
        type: "skin",
    },
    {
        id: 11,
        name: "SummerTime Sparkle",
        price: 1600, 
        image: "./recursos/recharge Cristal Genesis/barbaraSkin.png",
        isRecomended: true,
        isBestSeller: false,
        description: "Barbara’s beach attire. The lovely short skirt brims with summer vitality and carries the fresh air of the ocean.",
        type: "skin",
    },
];

const cart = [
];


const productsSection = document.querySelector(".store__container");


const productTemplate = (item) => {
    
    const product = document. createElement("a");
    product.className = "productCard";
    product.setAttribute("href", `./product.html?id=${item.id}`);

    //logic of us tag, recomend button or best seller 
    let tagHtml;
    if(item.isRecommended){
    tagHtml = `<span class="product_tag product_tag--recommended">Recomended</span>`;
    } else if (item.isRecommended){
    tagHtml = `<span class="product_tag product_tag--best-seller">Best seller</span>`;
    }else{
    tagHtml = "";
    }   

    const isAdded = cart.some(productCart => productCart.id === item.id);
    let buttonHtml;

    if(isAdded){
    buttonHtml = `<button class="product__cart" disabled>Productio añadido
    </buttom>`;
    } else {
    buttonHtml = `<button class="product__cart">Add in the shopping car
    </button>`;
    }

    product.innerHTML = `
    <img src="${item.image}"alt ="${item.name}" class="productCard__img">
    <div class = "product__description">
    ${tagHtml}
    <p class = "productCard__name">${item.name}</p>
    <btn class = "btn">$ ${item.price}</btn>
    ${buttonHtml}
    </div>
    <p class = "productCard__addBtn"></p>
    `;

    //ading all of us product in the container
    productsSection.appendChild(product);
    
    //Finding the button in the shopping cart the product
    const productCartButton = product.querySelector(".product__cart");

    productCartButton.addEventListener("click", e => {
    e.preventDefault();
    const productAdded ={
        id: item.id,
        name: item.name,
        image: item.image,
        price: item,price,
    };

    cart.push(productAdded);
    console.log(cart);
    productCartButton.setAttribute("disabled", true);
    });

   
};


const filterByCategory = document.getElementById("categories");

filterByCategory.addEventListener("change", e => {
    const category = filterByCategory.value;
    console.log(category);

    productsSection.innerHTML = "";

    let filteredProductsByCategory;

    if(category !== ""){
        filteredProductsByCategory = products.filter((product) => product.
        type === category);
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