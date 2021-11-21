const url = window.location.search; 
const searchParams = new URLSearchParams(url);

const productId = searchParams.get("id");

const product = products.find(product => product.id == productId);
console.log(product);

const productImage = document.getElementById("productImage");
productImage.setAttribute("src", product.image);

/*quantity of product logic*/
const quantityBtns = document.querySelectorAll(".view__quantityBtn");
const quantityInput = document.querySelector(".view__input")

quantityBtns.forEach((element, id) => {
    element.addEventListener("click",(event) => {
        event.preventDefault();

        if(id===1 ){
            quantityInput.value++;
        }else if( quantityInput.value >1){
            quantityInput.value--;
        }
    })
});

/*push to cart*/
