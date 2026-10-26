// ============================================================
// product.js — Product detail page logic
// ============================================================
import { getProductById, getRelated } from "./data.js";
import { addToCart, updateCartBadge } from "./cart.js";
import { productCardHTML } from "./main.js";

let selectedSize  = null;
let selectedColor = null;
let qty = 1;

document.addEventListener("DOMContentLoaded", () => {
  updateCartBadge();

  const params  = new URLSearchParams(window.location.search);
  const product = getProductById(params.get("id"));

  if (!product) {
    document.body.innerHTML = `
      <div class="empty-state" style="padding:8rem 2rem;text-align:center">
        <h2>Product not found</h2>
        <a href="shop.html" class="btn btn--primary" style="margin-top:1.5rem">Back to Shop</a>
      </div>`;
    return;
  }

  renderProduct(product);
  renderRelated(product);
  initTabs();
});

function renderProduct(p) {
  // Page title & breadcrumb
  document.title = `${p.name} — Clothing Brand`;
  document.getElementById("breadcrumb-name").textContent = p.name;

  // Image
  document.getElementById("product-img").src = p.image;
  document.getElementById("product-img").alt = p.name;

  // Info
  document.getElementById("product-category").textContent = p.category;
  document.getElementById("product-name").textContent     = p.name;
  document.getElementById("product-price").textContent    = `$${p.price.toFixed(2)}`;
  document.getElementById("product-desc").textContent     = p.description;

  // Sizes
  const sizeWrap = document.getElementById("size-options");
  sizeWrap.innerHTML = p.sizes.map(s => `
    <button class="size-btn" data-size="${s}" aria-label="Size ${s}">${s}</button>
  `).join("");
  sizeWrap.querySelectorAll(".size-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      sizeWrap.querySelectorAll(".size-btn").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      selectedSize = btn.dataset.size;
    });
  });
  // Default select first size
  sizeWrap.querySelector(".size-btn")?.click();

  // Colors
  const colorWrap = document.getElementById("color-options");
  colorWrap.innerHTML = p.colors.map((c, i) => `
    <button class="color-swatch" data-color="${c}"
            style="background-color:${p.colorHex[i]}"
            aria-label="Color: ${c}" title="${c}"></button>
  `).join("");
  colorWrap.querySelectorAll(".color-swatch").forEach(swatch => {
    swatch.addEventListener("click", () => {
      colorWrap.querySelectorAll(".color-swatch").forEach(s => s.classList.remove("selected"));
      swatch.classList.add("selected");
      selectedColor = swatch.dataset.color;
      document.getElementById("selected-color-name").textContent = selectedColor;
    });
  });
  colorWrap.querySelector(".color-swatch")?.click();

  // Qty stepper
  const qtyInput = document.getElementById("qty-input");
  document.getElementById("qty-minus").addEventListener("click", () => {
    if (qty > 1) { qty--; qtyInput.value = qty; }
  });
  document.getElementById("qty-plus").addEventListener("click", () => {
    qty++; qtyInput.value = qty;
  });
  qtyInput.addEventListener("change", () => {
    qty = Math.max(1, parseInt(qtyInput.value) || 1);
    qtyInput.value = qty;
  });

  // Add to Cart
  document.getElementById("add-to-cart-btn").addEventListener("click", () => {
    addToCart({ productId: p.id, name: p.name, image: p.image,
                size: selectedSize, color: selectedColor, qty, price: p.price });
    showToast(`"${p.name}" added to cart`);
  });

  // Buy Now
  document.getElementById("buy-now-btn").addEventListener("click", () => {
    addToCart({ productId: p.id, name: p.name, image: p.image,
                size: selectedSize, color: selectedColor, qty, price: p.price });
    window.location.href = "checkout.html";
  });
}

function renderRelated(product) {
  const grid = document.getElementById("related-grid");
  if (!grid) return;
  const related = getRelated(product);
  if (related.length === 0) {
    grid.closest(".section")?.remove();
    return;
  }
  grid.innerHTML = related.map(p => productCardHTML(p)).join("");
  grid.querySelectorAll(".product-card").forEach(card => {
    card.addEventListener("click", () => {
      window.location.href = `product.html?id=${card.dataset.id}`;
    });
  });
}

function initTabs() {
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(btn.dataset.tab)?.classList.add("active");
    });
  });
}

function showToast(message) {
  const existing = document.getElementById("toast");
  if (existing) existing.remove();
  const toast = document.createElement("div");
  toast.id = "toast";
  toast.textContent = message;
  Object.assign(toast.style, {
    position: "fixed", bottom: "24px", left: "50%",
    transform: "translateX(-50%)",
    background: "#1a1a1a", color: "#fff",
    padding: "12px 24px", borderRadius: "50px",
    fontSize: "0.88rem", fontWeight: "600",
    boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
    zIndex: "999", opacity: "0",
    transition: "opacity 0.2s ease"
  });
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.style.opacity = "1");
  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}
