const basketItemsArray = JSON.parse(localStorage.getItem('basketProducts')) || [];
const basketUl = document.getElementById('basketUl');

const addProductToLocalStorage = () => {
    localStorage.setItem('basketProducts', JSON.stringify(basketItemsArray))
}

const getProductFromLocalStorage = () => {
    basketItemsArray.forEach((product, index) => {
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

        removeFromSavat.addEventListener('click', (e) => {
            basketItemsArray.splice(index, 1); 
            e.target.parentElement.parentElement.remove();
            addProductToLocalStorage(); 
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

// for (const addToSavatBtn of addToSavatBtns) {
//     addToSavatBtn.addEventListener('click', (e) => {
//         const productElement = e.target.parentElement.parentElement;
//         const imgElement = productElement.querySelector('img');
//         const imgSrc = imgElement ? imgElement.src : '';

//         const product = {
//             id: productElement.getAttribute('data-id'),
//             name: productElement.getAttribute('data-name'),
//             price: productElement.getAttribute('data-price'),
//             image: imgSrc
//         };

//         basketItemsArray.push(product);
//         addProductToLocalStorage();
//         getProductFromLocalStorage();
//     });
// }

console.log(basketItemsArray);
