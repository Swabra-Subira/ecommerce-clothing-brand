# Ecommerce Clothing Brand — Design Document

## Tech Stack

| Layer | Choice | Reason |
|-------|--------|--------|
| Markup | HTML5 | Semantic, SEO-friendly |
| Styling | CSS3 + CSS Variables | No build step needed for v1; easy theming |
| Interactivity | Vanilla JavaScript (ES6+) | Lightweight; no framework overhead for v1 |
| Icons | Font Awesome (CDN) | Wide icon library, easy to integrate |
| Fonts | Google Fonts (CDN) | Free, fast |
| Version Control | Git + GitHub | Managed via `gh` CLI |

> **Upgrade path:** The structure is component-friendly so migrating to React/Next.js in v2 is straightforward.

---

## Project Structure

```
ecommerce-clothing-brand/
├── public/
│   └── images/          # Brand & product photos (cbs1.jpeg … cbs7.jpeg)
├── src/
│   ├── pages/
│   │   ├── index.html       # Homepage
│   │   ├── shop.html        # Product catalog
│   │   ├── product.html     # Product detail (dynamic via JS)
│   │   ├── cart.html        # Shopping cart
│   │   ├── checkout.html    # Checkout form
│   │   ├── about.html       # About page
│   │   ├── contact.html     # Contact page
│   │   └── auth.html        # Login / Sign up scaffold
│   ├── css/
│   │   ├── base.css         # CSS reset & variables
│   │   ├── layout.css       # Grid, flexbox, containers
│   │   ├── components.css   # Buttons, cards, forms, modals
│   │   └── pages.css        # Page-specific overrides
│   └── js/
│       ├── data.js          # Static product data (array of objects)
│       ├── cart.js          # Cart state management (localStorage)
│       ├── shop.js          # Product rendering, filter, sort logic
│       ├── product.js       # Product detail page logic
│       └── main.js          # Shared logic: nav, mobile menu
├── .kiro/
│   └── specs/
│       ├── requirements.md
│       ├── design.md        # ← this file
│       └── tasks.md
├── docs/
│   └── github-guide.md      # GitHub CLI reference doc
├── .gitignore
└── README.md
```

---

## Page Layouts

### Homepage (`index.html`)
```
[Navbar]
[Hero Banner — full-width image, headline, CTA button]
[Category Strip — Men | Women | Accessories]
[Featured Products Grid — 4 cards]
[Promotional Banner — wide image with text overlay]
[Footer]
```

### Shop Page (`shop.html`)
```
[Navbar]
[Page Header — "Shop All"]
[Filter Sidebar | Product Grid (3-col desktop, 2-col tablet, 1-col mobile)]
[Pagination / Load More]
[Footer]
```

### Product Detail (`product.html`)
```
[Navbar]
[Breadcrumb]
[Product Image | Product Info (name, price, sizes, qty, CTA buttons)]
[Description Tab | Reviews Tab]
[Related Products Strip]
[Footer]
```

### Cart (`cart.html`)
```
[Navbar]
[Cart Items Table | Order Summary Card]
[Continue Shopping | Proceed to Checkout]
[Footer]
```

### Checkout (`checkout.html`)
```
[Navbar]
[Shipping Form | Order Summary]
[Payment Section (card UI)]
[Place Order Button]
[Footer]
```

---

## Color Palette & Typography

```css
:root {
  --color-primary:    #1a1a1a;   /* near-black — main text, nav */
  --color-accent:     #c9a96e;   /* warm gold — CTAs, highlights */
  --color-bg:         #f9f6f1;   /* off-white — page background */
  --color-surface:    #ffffff;   /* card backgrounds */
  --color-muted:      #7a7a7a;   /* secondary text */
  --color-border:     #e0dbd3;   /* dividers */

  --font-heading:     'Playfair Display', serif;
  --font-body:        'Inter', sans-serif;

  --radius-card:      8px;
  --shadow-card:      0 2px 12px rgba(0,0,0,0.08);
}
```

---

## Data Model (Static JS — `data.js`)

```js
// Product object shape
{
  id:          1,
  name:        "Classic Linen Shirt",
  category:    "men",            // "men" | "women" | "accessories"
  price:       49.99,
  image:       "public/images/cbs2.jpeg",
  sizes:       ["S", "M", "L", "XL"],
  colors:      ["White", "Sand"],
  description: "Relaxed fit linen shirt perfect for warm days.",
  featured:    true,
  newArrival:  false
}
```

---

## Cart State (localStorage — `cart.js`)

```js
// Cart item shape stored in localStorage key "cart"
{
  productId: 1,
  name:      "Classic Linen Shirt",
  image:     "public/images/cbs2.jpeg",
  size:      "M",
  color:     "White",
  qty:       2,
  price:     49.99
}
```

---

## Component Interactions

```
data.js  ──► shop.js     (renders product grid)
         ──► product.js  (renders detail view)
         ──► main.js     (featured items on homepage)

cart.js  ──► cart.html   (renders cart table)
         ──► checkout.html (order summary)
         ──► navbar      (cart item count badge)
```

---

## Responsive Breakpoints

| Breakpoint | Width | Layout |
|------------|-------|--------|
| Mobile | < 640px | Single column, hamburger menu |
| Tablet | 640px – 1024px | 2-column product grid |
| Desktop | > 1024px | 3-column grid, side-by-side layouts |
