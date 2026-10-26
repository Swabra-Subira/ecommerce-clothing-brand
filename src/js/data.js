// ============================================================
// data.js — Static product catalog
// ============================================================

export const products = [
  {
    id: 1,
    name: "Classic Linen Shirt",
    category: "ladies",
    price: 6500,
    image: "../../public/images/cbs2.jpeg",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Sand"],
    colorHex: ["#f5f0e8", "#c4a882"],
    description: "A relaxed-fit linen shirt crafted for warm days. Breathable, lightweight, and effortlessly stylish. Pairs well with chinos or casual trousers.",
    featured: true,
    newArrival: false
  },
  {
    id: 2,
    name: "Floral Wrap Dress",
    category: "women",
    price: 8999,
    image: "../../public/images/cbs3.jpeg",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Ivory", "Blush"],
    colorHex: ["#f7f3ec", "#f5cfc7"],
    description: "A flattering wrap dress with a delicate floral print. Perfect for brunch, garden parties, or a casual day out.",
    featured: true,
    newArrival: true
  },
  {
    id: 3,
    name: "Slim Chino Trousers",
    category: "ladies",
    price: 7800,
    image: "../../public/images/cbs4.jpeg",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Olive", "Navy", "Beige"],
    colorHex: ["#6b7c5c", "#1e3a5f", "#d4bc98"],
    description: "Versatile slim-fit chinos that go from office to weekend with ease. Made from a cotton-blend fabric that holds its shape all day.",
    featured: true,
    newArrival: false
  },
  {
    id: 4,
    name: "Silk Blouse",
    category: "women",
    price: 10500,
    image: "../../public/images/cbs5.jpeg",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Champagne", "Black"],
    colorHex: ["#e8d8b4", "#1a1a1a"],
    description: "Luxurious silk-feel blouse with a relaxed cut. Drapes beautifully and elevates any look instantly.",
    featured: true,
    newArrival: true
  },
  {
    id: 5,
    name: "Canvas Tote Bag",
    category: "accessories",
    price: 3999,
    image: "../../public/images/cbs6.jpeg",
    sizes: ["One Size"],
    colors: ["Natural", "Black"],
    colorHex: ["#e8dcc8", "#1a1a1a"],
    description: "A sturdy canvas tote with internal zip pocket. Large enough for a day's essentials — stylish enough to carry everywhere.",
    featured: false,
    newArrival: true
  },
  {
    id: 6,
    name: "Relaxed Blazer",
    category: "ladies",
    price: 15500,
    image: "../../public/images/cbs7.jpeg",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Charcoal", "Camel"],
    colorHex: ["#4a4a4a", "#c49a6c"],
    description: "A modern relaxed-fit blazer that works as well with jeans as it does with tailored trousers. Unlined for a lightweight feel.",
    featured: false,
    newArrival: false
  },
  {
    id: 7,
    name: "High-Waist Jeans",
    category: "women",
    price: 9800,
    image: "../../public/images/cbs2.jpeg",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Light Wash", "Dark Wash"],
    colorHex: ["#b0c4d8", "#2c3e50"],
    description: "Flattering high-waist jeans with a straight leg cut. Made from stretch denim for all-day comfort.",
    featured: false,
    newArrival: true
  },
  {
    id: 8,
    name: "Leather Belt",
    category: "accessories",
    price: 4500,
    image: "../../public/images/cbs3.jpeg",
    sizes: ["S", "M", "L"],
    colors: ["Tan", "Black"],
    colorHex: ["#b87c4c", "#1a1a1a"],
    description: "Full-grain leather belt with a brushed-gold buckle. A finishing touch that works with every outfit.",
    featured: false,
    newArrival: false
  }
];

// Helper: get a product by id
export function getProductById(id) {
  return products.find(p => p.id === Number(id)) || null;
}

// Helper: get featured products
export function getFeaturedProducts() {
  return products.filter(p => p.featured);
}

// Helper: get products by category
export function getByCategory(category) {
  if (!category || category === "all") return products;
  return products.filter(p => p.category === category);
}

// Helper: get related products (same category, excluding current id)
export function getRelated(product, limit = 4) {
  return products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}
