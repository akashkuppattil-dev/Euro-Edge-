export interface Product {
  id: string
  name: string
  price: number
  originalPrice: number
  image: string
  images: string[]
  badge?: string
  slug: string
  category: string
  section: "Girls" | "Boys" | "Babies" | "Other"
  rating: number
  description: string
  details: string[]
  sizes: string[]
  colours?: string[]
}

export const allProducts: Product[] = [
  {
    id: "1",
    name: "Floral Hand-Embroidered Party Frock",
    price: 1899,
    originalPrice: 2499,
    image: "/images/product-1.png",
    images: ["/images/product-1.png", "/images/product-3.png", "/images/product-5.png"],
    badge: "Best Seller",
    slug: "floral-hand-embroidered-party-frock",
    category: "Frocks",
    section: "Girls",
    rating: 4.9,
    description: "An elegant, premium girl's party frock with beautiful hand-embroidered floral details. Made from premium lightweight lining and soft outer net to ensure maximum comfort and graceful drape for parties and special occasions.",
    details: [
      "Intricate hand-embroidered floral details on bodice",
      "Soft premium tulle overlay with breathable cotton lining",
      "Back sash tie for adjustable, perfect fit",
      "Gentle elasticized comfort fit",
      "Dry clean recommended"
    ],
    sizes: ["3-4 Years", "5-6 Years", "7-8 Years", "9-10 Years", "11-12 Years", "13-14 Years"]
  },
  {
    id: "2",
    name: "Gentleman Casual Suit & Blazer Set",
    price: 2499,
    originalPrice: 3299,
    image: "/images/product-2.png",
    images: ["/images/product-2.png", "/images/product-6.png"],
    badge: "Premium",
    slug: "gentleman-casual-suit-blazer-set",
    category: "Boys Suits",
    section: "Boys",
    rating: 4.8,
    description: "A handsome casual suit set for boys featuring a structured soft blazer jacket, a cotton shirt, and matching beige trousers. Designed to keep your little man looking sharp and feeling comfortable.",
    details: [
      "Three-piece set: Blazer jacket, inner shirt, and trousers",
      "Premium breathable poly-cotton blend fabric",
      "Elastic waistband trousers for growth comfort",
      "Functional front pockets on blazer",
      "Perfect for weddings, birthdays, and formal dinners"
    ],
    sizes: ["3-4 Years", "5-6 Years", "7-8 Years", "9-10 Years", "11-12 Years", "13-14 Years"]
  },
  {
    id: "3",
    name: "Golden Floral Lehenga Choli Set",
    price: 2299,
    originalPrice: 2999,
    image: "/images/product-3.png",
    images: ["/images/product-3.png", "/images/product-1.png"],
    badge: "Festive",
    slug: "golden-floral-lehenga-choli-set",
    category: "Ethnic Gowns",
    section: "Girls",
    rating: 4.7,
    description: "A gorgeous traditional lehenga choli set for girls featuring delicate gold embroidery and premium net dupatta. The skirt features a comfortable waistband and soft cotton lining underneath.",
    details: [
      "Traditional two-piece set with matching dupatta",
      "Intricate zari and sequin embroidery",
      "100% cotton inner lining for sensitive skin",
      "Adjustable drawstring lehenga skirt",
      "Perfect for festivals and family celebrations"
    ],
    sizes: ["3-4 Years", "5-6 Years", "7-8 Years", "9-10 Years", "11-12 Years"]
  },
  {
    id: "4",
    name: "Organic Cotton Animal Print Onesie",
    price: 899,
    originalPrice: 1299,
    image: "/images/product-4.png",
    images: ["/images/product-4.png", "/images/product-5.png"],
    badge: "New",
    slug: "organic-cotton-animal-print-onesie",
    category: "Onesies & Rompers",
    section: "Babies",
    rating: 4.9,
    description: "Ultra-soft baby onesie romper crafted from 100% organic cotton. Features an adorable minimalist design and nickel-free bottom snaps for easy diaper changes.",
    details: [
      "100% certified organic cotton fabric",
      "Expandable shoulders for easy dressing",
      "Nickel-free bottom snap closures",
      "Flat-lock seams to prevent irritation",
      "Machine washable, color-safe prints"
    ],
    sizes: ["1-2 Months", "3-4 Months", "5-6 Months", "7-8 Months", "9-10 Months", "11-12 Months", "1-2 Years"]
  },
  {
    id: "5",
    name: "Dreamy Clouds Soft Cotton Night Suit",
    price: 1199,
    originalPrice: 1699,
    image: "/images/product-5.png",
    images: ["/images/product-5.png", "/images/product-4.png"],
    badge: "New",
    slug: "dreamy-clouds-soft-cotton-night-suit",
    category: "Night Suits",
    section: "Girls",
    rating: 4.8,
    description: "Super soft, long-sleeved night suit set featuring an adorable cloud print. Designed with premium knit cotton, flat seams, and an elastic waist pant for cozy sleep.",
    details: [
      "Includes long-sleeve button-down top and matching pants",
      "100% breathable organic knit cotton",
      "Ribbed cuffs to keep sleeves and legs in place",
      "Tagless neck label to prevent scratching",
      "Snug fitting for child safety"
    ],
    sizes: ["3-4 Years", "5-6 Years", "7-8 Years", "9-10 Years", "11-12 Years", "13-14 Years"]
  },
  {
    id: "6",
    name: "Linen Suspender Shorts & Shirt Set",
    price: 1599,
    originalPrice: 2199,
    image: "/images/product-6.png",
    images: ["/images/product-6.png", "/images/product-2.png"],
    badge: "Trending",
    slug: "linen-suspender-shorts-shirt-set",
    category: "Clothing Sets",
    section: "Boys",
    rating: 4.6,
    description: "A charming linen clothing set featuring a lightweight button-up shirt and matching suspender shorts. Perfect for warm-weather outings and smart-casual family events.",
    details: [
      "Two-piece set: Collared linen shirt and suspender shorts",
      "Premium breathable linen-cotton blend",
      "Adjustable button suspenders",
      "Functional side pockets",
      "Elastic back waist on shorts for simple fit"
    ],
    sizes: ["3-4 Years", "5-6 Years", "7-8 Years", "9-10 Years", "11-12 Years"]
  },
  {
    id: "7",
    name: "Pastel Pink Ruffled Tops & Tunics Set",
    price: 1299,
    originalPrice: 1799,
    image: "/images/product-3.png",
    images: ["/images/product-3.png", "/images/product-1.png"],
    slug: "pastel-pink-ruffled-tops-tunics",
    category: "Tops & Tunics",
    section: "Girls",
    rating: 4.5,
    description: "Add a touch of elegance to her daily wear with this pastel pink ruffled top. Sourced from ultra-soft cotton fabric with flowy sleeves and subtle floral textures.",
    details: [
      "Flowy flutter sleeves with dainty ruffle borders",
      "Soft breathable premium cotton fabric",
      "Back button closure for easy dressing",
      "Comfortable relaxed waist alignment"
    ],
    sizes: ["3-4 Years", "5-6 Years", "7-8 Years", "9-10 Years", "11-12 Years"]
  },
  {
    id: "8",
    name: "Casual Denim Jeans & T-Shirt Combo",
    price: 1499,
    originalPrice: 1999,
    image: "/images/product-6.png",
    images: ["/images/product-6.png", "/images/product-2.png"],
    slug: "casual-denim-jeans-tshirt-combo",
    category: "Jeans",
    section: "Boys",
    rating: 4.7,
    description: "An easy-going daily outfit featuring premium soft knit denim jeans and a cool cotton graphic t-shirt. Durably made to withstand active play and multiple washes.",
    details: [
      "Two-piece combo: graphic cotton tee and stretch denim jeans",
      "Jeans feature adjust-to-fit elastic inner waistband",
      "Soft pre-washed denim fabric to prevent stiffness",
      "Perfect for everyday casual wear"
    ],
    sizes: ["3-4 Years", "5-6 Years", "7-8 Years", "9-10 Years", "11-12 Years", "13-14 Years"]
  }
]
