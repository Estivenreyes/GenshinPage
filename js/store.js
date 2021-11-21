const cart = [
];


const productsSection = document.querySelector(".store__container");
const filterByCategory = document.getElementById("categories");
const sortByPrice = document.getElementById("orderBy");


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
    buttonHtml = `<button class="btn--1" disabled>Productio añadido
    </buttom>`;
    } else {
    buttonHtml = `<button class="btn--1">Add in the shopping car
    </button>`;
    }

    let promotion;
    if(item.isPromotional){
     promotion =    `<h1 class="productCard__buyFirst">Buy First</h1>`
    }

    if(item.isPromotional == false){
        promotion =    ``
       }

    product.innerHTML = `
    ${promotion}
    <img src="${item.image}"alt ="${item.name}" class="productCard__img">
    ${tagHtml}
    <p class = "productCard__name">${item.name}</p>
    <btn class = "btn"> ${item.price}</btn>
    ${buttonHtml}
    
    `;

    //ading all of us product in the container
    productsSection.appendChild(product);
    
    //Finding the button in the shopping cart the product
    const productCartButton = product.querySelector(".btn--1");

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



const loadProducts = () => {
    const category = filterByCategory.value;
    const sortByPriceValue = sortByPrice.value;

    productsSection.innerHTML = "";

    let filteredProductsByCategory;

    if(category !== ""){
        filteredProductsByCategory = products.filter((product) => product.
        type === category);
    } else {
        filteredProductsByCategory = products;
    }

    if(sortByPriceValue === "high") {
        filteredProductsByCategory = filteredProductsByCategory.sort((a, b) => {
            return b.price - a.price
        });
    } 
    
    if(sortByPriceValue === "lower") {
        filteredProductsByCategory = filteredProductsByCategory.sort((a, b) =>{
            return a.price - b.price
        });
    }

    filteredProductsByCategory.forEach(product =>{
        productTemplate(product);
    });

};

filterByCategory.addEventListener("change", e => {
    loadProducts();
});



sortByPrice.addEventListener("change", e => {
    loadProducts();
});

const filterByPromotional = document.getElementById("store__promotion");

filterByPromotional.addEventListener("click", e => {
    productsSection.innerHTML = '';

    let filterProductsByPromotional = [];

    filterProductsByPromotional = products.filter(product => product.isPromotional)

    filterProductsByPromotional.forEach(product =>{
        productTemplate(product);
    })
})

products.forEach(product =>{
    productTemplate(product);
});