const storeData = {
  men: {
    title: "Men's Wear",
    products: [
      { name: "Classic Black Senator", price: 45000, sizes: "M, L, XL", stock: true, image: "images/men-1.jpg" },
      { name: "Luxury Casual Set", price: 38000, sizes: "S, M, L", stock: true, image: "images/men-2.jpg" },
      { name: "Premium Kaftan", price: 52000, sizes: "L, XL", stock: false, image: "images/men-3.jpg" }
    ]
  },
  women: {
    title: "Female Wear",
    products: [
      { name: "Silk Evening Gown", price: 68000, sizes: "S, M, L", stock: true, image: "images/women-1.jpg" },
      { name: "Elegant Maxi Dress", price: 42000, sizes: "M, L, XL", stock: true, image: "images/women-2.jpg" },
      { name: "Chic Two-Piece", price: 36000, sizes: "S, M, L", stock: false, image: "images/women-3.jpg" }
    ]
  },
  corporate: {
    title: "Corporate Wear",
    products: [
      { name: "Tailored Power Suit", price: 75000, sizes: "M, L, XL", stock: true, image: "images/corporate-1.jpg" },
      { name: "Executive Blazer Set", price: 59000, sizes: "S, M, L", stock: true, image: "images/corporate-2.jpg" },
      { name: "Formal Shirt Collection", price: 28000, sizes: "M, L, XL", stock: true, image: "images/corporate-3.jpg" }
    ]
  },
  shoes: {
    title: "Shoes",
    products: [
      { name: "Italian Leather Loafers", price: 50000, sizes: "S, M, L", stock: true, image: "images/shoes-1.jpg" },
      { name: "Luxury Heels", price: 47000, sizes: "M, L, XL", stock: false, image: "images/shoes-2.jpg" },
      { name: "Signature Sneakers", price: 39000, sizes: "S, M, L, XL", stock: true, image: "images/shoes-3.jpg" }
    ]
  },
  bags: {
    title: "Bags",
    products: [
      { name: "Quilted Gold Accent Bag", price: 58000, sizes: "S, M, L", stock: true, image: "images/bags-1.jpg" },
      { name: "Structured Tote", price: 46000, sizes: "M, L, XL", stock: true, image: "images/bags-2.jpg" },
      { name: "Mini Luxe Crossbody", price: 31000, sizes: "S, M", stock: true, image: "images/bags-3.jpg" }
    ]
  },
  household: {
    title: "Household Accessories",
    products: [
      { name: "Velvet Throw Pillows", price: 21000, sizes: "S, M, L", stock: true, image: "images/home-1.jpg" },
      { name: "Gold Rim Serving Tray", price: 26000, sizes: "M, L", stock: true, image: "images/home-2.jpg" },
      { name: "Luxury Candle Set", price: 18000, sizes: "S, M", stock: false, image: "images/home-3.jpg" }
    ]
  }
};

const naira = new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 });
const whatsappNumber = "2349016861334";

function getCart() {
  return JSON.parse(localStorage.getItem("wendyCart") || "[]");
}

function saveCart(cart) {
  localStorage.setItem("wendyCart", JSON.stringify(cart));
}

function addToCart(item) {
  const cart = getCart();
  cart.push(item);
  saveCart(cart);
  renderCart();
}

function renderProducts(categoryKey) {
  const details = storeData[categoryKey];
  if (!details) return;

  document.getElementById("categoryTitle").textContent = details.title;
  const grid = document.getElementById("productGrid");

  grid.innerHTML = details.products.map((product) => {
    const msg = encodeURIComponent(`Hello I want to order ${product.name}`);
    const statusClass = product.stock ? "in-stock" : "out-stock";
    const statusText = product.stock ? "In Stock" : "Out of Stock";

    return `
      <article class="product-card">
        <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/600x750/222/ddd?text=Replace+Image'" />
        <div class="product-content">
          <h3>${product.name}</h3>
          <p class="price">${naira.format(product.price)}</p>
          <p class="meta">Sizes: ${product.sizes}</p>
          <p class="status ${statusClass}">${statusText}</p>
          <div class="action-row">
            <a class="btn btn-whatsapp" href="https://wa.me/${whatsappNumber}?text=${msg}" target="_blank" rel="noreferrer">Order Now</a>
            <button class="btn btn-add" data-product='${JSON.stringify(product)}'>Add to Cart</button>
          </div>
        </div>
      </article>
    `;
  }).join("");

  grid.querySelectorAll(".btn-add").forEach((button) => {
    button.addEventListener("click", () => {
      const item = JSON.parse(button.dataset.product);
      addToCart(item);
    });
  });
}

function renderCart() {
  const cart = getCart();
  const countNode = document.getElementById("cartCount");
  const itemsNode = document.getElementById("cartItems");
  const totalNode = document.getElementById("cartTotal");

  if (!countNode || !itemsNode || !totalNode) return;

  countNode.textContent = cart.length;

  if (!cart.length) {
    itemsNode.innerHTML = "<p>Your cart is empty.</p>";
    totalNode.textContent = naira.format(0);
    return;
  }

  itemsNode.innerHTML = cart.map((item, index) => `
    <div class="cart-item">
      <p><strong>${item.name}</strong></p>
      <p>${naira.format(item.price)}</p>
      <button class="btn btn-secondary" data-remove="${index}">Remove</button>
    </div>
  `).join("");

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  totalNode.textContent = naira.format(total);

  itemsNode.querySelectorAll("[data-remove]").forEach((button) => {
    button.addEventListener("click", () => {
      const position = Number(button.dataset.remove);
      const updated = getCart().filter((_, idx) => idx !== position);
      saveCart(updated);
      renderCart();
    });
  });
}

function initCartPanel() {
  const panel = document.getElementById("cartPanel");
  const toggle = document.getElementById("cartToggle");
  const close = document.getElementById("closeCart");
  const clear = document.getElementById("clearCart");

  if (!panel || !toggle || !close || !clear) return;

  toggle.addEventListener("click", () => panel.classList.add("open"));
  close.addEventListener("click", () => panel.classList.remove("open"));
  clear.addEventListener("click", () => {
    saveCart([]);
    renderCart();
  });
}

const categoryKey = document.body.dataset.category;
if (categoryKey) {
  renderProducts(categoryKey);
  renderCart();
  initCartPanel();
}
