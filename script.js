document.addEventListener('DOMContentLoaded', () => {
    // Login functionality
    const loginForm = document.getElementById('loginForm');
    const loginPage = document.getElementById('loginPage');
    const mainPage = document.getElementById('mainPage');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'admin' && password === 'admin') {
            loginPage.classList.add('hidden');
            mainPage.classList.remove('hidden');
        } else {
            alert('اسم المستخدم أو كلمة المرور غير صحيحة');
        }
    });

    // Menu functionality
    const mainMenuBtn = document.getElementById('mainMenuBtn');
    const subMenu = document.getElementById('subMenu');
    const productDetails = document.getElementById('productDetails');
    const productName = document.getElementById('productName');
    const packageType = document.getElementById('packageType');
    const priceDisplay = document.getElementById('price');
    const manualPrice = document.getElementById('manualPrice');
    const calculatePrice = document.getElementById('calculatePrice');

    // Product prices in EGP
    const prices = {
        'dates-box': {
            'box': 100,
            'bag': 80,
            'kilo': 60
        },
        'ajwa-box': {
            'box': 150,
            'bag': 120,
            'kilo': 90
        },
        'dates-juice': {
            'box': 30,
            'bag': 25,
            'kilo': 20
        },
        'dates-biscuits': {
            'box': 40,
            'bag': 35,
            'kilo': 30
        }
    };

    // Product names in Arabic
    const productNames = {
        'dates-box': 'علبة تمر',
        'ajwa-box': 'علبة عجوة',
        'dates-juice': 'عصير تمر',
        'dates-biscuits': 'بسكوت بالتمر'
    };

    mainMenuBtn.addEventListener('click', () => {
        subMenu.classList.toggle('hidden');
        productDetails.classList.add('hidden');
    });

    // Handle product button clicks
    document.querySelectorAll('.product-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const productId = btn.dataset.product;
            productName.textContent = productNames[productId];
            updatePrice(productId, packageType.value);
            productDetails.classList.remove('hidden');
        });
    });

    // Update price when package type changes
    packageType.addEventListener('change', () => {
        const selectedProduct = document.querySelector('.product-btn.selected')?.dataset.product;
        if (selectedProduct) {
            updatePrice(selectedProduct, packageType.value);
        }
    });

    // Manual price calculation
    calculatePrice.addEventListener('click', () => {
        const price = parseFloat(manualPrice.value) || 0;
        priceDisplay.textContent = price.toFixed(2);
    });

    function updatePrice(productId, packageType) {
        const price = prices[productId][packageType];
        priceDisplay.textContent = price;
    }

    // Print functionality
    document.getElementById('printBtn').addEventListener('click', () => {
        window.print();
    });

    // Add selected class to product buttons
    document.querySelectorAll('.product-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.product-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
        });
    });
});
