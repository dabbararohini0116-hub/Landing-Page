// Organic Product Data
const products = [
    {
        id: 1,
        name: "Raw Organic Honey",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400",
        description: "Pure, raw organic honey harvested from wildflower meadows. Unfiltered and unpasteurized to preserve natural enzymes and nutrients. Rich in antioxidants and perfect for sweetening or medicinal use.",
        features: ["100% Pure & Raw", "Unfiltered & Unpasteurized", "Rich in Antioxidants", "No Added Sugar", "USDA Organic Certified"]
    },
    {
        id: 2,
        name: "Organic Green Tea",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400",
        description: "Premium organic green tea leaves sourced from high-altitude gardens. Packed with antioxidants and natural compounds that promote health and wellness.",
        features: ["Hand-Picked Leaves", "High in Antioxidants", "No Pesticides", "Fair Trade Certified", "50 Tea Bags"]
    },
    {
        id: 3,
        name: "Virgin Coconut Oil",
        price: 15.99,
        image: "https://images.unsplash.com/photo-1505976378723-9726b54e9bb9?w=400",
        description: "Cold-pressed virgin coconut oil extracted from fresh organic coconuts. Perfect for cooking, baking, or skin care. Rich in healthy medium-chain fatty acids.",
        features: ["Cold-Pressed", "Unrefined", "Non-GMO", "Versatile Use", "16 oz Jar"]
    },
    {
        id: 4,
        name: "Organic Almond Butter",
        price: 10.99,
        image: "https://images.unsplash.com/photo-1587049352846-4a222e784902?w=400",
        description: "Creamy almond butter made from 100% organic almonds. No added oils, sugar, or salt. Perfect spread for toast, smoothies, or baking.",
        features: ["100% Almonds", "No Added Sugar", "High Protein", "Gluten-Free", "Vegan"]
    },
    {
        id: 5,
        name: "Organic Quinoa",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400",
        description: "Premium organic quinoa grain, a complete protein source with all nine essential amino acids. Pre-washed and ready to cook.",
        features: ["Complete Protein", "Gluten-Free", "Pre-Washed", "High in Fiber", "2 lb Bag"]
    },
    {
        id: 6,
        name: "Organic Chia Seeds",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1608797178974-15b35a64ede9?w=400",
        description: "Nutrient-dense organic chia seeds packed with omega-3 fatty acids, fiber, and protein. Perfect for smoothies, yogurt, or baking.",
        features: ["High in Omega-3", "Rich in Fiber", "Plant-Based Protein", "Gluten-Free", "16 oz Pack"]
    },
    {
        id: 7,
        name: "Organic Turmeric Powder",
        price: 11.99,
        image: "https://images.unsplash.com/photo-1615485500834-bc10199bc727?w=400",
        description: "Pure organic turmeric powder with high curcumin content. Known for anti-inflammatory properties and vibrant color in cooking.",
        features: ["High Curcumin Content", "Anti-Inflammatory", "No Additives", "Premium Quality", "8 oz Jar"]
    },
    {
        id: 8,
        name: "Organic Maple Syrup",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1575378879277-d2a468c1d50e?w=400",
        description: "100% pure organic maple syrup tapped from sustainable forests. Grade A dark amber with robust flavor perfect for pancakes and cooking.",
        features: ["Grade A Dark", "Pure Maple", "No Additives", "Rich Flavor", "12 oz Bottle"]
    },
    {
        id: 9,
        name: "Organic Oats",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1574934283149-1ac19e2ea8c5?w=400",
        description: "Wholesome organic rolled oats, perfect for breakfast or baking. Gluten-free certified and packed with fiber and nutrients.",
        features: ["Gluten-Free Certified", "High in Fiber", "Heart-Healthy", "Quick Cooking", "2 lb Bag"]
    },
    {
        id: 10,
        name: "Organic Apple Cider Vinegar",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400",
        description: "Raw, unfiltered organic apple cider vinegar with the mother. Contains beneficial enzymes and supports digestive health.",
        features: ["With The Mother", "Raw & Unfiltered", "Digestive Support", "Multi-Purpose", "16 oz Bottle"]
    },
    {
        id: 11,
        name: "Organic Spirulina Powder",
        price: 16.99,
        image: "https://images.unsplash.com/photo-1628193470873-284926a83f61?w=400",
        description: "Premium organic spirulina powder, one of nature's most nutrient-dense superfoods. Rich in protein, vitamins, and minerals.",
        features: ["Complete Protein", "Rich in B Vitamins", "High in Iron", "Superfood", "8 oz Powder"]
    },
    {
        id: 12,
        name: "Organic Flaxseed",
        price: 7.49,
        image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?w=400",
        description: "Whole organic flaxseeds rich in omega-3 fatty acids and fiber. Grind fresh for maximum nutritional benefit.",
        features: ["High Omega-3", "Rich in Lignans", "High Fiber", "Heart-Healthy", "1 lb Bag"]
    },
    {
        id: 13,
        name: "Organic Matcha Powder",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400",
        description: "Ceremonial grade organic matcha powder from Japan. Vibrant green color and rich umami flavor with powerful antioxidants.",
        features: ["Ceremonial Grade", "From Japan", "High in Antioxidants", "Energy Boost", "3 oz Tin"]
    },
    {
        id: 14,
        name: "Organic Cacao Powder",
        price: 12.49,
        image: "https://images.unsplash.com/photo-1571508601891-ca5e7a713859?w=400",
        description: "Raw organic cacao powder, the purest form of chocolate. Rich in antioxidants and minerals, perfect for smoothies and desserts.",
        features: ["Raw & Unprocessed", "High Antioxidants", "Rich in Magnesium", "No Added Sugar", "12 oz Bag"]
    },
    {
        id: 15,
        name: "Organic Hemp Seeds",
        price: 13.99,
        image: "https://images.unsplash.com/photo-1565299543923-37dd37887442?w=400",
        description: "Hulled organic hemp hearts packed with complete protein and healthy fats. Nutty flavor perfect for salads and smoothies.",
        features: ["Complete Protein", "Rich in Omega-3", "Easy to Digest", "Nutty Flavor", "1 lb Bag"]
    },
    {
        id: 16,
        name: "Organic Goji Berries",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1610252912181-c2f0c3c0e8b0?w=400",
        description: "Sun-dried organic goji berries, a traditional superfood berry. High in antioxidants, vitamins, and minerals.",
        features: ["Sun-Dried", "High in Vitamin C", "Antioxidant Rich", "Sweet Flavor", "12 oz Bag"]
    },
    {
        id: 17,
        name: "Organic Maca Powder",
        price: 15.99,
        image: "https://images.unsplash.com/photo-1599024357339-7b7d7c40d23d?w=400",
        description: "Organic maca root powder from Peru. Known for energy-boosting properties and hormonal balance support.",
        features: ["From Peru", "Energy Boosting", "Adaptogenic", "Nutty Flavor", "8 oz Powder"]
    },
    {
        id: 18,
        name: "Organic Cashew Butter",
        price: 11.99,
        image: "https://images.unsplash.com/photo-1599940778584-b87db928a928?w=400",
        description: "Smooth and creamy organic cashew butter made from roasted cashews. No added oils or sweeteners.",
        features: ["100% Cashews", "Creamy Texture", "No Added Sugar", "High in Minerals", "16 oz Jar"]
    },
    {
        id: 19,
        name: "Organic Kombucha Tea",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1622597467836-f3ff5c4abdd4?w=400",
        description: "Probiotic-rich organic kombucha tea naturally fermented for gut health. Refreshing ginger flavor.",
        features: ["Probiotic Rich", "Naturally Fermented", "Low Sugar", "Ginger Flavor", "16 oz Bottle"]
    },
    {
        id: 20,
        name: "Organic Wheatgrass Powder",
        price: 17.99,
        image: "https://images.unsplash.com/photo-1556909211-36987daf7b4d?w=400",
        description: "Pure organic wheatgrass powder packed with chlorophyll, vitamins, and minerals. Detoxifying and energizing superfood.",
        features: ["High in Chlorophyll", "Nutrient Dense", "Detoxifying", "Energy Boost", "8 oz Powder"]
    }
];

// Cart functionality with localStorage
let cart = [];

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('organicLifeCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

function saveCart() {
    localStorage.setItem('organicLifeCart', JSON.stringify(cart));
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        saveCart();
        updateCartCount();
        
        // Show a nicer notification
        showNotification(`${product.name} added to cart!`);
    }
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Hide and remove notification
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Load products on products page
function loadProducts() {
    const productGrid = document.getElementById('productGrid');
    if (productGrid) {
        productGrid.innerHTML = '';
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.onclick = () => {
                window.location.href = `product-detail.html?id=${product.id}`;
            };
            
            productCard.innerHTML = `
                <div class="organic-badge">🌱 Certified Organic</div>
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">$${product.price.toFixed(2)}</p>
                <button class="add-to-cart-mini" onclick="event.stopPropagation(); addToCart(${product.id})">Add to Cart 🛒</button>
            `;
            
            productGrid.appendChild(productCard);
        });
    }
}

// Load product detail
function loadProductDetail() {
    const productDetail = document.getElementById('productDetail');
    if (productDetail) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = parseInt(urlParams.get('id'));
        const product = products.find(p => p.id === productId);
        
        if (product) {
            const featuresHTML = product.features.map(f => `<li>✓ ${f}</li>`).join('');
            
            productDetail.innerHTML = `
                <div class="product-detail-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-detail-info">
                    <div class="organic-badge">🌱 Certified Organic</div>
                    <h1>${product.name}</h1>
                    <p class="product-detail-price">$${product.price.toFixed(2)}</p>
                    <p class="product-detail-description">${product.description}</p>
                    
                    <div class="product-features">
                        <h3>Key Features:</h3>
                        <ul>
                            ${featuresHTML}
                        </ul>
                    </div>
                    
                    <div class="size-selector">
                        <h3>Select Quantity:</h3>
                        <div class="sizes">
                            <button class="size-btn active" onclick="selectSize(this)">1</button>
                            <button class="size-btn" onclick="selectSize(this)">2</button>
                            <button class="size-btn" onclick="selectSize(this)">3</button>
                            <button class="size-btn" onclick="selectSize(this)">5</button>
                            <button class="size-btn" onclick="selectSize(this)">10</button>
                        </div>
                    </div>
                    
                    <button class="add-to-cart-btn" onclick="addToCartWithQuantity(${product.id})">Add to Cart 🛒</button>
                </div>
            `;
        } else {
            productDetail.innerHTML = '<p>Product not found</p>';
        }
    }
}

function addToCartWithQuantity(productId) {
    const quantity = parseInt(document.querySelector('.size-btn.active').textContent);
    const product = products.find(p => p.id === productId);
    
    if (product) {
        for (let i = 0; i < quantity; i++) {
            cart.push(product);
        }
        saveCart();
        updateCartCount();
        showNotification(`${quantity} x ${product.name} added to cart!`);
    }
}

function selectSize(btn) {
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

// Contact form handler
function handleSubmit() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    if (name && email && subject && message) {
        alert('Thank you for contacting OrganicLife! We will respond within 24 hours.');
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('subject').value = '';
        document.getElementById('message').value = '';
    } else {
        alert('Please fill in all fields.');
    }
}

// Make cart icon clickable
document.addEventListener('DOMContentLoaded', function() {
    loadCartFromStorage();
    loadProducts();
    loadProductDetail();
    updateCartCount();
    
    // Make cart icon clickable on all pages
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon && !cartIcon.onclick) {
        cartIcon.style.cursor = 'pointer';
        cartIcon.onclick = () => {
            window.location.href = 'cart.html';
        };
    }
});
