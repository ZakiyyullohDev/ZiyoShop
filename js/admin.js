const imageUploadWrapper = document.getElementById('imageUploadWrapper');
const uploadedImageText = document.getElementById('uploadedImageText');

const productPriceInput = document.getElementById('productPrice');
const productName = document.getElementById('productName');
const addProduct = document.getElementById('addProduct');

const productImageInput = document.getElementById('imageInput');
const productImageElement = document.createElement('img');

const newProductsList = [];

const addProductToLocalStorage = () => {
    localStorage.setItem('newProducts', JSON.stringify(newProductsList));
}

productImageInput.onchange = () => {
    const imageFile = productImageInput.files[0];
    if (imageFile) {
        const imageUrl = URL.createObjectURL(imageFile);
        productImageElement.src = imageUrl;
        productImageElement.classList.add('new-product-image');
        productImageElement.setAttribute('width', '220px');
        productImageElement.setAttribute('height', '200px');
        imageUploadWrapper.appendChild(productImageElement);
        uploadedImageText.style.display = 'block';
    }
}

addProduct.addEventListener('click', () => {
    const productTitleValue = productName.value;
    const productPriceValue = productPriceInput.value;
    const productImageSrc = productImageElement.src;

    if (!productTitleValue || !productPriceValue || !productImageSrc) {
        alert("Iltimos, barcha maydonlarni to'ldiring va rasmni yuklang.");
        return;
    }

    newProductsList.push({
        title: productTitleValue,
        price: productPriceValue,
        imageSrc: productImageSrc
    });

    addProductToLocalStorage();
});
