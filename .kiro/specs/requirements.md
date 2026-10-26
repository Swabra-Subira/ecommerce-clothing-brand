# Ecommerce Clothing Brand — Requirements

## Project Overview

A modern, mobile-responsive ecommerce website for a clothing brand. The site allows customers to browse products, view details, add items to a cart, and complete purchases. It will be version-controlled on GitHub.

---

## Functional Requirements

### 1. Homepage
- REQ-01: Display a hero banner featuring brand imagery (using provided photos: cbs1.jpeg – cbs7.jpeg).
- REQ-02: Show featured/new arrivals product grid (minimum 4 items).
- REQ-03: Include navigation bar with links: Home, Shop, About, Contact, Cart.
- REQ-04: Display promotional banners or category highlights.
- REQ-05: Include a footer with social links, newsletter signup, and quick links.

### 2. Product Catalog (Shop Page)
- REQ-06: List all available clothing products in a responsive grid layout.
- REQ-07: Each product card shows: image, name, price, and an "Add to Cart" button.
- REQ-08: Support filtering by category (e.g., Men, Women, Accessories).
- REQ-09: Support sorting by price (low–high, high–low) and newest.
- REQ-10: Clicking a product card navigates to its detail page.

### 3. Product Detail Page
- REQ-11: Display full product image, name, description, price, and available sizes/colors.
- REQ-12: Quantity selector.
- REQ-13: "Add to Cart" and "Buy Now" buttons.
- REQ-14: Related products section at the bottom.

### 4. Shopping Cart
- REQ-15: Accessible via cart icon in the navigation bar.
- REQ-16: Lists all added items with image, name, size, quantity, and subtotal.
- REQ-17: Allows updating item quantity or removing items.
- REQ-18: Displays order total and a "Proceed to Checkout" button.

### 5. Checkout
- REQ-19: Collect shipping information: name, address, city, postal code, country.
- REQ-20: Display order summary alongside the form.
- REQ-21: Payment section (card details UI — no live payment gateway in v1).
- REQ-22: Order confirmation page/message on submission.

### 6. About Page
- REQ-23: Brand story, mission statement, and team section.
- REQ-24: Use brand photos from the provided image set.

### 7. Contact Page
- REQ-25: Contact form: name, email, message fields.
- REQ-26: Display business email, phone, and location.

### 8. Authentication (v1 — optional scaffold)
- REQ-27: Sign up / Login UI pages (no backend auth in v1; scaffolded for future).

---

## Non-Functional Requirements

- NFR-01: Fully responsive — works on mobile, tablet, and desktop.
- NFR-02: Page load time under 3 seconds on a standard connection.
- NFR-03: WCAG 2.1 AA accessibility compliance target.
- NFR-04: SEO-friendly markup (semantic HTML, meta tags, alt text on images).
- NFR-05: Cross-browser compatible (Chrome, Firefox, Safari, Edge).
- NFR-06: Source code version-controlled on GitHub (repo: Swabra-Subira).

---

## Out of Scope (v1)

- Live payment processing
- Backend server / database
- User account persistence
- CMS / admin dashboard

---

## Image Assets

All product and brand images are located in `public/images/`:

| File | Suggested Use |
|------|---------------|
| cbs1.jpeg | Hero banner |
| cbs2.jpeg | Featured product 1 |
| cbs3.jpeg | Featured product 2 |
| cbs4.jpeg | Featured product 3 |
| cbs5.jpeg | Featured product 4 |
| cbs6.jpeg | About page / brand story |
| cbs7.jpeg | Category highlight banner |
