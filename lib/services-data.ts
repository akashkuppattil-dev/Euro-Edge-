export interface ServiceItem {
  slug: string
  title: string
  shortDesc: string
  fullDesc: string
  iconName: string
  imageUrl: string
  keyFeatures: string[]
  applications: string[]
}

export const servicesData: ServiceItem[] = [
  {
    slug: "electrical-works",
    title: "Electrical Works",
    shortDesc: "Installation, testing, commissioning, and maintenance of electrical systems and equipment.",
    fullDesc:
      "Euro Edge Technical Services L.L.C. provides end-to-end electrical solutions for residential, commercial, and industrial properties in Dubai and across the UAE. From power distribution panels to complex wiring networks, our certified electricians ensure complete safety compliance, energy efficiency, and flawless execution.",
    iconName: "Zap",
    imageUrl: "/images/services/electrical-works.jpg",
    keyFeatures: [
      "Electrical Wiring & Rewiring",
      "Power Distribution Panels & Switchgears",
      "Testing & Commissioning of Systems",
      "Emergency Power & UPS Installations",
      "Routine Inspection & Preventative Maintenance",
    ],
    applications: [
      "Residential Villas & High-Rise Apartments",
      "Commercial Offices & Retail Spaces",
      "Industrial Plants & Warehouses",
      "Hospitality & Healthcare Facilities",
    ],
  },
  {
    slug: "plumbing-sanitary",
    title: "Plumbing & Sanitary",
    shortDesc: "Complete plumbing and sanitary installation, maintenance, and repair solutions.",
    fullDesc:
      "We deliver high-precision plumbing and sanitary fitting services engineered for maximum reliability and water efficiency. Our expert team handles everything from clean water supply networks to complex drainage and sanitaryware installations.",
    iconName: "Droplet",
    imageUrl: "/images/services/plumbing-sanitary.jpg",
    keyFeatures: [
      "Water Supply Piping & Booster Pumps",
      "Drainage & Sewage Pipe Installations",
      "Sanitaryware & Fixture Fitting",
      "Leak Detection & Pipe Repair",
      "Water Heater & Filtration Systems",
    ],
    applications: [
      "Luxury Residential Properties",
      "Hotels & Commercial Restrooms",
      "Restaurants & Commercial Kitchens",
      "Industrial Infrastructure",
    ],
  },
  {
    slug: "hvac-systems",
    title: "HVAC Systems (Air-Conditioning, Ventilation & Filtration)",
    shortDesc: "Supply, installation, maintenance, and repair of all types of HVAC systems.",
    fullDesc:
      "Optimal climate control is crucial in the UAE. Euro Edge delivers complete HVAC solutions including central AC systems, split units, FCUs, AHUs, ducting, ventilation, and air filtration systems to ensure clean indoor air and thermal comfort year-round.",
    iconName: "Fan",
    imageUrl: "/images/services/hvac-systems.jpg",
    keyFeatures: [
      "Central AC, FCU & AHU Servicing",
      "Duct Fabrication, Cleaning & Disinfection",
      "Chilled Water System Maintenance",
      "Ventilation & Exhaust Fan Installation",
      "Refrigerant Gas Charging & Leak Checks",
    ],
    applications: [
      "Commercial Towers & Malls",
      "Villas & Residential Complexes",
      "Data Centers & Server Rooms",
      "Hospitals & Clean Rooms",
    ],
  },
  {
    slug: "false-ceiling",
    title: "False Ceiling & Light Partitions Installation",
    shortDesc: "Design and installation of false ceilings and light partitions for modern interiors.",
    fullDesc:
      "Transform interior spaces with custom false ceiling grid systems, decorative gypsum designs, acoustic tiles, and lightweight drywall partitions tailored for residential villas, offices, and retail fit-outs in Dubai.",
    iconName: "Grid",
    imageUrl: "/images/services/false-ceiling.jpg",
    keyFeatures: [
      "Gypsum Board False Ceiling Installation",
      "Acoustic Ceiling Tiles & Grid Systems",
      "Lightweight Drywall Partitioning",
      "Integrated Recessed Lighting Cutouts",
      "Fire-Rated Partition Wall Systems",
    ],
    applications: [
      "Corporate Office Interiors",
      "Retail Stores & Boutiques",
      "Luxury Villa Fit-Outs",
      "Hospitality Suites",
    ],
  },
  {
    slug: "electrical-fittings",
    title: "Electrical Fittings & Fixtures Repairing & Maintenance",
    shortDesc: "Repairing and maintenance of all types of electrical fittings, switches, and light fixtures.",
    fullDesc:
      "Keep your lighting and electrical infrastructure safe and operational. Our technical teams repair and maintain modern LED fixtures, decorative lights, distribution boxes, circuit breakers, and automated switches.",
    iconName: "Lightbulb",
    imageUrl: "/images/services/electrical-fittings.jpg",
    keyFeatures: [
      "LED & Architectural Lighting Maintenance",
      "Switchboard & Circuit Breaker Repairs",
      "Smart Lighting & Automation Maintenance",
      "Fault Finding & Short Circuit Resolution",
      "External & Facade Lighting Repairs",
    ],
    applications: [
      "Residential Apartments & Townhouses",
      "Commercial Buildings & Showrooms",
      "Outdoor Landscape & Facade Lighting",
    ],
  },
  {
    slug: "tiling-works",
    title: "Floor & Wall Tiling Works",
    shortDesc: "Professional floor and wall tiling with porcelain, marble, and ceramic tiles.",
    fullDesc:
      "High-precision floor and wall tiling services for interior and exterior spaces. We handle porcelain, marble, granite, ceramic, and decorative mosaic tiling with meticulous joint alignment and waterproof grouting.",
    iconName: "Square",
    imageUrl: "/images/services/tiling-works.jpg",
    keyFeatures: [
      "Large Format Porcelain & Ceramic Tiling",
      "Marble & Granite Floor Installation",
      "Bathroom & Kitchen Wall Tiling",
      "Sub-Floor Levelling & Waterproofing",
      "Epoxy Grouting & Joint Sealing",
    ],
    applications: [
      "Villa Flooring & Bathrooms",
      "Commercial Lobby Floors",
      "Hotel & Restaurant Restrooms",
      "Outdoor Patio & Swimming Pool Decks",
    ],
  },
  {
    slug: "plaster-works",
    title: "Plaster Works",
    shortDesc: "Internal and external plastering with a smooth, durable finish.",
    fullDesc:
      "Expert plastering services for internal walls, external facades, and decorative moldings. We ensure perfectly flat, smooth surfaces prepared for painting or decorative wall finishes.",
    iconName: "Maximize",
    imageUrl: "/images/services/plaster-works.jpg",
    keyFeatures: [
      "Internal Cement & Gypsum Plastering",
      "External Facade Render & Plaster",
      "Decorative Cornice & Molding Repairs",
      "Crack Repair & Surface Restoration",
      "Damp-Proof Plaster Coatings",
    ],
    applications: [
      "New Villa & Building Construction",
      "Renovation & Refurbishment Projects",
      "Commercial Shell & Core Fit-Outs",
    ],
  },
  {
    slug: "carpentry-flooring",
    title: "Carpentry & Wood Flooring Works",
    shortDesc: "Custom carpentry, cabinetry, and wooden laminate/parquet flooring installation.",
    fullDesc:
      "Custom woodwork and premium wood flooring solutions for residential and commercial spaces. Our carpenters specialize in doors, fitted wardrobes, wall panelling, and solid hardwood or laminate floor installation.",
    iconName: "Hammer",
    imageUrl: "/images/services/carpentry-flooring.jpg",
    keyFeatures: [
      "Hardwood & Parquet Floor Installation",
      "Laminate & Engineered Wood Flooring",
      "Custom Doors, Frames & Wooden Panelling",
      "Built-in Wardrobes & Kitchen Cabinetry",
      "Wood Floor Sanding, Polishing & Refinishing",
    ],
    applications: [
      "Luxury Homes & Penthouses",
      "Executive Boardrooms & Offices",
      "Boutique Hotels & Showrooms",
    ],
  },
  {
    slug: "swimming-pool",
    title: "Swimming Pool Maintenance",
    shortDesc: "Cleaning, chemical balancing, pump maintenance, and repair of swimming pools.",
    fullDesc:
      "Comprehensive pool care services to maintain crystal-clear, hygienic water year-round. We handle daily chemical balancing, filtration pump maintenance, tile repair, underwater lighting, and heating/chilling systems.",
    iconName: "Waves",
    imageUrl: "/images/services/swimming-pool.jpg",
    keyFeatures: [
      "Regular Water Testing & Chemical Treatment",
      "Pool Filter & Booster Pump Servicing",
      "Underwater LED Lighting Repairs",
      "Pool Heater & Chiller Maintenance",
      "Tile Grouting & Structural Leak Repairs",
    ],
    applications: [
      "Private Residential Villas",
      "Residential Community Pools",
      "Hotel & Resort Swimming Pools",
    ],
  },
  {
    slug: "kitchen-installation",
    title: "Kitchen Installation",
    shortDesc: "Complete modular kitchen installation, countertop fitting, and appliance connection.",
    fullDesc:
      "Turnkey kitchen installation solutions combining modern aesthetics with functional utility. We install modular cabinets, granite/quartz countertops, sink plumbing, exhaust hoods, and electrical appliance hookups.",
    iconName: "Utensils",
    imageUrl: "/images/services/kitchen-installation.jpg",
    keyFeatures: [
      "Modular Cabinet Fitting & Alignment",
      "Granite, Marble & Quartz Countertop Fitting",
      "Sink & Faucet Plumbing Connection",
      "Kitchen Exhaust & Duct Hood Installation",
      "Electrical Appliance Wiring & Integration",
    ],
    applications: [
      "Residential Apartments & Villas",
      "Commercial Restaurant Kitchens",
      "Staff Pantries & Cafeterias",
    ],
  },
  {
    slug: "aluminium-glass",
    title: "Aluminium & Glass Installation",
    shortDesc: "Installation of aluminium doors, windows, curtain walls, and glass partitions.",
    fullDesc:
      "High-grade architectural aluminium and glass installation for modern exterior facades and sleek interior office partitions. Double-glazed windows, sliding doors, tempered glass balustrades, and shower enclosures.",
    iconName: "Building",
    imageUrl: "/images/services/aluminium-glass.jpg",
    keyFeatures: [
      "Aluminium Doors & Windows Installation",
      "Structural Glass Facades & Curtain Walls",
      "Frameless Interior Glass Partitions",
      "Shower Glass Enclosures & Balustrades",
      "Weather Sealing & Gasket Replacement",
    ],
    applications: [
      "Commercial High-Rise Facades",
      "Modern Office Glass Partitions",
      "Luxury Villa Windows & Doors",
    ],
  },
  {
    slug: "building-maintenance",
    title: "Building Maintenance",
    shortDesc: "General upkeep, structural maintenance, and civil repairs for building operations.",
    fullDesc:
      "Comprehensive maintenance programs to preserve structural integrity, tenant safety, and operational efficiency of commercial, residential, and industrial properties in Dubai.",
    iconName: "Building2",
    imageUrl: "/images/services/building-maintenance.jpg",
    keyFeatures: [
      "Facade & Exterior Wall Repairs",
      "Roof Waterproofing & Insulation Checks",
      "General Handyman & Routine Fixes",
      "Fire Safety System Upkeep",
      "Common Area Civil & Painting Upkeep",
    ],
    applications: [
      "Residential Towers & Communities",
      "Commercial Real Estate Portfolios",
      "Shopping Malls & Retail Centers",
    ],
  },
  {
    slug: "mep-services",
    title: "MEP Services (Mechanical, Electrical & Plumbing)",
    shortDesc: "Integrated MEP engineering, installation, and preventative maintenance.",
    fullDesc:
      "Complete MEP contracting for new developments, fit-outs, and retrofits. We design, install, test, and maintain integrated mechanical, electrical, plumbing, and fire protection systems.",
    iconName: "Cog",
    imageUrl: "/images/services/mep-services.jpg",
    keyFeatures: [
      "Turnkey MEP System Contracting",
      "HVAC, Power & Plumbing Integration",
      "Building Automation (BMS) Support",
      "DEWA & Local Authority Compliance",
      "Energy Efficiency Audits & Upgrades",
    ],
    applications: [
      "Commercial Office Fit-Outs",
      "Industrial Plants & Warehouses",
      "Mixed-Use Property Developments",
    ],
  },
  {
    slug: "civil-maintenance",
    title: "Civil Maintenance",
    shortDesc: "Civil structural repairs, concrete restoration, masonry, and exterior paving upkeep.",
    fullDesc:
      "Heavy-duty civil maintenance services covering structural concrete repairs, brickwork, plastering, boundary wall upkeep, asphalt paving, and interlock tile repairs.",
    iconName: "Compass",
    imageUrl: "/images/services/civil-maintenance.jpg",
    keyFeatures: [
      "Structural Concrete Crack Injection & Repair",
      "Interlock Paving & Driveway Repair",
      "Boundary Wall Construction & Masonry Fixes",
      "Waterproofing Membrane Repairs",
      "Expansion Joint Sealing & Maintenance",
    ],
    applications: [
      "Industrial Warehouses & Logistics Hubs",
      "Commercial Building Exteriors",
      "Community Roadways & Pavements",
    ],
  },
  {
    slug: "facility-management",
    title: "Facility Management",
    shortDesc: "End-to-end hard and soft facility management contracts for property owners.",
    fullDesc:
      "Tailored hard and soft facility management solutions ensuring seamless day-to-day operations, asset longevity, regulatory compliance, and cost optimization for property managers and owners.",
    iconName: "Boxes",
    imageUrl: "/images/services/facility-management.jpg",
    keyFeatures: [
      "Hard FM (MEP, HVAC, Civil & Electrical Care)",
      "Soft FM Coordination & Janitorial Oversight",
      "Predictive Asset Maintenance Planning",
      "24/7 Emergency Callout & Helpdesk",
      "Tenant Satisfaction & SLA Management",
    ],
    applications: [
      "Commercial Tower Management",
      "Residential Gated Communities",
      "Educational & Health Institutions",
    ],
  },
  {
    slug: "technical-support",
    title: "Technical Support & Troubleshooting",
    shortDesc: "On-demand technical helpdesk, emergency callouts, and fault diagnostics.",
    fullDesc:
      "Rapid response technical support team available around the clock to diagnose and resolve sudden electrical trips, plumbing leaks, AC failures, or mechanical breakdowns across Dubai.",
    iconName: "Headphones",
    imageUrl: "/images/services/technical-support.jpg",
    keyFeatures: [
      "24/7 Rapid Emergency Response Crews",
      "Diagnostic Thermal Imaging & Load Audit",
      "On-Site Technical Troubleshooting",
      "Spare Parts Sourcing & Replacement",
      "Post-Repair System Testing & Guarantee",
    ],
    applications: [
      "Urgent Residential Breakdown Calls",
      "Commercial Office Emergency Upkeep",
      "Mission-Critical Infrastructure",
    ],
  },
  {
    slug: "industrial-maintenance",
    title: "Industrial Maintenance",
    shortDesc: "Heavy equipment, warehouse electrical, and industrial facility technical care.",
    fullDesc:
      "Specialized maintenance solutions for industrial plants, factories, and logistics warehouses. We service high-capacity electrical panels, industrial ventilation, floor epoxy coatings, and mechanical plant equipment.",
    iconName: "Factory",
    imageUrl: "/images/services/industrial-maintenance.jpg",
    keyFeatures: [
      "Industrial Power Panel & Distribution Upkeep",
      "Heavy Ventilation & Exhaust System Care",
      "Industrial Epoxy Floor Maintenance",
      "Mechanical Plant Machine Servicing",
      "Industrial Safety Standard Audits",
    ],
    applications: [
      "Industrial Plants & Manufacturing Lines",
      "Logistics Warehouses & Storage Facilities",
      "Commercial Cold Storage Facilities",
    ],
  },
  {
    slug: "kitchen-equipment-maintenance",
    title: "Kitchen Equipment Maintenance",
    shortDesc: "Preventative and corrective maintenance, repair, and servicing of commercial and residential kitchen equipment.",
    fullDesc:
      "Professional maintenance and repair services for commercial and heavy-duty residential kitchen equipment across Dubai. We service commercial ovens, ranges, deep fryers, exhaust hoods, refrigeration units, dishwashers, and food preparation machinery to ensure uninterrupted operation, hygiene compliance, and safety.",
    iconName: "Utensils",
    imageUrl: "/images/services/kitchen-equipment-maintenance.jpg",
    keyFeatures: [
      "Commercial Oven, Griddle & Range Maintenance",
      "Refrigeration & Walk-In Chiller Servicing",
      "Exhaust Hood & Degreasing Maintenance",
      "Commercial Dishwasher & Plumbing Servicing",
      "Emergency Equipment Breakdown Repair",
    ],
    applications: [
      "Hotels, Restaurants & Catering Kitchens",
      "Commercial Food Courts & Cloud Kitchens",
      "Staff Pantries & Cafeterias",
      "Luxury Residential Kitchens",
    ],
  },
]
