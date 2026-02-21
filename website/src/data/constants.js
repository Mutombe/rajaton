import React from 'react';
import { HandshakeIcon, Store, Truck, TagIcon, ShoppingCart, Heart, Cpu, Package, Sparkles, Globe, Award, TrendingUp } from "lucide-react";

export const SERVICES = [
  {
    id: "key-account-management", title: "Key Account Management", short: "Strategic partnerships that drive growth", icon: HandshakeIcon,
    description: "We build and nurture strategic relationships between brands and key retail partners, ensuring optimal shelf presence, promotional alignment, and sustained revenue growth across all channels.",
    long: "Our Key Account Management team acts as the strategic bridge between your brand and the world's largest retailers. We don't just manage accounts — we build transformative partnerships that drive mutual growth through deep market intelligence, joint business planning, and relentless execution.",
    features: [
      { name: "Strategic Account Planning", d: "Comprehensive annual plans aligned with brand and retailer objectives." },
      { name: "Retailer Relationships", d: "Deep, trust-based relationships with key buyers across major chains." },
      { name: "Joint Business Planning", d: "Collaborative sessions aligning promotions, launches, and category goals." },
      { name: "Trade Marketing", d: "Flawless deployment of trade promotions and retailer-specific campaigns." },
      { name: "Performance Analytics", d: "Real-time dashboards tracking sell-through, share, and ROI." },
      { name: "Category Management", d: "Data-driven insights positioning your brand as indispensable." },
    ],
    stats: { clients: "200+", growth: "34%", retention: "98%" },
    sLabels: { clients: "Active Clients", growth: "Avg. Revenue Growth", retention: "Client Retention" },
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    hero: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1400&q=80",
  },
  {
    id: "merchandising-execution", title: "Merchandising & Execution", short: "Flawless in-store presence, every time", icon: Store,
    description: "Our expert merchandising teams ensure your products are perfectly positioned, prominently displayed, and compliantly presented across every retail touchpoint.",
    long: "The moment of truth happens at the shelf. Our nationwide merchandising teams — armed with proprietary mobile technology and rigorous training — ensure your products are perfectly positioned, fully stocked, and compliantly displayed across every store, every day.",
    features: [
      { name: "Planogram Compliance", d: "Products positioned exactly per agreed planograms everywhere." },
      { name: "Execution Audits", d: "Regular compliance audits with photographic evidence and live reporting." },
      { name: "POS Deployment", d: "Professional installation of point-of-sale materials and displays." },
      { name: "Shelf Optimization", d: "Data-driven shelf allocation maximizing sales per linear foot." },
      { name: "Display Setup", d: "Expert assembly of seasonal displays, end-caps, and promotions." },
      { name: "Real-Time Reporting", d: "Live dashboards showing compliance, stock, and competitive intel." },
    ],
    stats: { stores: "15K+", compliance: "96%", uplift: "28%" },
    sLabels: { stores: "Retail Locations", compliance: "Compliance Rate", uplift: "Sales Uplift" },
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&q=80",
    hero: "/14.jpg",
  },
  {
    id: "distribution-logistics", title: "Distribution & Logistics", short: "Seamless supply chain excellence", icon: Truck,
    description: "End-to-end distribution solutions powered by technology and precision. From warehouse to last-mile, your products reach every shelf, on time, every time.",
    long: "Our distribution infrastructure spans 47 countries with state-of-the-art warehousing, AI-optimized routing, and real-time tracking. Whether ambient, chilled, or frozen — we move your products with unmatched speed, precision, and cost efficiency.",
    features: [
      { name: "Warehouse Management", d: "Modern WMS technology, pick-and-pack, and cross-docking." },
      { name: "Route-to-Market", d: "Custom distribution models optimizing coverage, cost, and speed." },
      { name: "Cold Chain Solutions", d: "Temperature-controlled logistics with full chain-of-custody." },
      { name: "Last-Mile Delivery", d: "Final-mile solutions reaching even the most remote locations." },
      { name: "Inventory Optimization", d: "AI-powered demand forecasting minimizing waste." },
      { name: "Fleet Management", d: "GPS-tracked fleet with route optimization and proof-of-delivery." },
    ],
    stats: { deliveries: "1M+", ontime: "99.2%", coverage: "47" },
    sLabels: { deliveries: "Annual Deliveries", ontime: "On-Time Rate", coverage: "Countries" },
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    hero: "/28.jpg",
  },
  {
    id: "private-label", title: "Private Label Development", short: "Your brand, our expertise", icon: TagIcon,
    description: "From concept to shelf, we develop premium private label products that compete with — and often outperform — national brands.",
    long: "Private label is no longer about cheap alternatives. Our end-to-end development team handles market research, formulation, packaging design, regulatory compliance, and launch strategy. 500+ products across 120 categories.",
    features: [
      { name: "Conceptualization", d: "Market gap analysis and consumer insight for high-potential products." },
      { name: "Formulation & R&D", d: "In-house lab capabilities for product formulation and testing." },
      { name: "Packaging Design", d: "Award-winning design that stands out on shelf." },
      { name: "Quality Assurance", d: "Rigorous QA with factory audits and batch testing." },
      { name: "Regulatory Compliance", d: "Expert navigation of food safety and labeling requirements." },
      { name: "Launch Strategy", d: "Go-to-market planning, pricing, and promotional campaigns." },
    ],
    stats: { products: "500+", categories: "120+", markets: "30+" },
    sLabels: { products: "Products Launched", categories: "Categories", markets: "Markets" },
    image: "/5.jpg",
    hero: "/27.jpg",
  },
];

export const INDUSTRIES = [
  { name: "FMCG & Consumer Goods", icon: ShoppingCart, d: "Full-spectrum FMCG distribution from high-volume ambient to premium personal care.", stat: "8,000+ SKUs", img: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&q=80" },
  { name: "Retail & E-Commerce", icon: Store, d: "Omnichannel fulfillment, click-and-collect, and unified inventory management.", stat: "15K+ touchpoints", img: "/18.jpg" },
  { name: "Healthcare & Pharma", icon: Heart, d: "GDP-certified operations for prescription pharmaceuticals to OTC products.", stat: "100% GDP compliant", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80" },
  { name: "Technology & Electronics", icon: Cpu, d: "Secure warehousing, serialized tracking, and expert tech merchandising.", stat: "$2B+ handled", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80" },
  { name: "Food & Beverage", icon: Package, d: "Cold chain for chilled, frozen, and ambient with HACCP certification.", stat: "99.8% freshness", img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80" },
  { name: "Beauty & Personal Care", icon: Sparkles, d: "Premium merchandising for cosmetics, skincare, and fragrance brands.", stat: "50+ luxury brands", img: "/27.jpg" },
];

export const TEAM = [
  { name: "Alexandra Voronova", role: "Chief Executive Officer", bio: "20+ years in FMCG distribution across 4 continents. Harvard MBA.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" },
  { name: "Marcus Chen", role: "Chief Operations Officer", bio: "Former VP Supply Chain at Fortune 100. AI logistics pioneer.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { name: "Isabella Santos", role: "VP of Key Accounts", bio: "Built partnerships worth $2B+ in annual revenue.", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" },
  { name: "David Okonkwo", role: "Head of Logistics", bio: "Pioneer in AI route optimization and warehouse automation.", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80" },
  { name: "Sarah Mitchell", role: "VP of Private Label", bio: "Launched 200+ products across 15 markets.", img: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=400&q=80" },
  { name: "Raj Patel", role: "Chief Technology Officer", bio: "Led digital transformation at 3 multinational distributors.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
];

export const JOBS = [
  { title: "Senior Key Account Manager", loc: "London, UK", type: "Full-time", dept: "Sales", level: "Senior", pay: "$90K–$120K" },
  { title: "Merchandising Field Supervisor", loc: "Dubai, UAE", type: "Full-time", dept: "Operations", level: "Mid", pay: "$55K–$75K" },
  { title: "Supply Chain Analyst", loc: "Singapore", type: "Full-time", dept: "Logistics", level: "Junior", pay: "$45K–$60K" },
  { title: "Private Label Product Manager", loc: "New York, USA", type: "Full-time", dept: "Product", level: "Senior", pay: "$95K–$130K" },
  { title: "Digital Marketing Specialist", loc: "Remote", type: "Full-time", dept: "Marketing", level: "Mid", pay: "$60K–$80K" },
  { title: "Warehouse Operations Manager", loc: "Johannesburg, SA", type: "Full-time", dept: "Operations", level: "Senior", pay: "$70K–$95K" },
  { title: "Business Development Executive", loc: "Sydney, AU", type: "Full-time", dept: "Sales", level: "Mid", pay: "$65K–$85K" },
  { title: "Data Engineer", loc: "Remote", type: "Contract", dept: "Technology", level: "Senior", pay: "$110K–$150K" },
  { title: "Regional Logistics Coordinator", loc: "Berlin, DE", type: "Full-time", dept: "Logistics", level: "Mid", pay: "$55K–$70K" },
  { title: "Quality Assurance Manager", loc: "Tokyo, JP", type: "Full-time", dept: "Product", level: "Senior", pay: "$80K–$110K" },
];

export const TESTIMONIALS = [
  { name: "Sarah Chen", role: "VP Sales, NovaBrands", text: "Rajaton transformed our retail presence across 12 markets. Their key account management is second to none — we saw a 40% increase in shelf visibility within the first quarter.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
  { name: "Michael Torres", role: "CEO, FreshCo Foods", text: "The private label products Rajaton developed for us consistently outperform national brands. Their attention to quality and market insight is exceptional.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80" },
  { name: "Aisha Okafor", role: "Supply Chain Dir, TechVault", text: "99.2% on-time delivery rate across our entire network. Rajaton's logistics capability is the backbone of our distribution strategy across three continents.", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80" },
  { name: "James Whitfield", role: "Retail Dir, Luxe Beauty", text: "Their merchandising teams execute with military precision. Every store visit reveals perfect compliance and stunning displays that drive measurable sales uplift.", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80" },
];

export const CASES = [
  { id: "novabrands", title: "NovaBrands Market Expansion", client: "NovaBrands International", cat: "Key Account Management", result: "+340% revenue growth in 18 months", challenge: "Expand from 3 to 15 markets while maintaining brand consistency.", solution: "Deployed dedicated KAM teams, JBP frameworks with 40+ retailers, centralized tracking.", outcomes: ["340% revenue growth", "15 new markets", "98% retailer satisfaction", "12 new partnerships"], img: "/19.jpg", hero: "/19.jpg" },
  { id: "freshco", title: "FreshCo Private Label Launch", client: "FreshCo Foods", cat: "Private Label", result: "$50M first-year revenue", challenge: "Launch premium private label to compete with national brands.", solution: "End-to-end development from consumer research through multi-market launch.", outcomes: ["$50M first-year revenue", "12 products launched", "8 market entries", "23% category share"], img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80", hero: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&q=80" },
  { id: "techvault", title: "TechVault Supply Chain Overhaul", client: "TechVault Electronics", cat: "Distribution & Logistics", result: "45% cost reduction", challenge: "Fragmented supply chain across 20 countries driving excessive costs.", solution: "Complete redesign with centralized WMS, AI routing, consolidated carriers.", outcomes: ["45% cost reduction", "99.5% on-time delivery", "3-day avg delivery", "60% fewer damages"], img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80", hero: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1400&q=80" },
  { id: "luxebeauty", title: "Luxe Beauty Retail Transformation", client: "Luxe Beauty Group", cat: "Merchandising", result: "96% compliance across 5K stores", challenge: "Inconsistent in-store presentation eroding brand equity.", solution: "200+ trained merchandisers with proprietary mobile audit tools.", outcomes: ["96% compliance", "28% sales uplift", "5,000 stores covered", "4.8/5 satisfaction"], img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80", hero: "https://images.unsplash.com/photo-1556740758-90de940e33e0?w=1400&q=80" },
];

export const STATS = [
  { value: "47", suffix: "+", label: "Countries", icon: Globe },
  { value: "200", suffix: "+", label: "Brand Partners", icon: Award },
  { value: "15", suffix: "K+", label: "Retail Locations", icon: Store },
  { value: "99.2", suffix: "%", label: "On-Time Delivery", icon: TrendingUp },
];

export const NAV = [
  { label: "Company", children: [
    { label: "About Rajaton", path: "/about", d: "Our story & mission" },
    { label: "Leadership", path: "/about#team", d: "Executive team" },
    { label: "Careers", path: "/careers", d: "Join our global team" },
    { label: "Case Studies", path: "/case-studies", d: "Success stories" },
  ]},
  { label: "Solutions", children: [
    { label: "Key Account Management", path: "/services/key-account-management", d: "Strategic partnerships" },
    { label: "Merchandising & Execution", path: "/services/merchandising-execution", d: "In-store excellence" },
    { label: "Distribution & Logistics", path: "/services/distribution-logistics", d: "Supply chain mastery" },
    { label: "Private Label Development", path: "/services/private-label", d: "Brand creation" },
    { label: "All Solutions", path: "/services", d: "View all" },
  ]},
  { label: "Industries", children: [
    { label: "FMCG", path: "/industries", d: "Consumer goods" },
    { label: "Healthcare", path: "/industries", d: "Pharma logistics" },
    { label: "Technology", path: "/industries", d: "Electronics" },
    { label: "All Industries", path: "/industries", d: "View all" },
  ]},
  { label: "Insights", children: [
    { label: "Case Studies", path: "/case-studies", d: "Impact stories" },
    { label: "News", path: "/about", d: "Latest updates" },
  ]},
  { label: "Contact", path: "/contact" },
];

export const SEARCH_INDEX = [
  { title: "Key Account Management", d: "Strategic partnerships, retailer relationships, joint business planning", path: "/services/key-account-management", s: "Solutions" },
  { title: "Merchandising & Execution", d: "Planogram compliance, POS materials, shelf optimization", path: "/services/merchandising-execution", s: "Solutions" },
  { title: "Distribution & Logistics", d: "Warehouse, cold chain, last-mile delivery, fleet management", path: "/services/distribution-logistics", s: "Solutions" },
  { title: "Private Label Development", d: "Product formulation, packaging design, launch strategy", path: "/services/private-label", s: "Solutions" },
  { title: "About Rajaton", d: "Story, mission, values, global presence, culture, history", path: "/about", s: "Company" },
  { title: "Careers", d: "Jobs, culture, benefits, global opportunities", path: "/careers", s: "Company" },
  { title: "Contact", d: "Offices, phone, email, partnerships, London, Dubai, Singapore", path: "/contact", s: "Company" },
  { title: "Case Studies", d: "NovaBrands, FreshCo, TechVault, Luxe Beauty, results", path: "/case-studies", s: "Insights" },
  { title: "Industries", d: "FMCG, healthcare, pharma, technology, beauty, food", path: "/industries", s: "Industries" },
];

export const SEO = {
  "/": { t: "Rajaton | Global Brand Distribution & Logistics", d: "Premier brand distribution across 47+ countries." },
  "/about": { t: "About Rajaton | Our Story & Mission", d: "25 years of limitless distribution excellence." },
  "/services": { t: "Solutions | Rajaton", d: "KAM, Merchandising, Logistics, Private Label." },
  "/industries": { t: "Industries | Rajaton", d: "Distribution excellence across all sectors." },
  "/careers": { t: "Careers | Rajaton", d: "Join our global team across 47+ countries." },
  "/contact": { t: "Contact | Rajaton", d: "London, Dubai, Singapore, New York offices." },
  "/case-studies": { t: "Case Studies | Rajaton", d: "Real results for global brands." },
};

export { NAV as NAV_ITEMS };
