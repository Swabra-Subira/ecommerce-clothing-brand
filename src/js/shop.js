// ============================================================
// shop.js — Product rendering, filter, sort logic
// ============================================================
import { products, getByCategory } from "./data.js";
import { addToCart, updateCartBadge } from "./cart.js";
import { productCardHTML } from "./main.js";

let activeCategory = "all";
let activeSort     = "default";

document.addEventListener("DOMContentLoaded", () => {
  updateCartBadge();

  // Read category from URL query param (e.g. shop.html?category=women)
  const params = new URLSearchParams(window.location.search);
  const catParam = params.get("category");
  if (catParam) {
    activeCategory = catParam;
    document.querySelectorAll(".filter-pill").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.category === catParam);
    });
  }

  renderProducts();
  bindFilters();
  bindSort();
  bindAddToCart();
});

function getFilteredSorted() {
  let list = getByCategory(activeCategory);

  if (activeSort === "price-asc")  list = [...list].sort((a, b) => a.price - b.price);
  if (activeSort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
  if (activeSort === "newest")     list = [...list].filter(p => p.newArrival).concat(
                                           [...list].filter(p => !p.newArrival));
  return list;
}

function renderProducts() {
  const grid = document.getElementById("product-grid");
  if (!grid) return;
  const list = getFilteredSorted();

  if (list.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1">
        <i class="fa-regular fa-face-sad-tear"></i>
        <h3>No products found</h3>
        <p>Try a different category or filter.</p>
      </div>`;
    return;
  }

  grid.innerHTML = list.map(p => productCardHTML(p)).join("");

  // Wire up card clicks → product detail
  grid.querySelectorAll(".product-card").forEach(card => {
    card.addEventListener("click", e => {
      if (e.target.classList.contains("add-to-cart-btn")) return;
      window.location.href = `product.html?id=${card.dataset.id}`;
    });
    card.addEventListener("keydown", e => {
      if (e.key === "Enter") window.location.href = `product.html?id=${card.dataset.id}`;
    });
  });

  bindAddToCart();
}

function bindFilters() {
  document.querySelectorAll(".filter-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-pill").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.dataset.category;
      renderProducts();
    });
  });
}

function bindSort() {
  const select = document.getElementById("sort-select");
  if (!select) return;
  select.addEventListener("change", () => {
    activeSort = select.value;
    renderProducts();
  });
}

function bindAddToCart() {
  document.querySelectorAll(".add-to-cart-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      e.stopPropagation();
      const id = Number(btn.dataset.id);
      const product = products.find(p => p.id === id);
      if (!product) return;
      addToCart({
        productId: product.id,
        name:      product.name,
        image:     product.image,
        size:      product.sizes[0],
        color:     product.colors[0],
        qty:       1,
        price:     product.price
      });
      // Brief visual feedback
      btn.textContent = "✓ Added";
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = "Add to Cart";
        btn.disabled = false;
      }, 1200);
    });
  });
}
