        let currentLang = 'fa';
        let cart = [];
        let products = [
            {
                id: 1,
                name: { fa: 'رژ لب مات', en: 'Matte Lipstick' },
                price: 250000,
                category: 'makeup',
                image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop&crop=center',
                description: { fa: 'رژ لب با دوام بالا', en: 'Long-lasting matte lipstick' }
            },
            {
                id: 2,
                name: { fa: 'کرم مرطوب کننده', en: 'Moisturizing Cream' },
                price: 180000,
                category: 'skincare',
                image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop&crop=center',
                description: { fa: 'کرم مرطوب کننده طبیعی', en: 'Natural moisturizing cream' }
            },
            {
                id: 3,
                name: { fa: 'عطر زنانه', en: 'Women\'s Perfume' },
                price: 450000,
                category: 'fragrance',
                image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop&crop=center',
                description: { fa: 'عطر لوکس با ماندگاری بالا', en: 'Luxury long-lasting perfume' }
            },
            {
                id: 4,
                name: { fa: 'ریمل ضد آب', en: 'Waterproof Mascara' },
                price: 320000,
                category: 'makeup',
                image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=400&fit=crop&crop=center',
                description: { fa: 'ریمل ضد آب و ضد لک', en: 'Waterproof and smudge-proof mascara' }
            },
            {
                id: 5,
                name: { fa: 'سرم ویتامین C', en: 'Vitamin C Serum' },
                price: 280000,
                category: 'skincare',
                image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop&crop=center',
                description: { fa: 'سرم روشن کننده پوست', en: 'Brightening skin serum' }
            },
            {
                id: 6,
                name: { fa: 'ادکلن مردانه', en: 'Men\'s Cologne' },
                price: 380000,
                category: 'fragrance',
                image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=400&fit=crop&crop=center',
                description: { fa: 'ادکلن اسپرت مردانه', en: 'Sporty men\'s cologne' }
            }
        ];

        const translations = {
            fa: {
                logoText: '✨ گلامور استور',
                navHome: 'خانه',
                navProducts: 'محصولات',
                navCategories: 'دسته‌بندی',
                navAbout: 'درباره ما',
                navContact: 'تماس',
                heroTitle: 'زیبایی طبیعی شما',
                heroSubtitle: 'بهترین محصولات آرایشی و بهداشتی با کیفیت جهانی',
                heroBtn: 'مشاهده محصولات',
                categoriesTitle: 'دسته‌بندی محصولات',
                catMakeup: 'آرایش',
                catMakeupDesc: 'لوازم آرایش حرفه‌ای',
                catSkincare: 'مراقبت از پوست',
                catSkincareDesc: 'محصولات مراقبت پوست',
                catFragrance: 'عطر و ادکلن',
                catFragranceDesc: 'عطرهای لوکس و منحصر',
                productsTitle: 'محصولات پرفروش',
                filterAll: 'همه',
                filterMakeup: 'آرایش',
                filterSkincare: 'مراقبت پوست',
                filterFragrance: 'عطر',
                aboutTitle: 'درباره گلامور استور',
                aboutText: 'ما با بیش از 10 سال تجربه در زمینه فروش محصولات آرایشی و بهداشتی، بهترین برندهای جهانی را به شما ارائه می‌دهیم. کیفیت، اصالت و رضایت شما اولویت اصلی ماست.',
                statProducts: 'محصول',
                statCustomers: 'مشتری راضی',
                guaranteeTitle: 'ضمانت کیفیت',
                guaranteeText: 'تمام محصولات ما دارای ضمانت اصالت و کیفیت هستند',
                addToCart: 'افزودن به سبد',
                cartTitle: 'سبد خرید',
                emptyCart: 'سبد خرید شما خالی است',
                totalLabel: 'مجموع:',
                checkoutBtn: 'تسویه حساب',
                toman: 'تومان'
            },
            en: {
                logoText: '✨ Glamour Store',
                navHome: 'Home',
                navProducts: 'Products',
                navCategories: 'Categories',
                navAbout: 'About',
                navContact: 'Contact',
                heroTitle: 'Your Natural Beauty',
                heroSubtitle: 'Best cosmetic and health products with global quality',
                heroBtn: 'View Products',
                categoriesTitle: 'Product Categories',
                catMakeup: 'Makeup',
                catMakeupDesc: 'Professional makeup tools',
                catSkincare: 'Skincare',
                catSkincareDesc: 'Skincare products',
                catFragrance: 'Fragrance',
                catFragranceDesc: 'Luxury and exclusive perfumes',
                productsTitle: 'Best Selling Products',
                filterAll: 'All',
                filterMakeup: 'Makeup',
                filterSkincare: 'Skincare',
                filterFragrance: 'Fragrance',
                aboutTitle: 'About Glamour Store',
                aboutText: 'With over 10 years of experience in selling cosmetic and health products, we offer you the best global brands. Quality, authenticity and your satisfaction are our main priorities.',
                statProducts: 'Products',
                statCustomers: 'Happy Customers',
                guaranteeTitle: 'Quality Guarantee',
                guaranteeText: 'All our products come with authenticity and quality guarantee',
                addToCart: 'Add to Cart',
                cartTitle: 'Shopping Cart',
                emptyCart: 'Your cart is empty',
                totalLabel: 'Total:',
                checkoutBtn: 'Checkout',
                toman: 'Toman'
            }
        };

        function toggleLanguage() {
            currentLang = currentLang === 'fa' ? 'en' : 'fa';
            const html = document.documentElement;
            
            if (currentLang === 'en') {
                html.setAttribute('lang', 'en');
                html.setAttribute('dir', 'ltr');
                document.body.className = document.body.className.replace('font-persian', 'font-english');
                document.getElementById('lang-btn').textContent = 'فا';
            } else {
                html.setAttribute('lang', 'fa');
                html.setAttribute('dir', 'rtl');
                document.body.className = document.body.className.replace('font-english', 'font-persian');
                document.getElementById('lang-btn').textContent = 'EN';
            }
            
            updateTexts();
            renderProducts();
        }

        function updateTexts() {
            const t = translations[currentLang];
            
            document.getElementById('logo-text').textContent = t.logoText;
            document.getElementById('nav-home').textContent = t.navHome;
            document.getElementById('nav-products').textContent = t.navProducts;
            document.getElementById('nav-categories').textContent = t.navCategories;
            document.getElementById('nav-about').textContent = t.navAbout;
            document.getElementById('nav-contact').textContent = t.navContact;
            document.getElementById('hero-title').textContent = t.heroTitle;
            document.getElementById('hero-subtitle').textContent = t.heroSubtitle;
            document.getElementById('hero-btn').textContent = t.heroBtn;
            document.getElementById('categories-title').textContent = t.categoriesTitle;
            document.getElementById('cat-makeup').textContent = t.catMakeup;
            document.getElementById('cat-makeup-desc').textContent = t.catMakeupDesc;
            document.getElementById('cat-skincare').textContent = t.catSkincare;
            document.getElementById('cat-skincare-desc').textContent = t.catSkincareDesc;
            document.getElementById('cat-fragrance').textContent = t.catFragrance;
            document.getElementById('cat-fragrance-desc').textContent = t.catFragranceDesc;
            document.getElementById('products-title').textContent = t.productsTitle;
            document.getElementById('filter-all').textContent = t.filterAll;
            document.getElementById('filter-makeup').textContent = t.filterMakeup;
            document.getElementById('filter-skincare').textContent = t.filterSkincare;
            document.getElementById('filter-fragrance').textContent = t.filterFragrance;
            document.getElementById('about-title').textContent = t.aboutTitle;
            document.getElementById('about-text').textContent = t.aboutText;
            document.getElementById('stat-products').textContent = t.statProducts;
            document.getElementById('stat-customers').textContent = t.statCustomers;
            document.getElementById('guarantee-title').textContent = t.guaranteeTitle;
            document.getElementById('guarantee-text').textContent = t.guaranteeText;
            document.getElementById('cart-title').textContent = t.cartTitle;
            document.getElementById('empty-cart').textContent = t.emptyCart;
            document.getElementById('total-label').textContent = t.totalLabel;
            document.getElementById('checkout-btn').textContent = t.checkoutBtn;
        }

        function renderProducts(filter = 'all') {
            const grid = document.getElementById('products-grid');
            const filteredProducts = filter === 'all' ? products : products.filter(p => p.category === filter);
            
            grid.innerHTML = filteredProducts.map(product => `
                <div class="product-card bg-white rounded-2xl shadow-lg overflow-hidden fade-in">
                    <div class="relative overflow-hidden">
                        <img src="${product.image}" alt="${product.name[currentLang]}" class="product-image" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMDAgMTAwQzE2MS4zNDMgMTAwIDEzMCAxMzEuMzQzIDEzMCAxNzBDMTMwIDIwOC42NTcgMTYxLjM0MyAyNDAgMjAwIDI0MEM2MzguNjU3IDI0MCAyNzAgMjA4LjY1NyAyNzAgMTcwQzI3MCAxMzEuMzQzIDIzOC42NTcgMTAwIDIwMCAxMDBaIiBmaWxsPSIjRTVFN0VCIi8+CjxwYXRoIGQ9Ik0yMDAgMTMwQzE3Ny45MDkgMTMwIDE2MCAzNDcuOTA5IDE2MCAzNzBDMTYwIDM5Mi4wOTEgMTc3LjkwOSAyMTAgMjAwIDIxMEMyMjIuMDkxIDIxMCAyNDAgMzkyLjA5MSAyNDAgMzcwQzI0MCAzNDcuOTA5IDIyMi4wOTEgMTMwIDIwMCAxMzBaIiBmaWxsPSIjRDFENUREIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMzIwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOUI5QjlCIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiPk5vIEltYWdlPC90ZXh0Pgo8L3N2Zz4K'; this.alt='تصویر در دسترس نیست';">
                        <div class="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                            جدید
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2 text-gray-800">${product.name[currentLang]}</h3>
                        <p class="text-gray-600 mb-4 text-sm leading-relaxed">${product.description[currentLang]}</p>
                        <div class="flex items-center justify-between mb-4">
                            <div class="text-2xl font-bold text-purple-600">
                                ${product.price.toLocaleString()}
                            </div>
                            <div class="text-sm text-gray-500">
                                ${translations[currentLang].toman}
                            </div>
                        </div>
                        <button onclick="addToCart(${product.id})" class="btn-primary w-full text-white py-3 rounded-lg font-semibold">
                            ${translations[currentLang].addToCart}
                        </button>
                    </div>
                </div>
            `).join('');
        }

        function filterProducts(category) {
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            document.getElementById(`filter-${category}`).classList.add('active');
            renderProducts(category);
        }

        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ ...product, quantity: 1 });
            }
            
            updateCartUI();
            
            // Add bounce animation to cart icon
            const cartIcon = document.querySelector('button[onclick="toggleCart()"]');
            cartIcon.classList.add('cart-bounce');
            setTimeout(() => cartIcon.classList.remove('cart-bounce'), 600);
        }

        function updateCartUI() {
            const cartCount = document.getElementById('cart-count');
            const cartItems = document.getElementById('cart-items');
            const totalPrice = document.getElementById('total-price');
            
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            
            cartCount.textContent = totalItems;
            
            if (cart.length === 0) {
                cartItems.innerHTML = `<p class="text-gray-500 text-center">${translations[currentLang].emptyCart}</p>`;
            } else {
                cartItems.innerHTML = cart.map(item => `
                    <div class="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-lg">
                        <div class="flex items-center">
                            <span class="text-2xl mr-3">${item.image}</span>
                            <div>
                                <h4 class="font-semibold">${item.name[currentLang]}</h4>
                                <p class="text-sm text-gray-600">${item.quantity} × ${item.price.toLocaleString()}</p>
                            </div>
                        </div>
                        <button onclick="removeFromCart(${item.id})" class="text-red-500 hover:text-red-700">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                            </svg>
                        </button>
                    </div>
                `).join('');
            }
            
            totalPrice.textContent = `${total.toLocaleString()} ${translations[currentLang].toman}`;
        }

        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCartUI();
        }

        function toggleCart() {
            const sidebar = document.getElementById('cart-sidebar');
            const overlay = document.getElementById('cart-overlay');
            
            if (sidebar.classList.contains('translate-x-full')) {
                sidebar.classList.remove('translate-x-full');
                overlay.classList.remove('hidden');
            } else {
                sidebar.classList.add('translate-x-full');
                overlay.classList.add('hidden');
            }
        }

        function scrollToProducts() {
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            renderProducts();
            updateTexts();
            
            // Add active class styling
            const style = document.createElement('style');
            style.textContent = `
                .filter-btn.active {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                }
                .filter-btn {
                    color: #6b7280;
                }
            `;
            document.head.appendChild(style);
        });