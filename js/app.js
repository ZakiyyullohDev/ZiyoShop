const addToSavatBtns = document.querySelectorAll('#addToSavat');
const productsArray = JSON.parse(localStorage.getItem('basketProducts')) || [];
const productsUl = document.getElementById('productsUl');

const addProductToLocalStorage = () => {
    localStorage.setItem('basketProducts', JSON.stringify(productsArray));
};

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

        productsArray.push(product);
        addProductToLocalStorage();
    });
}