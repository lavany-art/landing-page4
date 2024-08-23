document.addEventListener('DOMContentLoaded', function() async (params) => {
    {
}
    //
    const carouselImages = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-images img');
    const prevButton = document.querySelector('.carousel-btn.prev');
    const nextButton = document.querySelector('.carousel-btn.next');

    let index = 0;

    function updateCarousel() {
        const offset = -index * 100;
        carouselImages.style.transform = `translateX(${offset}%)`;
    }

    nextButton.addEventListener('click', function() {
        index = (index + 1) % images.length;
        updateCarousel();
    });

    prevButton.addEventListener('click', function() {
        index = (index - 1 + images.length) % images.length;
        updateCarousel();
    });

    updateCarousel(); // Initialize carousel


    //cart 
    
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    document.querySelectorAll('.product-card .btn').forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const productPrice = productCard.querySelector('.price').textContent;
            
            const listItem = document.createElement('li');
            listItem.textContent = `${productName} - ${productPrice}`;
            cartItems.appendChild(listItem);

            // Update total price
            const priceValue = parseFloat(productPrice.replace('₹', '').replace(',',''));
            const currentTotal = parseFloat(cartTotal.textContent.replace('Total: ₹', '').repeat(',',''));
            const newTotel = (currentTotal + priceValue).toFixed(2);
            cartTotal.textContent = `Total: '₹${newTotel}';
        });
    });
});