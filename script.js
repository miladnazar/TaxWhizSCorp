// Contact form functionality
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thank you for contacting Tax Whiz! We will get back to you shortly.');
});

// Payment button functionality
const paymentButton = document.getElementById('stripe-payment-button');
if (paymentButton) {
    paymentButton.addEventListener('click', function () {
        alert('Redirecting to payment gateway...');
    });
}
