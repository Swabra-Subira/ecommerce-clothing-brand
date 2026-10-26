// ============================================================
// cart.js — Cart state management via localStorage
// ============================================================

const CART_KEY = "ecb_cart";

// Read cart from localStorage
export function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
}

// Save cart to localStorage
function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

// Add an item (or increment qty if same product+size+color)
export function addToCart(item) {
  const cart = getCart();
  const existing = cart.find(
    c => c.productId === item.productId &&
         c.size     === item.size &&
         c.color    === item.color
  );
  if (existing) {
    existing.qty += item.qty;
  } else {
    cart.push({ ...item });
  }
  saveCart(cart);
  updateCartBadge();
}

// Update qty for a specific cart entry by index
export function updateQty(index, qty) {
  const cart = getCart();
  if (qty < 1) return removeFromCart(index);
  cart[index].qty = qty;
  saveCart(cart);
  updateCartBadge();
}

// Remove item by index
export function removeFromCart(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  updateCartBadge();
}

// Clear entire cart
export function clearCart() {
  localStorage.removeItem(CART_KEY);
  updateCartBadge();
}

// Total item count (sum of qtys)
export function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

// Subtotal
export function getSubtotal() {
  return getCart().reduce((sum, item) => sum + item.price * item.qty, 0);
}

// Update the badge in the navbar
export function updateCartBadge() {
  const badge = document.querySelector(".cart-badge");
  if (!badge) return;
  const count = getCartCount();
  badge.textContent = count;
  badge.classList.toggle("hidden", count === 0);
}
