import GlassFurnitureImg from '../static/Products/Pointer Furniture Polish.png';
import FloorCleanerImg from '../static/Products/Pointer Floor Cleaner.png';
import ToiletCleanerImg from '../static/Products/Pointer Toilet Cleaner.png';
import ChimneyCleanerImg from '../static/Products/Pointer Chimney Cleaner.png';
import MultipurposeImg from '../static/Products/Pointer Multi-Purpose Cleaner.png';
import WindshieldImg from '../static/Products/Pointer Windshield Washer Fluid.png';
import FurniturePolishImg from '../static/Products/Pointer Furniture Polish.png';
import StainlessSteelImg from '../static/Products/Pointer Multi-Purpose Cleaner.png';
import DishwasherImg from '../static/Products/Pointer Floor Cleaner.png';

import { 
  Stethoscope, 
  Building2, 
  GraduationCap, 
  Home as HomeIcon
} from 'lucide-react';

export interface Product {
  title: string;
  desc: string;
  category: string;
  img: string;
  tags: string[];
  usage: string[];
  standard: string;
  ingredients: string;
  safety: string;
  packaging: string[];
}

export const PRODUCTS: Product[] = [
  { 
    title: "Pointer Glass & Furniture Cleaner", 
    desc: "Streak-free clarity for windows and mirrors. Advanced Japanese tech formula for restorative furniture shine.", 
    category: "Household",
    tags: ["Japanese Tech", "Streak-Free"],
    usage: ["Residential", "Hospitality", "Commercial"],
    standard: "JIS K-3362",
    ingredients: "Biodegradable Non-Ionic Surfactants, Organic Solvents, Pure Aqua.",
    safety: "Non-Toxic, pH Balanced, Skin Friendly.",
    packaging: ["500ml Spray", "5L Bulk", "50L Drum"],
    img: GlassFurnitureImg
  },
  { 
    title: "Pointer Floor Cleaner", 
    desc: "Safe for tiles to timber. Uses organic chelating agents to lift minerals and grime deep from the surface.", 
    category: "Household",
    tags: ["Chelating Agents", "Multi-Surface"],
    usage: ["Healthcare", "Education", "Residential"],
    standard: "JIS K-3362",
    ingredients: "Organic Chelating Agents, Anionic Surfactants (Plant Derived), Essential Oils.",
    safety: "Septic Safe, Pet Friendly, Child Safe.",
    packaging: ["500ml", "5L", "50L"],
    img: FloorCleanerImg
  },
  { 
    title: "Pointer Toilet Cleaner", 
    desc: "Non-toxic, safe for septic systems. Powerful non-ionic surfactant carbonate formula for hygienic purity.", 
    category: "Household",
    tags: ["Non-Ionic", "Septic Safe"],
    usage: ["Healthcare", "Hospitality", "Residential"],
    standard: "JIS K-3362",
    ingredients: "Carbonate Formula, Non-Ionic Surfactants, Natural Disinfectants.",
    safety: "Abrasive-Free, Chlorine-Free, Septic Safe.",
    packaging: ["500ml", "5L", "50L"],
    img: ToiletCleanerImg
  },
  { 
    title: "Pointer Chimney Cleaner", 
    desc: "Heavy-duty degreasing for kitchen exhausts. Toughest grease removal without using abrasive, harsh acids.", 
    category: "Institutional",
    tags: ["Degreaser", "Industrial"],
    usage: ["Hospitality", "Institutional", "Commercial"],
    standard: "JIS K-3362",
    ingredients: "Proprietary Degreasing Base, Alkaline Boosters (Non-Corrosive).",
    safety: "Acid-Free, Non-Flammable, Industrial Strength.",
    packaging: ["5L Bulk", "50L Drum"],
    img: ChimneyCleanerImg
  },
  { 
    title: "Pointer Multi-Purpose Cleaner", 
    desc: "Adaptable from countertops to car interiors. The ultimate one-bottle solution for everyday hygiene.", 
    category: "Household",
    tags: ["Versatile", "Daily Use"],
    usage: ["Automotive", "Commercial", "Residential"],
    standard: "JIS K-3362",
    ingredients: "Bio-Based Solution, Multi-Matrix Surfactants.",
    safety: "Multi-Surface Safe, Non-Toxic, Zero Residue.",
    packaging: ["500ml Spray", "5L", "50L"],
    img: MultipurposeImg
  },
  { 
    title: "Pointer Furniture Polish", 
    desc: "Restores wood surfaces to their original brilliance. Deep nourishment and long-lasting protection.", 
    category: "Premium",
    tags: ["Restorative", "Wood Care"],
    usage: ["Hospitality", "Residential"],
    standard: "JIS K-3362",
    ingredients: "Natural Carnauba Emulsion, Polymer Protectors, Fragrance.",
    safety: "Wood-Safe, Non-Greasy Finish.",
    packaging: ["500ml", "5L"],
    img: FurniturePolishImg
  },
  { 
    title: "Pointer Stainless Steel Polish", 
    desc: "Restores brilliance to kitchen appliances without harsh abrasives. Leaves a protective streak-free coat.", 
    category: "Professional",
    tags: ["Metallic Shine", "Non-Abrasive"],
    usage: ["Hospitality", "Commercial", "Industrial"],
    standard: "JIS K-3362",
    ingredients: "Metallic Surface Catalysts, Protective Film Agents.",
    safety: "Non-Abrasive, Food-Contact Surface Safe (After Rinse).",
    packaging: ["500ml", "5L", "50L"],
    img: StainlessSteelImg
  },
  { 
    title: "Pointer Windshield Fluid", 
    desc: "Automotive safety and clarity. Protective coating that repels rain and dirt for clear vision while driving.", 
    category: "Automotive",
    tags: ["All-Weather", "Automotive"],
    usage: ["Automotive", "Commercial", "Industrial"],
    standard: "JIS K-3362",
    ingredients: "Hydrophobic Agents, Anti-Static Formulation, Aqua.",
    safety: "Rubber-Safe, Paint-Safe, Low VOC.",
    packaging: ["500ml", "5L", "50L"],
    img: WindshieldImg
  },
  { 
    title: "Pointer Dishwasher Formula", 
    desc: "Eco-friendly degreasing that is gentle on skin. Tough on food residue, kind to the environment. (Availability Soon)", 
    category: "Household",
    tags: ["Eco-Degreasing", "Skin Friendly"],
    usage: ["Hospitality", "Residential"],
    standard: "JIS K-3362",
    ingredients: "Bio-Degradable Lipid Breakers, Lemon Extract, Glycerin.",
    safety: "Gentle on Hands, Phosphate-Free, Nitrate-Free.",
    packaging: ["500ml", "5L", "50L"],
    img: DishwasherImg
  },
];

export const SECTORS = [
  { name: "Healthcare", icon: Stethoscope, desc: "Clinically safe for hospitals & clinics." },
  { name: "Hospitality", icon: Building2, desc: "Premium standards for hotels & restaurants." },
  { name: "Education", icon: GraduationCap, desc: "Non-toxic safety for schools & nurseries." },
  { name: "Residential", icon: HomeIcon, desc: "Gentle purity for your sanctuary." },
];

export const BLOG_POSTS = [
  {
    title: "Why Organic Cleaning Matters: A Healthier Home Starts Here",
    category: "Health",
    excerpt: "Discover how non-toxic, biodegradable ingredients protect your family and the planet—without compromising on shine.",
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
    likes: 124,
    comments: 12,
    date: "May 10, 2024",
    featured: true
  },
  {
    title: "Glass & Furniture Cleaner: Clarity You Can Feel",
    category: "Tips",
    excerpt: "Tips for streak-free windows, polished wood, and how our Japanese technology elevates everyday surfaces.",
    img: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?auto=format&fit=crop&q=80&w=800",
    likes: 89,
    comments: 5,
    date: "May 08, 2024"
  },
  {
    title: "The Dish Dilemma: Eco-Friendly Degreasing That Works",
    category: "Eco-Friendly",
    excerpt: "Behind the bubbles—how our dishwasher formula tackles grease while being gentle on your skin and the environment.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    likes: 56,
    comments: 8,
    date: "May 05, 2024"
  },
  {
    title: "Floors That Speak Clean: From Tiles to Timber",
    category: "Guide",
    excerpt: "A guide to choosing the right floor cleaner for different surfaces, plus a look at our organic chelating agents.",
    img: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=800",
    likes: 210,
    comments: 15,
    date: "May 02, 2024"
  },
  {
    title: "Multipurpose Magic: One Bottle, Endless Possibilities",
    category: "Lifestyle",
    excerpt: "From countertops to car interiors—see how our multipurpose cleaner adapts to your lifestyle.",
    img: "https://images.unsplash.com/photo-1566050631622-c43ecf45388c?auto=format&fit=crop&q=80&w=800",
    likes: 45,
    comments: 3,
    date: "April 28, 2024"
  },
  {
    title: "Toilet Cleaner That Doesn’t Toxify",
    category: "Safety",
    excerpt: "Break down the myths of harsh toilet cleaners and explore our non-ionic surfactant carbonate formula.",
    img: "https://images.unsplash.com/photo-1584622781514-433f89ce8a9a?auto=format&fit=crop&q=80&w=800",
    likes: 78,
    comments: 9,
    date: "April 25, 2024"
  },
  {
    title: "Steel Polish That Shines Without Harm",
    category: "Shine",
    excerpt: "Restore brilliance to your kitchen and appliances with our safe, effective steel polish.",
    img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800",
    likes: 62,
    comments: 4,
    date: "April 20, 2024"
  }
];

export const FAQS = [
  { 
    q: "What makes Crystal Cleanser products eco-friendly?", 
    a: "All our products are 100% biodegradable, non-toxic, and made from natural ingredients. They are safe for children, pets, and sensitive environments while ensuring effective cleaning without harming the planet.",
    category: "Eco-Friendly"
  },
  { 
    q: "What is the Pointer Brand?", 
    a: "Pointer is our flagship brand offering a wide range of organic cleaning solutions. Each product is designed to deliver exceptional hygiene standards while being gentle on the environment.",
    category: "Brand"
  },
  { 
    q: "What types of products are available under the Pointer Brand?", 
    a: "Our product line includes: Pointer Glass and Furniture Cleaner, Pointer Floor Cleaner, Pointer Toilet Cleaner, Pointer Chimney Cleaner, Pointer Multi-Purpose Cleaner, Pointer Furniture Polish, Pointer Stainless Steel Polish, Pointer Windshield Washer Fluid.",
    category: "Products"
  },
  { 
    q: "In what sizes are your products available?", 
    a: "We offer products in 500ml bottles for household use, as well as 5L and 50L containers for institutional, industrial, and commercial cleaning needs—ensuring cost-efficiency for bulk users.",
    category: "Sizes"
  },
  { 
    q: "Who uses Crystal Cleanser products?", 
    a: "Our products are trusted across Nepal’s leading institutions, businesses, and households, including healthcare, hospitality, education, and commercial sectors.",
    category: "Users"
  },
  { 
    q: "Are your products safe for everyday use?", 
    a: "Yes. Since they are made from natural, non-toxic ingredients, our cleaners are safe for daily use in homes, schools, hospitals, and workplaces.",
    category: "Safety"
  },
  { 
    q: "Where are Crystal Cleanser products manufactured?", 
    a: "All products are locally manufactured in Nepal, supporting sustainable practices and the local economy.",
    category: "Manufacturing"
  }
];
