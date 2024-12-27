// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'

        });
    });
});
window.addEventListener('load', function() {
    const loader = document.querySelector('.loader-wrapper');
    loader.classList.add('hide');
});
// Smooth Scrolling with Easing
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });

        // Add bounce effect at the end of the scroll
        setTimeout(() => {
            targetElement.classList.add('highlight');
            setTimeout(() => {
                targetElement.classList.remove('highlight');
            }, 1000);
        }, 1000);
    });
});
const cartButton = document.querySelector('.floating-cart');
const cartCount = document.querySelector('.cart-count');
let itemCount = 0;

document.querySelectorAll('.product-card button').forEach(button => {
    button.addEventListener('click', function() {
        // Increment item count
        itemCount++;
        cartCount.textContent = itemCount;

        // Add bounce effect to the cart
        cartButton.classList.add('bounce');
        setTimeout(() => {
            cartButton.classList.remove('bounce');
        }, 600);
    });
});

