
const products = [
    { id: 1, name: "Coca-Cola", price: 12000, category: "Ichimlik", image: "https://www.coca-cola.com/content/dam/onexp/uz/uz/product-images/coca-cola-classic.jpg" },
    { id: 2, name: "Pepsi", price: 12000, category: "Ichimlik", image: "https://www.pepsicoproductfacts.com/content/image/products/4c04ef698005f44a_00012000000133_C1N1.png?r=20250808" },
    { id: 3, name: "Hydro Life", price: 5000, category: "Ichimlik", image: "https://hydrolife.uz/thumb/2/yjv3CV_cDfyNQa7R_QlZAA/r/d/gaz-sbor_0.jpg" },
    { id: 4, name: "Fanta", price: 12000, category: "Ichimlik", image: "https://www.coca-cola.com/content/dam/onexp/uz/uz/product-images/uz_fanta_prod_fanta-orange.jpg" },
    { id: 5, name: "Sprite", price: 12000, category: "Ichimlik", image: "https://www.coca-cola.com/content/dam/onexp/uz/uz/brand-sprite/new/uz_sprite_prod_750x750_v1.jpg" },
    { id: 6, name: "Fuse Tea", price: 10000, category: "Ichimlik", image: "https://th.bing.com/th/id/OIP.Hz7FQFft2E_DPwyY41pXVAHaHa?w=183&h=182&c=7&r=0&o=7&pid=1.7&rm=3" },
    { id: 7, name: "Nestea", price: 10000, category: "Ichimlik", image: "https://content.etilize.com/2000/1032527967.jpg" },
    { id: 8, name: "Flash", price: 10000, category: "Ichimlik", image: "https://th.bing.com/th/id/OIP.g7PLwcMXXJNr1OspQYmkJwHaH_?w=184&h=200&c=7&r=0&o=7&pid=1.7&rm=3" },
    { id: 9, name: "Bliss Sok", price: 9000, category: "Ichimlik", image: "https://tse2.mm.bing.net/th/id/OIP.NVIk7GgzlnJF6gwR-QTrPwHaJ4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 10, name: "Dena Sok", price: 9000, category: "Ichimlik", image: "https://tse2.mm.bing.net/th/id/OIP.dp3VbhNBadY_qIZLyhH9cAHaJ4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },

    { id: 11, name: "Lay's", price: 12000, category: "Snack", image: "https://th.bing.com/th/id/OIP.AoYYIU_BRnGy30NDpH8ukQHaHa?w=197&h=197&c=7&r=0&o=7&pid=1.7&rm=3" },
    { id: 12, name: "CHEERS", price: 10000, category: "Snack", image: "https://tse4.mm.bing.net/th/id/OIP.tJHTIrNQ2lidL6wwgmYLFgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 13, name: "Cheetos", price: 12000, category: "Snack", image: "https://tse1.mm.bing.net/th/id/OIP.fyUP9nL5cATm_sBHNCpKDgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 14, name: "Pringles", price: 25000, category: "Snack", image: "https://marigroup.uz/wp-content/uploads/2024/04/26.jpg" },
    { id: 15, name: "Kirieshki", price: 5000, category: "Snack", image: "https://tse4.mm.bing.net/th/id/OIP.6oIF3wFrj64Aaolt-rfnVAHaIt?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 16, name: "3 Korochki", price: 5000, category: "Snack", image: "https://tse1.mm.bing.net/th/id/OIP._S6imDkVnm14lUx4CxeTogHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 17, name: "Pista", price: 15000, category: "Snack", image: "https://tse1.mm.bing.net/th/id/OIP.utno2X0qlSPgjZikqLG_UwHaHa?r=0&w=720&h=720&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 18, name: "Yong'oq", price: 12000, category: "Snack", image: "https://tse3.mm.bing.net/th/id/OIP.AYFeOu1WVK9e4_KwUAm0VwHaLH?r=0&w=1200&h=1800&rs=1&pid=ImgDetMain&o=7&rm=3" },

    { id: 19, name: "Snickers", price: 8000, category: "Snack", image: "https://th.bing.com/th/id/OIP.8cjKYqwNWf61Fz8ybxjRsgHaEK?w=303&h=180&c=7&r=0&o=7&pid=1.7&rm=3" },
    { id: 20, name: "Mars", price: 8000, category: "Snack", image: "https://tse4.mm.bing.net/th/id/OIP.qaiIrD0tn3-zlaFmppjE1gHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 21, name: "Twix", price: 8000, category: "Snack", image: "https://tse1.mm.bing.net/th/id/OIP.B3wvbZxQQmSX1GS0bD5KqAHaC-?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 22, name: "KitKat", price: 8000, category: "Snack", image: "https://tse4.mm.bing.net/th/id/OIP.p1lNmwB80fUplFYvHRh30QHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 23, name: "Alpen Gold", price: 15000, category: "Snack", image: "https://tse1.mm.bing.net/th/id/OIP.QKi46Ff4I9l1QiyMbhGe9QHaLK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 24, name: "Oreo", price: 10000, category: "Snack", image: "https://tse1.mm.bing.net/th/id/OIP.ZK9Phf_c5_P5xv5HbCdcsQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 25, name: "Kinder", price: 10000, category: "Snack", image: "https://th.bing.com/th/id/R.92e9963f96c1dbc35423a8cfdcd0e934?rik=ARo%2fVzxF%2fUfOuw&pid=ImgRaw&r=0" },

    { id: 26, name: "Tovuqli sendvich", price: 22000, category: "Yegulik", image: "https://tse4.mm.bing.net/th/id/OIP.LbImc7Z3-caaY_R4n_X4jgHaE6?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 27, name: "Kolbasali sendvich", price: 18000, category: "Yegulik", image: "https://tse4.mm.bing.net/th/id/OIP.LbImc7Z3-caaY_R4n_X4jgHaE6?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 28, name: "Pishloqli sendvich", price: 18000, category: "Yegulik", image: "https://tse4.mm.bing.net/th/id/OIP.LbImc7Z3-caaY_R4n_X4jgHaE6?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },

    { id: 29, name: "Pechenye", price: 7000, category: "Snack", image: "https://tse4.mm.bing.net/th/id/OIP.wfaOXxv43EY84lCl1VID6gHaJ4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 30, name: "Vafli", price: 7000, category: "Snack", image: "https://tse2.mm.bing.net/th/id/OIP.j0MJMLD1YGprUCmearIVbgHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" }
];

// SAVATCHA
let cart = JSON.parse(localStorage.getItem("campusCart")) || [];

const productsBox = document.getElementById("products");
const cartBox = document.getElementById("cartItems") ||
                document.getElementById("cart");

function formatPrice(price) {
    return Number(price).toLocaleString("uz-UZ") + " so'm";
}

function saveCart() {
    localStorage.setItem("campusCart", JSON.stringify(cart));
}

function updateCartCount() {
    const countBox = document.getElementById("cartCount");

    if (countBox) {
        countBox.textContent = cart.reduce(
            (sum, item) => sum + (item.quantity || 1), 0
        );
    }
}

// MAHSULOTLARNI CHIQARISH
function showProducts() {
    if (!productsBox) return;

    productsBox.innerHTML = "";

    products.forEach(product => {
        const imageHTML = product.image
            ? `<img class="product-image"
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                    onerror="this.style.display='none';">`
            : "";

        productsBox.innerHTML += `
            <div class="product-card">
                ${imageHTML}
                <h3>${product.name}</h3>
                <p>${formatPrice(product.price)}</p>
                <button onclick="addToCart(${product.id})">
                    Savatchaga qo‘shish
                </button>
            </div>
        `;
    });
}

// SAVATCHAGA QO‘SHISH
function addToCart(id) {
    const product = products.find(item => item.id === id);
    if (!product) return;

    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity = (existing.quantity || 1) + 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    showCart();
    updateCartCount();
}

// SAVATCHANI KO‘RSATISH
function showCart() {
    if (!cartBox) return;

    cartBox.innerHTML = "";

    if (cart.length === 0) {
        cartBox.innerHTML = "<p>Savatcha hozircha bo‘sh.</p>";
        return;
    }

    cart.forEach(item => {
        const imageHTML = item.image
            ? `<img src="${item.image}"
                    alt="${item.name}"
                    width="65"
                    onerror="this.style.display='none';">`
            : "";

        cartBox.innerHTML += `
            <div class="cart-item">
                ${imageHTML}
                <div>
                    <h3>${item.name}</h3>
                    <p>${formatPrice(item.price)}</p>

                    <button onclick="changeQuantity(${item.id}, -1)">−</button>
                    <b>${item.quantity || 1}</b>
                    <button onclick="changeQuantity(${item.id}, 1)">+</button>

                    <button onclick="removeItem(${item.id})">
                        O‘chirish
                    </button>
                </div>
            </div>
        `;
    });

    const total = cart.reduce(
        (sum, item) => sum + item.price * (item.quantity || 1), 0
    );

    cartBox.innerHTML += `
        <h3>Jami: ${formatPrice(total)}</h3>
    `;
}

// MIQDORNI O‘ZGARTIRISH
function changeQuantity(id, amount) {
    const item = cart.find(product => product.id === id);
    if (!item) return;

    item.quantity = (item.quantity || 1) + amount;

    if (item.quantity <= 0) {
        cart = cart.filter(product => product.id !== id);
    }

    saveCart();
    showCart();
    updateCartCount();
}

// MAHSULOTNI O‘CHIRISH
function removeItem(id) {
    cart = cart.filter(item => item.id !== id);

    saveCart();
    showCart();
    updateCartCount();
}

// SAHIFA OCHILGANDA
showProducts();
showCart();
updateCartCount();

// BUYURTMA YUBORISH
const orderForm = document.getElementById("orderForm");

if (orderForm) {
    orderForm.addEventListener("submit", function(event) {
        event.preventDefault();

        if (cart.length === 0) {
            alert("Avval savatchaga mahsulot qo‘shing!");
            return;
        }

        const order = {
            id: Date.now(),
            firstName: document.getElementById("firstName").value,
            lastName: document.getElementById("lastName").value,
            role: document.getElementById("role").value,
            building: document.getElementById("building").value,
            floor: document.getElementById("floor").value,
            room: document.getElementById("room").value,
            phone: document.getElementById("phone").value,

            products: cart.map(item => ({
                id: item.id,
                name: item.name,
                price: item.price,
                image: item.image,
                quantity: item.quantity || 1
            })),

            total: cart.reduce(
                (sum, item) => sum + item.price * (item.quantity || 1), 0
            ),

            status: "Yangi buyurtma"
        };

        const orders = JSON.parse(localStorage.getItem("orders")) || [];

        orders.push(order);
        localStorage.setItem("orders", JSON.stringify(orders));

        alert(
            "Buyurtmangiz yuborildi!\nBuyurtma ID: " + order.id
        );

        cart = [];
        saveCart();
        showCart();
        updateCartCount();
        orderForm.reset();
    });
}

// BUYURTMA HOLATINI KUZATISH
function trackOrder() {
    const trackingInput = document.getElementById("trackingId");
    const result = document.getElementById("trackingResult");

    if (!trackingInput || !result) return;

    const id = trackingInput.value.trim();

    if (!id) {
        result.innerHTML = "<p>Buyurtma raqamini kiriting!</p>";
        return;
    }

    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    const order = orders.find(item => String(item.id) === id);

    if (!order) {
        result.innerHTML = "<p>Bunday buyurtma topilmadi!</p>";
        return;
    }

    result.innerHTML = `
        <h3>Buyurtma topildi!</h3>
        <p><b>Buyurtma raqami:</b> ${order.id}</p>
        <p><b>Ism:</b> ${order.firstName} ${order.lastName}</p>
        <p><b>Manzil:</b> ${order.building}, ${order.floor}-qavat, ${order.room}-xona</p>
        <h3>Holati: ${order.status}</h3>
    `;
}
