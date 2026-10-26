// ============================================================
// main.js — Shared logic: nav, mobile menu, cart badge
// ============================================================
import { updateCartBadge, getCart } from "./cart.js";
import { getFeaturedProducts } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  updateCartBadge();
  highlightActiveNav();
  renderFeaturedProducts();
});

// Mobile hamburger menu
function initMobileMenu() {
  const hamburger = document.querySelector(".hamburger");
  const mobileNav = document.querySelector(".mobile-nav");
  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    mobileNav.classList.toggle("open");
    const isOpen = hamburger.classList.contains("open");
    hamburger.setAttribute("aria-expanded", isOpen);
  });

  // Close on outside click
  document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
      hamburger.classList.remove("open");
      mobileNav.classList.remove("open");
      hamburger.setAttribute("aria-expanded", false);
    }
  });
}

// Mark the current page link as active
function highlightActiveNav() {
  const links = document.querySelectorAll(".navbar__links a, .mobile-nav a");
  const current = window.location.pathname.split("/").pop() || "index.html";
  links.forEach(link => {
    const href = link.getAttribute("href")?.split("/").pop();
    if (href === current) link.classList.add("active");
  });
}

// Render featured products on the homepage
function renderFeaturedProducts() {
  const grid = document.getElementById("featured-grid");
  if (!grid) return;

  const featured = getFeaturedProducts();
  grid.innerHTML = featured.map(p => productCardHTML(p)).join("");

  // Navigate to product detail on card click
  grid.querySelectorAll(".product-card").forEach(card => {
    card.addEventListener("click", () => {
      window.location.href = `product.html?id=${card.dataset.id}`;
    });
  });
}

// Shared product card HTML builder
export function productCardHTML(product) {
  const badge = product.newArrival
    ? `<span class="product-card__badge">New</span>`
    : "";
  return `
    <div class="product-card" data-id="${product.id}" role="article" tabindex="0"
         aria-label="${product.name}, KSh ${product.price.toLocaleString()}">
      <div class="product-card__img-wrap">
        ${badge}
        <img src="${product.image}" alt="${product.name}" loading="lazy">
      </div>
      <div class="product-card__body">
        <p class="product-card__category">${product.category}</p>
        <h3 class="product-card__name">${product.name}</h3>
        <p class="product-card__price">KSh ${product.price.toLocaleString()}</p>
        <button class="btn btn--primary btn--sm btn--full add-to-cart-btn"
                data-id="${product.id}" aria-label="Add ${product.name} to cart">
          Add to Cart
        </button>
      </div>
    </div>`;
}
