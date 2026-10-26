# Ecommerce Clothing Brand — Implementation Tasks

Each task is an independently deliverable unit of work. Complete them in order; later tasks build on earlier ones.

---

## Phase 1 — Foundation

### TASK-01: Project scaffold & Git init
- [ ] Create folder structure as defined in `design.md`
- [ ] Add `.gitignore` (ignore `node_modules`, `.DS_Store`, `*.log`)
- [ ] Write `README.md` with project overview and local setup instructions
- [ ] Initialize local git repo: `git init`
- [ ] Create GitHub repo via `gh repo create` (see `docs/github-guide.md`)
- [ ] Push initial commit to `main` branch

**Acceptance:** `gh repo view Swabra-Subira/ecommerce-clothing-brand` returns repo details.

---

### TASK-02: CSS base & design tokens
- [ ] Create `src/css/base.css` — CSS reset, custom properties (color palette, fonts, breakpoints)
- [ ] Create `src/css/layout.css` — container, grid utilities, flexbox helpers
- [ ] Create `src/css/components.css` — navbar, buttons, cards, forms, footer
- [ ] Link Google Fonts (Playfair Display + Inter) and Font Awesome in a shared `<head>` snippet
- [ ] Verify design tokens match the spec in `design.md`

**Acceptance:** Opening any HTML page shows correct fonts and no layout breakage.

---

### TASK-03: Static product data
- [ ] Create `src/js/data.js` with an array of at least 8 product objects
- [ ] Assign images from `public/images/` (cbs1–cbs7)
- [ ] Cover both Men and Women categories; at least 1 Accessory
- [ ] Export the array: `export const products = [...]`

**Acceptance:** `import { products } from './data.js'` in browser console returns 8+ items.

---

## Phase 2 — Core Pages

### TASK-04: Navigation bar & footer (shared components)
- [ ] Build responsive navbar: logo, links (Home, Shop, About, Contact), cart icon with badge
- [ ] Mobile hamburger menu toggled by `main.js`
- [ ] Sticky navbar on scroll
- [ ] Footer: quick links, newsletter email input, social icons (Instagram, Twitter, Facebook)

**Acceptance:** Navbar collapses on mobile; cart badge updates when items are in cart.

---

### TASK-05: Homepage (`index.html`)
- [ ] Hero section: full-width `cbs1.jpeg` background, headline, sub-headline, "Shop Now" CTA
- [ ] Category strip: Men / Women / Accessories — link to `shop.html?category=X`
- [ ] Featured products grid (4 items from `data.js` where `featured: true`)
- [ ] Promotional banner using `cbs7.jpeg`
- [ ] Integrate shared navbar and footer

**Acceptance:** Page passes W3C HTML validator; hero image loads; 4 featured products visible.

---

### TASK-06: Shop page (`shop.html`)
- [ ] Render all products from `data.js` using `shop.js`
- [ ] Filter controls: All / Men / Women / Accessories
- [ ] Sort dropdown: Default / Price Low–High / Price High–Low / Newest
- [ ] Product card: image, name, price, "Add to Cart" button
- [ ] Clicking card navigates to `product.html?id=X`

**Acceptance:** Filtering to "Women" shows only women's items; sort changes order correctly.

---

### TASK-07: Product detail page (`product.html`)
- [ ] Read `?id=` query param; look up product in `data.js`
- [ ] Render: large image, name, price, description, size buttons, color swatches, qty stepper
- [ ] "Add to Cart" writes to localStorage via `cart.js`
- [ ] "Buy Now" adds to cart then redirects to `checkout.html`
- [ ] Related products strip (same category, excluding current item)

**Acceptance:** Adding an item increments the navbar cart badge; localStorage "cart" key is updated.

---

### TASK-08: Cart page (`cart.html`)
- [ ] Read cart from localStorage; render item rows
- [ ] Each row: image, name, size, qty stepper (+/−), remove button, line total
- [ ] Order summary: subtotal, estimated shipping (flat $5), total
- [ ] Empty cart state with "Continue Shopping" link
- [ ] "Proceed to Checkout" button → `checkout.html`

**Acceptance:** Removing an item from cart updates total and removes the row without page reload.

---

### TASK-09: Checkout page (`checkout.html`)
- [ ] Shipping form with HTML5 validation (name, email, address, city, postal, country)
- [ ] Order summary pulled from localStorage
- [ ] Payment fields (card number, expiry, CVV) — UI only, no processing
- [ ] On submit: clear cart, show confirmation message on same page
- [ ] Disable "Place Order" until form is valid

**Acceptance:** Submitting valid form shows confirmation; cart is cleared in localStorage.

---

## Phase 3 — Supporting Pages

### TASK-10: About page (`about.html`)
- [ ] Brand story paragraph (placeholder text, easy to update)
- [ ] Mission statement block
- [ ] Full-width brand image using `cbs6.jpeg`
- [ ] Team section: 3 placeholder team member cards

**Acceptance:** Page is responsive; image is accessible (alt text provided).

---

### TASK-11: Contact page (`contact.html`)
- [ ] Contact form: name, email, subject, message; HTML5 validation
- [ ] On submit: show "Thank you" message (no backend needed)
- [ ] Info cards: email, phone, location

**Acceptance:** Submitting empty form shows browser validation errors.

---

### TASK-12: Auth scaffold (`auth.html`)
- [ ] Tabbed UI: Login / Sign Up
- [ ] Login: email + password fields, "Forgot password?" link
- [ ] Sign Up: name, email, password, confirm password
- [ ] Form validation (password match check in JS)
- [ ] Note in page: "Authentication coming in v2"

**Acceptance:** Password mismatch shows inline error; tabs switch without page reload.

---

## Phase 4 — Polish & Version Control

### TASK-13: Responsive QA pass
- [ ] Test all pages at 375px (mobile), 768px (tablet), 1280px (desktop)
- [ ] Fix any overflow, font-size, or layout issues
- [ ] Verify touch targets ≥ 44×44px on mobile

---

### TASK-14: Accessibility & SEO
- [ ] Add `<meta>` description tags to every page
- [ ] Ensure all images have descriptive `alt` attributes
- [ ] Check color contrast meets WCAG AA (4.5:1 for normal text)
- [ ] Add `aria-label` to icon-only buttons (cart, hamburger menu)

---

### TASK-15: Git workflow & GitHub release
- [ ] Ensure all changes are committed on feature branches (see `docs/github-guide.md`)
- [ ] Open a Pull Request for each phase
- [ ] Merge to `main` after review
- [ ] Tag v1.0.0 release: `gh release create v1.0.0`

**Acceptance:** GitHub repo has a `v1.0.0` release with changelog notes.

---

## Task Status Summary

| Task | Description | Status |
|------|-------------|--------|
| TASK-01 | Scaffold + Git init | ⬜ Todo |
| TASK-02 | CSS base | ⬜ Todo |
| TASK-03 | Product data | ⬜ Todo |
| TASK-04 | Navbar & footer | ⬜ Todo |
| TASK-05 | Homepage | ⬜ Todo |
| TASK-06 | Shop page | ⬜ Todo |
| TASK-07 | Product detail | ⬜ Todo |
| TASK-08 | Cart page | ⬜ Todo |
| TASK-09 | Checkout page | ⬜ Todo |
| TASK-10 | About page | ⬜ Todo |
| TASK-11 | Contact page | ⬜ Todo |
| TASK-12 | Auth scaffold | ⬜ Todo |
| TASK-13 | Responsive QA | ⬜ Todo |
| TASK-14 | A11y & SEO | ⬜ Todo |
| TASK-15 | Git workflow & release | ⬜ Todo |
