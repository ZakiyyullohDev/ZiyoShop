const removeFromSavatBtns = document.querySelectorAll('.remove-from-savat');
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
        productTitle.classList.add('basket-title');
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
            productsLi.remove(); 
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