// ============================================================
// store.js — Persistent store layer (localStorage)
// All admin edits are saved here. The storefront reads from
// here first; falls back to the static data.js defaults.
// ============================================================

import { products as defaultProducts } from "./data.js";

const KEYS = {
  PRODUCTS: "ecb_products",
  SETTINGS: "ecb_settings"
};

// ── Default store settings ───────────────────────────────────
const DEFAULT_SETTINGS = {
  brandName:    "ClothBrand",
  tagline:      "Effortlessly stylish clothing for the modern wardrobe.",
  email:        "hello@clothbrand.com",
  phone:        "+254 700 000 000",
  location:     "Nairobi, Kenya",
  hours:        "Mon – Fri, 9am – 6pm EAT",
  shipping:     500,
  instagram:    "https://instagram.com/",
  twitter:      "https://twitter.com/",
  facebook:     "https://facebook.com/",
  tiktok:       "",
  whatsapp:     "",
  adminPin:     "1234"          // simple PIN guard for the admin portal
};

// ── Products API ─────────────────────────────────────────────

export function getProducts() {
  try {
    const stored = localStorage.getItem(KEYS.PRODUCTS);
    return stored ? JSON.parse(stored) : [...defaultProducts];
  } catch {
    return [...defaultProducts];
  }
}

export function saveProducts(products) {
  localStorage.setItem(KEYS.PRODUCTS, JSON.stringify(products));
}

export function getProductById(id) {
  return getProducts().find(p => p.id === Number(id)) || null;
}

export function saveProduct(updated) {
  const list = getProducts();
  const idx  = list.findIndex(p => p.id === updated.id);
  if (idx > -1) {
    list[idx] = updated;
  } else {
    list.push(updated);
  }
  saveProducts(list);
}

export function deleteProduct(id) {
  saveProducts(getProducts().filter(p => p.id !== Number(id)));
}

export function addProduct(product) {
  const list = getProducts();
  const maxId = list.reduce((m, p) => Math.max(m, p.id), 0);
  product.id = maxId + 1;
  list.push(product);
  saveProducts(list);
  return product;
}

// ── Settings API ─────────────────────────────────────────────

export function getSettings() {
  try {
    const stored = localStorage.getItem(KEYS.SETTINGS);
    return stored
      ? { ...DEFAULT_SETTINGS, ...JSON.parse(stored) }
      : { ...DEFAULT_SETTINGS };
  } catch {
    return { ...DEFAULT_SETTINGS };
  }
}

export function saveSettings(settings) {
  localStorage.setItem(KEYS.SETTINGS, JSON.stringify(settings));
}

// Helpers re-exported so storefront JS can use this module
export function getFeaturedProducts() {
  return getProducts().filter(p => p.featured);
}

export function getByCategory(category) {
  if (!category || category === "all") return getProducts();
  return getProducts().filter(p => p.category === category);
}

export function getRelated(product, limit = 4) {
  return getProducts()
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}
