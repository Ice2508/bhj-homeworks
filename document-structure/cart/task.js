'use strict';

const productControls = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products');

function remove(cartProduct, cartTitle) {
    const removeButton = cartProduct.querySelector('.remove');
    removeButton.addEventListener('click', () => {
        cartProduct.remove();
        if (cartProducts.children.length === 0) {
            cartTitle.style.display = "none";
        }
    });
}

function animateImage(image, startPosition, cartPosition) {
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;
    image.style.left = `${startPosition.left + scrollX}px`;
    image.style.top = `${startPosition.top + scrollY}px`;

    setTimeout(() => {
        image.style.visibility = 'visible';
        image.style.transition = 'all 0.3s ease-in-out';
        image.style.left = `${cartPosition.left + scrollX}px`;
        image.style.top = `${cartPosition.top + scrollY}px`;
    }, 0);
    
    image.addEventListener('transitionend', () => {
        image.remove();
    });
}

productControls.forEach(product => {
    const productQuantityValue = product.querySelector('.product__quantity-value');
    let productQuantityValueCount = +(productQuantityValue.textContent);
    const productQuantityControl = product.querySelectorAll('.product__quantity-control');
    const productAdd = product.querySelector('.product__add');
    const productImage = product.querySelector('.product__image');

    productQuantityControl.forEach(el => {
        el.addEventListener('click', () => {
            if (el.classList.contains('product__quantity-control_dec')) {
                if (productQuantityValueCount === 1) {
                    return;
                }
                productQuantityValueCount--;
            } else {
                productQuantityValueCount++;
            }
            productQuantityValue.textContent = productQuantityValueCount;
        })
    })
    productAdd.addEventListener('click', () => {
        const productId = product.dataset.id;


        let cartProduct = cartProducts.querySelector(`.cart__product[data-id="${productId}"]`);
        const cartTitle = document.querySelector('.cart__title');
        cartTitle.style = "display: block";

        if (!cartProduct) {
            cartProducts.insertAdjacentHTML('beforeend', `<div class="cart__product" data-id="${productId}">
                <div class="remove">&#215;</div>
                <img class="cart__product-image" src="${productImage.src}">
                <div class="cart__product-count">${productQuantityValueCount}</div>
            </div>`);
            cartProduct = cartProducts.querySelector(`.cart__product[data-id="${productId}"]`);
            remove(cartProduct, cartTitle);
        } else {
            const cartProductCount = cartProduct.querySelector('.cart__product-count');
            cartProductCount.textContent = +cartProductCount.textContent + productQuantityValueCount;
        }
        const imageCopy = productImage.cloneNode();
        imageCopy.classList.add('product__image-copy');
        document.body.appendChild(imageCopy);
        const startPosition = productImage.getBoundingClientRect();
        const cartPosition = cartProduct.querySelector('.cart__product-image').getBoundingClientRect();
        animateImage(imageCopy, startPosition, cartPosition);
    })
})
