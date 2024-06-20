const basketProductsArray = [];
const newProducts = JSON.parse(localStorage.getItem('newProducts')) || [];
const maishiyTexnikaUl = document.getElementById('maishiyTexnikaUl');
const maishiyTexnika = document.getElementById('maishiyTexnika');
const addToSavatBtns = document.querySelectorAll('#addToSavat');
const productsUl = document.getElementById('productsUl');

const addProductToLocalStorage = () => {
    localStorage.setItem('basketProducts', JSON.stringify(basketProductsArray));
};

const getProductFromLocalStorage = () => {
    newProducts.forEach((product) => {
        const productsLi = document.createElement('li');
        productsLi.classList.add('products-li');

        const productsBox = document.createElement('div');
        productsBox.classList.add('products-box');

        const productTitle = document.createElement('h3');
        productTitle.classList.add('products-title');
        productTitle.textContent = product.title;

        const productImage = document.createElement('img');
        productImage.classList.add('products-img');
        productImage.src = product.image;
        
        const productPrice = document.createElement('p');
        productPrice.classList.add('product-price');
        productPrice.textContent = `$${product.price}`;

        const addToSavat = document.createElement('button');
        addToSavat.classList.add('add-to-savat');
        addToSavat.textContent = "Savatga Qo'shish";

        productsBox.appendChild(productTitle);
        productsBox.appendChild(productImage);
        productsBox.appendChild(productPrice);
        productsBox.appendChild(addToSavat);
        productsLi.appendChild(productsBox);
        productsUl.appendChild(productsLi);
    });
};

getProductFromLocalStorage();


for (const addToSavatBtn of addToSavatBtns) {
    addToSavatBtn.addEventListener('click', (e) => {
        const productElement = e.target.parentElement; 
        const imgElement = productElement.querySelector('img');
        const imgSrc = imgElement ? imgElement.src : '';

        const product = {
            id: productElement.getAttribute('data-id'),
            name: productElement.getAttribute('data-name'),
            price: productElement.getAttribute('data-price'),
            image: imgSrc
        };

        basketProductsArray.push(product);
        addProductToLocalStorage();
    });
}

maishiyTexnika.onclick = () => {
    debugger;
    console.log('maishiyTexnika clicked');
    maishiyTexnikaUl.classList.add('display-flex')
    maishiyTexnikaUl.classList.remove('display-none')
    productsUl.classList.add('display-none')
};

console.log(basketProductsArray);
