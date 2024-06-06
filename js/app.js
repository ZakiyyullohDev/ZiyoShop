const addToSavatBtns = document.querySelectorAll('.add-to-savat'); // Use class selector
const productsArray = JSON.parse(localStorage.getItem('Product')) || [];

const addProductToLocalStorage = () => {
    localStorage.setItem('Product', JSON.stringify(productsArray));
};

for (const addToSavatBtn of addToSavatBtns) {
    addToSavatBtn.addEventListener('click', (e) => {
        const productElement = e.target.parentElement;
        // Get the image source
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

console.log(productsArray);
