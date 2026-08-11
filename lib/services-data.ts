export interface RelatedService {
  title: string
  slug: string
}

export interface ServiceFAQ {
  q: string
  a: string
}

export interface ServiceItem {
  slug: string
  title: string
  shortDesc: string
  fullDesc: string
  iconName: string
  imageUrl: string
  imageAlt: string
  keyFeatures: string[]
  applications: string[]
  titleTag: string
  whyChooseEuroEdge: string[]
  relatedServices: RelatedService[]
  faqs: ServiceFAQ[]
}

export const servicesData: ServiceItem[] = [
  {
    slug: "electrical-works",
    title: "Electrical Works",
    shortDesc: "Professional electrical installation, wiring, testing & commissioning in Dubai. DEWA-certified electricians for villas, offices & industrial plants.",
    fullDesc:
      "Euro Edge Technical Services L.L.C. provides end-to-end electrical solutions for residential, commercial, and industrial properties in Dubai and across the UAE. From power distribution panels to complex wiring networks, our certified electricians ensure complete safety compliance, energy efficiency, and flawless execution.",
    iconName: "Zap",
    imageUrl: "/images/services/electrical-works.jpg",
    imageAlt: "Certified electrician installing electrical distribution panel in Dubai property — Euro Edge Technical Services",
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
    titleTag: "Electrical Works in Dubai | Euro Edge Technical Services",
    whyChooseEuroEdge: [
      "DEWA-licensed engineers and electricians",
      "Rapid 30–45 minute emergency callout response in Dubai",
      "Strict compliance with Dubai Municipality wiring & safety codes",
      "Comprehensive testing and load balancing before project sign-off",
    ],
    relatedServices: [
      { title: "MEP Services", slug: "mep-services" },
      { title: "Electrical Fittings & Fixtures", slug: "electrical-fittings" },
      { title: "Facility Management", slug: "facility-management" },
    ],
    faqs: [
      {
        q: "Are your electricians DEWA-licensed and certified in Dubai?",
        a: "Yes, 100%. All Euro Edge electrical engineers and senior technicians hold official DEWA (Dubai Electricity and Water Authority) licensing and operate strictly under local UAE safety codes.",
      },
      {
        q: "What is your response time for emergency power trips or electrical faults?",
        a: "Our rapid dispatch emergency teams arrive on-site within 30 to 45 minutes anywhere in Dubai, 24/7, for critical power loss, breaker trips, or sparking panels.",
      },
      {
        q: "Do you issue electrical completion certificates after installation?",
        a: "Yes, we provide full testing reports, insulation resistance logs, and completion documentation for residential and commercial authorities.",
      },
    ],
  },
  {
    slug: "plumbing-sanitary",
    title: "Plumbing & Sanitary",
    shortDesc: "Expert plumbing installation, leak repair & sanitary fitting in Dubai. Certified plumbers serving villas, hotels & commercial properties across UAE.",
    fullDesc:
      "We deliver high-precision plumbing and sanitary fitting services engineered for maximum reliability and water efficiency. Our expert team handles everything from clean water supply networks to complex drainage and sanitaryware installations.",
    iconName: "Droplet",
    imageUrl: "/images/services/plumbing-sanitary.jpg",
    imageAlt: "Plumber installing water supply pipework in Dubai villa — Euro Edge Technical Services",
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
    titleTag: "Plumbing & Sanitary Services in Dubai | Euro Edge Technical Services",
    whyChooseEuroEdge: [
      "Dubai Municipality-approved plumbing specialists",
      "Non-destructive acoustic and thermal leak detection equipment",
      "Water-efficient sanitaryware fitting reducing consumption",
      "24/7 rapid emergency leak and blockage resolution",
    ],
    relatedServices: [
      { title: "HVAC Systems", slug: "hvac-systems" },
      { title: "MEP Services", slug: "mep-services" },
      { title: "Building Maintenance", slug: "building-maintenance" },
    ],
    faqs: [
      {
        q: "Do you handle emergency pipe burst and water leak repairs 24/7?",
        a: "Yes. Water leaks can cause severe civil damage in Dubai properties; our emergency plumbing crews dispatch immediately with a 30–45 minute arrival guarantee.",
      },
      {
        q: "Can you detect hidden leaks without breaking walls or floors?",
        a: "We utilize advanced acoustic sensors, tracer gas equipment, and thermal imaging cameras to pinpoint hidden pipe leaks accurately without unnecessary wall damage.",
      },
      {
        q: "Do you supply and install central water heaters and filtration systems?",
        a: "Yes, we install, service, and maintain residential and commercial central water heaters, heat pumps, and multi-stage filtration systems.",
      },
    ],
  },
  {
    slug: "hvac-systems",
    title: "HVAC Systems (Air-Conditioning, Ventilation & Filtration)",
    shortDesc: "Central AC, FCU/AHU servicing, duct cleaning & chilled water maintenance in Dubai. DEWA-compliant HVAC contractors — free site assessment.",
    fullDesc:
      "Optimal climate control is crucial in the UAE. Euro Edge delivers complete HVAC solutions including central AC systems, split units, FCUs, AHUs, ducting, ventilation, and air filtration systems to ensure clean indoor air and thermal comfort year-round.",
    iconName: "Fan",
    imageUrl: "/images/services/hvac-systems.jpg",
    imageAlt: "HVAC technician servicing central air conditioning duct system in Dubai — Euro Edge Technical Services",
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
    titleTag: "HVAC Systems (AC, Ventilation & Filtration) in Dubai | Euro Edge Technical Services",
    whyChooseEuroEdge: [
      "DEWA & Dubai Municipality certified HVAC technicians",
      "Emergency 30–45 minute breakdown response across Dubai",
      "High-grade R410A/R32 eco-friendly refrigerants and genuine OEM parts",
      "Annual Maintenance Contract (AMC) packages with bi-annual preventive maintenance",
    ],
    relatedServices: [
      { title: "MEP Services", slug: "mep-services" },
      { title: "Electrical Fittings & Fixtures", slug: "electrical-fittings" },
      { title: "Facility Management", slug: "facility-management" },
    ],
    faqs: [
      {
        q: "How often should AC systems be serviced in Dubai's climate?",
        a: "We recommend comprehensive servicing every 3 to 6 months in Dubai due to high ambient dust, humidity, and continuous summer operational loads.",
      },
      {
        q: "Do you offer Annual Maintenance Contracts (AMC) specifically for HVAC?",
        a: "Yes. Our AMC packages cover bi-annual preventive servicing, duct disinfection, filter replacement, and priority 24/7 breakdown dispatch.",
      },
      {
        q: "What is your emergency AC breakdown response time?",
        a: "For complete AC cooling failures in Dubai, our emergency response crews arrive on-site within 30 to 45 minutes.",
      },
    ],
  },
  {
    slug: "false-ceiling",
    title: "False Ceiling & Light Partitions Installation",
    shortDesc: "Gypsum false ceiling, acoustic tiles & drywall partition installation in Dubai. Custom designs for villas, offices & retail fit-outs. Fast, clean execution.",
    fullDesc:
      "Transform interior spaces with custom false ceiling grid systems, decorative gypsum designs, acoustic tiles, and lightweight drywall partitions tailored for residential villas, offices, and retail fit-outs in Dubai.",
    iconName: "Grid",
    imageUrl: "/images/services/false-ceiling.jpg",
    imageAlt: "Gypsum false ceiling installation in progress at Dubai office fit-out — Euro Edge Technical Services",
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
    titleTag: "False Ceiling & Light Partition Installation in Dubai | Euro Edge Technical Services",
    whyChooseEuroEdge: [
      "Civil Defense compliant fire-rated partition wall options",
      "Integrated electrical and lighting cutout alignment included",
      "Clean, dust-controlled execution for occupied commercial premises",
      "Seamless integration with HVAC diffuser cutouts and MEP services",
    ],
    relatedServices: [
      { title: "Carpentry & Wood Flooring", slug: "carpentry-flooring" },
      { title: "MEP Services", slug: "mep-services" },
      { title: "Building Maintenance", slug: "building-maintenance" },
    ],
    faqs: [
      {
        q: "Can false ceiling works be executed in an occupied office without stopping operations?",
        a: "Yes. We offer night-shift and weekend work schedules with dust containment barriers to prevent operational disruption.",
      },
      {
        q: "Do you supply moisture-resistant and fire-rated gypsum boards?",
        a: "Yes, we install MR (Moisture-Resistant) boards for bathrooms and kitchens, and FR (Fire-Rated) boards for commercial partitions.",
      },
      {
        q: "How long does a standard room ceiling installation take?",
        a: "A standard room or villa zone false ceiling installation takes 2 to 3 days from grid framing to joint taping and sanding.",
      },
    ],
  },
  {
    slug: "electrical-fittings",
    title: "Electrical Fittings & Fixtures Repairing & Maintenance",
    shortDesc: "LED fixture repair, switchboard maintenance & smart lighting servicing in Dubai. Certified electricians for residential, commercial & facade lighting.",
    fullDesc:
      "Keep your lighting and electrical infrastructure safe and operational. Our technical teams repair and maintain modern LED fixtures, decorative lights, distribution boxes, circuit breakers, and automated switches.",
    iconName: "Lightbulb",
    imageUrl: "/images/services/electrical-fittings.jpg",
    imageAlt: "Electrician repairing LED architectural lighting fixture in Dubai commercial space — Euro Edge Technical Services",
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
    titleTag: "Electrical Fittings & Fixtures Repair in Dubai | Euro Edge Technical Services",
    whyChooseEuroEdge: [
      "Specialists in indoor LED, architectural grid & exterior facade lighting",
      "Smart switch and lighting control system automation compatibility",
      "Same-day callout for tripping breakers and fixture failures",
      "Calibrated thermal diagnostics for hidden electrical overload identification",
    ],
    relatedServices: [
      { title: "Electrical Works", slug: "electrical-works" },
      { title: "MEP Services", slug: "mep-services" },
      { title: "Building Maintenance", slug: "building-maintenance" },
    ],
    faqs: [
      {
        q: "Do you repair smart lighting automation and dimming switches?",
        a: "Yes, our electricians handle troubleshooting and repairs for modern smart dimmers, automation modules, and digital lighting controllers.",
      },
      {
        q: "Can you source exact matching light fixtures if replacements are needed?",
        a: "We maintain direct supplier relationships with top UAE electrical distributors to source exact replacement lamps, drivers, and fittings.",
      },
      {
        q: "Do you handle outdoor landscape and facade lighting repairs?",
        a: "Yes, we repair weatherproof IP65/IP67 rated outdoor fixtures, garden ground lights, and building facade floodlights.",
      },
    ],
  },
  {
    slug: "tiling-works",
    title: "Floor & Wall Tiling Works",
    shortDesc: "Porcelain, marble & ceramic floor and wall tiling in Dubai. Precise joint alignment, waterproof grouting & sub-floor levelling for villas & commercial spaces.",
    fullDesc:
      "High-precision floor and wall tiling services for interior and exterior spaces. We handle porcelain, marble, granite, ceramic, and decorative mosaic tiling with meticulous joint alignment and waterproof grouting.",
    iconName: "Square",
    imageUrl: "/images/services/tiling-works.jpg",
    imageAlt: "Tiler laying large-format porcelain tiles in Dubai villa bathroom — Euro Edge Technical Services",
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
    titleTag: "Floor & Wall Tiling Works in Dubai | Euro Edge Technical Services",
    whyChooseEuroEdge: [
      "Large-format tile specialists with precision suction lifting equipment",
      "Complete sub-floor levelling and liquid waterproofing membrane application",
      "Stain-resistant epoxy grouting for long-lasting joint aesthetics",
      "Full debris removal and post-tiling deep cleaning included",
    ],
    relatedServices: [
      { title: "Carpentry & Wood Flooring", slug: "carpentry-flooring" },
      { title: "Plaster Works", slug: "plaster-works" },
      { title: "Building Maintenance", slug: "building-maintenance" },
    ],
    faqs: [
      {
        q: "Can you remove old existing tiles before laying new porcelain or marble?",
        a: "Yes, we provide full demolition, old tile removal, screed preparation, sub-floor levelling, and new tile installation.",
      },
      {
        q: "Do you apply waterproofing under bathroom and kitchen floor tiles?",
        a: "Always. We apply dual-coat liquid waterproofing membranes and perform 24-hour flood testing before laying floor tiles in wet areas.",
      },
      {
        q: "What tile formats can your team install?",
        a: "We install standard ceramics up to ultra-large format porcelain slabs (e.g. 1200×2400mm) and natural marble slabs.",
      },
    ],
  },
  {
    slug: "plaster-works",
    title: "Plaster Works",
    shortDesc: "Internal gypsum plastering, external render & crack repair for Dubai properties. Smooth, durable finishes ready for painting. Villas, offices & commercial buildings.",
    fullDesc:
      "Expert plastering services for internal walls, external facades, and decorative moldings. We ensure perfectly flat, smooth surfaces prepared for painting or decorative wall finishes.",
    iconName: "Maximize",
    imageUrl: "/images/services/plaster-works.jpg",
    imageAlt: "Plasterer applying gypsum skim coat to interior wall in Dubai villa — Euro Edge Technical Services",
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
    titleTag: "Plaster Works (Internal & External) in Dubai | Euro Edge Technical Services",
    whyChooseEuroEdge: [
      "Gypsum and cement plastering with high crack resistance",
      "External facade rendering with weather-resistant thermal finishes",
      "Damp-proofing treatments preventing salt damp in UAE soil conditions",
      "Laser level checking ensuring perfectly flat wall surfaces for paint",
    ],
    relatedServices: [
      { title: "False Ceiling & Light Partitions", slug: "false-ceiling" },
      { title: "Floor & Wall Tiling", slug: "tiling-works" },
      { title: "Building Maintenance", slug: "building-maintenance" },
    ],
    faqs: [
      {
        q: "What is the difference between gypsum plaster and cement render?",
        a: "Gypsum plaster provides an ultra-smooth finish for dry indoor walls, whereas cement render is weather-resistant for exterior facades and wet areas.",
      },
      {
        q: "Can you repair recurring cracks in villa exterior plaster walls?",
        a: "Yes. We grind out cracks, apply elastomeric crack fillers, install fiberglass mesh, and re-plaster to prevent reoccurrence.",
      },
      {
        q: "How long does internal plastering take to dry before painting can start?",
        a: "Under Dubai climate conditions, internal skim coats take 48 to 72 hours to fully cure before primer application.",
      },
    ],
  },
  {
    slug: "carpentry-flooring",
    title: "Carpentry & Wood Flooring Works",
    shortDesc: "Custom carpentry, built-in wardrobes & hardwood/laminate floor installation in Dubai. Precision woodwork for luxury villas, offices & retail spaces across UAE.",
    fullDesc:
      "Custom woodwork and premium wood flooring solutions for residential and commercial spaces. Our carpenters specialize in doors, fitted wardrobes, wall panelling, and solid hardwood or laminate floor installation.",
    iconName: "Hammer",
    imageUrl: "/images/services/carpentry-flooring.jpg",
    imageAlt: "Carpenter installing solid hardwood parquet flooring in Dubai luxury villa — Euro Edge Technical Services",
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
    titleTag: "Carpentry & Wood Flooring in Dubai | Euro Edge Technical Services",
    whyChooseEuroEdge: [
      "Kiln-dried, humidity-stabilized timber suited for Dubai environment",
      "Moisture-proof underlayment preventing sub-floor warping",
      "Custom fitted wardrobe and vanity design and fabrication",
      "Dust-free floor sanding and non-toxic polyurethane polish finishes",
    ],
    relatedServices: [
      { title: "False Ceiling & Light Partitions", slug: "false-ceiling" },
      { title: "Floor & Wall Tiling", slug: "tiling-works" },
      { title: "Kitchen Installation", slug: "kitchen-installation" },
    ],
    faqs: [
      {
        q: "Which wood flooring is best suited for Dubai villas?",
        a: "Engineered hardwood and high-grade AC4/AC5 laminate are top choices because their structural layers resist humidity fluctuations better than solid plank.",
      },
      {
        q: "Can you sand and re-polish worn wood floors instead of replacing them?",
        a: "Yes. Our dustless floor sanding machine removes scratches and old lacquer, followed by staining and fresh protective sealing.",
      },
      {
        q: "Do you make custom doors and fitted wardrobes?",
        a: "Yes, we fabricate and install bespoke interior doors, door jambs, wall panelling, and fitted bedroom wardrobes.",
      },
    ],
  },
  {
    slug: "swimming-pool",
    title: "Swimming Pool Maintenance",
    shortDesc: "Pool cleaning, chemical balancing, pump servicing & underwater lighting repair in Dubai. Regular and emergency pool maintenance for villas, hotels & communities.",
    fullDesc:
      "Comprehensive pool care services to maintain crystal-clear, hygienic water year-round. We handle daily chemical balancing, filtration pump maintenance, tile repair, underwater lighting, and heating/chilling systems.",
    iconName: "Waves",
    imageUrl: "/images/services/swimming-pool.jpg",
    imageAlt: "Pool technician testing water chemistry in Dubai villa swimming pool — Euro Edge Technical Services",
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
    titleTag: "Swimming Pool Maintenance in Dubai | Euro Edge Technical Services",
    whyChooseEuroEdge: [
      "Certified pool operators following Dubai Municipality hygiene standards",
      "Bi-weekly or monthly contract packages tailored for private villas",
      "Full pump, sand filter, and salt chlorinator mechanical repairs",
      "Emergency water clarity recovery for green or cloudy pools",
    ],
    relatedServices: [
      { title: "Civil Maintenance", slug: "civil-maintenance" },
      { title: "Plumbing & Sanitary", slug: "plumbing-sanitary" },
      { title: "Building Maintenance", slug: "building-maintenance" },
    ],
    faqs: [
      {
        q: "How frequently should a villa swimming pool be serviced in Dubai?",
        a: "We recommend bi-weekly visits during summer to maintain free chlorine, pH balance, sand filtration, and skimmer basket hygiene.",
      },
      {
        q: "Do you repair and maintain pool heating and cooling chillers?",
        a: "Yes, we service and repair heat pump chillers, circulation pumps, and digital thermostat sensors for year-round temperature control.",
      },
      {
        q: "How do you handle leaking pool tiles or underwater lights?",
        a: "We perform underwater tile epoxy re-grouting and IP68 sealed LED light replacement without draining the pool water.",
      },
    ],
  },
  {
    slug: "kitchen-installation",
    title: "Kitchen Installation",
    shortDesc: "Modular kitchen installation, countertop fitting & appliance connection in Dubai. Complete turnkey kitchen fit-out for villas, apartments & commercial restaurants.",
    fullDesc:
      "Turnkey kitchen installation solutions combining modern aesthetics with functional utility. We install modular cabinets, granite/quartz countertops, sink plumbing, exhaust hoods, and electrical appliance hookups.",
    iconName: "Utensils",
    imageUrl: "/images/services/kitchen-installation.jpg",
    imageAlt: "Kitchen installer fitting granite countertop and modular cabinets in Dubai apartment — Euro Edge Technical Services",
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
    titleTag: "Kitchen Installation in Dubai | Euro Edge Technical Services",
    whyChooseEuroEdge: [
      "Turnkey service covering cabinetry, masonry countertops, plumbing and electrical",
      "Compatible with imported European and custom local cabinet systems",
      "Certified gas line and high-power electrical appliance connections",
      "Post-installation snagging and full appliance commissioning guarantee",
    ],
    relatedServices: [
      { title: "Carpentry & Wood Flooring", slug: "carpentry-flooring" },
      { title: "Plumbing & Sanitary", slug: "plumbing-sanitary" },
      { title: "Aluminium & Glass Installation", slug: "aluminium-glass" },
    ],
    faqs: [
      {
        q: "Do you install flat-pack or client-purchased kitchen cabinets?",
        a: "Yes, we install custom-built kitchens as well as client-supplied modular flat-pack cabinets from any brand.",
      },
      {
        q: "Can your team handle heavy stone countertop fitting?",
        a: "Yes, we handle quartz, marble, and granite countertop templating, cutting, fitting, sink cutouts, and edge polishing.",
      },
      {
        q: "Do you connect built-in gas ovens and electrical hobs?",
        a: "Our certified technicians safely perform all electrical hardwiring, gas regulator connections, and exhaust hood ducting.",
      },
    ],
  },
  {
    slug: "aluminium-glass",
    title: "Aluminium & Glass Installation",
    shortDesc: "Aluminium doors, windows, curtain walls & glass partitions in Dubai. Double-glazed facades, frameless office partitions & shower enclosures — precise, certified installation.",
    fullDesc:
      "High-grade architectural aluminium and glass installation for modern exterior facades and sleek interior office partitions. Double-glazed windows, sliding doors, tempered glass balustrades, and shower enclosures.",
    iconName: "Building",
    imageUrl: "/images/services/aluminium-glass.jpg",
    imageAlt: "Aluminium and glass curtain wall installation on Dubai commercial building — Euro Edge Technical Services",
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
    titleTag: "Aluminium & Glass Installation in Dubai | Euro Edge Technical Services",
    whyChooseEuroEdge: [
      "Thermal-break aluminium frames reducing indoor AC power consumption",
      "Toughened and acoustic laminated safety glass meeting UAE codes",
      "Precision structural silicone and weather-gasket sealing against dust and rain",
      "High-reach rope access and boom lift capabilities for high-rise glass replacement",
    ],
    relatedServices: [
      { title: "False Ceiling & Light Partitions", slug: "false-ceiling" },
      { title: "Building Maintenance", slug: "building-maintenance" },
      { title: "Civil Maintenance", slug: "civil-maintenance" },
    ],
    faqs: [
      {
        q: "Why is double-glazed thermal glass recommended for Dubai windows?",
        a: "Double-glazed glass significantly blocks solar heat transmission, cuts AC power bills by up to 30%, and dampens outside traffic noise.",
      },
      {
        q: "Do you install frameless glass partitions for commercial offices?",
        a: "Yes, we supply 10mm/12mm toughened glass partitions with patch fittings, floor springs, and acoustic seals for modern office suites.",
      },
      {
        q: "Can you fix leaking aluminium sliding doors or broken window locks?",
        a: "Yes, we replace worn weather-stripping gaskets, rollers, handles, friction hinges, and broken double-glazed units.",
      },
    ],
  },
  {
    slug: "building-maintenance",
    title: "Building Maintenance",
    shortDesc: "Comprehensive building upkeep, facade repair & civil maintenance in Dubai. Preventive and corrective maintenance for towers, villas & commercial properties across UAE.",
    fullDesc:
      "Comprehensive maintenance programs to preserve structural integrity, tenant safety, and operational efficiency of commercial, residential, and industrial properties in Dubai.",
    iconName: "Building2",
    imageUrl: "/images/services/building-maintenance.jpg",
    imageAlt: "Building maintenance engineer inspecting facade and exterior walls of Dubai commercial tower — Euro Edge Technical Services",
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
    titleTag: "Building Maintenance Services in Dubai | Euro Edge Technical Services",
    whyChooseEuroEdge: [
      "Single contracting entity managing civil, MEP, and aesthetic upkeep",
      "Scheduled Planned Preventive Maintenance (PPM) asset protection",
      "24/7 dedicated rapid response team for property emergency repairs",
      "Comprehensive digital audit logs and maintenance reporting",
    ],
    relatedServices: [
      { title: "Facility Management", slug: "facility-management" },
      { title: "Civil Maintenance", slug: "civil-maintenance" },
      { title: "MEP Services", slug: "mep-services" },
    ],
    faqs: [
      {
        q: "Do you provide customized Annual Maintenance Contracts (AMC) for building owners?",
        a: "Yes, we customize hard FM and civil upkeep AMCs according to building age, square footage, occupancy, and system specifications.",
      },
      {
        q: "How quickly do you respond to urgent building maintenance calls?",
        a: "Emergency response for severe leaks, electrical outages, or safety hazards is guaranteed within 30 to 45 minutes across Dubai.",
      },
      {
        q: "Can you manage common area civil repairs and fresh painting?",
        a: "Yes, we maintain common corridors, lobbies, roof membranes, boundary walls, and exterior facades.",
      },
    ],
  },
  {
    slug: "mep-services",
    title: "MEP Services (Mechanical, Electrical & Plumbing)",
    shortDesc: "Integrated MEP engineering, installation & maintenance for Dubai projects. DEWA-approved MEP contractors for fit-outs, new builds & retrofits across UAE.",
    fullDesc:
      "Complete MEP contracting for new developments, fit-outs, and retrofits. We design, install, test, and maintain integrated mechanical, electrical, plumbing, and fire protection systems.",
    iconName: "Cog",
    imageUrl: "/images/services/mep-services.jpg",
    imageAlt: "MEP engineer coordinating mechanical, electrical and plumbing systems installation in Dubai fit-out — Euro Edge Technical Services",
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
    titleTag: "MEP Services (Mechanical, Electrical & Plumbing) in Dubai | Euro Edge Technical Services",
    whyChooseEuroEdge: [
      "Turnkey MEP contractor eliminating multi-subcontractor coordination conflicts",
      "DEWA, Dubai Municipality, and Civil Defense regulatory compliance",
      "BMS (Building Management System) integration and load balancing capability",
      "Dedicated project engineers ensuring milestone adherence and quality control",
    ],
    relatedServices: [
      { title: "HVAC Systems", slug: "hvac-systems" },
      { title: "Electrical Works", slug: "electrical-works" },
      { title: "Facility Management", slug: "facility-management" },
    ],
    faqs: [
      {
        q: "Do you handle authority approvals and DEWA NOC submissions for MEP works?",
        a: "Yes, our engineering team manages complete documentation, shop drawings, load schedules, and authority NOC sign-offs in Dubai.",
      },
      {
        q: "Can you execute MEP works for shell-and-core commercial fit-outs?",
        a: "Yes, we handle complete shell-and-core MEP installation from primary DB connections and FCU piping to final device testing.",
      },
      {
        q: "Do you offer post-handover warranty and maintenance for MEP projects?",
        a: "All Euro Edge MEP installations include a 12-month defect liability period and options for ongoing AMC maintenance.",
      },
    ],
  },
  {
    slug: "civil-maintenance",
    title: "Civil Maintenance",
    shortDesc: "Structural concrete repair, masonry, waterproofing & interlock paving maintenance in Dubai. Experienced civil maintenance teams for commercial & residential properties.",
    fullDesc:
      "Heavy-duty civil maintenance services covering structural concrete repairs, brickwork, plastering, boundary wall upkeep, asphalt paving, and interlock tile repairs.",
    iconName: "Compass",
    imageUrl: "/images/services/civil-maintenance.jpg",
    imageAlt: "Civil maintenance worker repairing concrete structure and interlock paving in Dubai — Euro Edge Technical Services",
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
    titleTag: "Civil Maintenance Services in Dubai | Euro Edge Technical Services",
    whyChooseEuroEdge: [
      "Specialists in structural concrete epoxy injection and carbon fiber reinforcement",
      "High-durability roof and subterranean waterproofing membrane systems",
      "Interlock paving releavelling and high-pressure cleaning",
      "Dubai Municipality compliant construction and repair materials",
    ],
    relatedServices: [
      { title: "Building Maintenance", slug: "building-maintenance" },
      { title: "Plaster Works", slug: "plaster-works" },
      { title: "Floor & Wall Tiling", slug: "tiling-works" },
    ],
    faqs: [
      {
        q: "How do you repair structural cracks in concrete columns or slabs?",
        a: "We utilize high-pressure epoxy and polyurethane resin injection to bond and seal structural concrete cracks back to original strength.",
      },
      {
        q: "Do you fix sunken interlock driveway paving around villas?",
        a: "Yes, we lift sunken interlock tiles, re-grade and compact sub-base sand, re-lay tiles, and re-sand expansion joints.",
      },
      {
        q: "What roof waterproofing options do you provide for Dubai heat and rain?",
        a: "We apply multi-layer elastomeric liquid membranes, SBS bituminous torch-applied sheets, and combo waterproofing systems.",
      },
    ],
  },
  {
    slug: "facility-management",
    title: "Facility Management",
    shortDesc: "Hard & soft facility management contracts for Dubai properties. Preventive maintenance, 24/7 helpdesk & dedicated account engineers for commercial & residential portfolios.",
    fullDesc:
      "Tailored hard and soft facility management solutions ensuring seamless day-to-day operations, asset longevity, regulatory compliance, and cost optimization for property managers and owners.",
    iconName: "Boxes",
    imageUrl: "/images/services/facility-management.jpg",
    imageAlt: "Facility management team conducting building inspection and maintenance at Dubai commercial tower — Euro Edge Technical Services",
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
    titleTag: "Facility Management Services in Dubai | Euro Edge Technical Services",
    whyChooseEuroEdge: [
      "Integrated Hard FM & Soft FM management under a single SLA contract",
      "24/7 centralized UAE helpdesk and emergency dispatch center",
      "CAFM (Computer-Aided Facility Management) asset tracking and PPM scheduling",
      "Significant reduction in long-term building capital expenditure (CapEx)",
    ],
    relatedServices: [
      { title: "Building Maintenance", slug: "building-maintenance" },
      { title: "MEP Services", slug: "mep-services" },
      { title: "Technical Support & Troubleshooting", slug: "technical-support" },
    ],
    faqs: [
      {
        q: "What is the difference between Hard FM and Soft FM services?",
        a: "Hard FM covers physical technical infrastructure (HVAC, electrical, plumbing, civil), while Soft FM covers cleaning, security, and pest control.",
      },
      {
        q: "Can Euro Edge take over facility management mid-contract from another provider?",
        a: "Yes. We perform a comprehensive 72-hour asset audit, condition report, and seamless operational transition plan.",
      },
      {
        q: "Do you provide dedicated on-site technicians for commercial towers?",
        a: "Yes, we deploy full-time resident MEP and HVAC technicians or mobile roving response teams depending on contract scale.",
      },
    ],
  },
  {
    slug: "technical-support",
    title: "Technical Support & Troubleshooting",
    shortDesc: "24/7 on-call technical helpdesk, emergency callouts & fault diagnostics in Dubai. Rapid response for electrical trips, AC failures, plumbing leaks & mechanical breakdowns.",
    fullDesc:
      "Rapid response technical support team available around the clock to diagnose and resolve sudden electrical trips, plumbing leaks, AC failures, or mechanical breakdowns across Dubai.",
    iconName: "Headphones",
    imageUrl: "/images/services/technical-support.jpg",
    imageAlt: "Technical support engineer diagnosing electrical fault at Dubai commercial property — Euro Edge Technical Services",
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
    titleTag: "Technical Support & Troubleshooting in Dubai | Euro Edge Technical Services",
    whyChooseEuroEdge: [
      "On-site arrival within 30 to 45 minutes guaranteed across all Dubai districts",
      "Fully equipped emergency service vans stocked with common spares and instruments",
      "Thermal imaging cameras and digital diagnostic tools for instant fault localization",
      "Written inspection diagnosis and post-repair warranty provided",
    ],
    relatedServices: [
      { title: "MEP Services", slug: "mep-services" },
      { title: "HVAC Systems", slug: "hvac-systems" },
      { title: "Facility Management", slug: "facility-management" },
    ],
    faqs: [
      {
        q: "What qualifies as an emergency technical breakdown callout?",
        a: "Total AC cooling loss in summer, main electrical distribution board trips, major pipe bursts, or lift/pump control failures.",
      },
      {
        q: "Are your emergency technicians available during weekends and public holidays?",
        a: "Yes, Euro Edge operates emergency response teams 365 days a year, 24 hours a day, including official UAE public holidays.",
      },
      {
        q: "What happens if a repair requires specialized spare parts not on the van?",
        a: "We perform temporary emergency isolation/bypass to secure safety, then source original OEM parts through our priority supply chain.",
      },
    ],
  },
  {
    slug: "industrial-maintenance",
    title: "Industrial Maintenance",
    shortDesc: "Heavy equipment, warehouse electrical & industrial facility maintenance in Dubai. Specialist industrial teams for plants, factories & logistics hubs across UAE.",
    fullDesc:
      "Specialized maintenance solutions for industrial plants, factories, and logistics warehouses. We service high-capacity electrical panels, industrial ventilation, floor epoxy coatings, and mechanical plant equipment.",
    iconName: "Factory",
    imageUrl: "/images/services/industrial-maintenance.jpg",
    imageAlt: "Industrial maintenance technician servicing high-voltage electrical distribution panel in Dubai warehouse — Euro Edge Technical Services",
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
    titleTag: "Industrial Maintenance Services in Dubai | Euro Edge Technical Services",
    whyChooseEuroEdge: [
      "Heavy industrial electrical DB, MDB, and capacitor bank maintenance specialists",
      "Abrasion-resistant and chemical-resistant industrial epoxy flooring applications",
      "High-capacity industrial exhaust blowers and ducting maintenance",
      "Strict alignment with JAFZA, DAFZA, DIC, and Dubai Municipality industrial safety rules",
    ],
    relatedServices: [
      { title: "MEP Services", slug: "mep-services" },
      { title: "Electrical Works", slug: "electrical-works" },
      { title: "Facility Management", slug: "facility-management" },
    ],
    faqs: [
      {
        q: "Can industrial maintenance be executed during planned plant downtime or night shifts?",
        a: "Yes. We schedule industrial maintenance crews around your production windows to avoid costly plant downtime.",
      },
      {
        q: "Do you service high-volume industrial ventilation and dust extraction fans?",
        a: "Yes, we service industrial centrifugal fans, axial exhaust blowers, air scrubbers, and ducting systems.",
      },
      {
        q: "What safety protocols do your industrial technicians follow?",
        a: "Our technicians hold full HSE certifications, Lockout/Tagout (LOTO) credentials, and wear complete PPE.",
      },
    ],
  },
  {
    slug: "kitchen-equipment-maintenance",
    title: "Kitchen Equipment Maintenance",
    shortDesc: "Commercial kitchen equipment servicing, oven repair & refrigeration maintenance in Dubai. DM-compliant kitchen maintenance for hotels, restaurants & food courts across UAE.",
    fullDesc:
      "Professional maintenance and repair services for commercial and heavy-duty residential kitchen equipment across Dubai. We service commercial ovens, ranges, deep fryers, exhaust hoods, refrigeration units, dishwashers, and food preparation machinery to ensure uninterrupted operation, hygiene compliance, and safety.",
    iconName: "Utensils",
    imageUrl: "/images/services/kitchen-equipment-maintenance.jpg",
    imageAlt: "Kitchen equipment technician servicing commercial oven and refrigeration unit in Dubai restaurant — Euro Edge Technical Services",
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
    titleTag: "Kitchen Equipment Maintenance in Dubai | Euro Edge Technical Services",
    whyChooseEuroEdge: [
      "Dubai Municipality Food Safety & Hygiene compliant servicing protocols",
      "Commercial walk-in chiller and freezer gas leak & compressor repairs",
      "Heavy-duty grease trap and exhaust duct maintenance expertise",
      "Emergency breakdown dispatch for F&B commercial outlets to minimize downtime",
    ],
    relatedServices: [
      { title: "Kitchen Installation", slug: "kitchen-installation" },
      { title: "Plumbing & Sanitary", slug: "plumbing-sanitary" },
      { title: "Facility Management", slug: "facility-management" },
    ],
    faqs: [
      {
        q: "Which commercial kitchen equipment brands do you service?",
        a: "We service all major commercial F&B equipment brands including Rational, Rational, Electrolux, Unox, Hobart, and True Refrigeration.",
      },
      {
        q: "How often should commercial kitchen exhaust hoods be degreased in Dubai?",
        a: "Dubai Municipality recommends deep exhaust hood degreasing and duct cleaning every 3 to 6 months depending on cooking volume.",
      },
      {
        q: "Do you offer emergency breakdown repair for restaurant chillers and ovens?",
        a: "Yes. F&B operations cannot afford food spoilage; our technicians respond within 30 to 45 minutes for emergency refrigeration failures.",
      },
    ],
  },
]
