const productsArray = JSON.parse(localStorage.getItem('Product')) || [];
const productsUl = document.getElementById('productsUl');
const newProducts = JSON.parse(localStorage.getItem('newProducts')) || [];

const getNewProductFromLocalStorage = () => {
    newProducts.forEach(newProduct => {
        const productsLi = document.createElement('li');
        productsLi.classList.add('products-li');
        
        const productsBox = document.createElement('div');
        productsBox.classList.add('products-box');
        
        const productTitle = document.createElement('h3');
        productTitle.classList.add('product-title');
        productTitle.textContent = newProduct.title;
        
        const productImage = document.createElement('img');
        productImage.classList.add('products-img');
        productImage.src = newProduct.imageSrc; // Ensure this property is correctly named
        productImage.alt = newProduct.title; // Add alt text for better accessibility
        
        const productPrice = document.createElement('p');
        productPrice.classList.add('product-price');
        productPrice.textContent = `$${newProduct.price}`;
        
        const addToSavat = document.createElement('button');
        addToSavat.classList.add('add-to-savat');
        addToSavat.textContent = "Savatga Qo'shish";
        
        productsBox.appendChild(productTitle);
        productsBox.appendChild(productImage);
        productsBox.appendChild(productPrice);
        productsBox.appendChild(addToSavat);
        
        productsLi.appendChild(productsBox);
        productsUl.appendChild(productsLi);

        // Add event listener to the dynamically created button
        addToSavat.addEventListener('click', (e) => {
            const productElement = e.target.parentElement;
            const imgElement = productElement.querySelector('img');
            const imgSrc = imgElement ? imgElement.src : '';
            
            const product = {
                id: productElement.getAttribute('data-id') || newProduct.id,
                name: productTitle.textContent,
                price: productPrice.textContent.replace('$', ''),
                image: imgSrc
            };
            productsArray.push(product);
            addProductToLocalStorage();
        });
    });
};

const addProductToLocalStorage = () => {
    localStorage.setItem('Product', JSON.stringify(productsArray));
};

// Call the function to load products from local storage
getNewProductFromLocalStorage();

console.log(productsArray);
