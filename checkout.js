// Load checkout items
function loadCheckoutItems() {
    const checkoutItems = document.getElementById('checkoutItems');
    
    if (cart.length === 0) {
        window.location.href = 'cart.html';
        return;
    }
    
    // Group items by id
    const groupedCart = {};
    cart.forEach(item => {
        if (groupedCart[item.id]) {
            groupedCart[item.id].quantity++;
        } else {
            groupedCart[item.id] = { ...item, quantity: 1 };
        }
    });
    
    checkoutItems.innerHTML = '';
    Object.values(groupedCart).forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'checkout-item';
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="checkout-item-info">
                <h4>${item.name}</h4>
                <p>Qty: ${item.quantity}</p>
            </div>
            <div class="checkout-item-price">
                $${(item.price * item.quantity).toFixed(2)}
            </div>
        `;
        checkoutItems.appendChild(itemElement);
    });
    
    updateCheckoutSummary();
}

function updateCheckoutSummary() {
    const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
    const shipping = 5.99;
    const tax = subtotal * 0.1;
    const total = subtotal + shipping + tax;
    
    document.getElementById('checkoutSubtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('checkoutShipping').textContent = `$${shipping.toFixed(2)}`;
    document.getElementById('checkoutTax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('checkoutTotal').textContent = `$${total.toFixed(2)}`;
}

// Payment method toggle
document.addEventListener('DOMContentLoaded', function() {
    loadCartFromStorage();
    loadCheckoutItems();
    updateCartCount();
    
    const paymentRadios = document.querySelectorAll('input[name="payment"]');
    const cardDetails = document.getElementById('cardDetails');
    
    paymentRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.value === 'card') {
                cardDetails.style.display = 'block';
            } else {
                cardDetails.style.display = 'none';
            }
        });
    });
    
    // Card number formatting
    const cardNumberInput = document.getElementById('cardNumber');
    if (cardNumberInput) {
        cardNumberInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\s/g, '');
            let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
            e.target.value = formattedValue;
        });
    }
    
    // Expiry date formatting
    const expiryInput = document.getElementById('expiry');
    if (expiryInput) {
        expiryInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.slice(0, 2) + '/' + value.slice(2, 4);
            }
            e.target.value = value;
        });
    }
});

function placeOrder() {
    // Validate form
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zipCode = document.getElementById('zipCode').value;
    
    if (!firstName || !lastName || !email || !phone || !address || !city || !state || !zipCode) {
        alert('Please fill in all required shipping information fields.');
        return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Validate payment
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
    
    if (paymentMethod === 'card') {
        const cardNumber = document.getElementById('cardNumber').value;
        const cardName = document.getElementById('cardName').value;
        const expiry = document.getElementById('expiry').value;
        const cvv = document.getElementById('cvv').value;
        
        if (!cardNumber || !cardName || !expiry || !cvv) {
            alert('Please fill in all card details.');
            return;
        }
        
        if (cardNumber.replace(/\s/g, '').length < 13) {
            alert('Please enter a valid card number.');
            return;
        }
        
        if (cvv.length < 3) {
            alert('Please enter a valid CVV.');
            return;
        }
    }
    
    // Calculate order total
    const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
    const shipping = 5.99;
    const tax = subtotal * 0.1;
    const total = subtotal + shipping + tax;
    
    // Save order details to localStorage
    const orderDetails = {
        orderNumber: 'ORG-' + Math.floor(Math.random() * 100000),
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        total: total,
        email: email,
        items: cart,
        shipping: {
            firstName,
            lastName,
            address,
            city,
            state,
            zipCode,
            phone
        },
        paymentMethod: paymentMethod
    };
    
    localStorage.setItem('lastOrder', JSON.stringify(orderDetails));
    
    // Clear cart
    cart = [];
    saveCart();
    
    // Redirect to confirmation page
    window.location.href = 'confirmation.html';
}
