// Load order confirmation details
document.addEventListener('DOMContentLoaded', function() {
    const orderData = localStorage.getItem('lastOrder');
    
    if (!orderData) {
        window.location.href = 'index.html';
        return;
    }
    
    const order = JSON.parse(orderData);
    
    // Display order details
    document.getElementById('orderNumber').textContent = order.orderNumber;
    document.getElementById('orderDate').textContent = order.date;
    document.getElementById('orderTotal').textContent = `$${order.total.toFixed(2)}`;
    document.getElementById('orderEmail').textContent = order.email;
    
    // Display order items
    const confirmedItems = document.getElementById('confirmedItems');
    
    // Group items by id
    const groupedItems = {};
    order.items.forEach(item => {
        if (groupedItems[item.id]) {
            groupedItems[item.id].quantity++;
        } else {
            groupedItems[item.id] = { ...item, quantity: 1 };
        }
    });
    
    Object.values(groupedItems).forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'confirmed-item';
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="confirmed-item-info">
                <h4>${item.name}</h4>
                <p>Quantity: ${item.quantity}</p>
                <p class="item-price">$${(item.price * item.quantity).toFixed(2)}</p>
            </div>
        `;
        confirmedItems.appendChild(itemElement);
    });
    
    // Display shipping information
    const shippingDetails = document.getElementById('shippingDetails');
    shippingDetails.innerHTML = `
        <p><strong>${order.shipping.firstName} ${order.shipping.lastName}</strong></p>
        <p>${order.shipping.address}</p>
        <p>${order.shipping.city}, ${order.shipping.state} ${order.shipping.zipCode}</p>
        <p>Phone: ${order.shipping.phone}</p>
    `;
    
    // Clear the last order from storage after a delay (optional)
    // setTimeout(() => {
    //     localStorage.removeItem('lastOrder');
    // }, 300000); // Clear after 5 minutes
    
    updateCartCount();
});
