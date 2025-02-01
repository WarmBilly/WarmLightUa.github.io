// Дані про лампи
const products = {
    "1": { title: "Лампа Модерн", price: "1200 грн", image: "lamp1.jpg" },
    "2": { title: "Лампа Класика", price: "1400 грн", image: "lamp2.jpg" },
    "3": { title: "Лампа Лофт", price: "1600 грн", image: "lamp3.jpg" },
};

// Відображення товару
if (window.location.pathname.includes("product.html")) {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id");
    if (products[productId]) {
        document.getElementById("product-image").src = products[productId].image;
        document.getElementById("product-title").textContent = products[productId].title;
        document.getElementById("product-price").textContent = "Ціна: " + products[productId].price;
        localStorage.setItem("selectedProduct", JSON.stringify(products[productId]));
    }
}

// Додавання у кошик
function addToCart() {
    const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));
    if (selectedProduct) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(selectedProduct);
        localStorage.setItem("cart", JSON.stringify(cart));
        window.location.href = "cart.html";
    }
}

// Відображення кошика
if (window.location.pathname.includes("cart.html")) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartList = document.getElementById("cart-items");
    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item.title + " - " + item.price;
        cartList.appendChild(li);
    });
}

// Оформлення замовлення
function checkout() {
    alert("Дякуємо за замовлення!");
    localStorage.removeItem("cart");
    window.location.href = "index.html";
}
