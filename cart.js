// Load and display cart
function loadCart() {
    const cartItems = document.getElementById('cartItems');
    const emptyCart = document.getElementById('emptyCart');
    const cartContent = document.getElementById('cartContent');
    
    if (cart.length === 0) {
        emptyCart.style.display = 'block';
        cartContent.style.display = 'none';
        return;
    }
    
    emptyCart.style.display = 'none';
    cartContent.style.display = 'grid';
    
    // Group items by id and count quantities
    const groupedCart = {};
    cart.forEach(item => {
        if (groupedCart[item.id]) {
            groupedCart[item.id].quantity++;
        } else {
            groupedCart[item.id] = { ...item, quantity: 1 };
        }
    });
    
    cartItems.innerHTML = '';
    Object.values(groupedCart).forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p class="cart-item-price">$${item.price.toFixed(2)}</p>
            </div>
            <div class="cart-item-quantity">
                <button onclick="decreaseQuantity(${item.id})">-</button>
                <span>${item.quantity}</span>
                <button onclick="increaseQuantity(${item.id})">+</button>
            </div>
            <div class="cart-item-total">
                $${(item.price * item.quantity).toFixed(2)}
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})">✕</button>
        `;
        cartItems.appendChild(cartItem);
    });
    
    updateCartSummary();
}

function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
    const shipping = cart.length > 0 ? 5.99 : 0;
    const tax = subtotal * 0.1;
    const total = subtotal + shipping + tax;
    
    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('shipping').textContent = cart.length > 0 ? `$${shipping.toFixed(2)}` : 'FREE';
    document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

function increaseQuantity(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        saveCart();
        loadCart();
        updateCartCount();
    }
}

function decreaseQuantity(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
        cart.splice(index, 1);
        saveCart();
        loadCart();
        updateCartCount();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    loadCart();
    updateCartCount();
}

function saveCart() {
    localStorage.setItem('organicLifeCart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('organicLifeCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

function proceedToCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    window.location.href = 'checkout.html';
}

// Initialize cart page
document.addEventListener('DOMContentLoaded', function() {
    loadCartFromStorage();
    loadCart();
    updateCartCount();
});
