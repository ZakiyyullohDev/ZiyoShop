const addToSavatBtns = document.querySelectorAll('.add-to-savat');
const productsArray = JSON.parse(localStorage.getItem('Product')) || [];
const basketUl = document.getElementById('basketUl');

const addProductToLocalStorage = () => {
    localStorage.setItem('Product', JSON.stringify(productsArray));
};

const getProductFromLocalStorage = () => {
    productsArray.forEach((product, index) => {
        const productsLi = document.createElement('li');
        productsLi.classList.add('basket-li');

        const productsBox = document.createElement('div');
        productsBox.classList.add('basket-box');

        const productTitle = document.createElement('h3');
        productTitle.classList.add('basket-product-title');
        productTitle.textContent = product.name;

        const productImage = document.createElement('img');
        productImage.classList.add('basket-img');
        productImage.src = product.image;
        
        const productPrice = document.createElement('p');
        productPrice.classList.add('basket-price');
        productPrice.textContent = `$${product.price}`;

        const removeFromSavat = document.createElement('button');
        removeFromSavat.classList.add('remove-from-savat');
        removeFromSavat.textContent = 'Savatdan chiqarish';

        removeFromSavat.addEventListener('click', () => {
            productsArray.splice(index, 1); 
            addProductToLocalStorage(); 
            getProductFromLocalStorage();
        });

        productsBox.appendChild(productTitle);
        productsBox.appendChild(productImage);
        productsBox.appendChild(productPrice);
        productsBox.appendChild(removeFromSavat);
        productsLi.appendChild(productsBox);
        basketUl.appendChild(productsLi);
    });
};

getProductFromLocalStorage();

for (const addToSavatBtn of addToSavatBtns) {
    addToSavatBtn.addEventListener('click', (e) => {
        const productElement = e.target.parentElement.parentElement;
        const imgElement = productElement.querySelector('img');
        const imgSrc = imgElement ? imgElement.src : '';

        const product = {
            id: productElement.getAttribute('data-id'),
            name: productElement.getAttribute('data-name'),
            price: productElement.getAttribute('data-price'),
            image: imgSrc
        };

        productsArray.push(product);
        addProductToLocalStorage();
        getProductFromLocalStorage();
    });
}

console.log(productsArray);
