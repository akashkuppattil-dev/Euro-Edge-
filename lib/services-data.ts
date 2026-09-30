export interface RelatedService {
  title: string
  slug: string
}

export interface ServiceFAQ {
  q: string
  a: string
}

export interface ServiceSubItem {
  title: string
  description: string
  imageUrl: string
  imageAlt?: string
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
  subServices?: ServiceSubItem[]
  applications?: string[]
  titleTag: string
  whyChooseEuroEdge: string[]
  relatedServices: RelatedService[]
  faqs: ServiceFAQ[]
}

// 5 Official Euro Edge Services
export const servicesData: ServiceItem[] = [
  {
    slug: "civil-finishing-works",
    title: "Civil & Finishing Works",
    shortDesc:
      "Professional civil and interior finishing works in Dubai — interior & exterior painting, precision floor and wall tiling, plastering, gypsum partitions, false ceilings, and bespoke carpentry by Euro Edge Technical Services L.L.C.",
    fullDesc:
      "Euro Edge Technical Services L.L.C. delivers premium turnkey civil and interior finishing solutions for luxury residential villas, commercial offices, retail outlets, and hospitality venues across Dubai and the UAE. From structural blockwork and flawless plastering to high-end decorative coatings, Italian porcelain tiling, acoustic gypsum partitions, and bespoke wood carpentry, our experienced civil engineers and master artisans ensure architectural excellence, durability, and seamless handover.",
    iconName: "Hammer",
    imageUrl: "/images/services/civil-finishing.jpg",
    imageAlt: "Civil and interior finishing works in Dubai villa — Euro Edge Technical Services",
    keyFeatures: [
      "Painting — Interior & Exterior",
      "Wall & Floor Tiling",
      "Plastering",
      "False Ceiling & Gypsum Partitions",
      "Carpentry & Wood Flooring",
    ],
    subServices: [
      {
        title: "Painting — Interior & Exterior",
        imageUrl: "/images/services/painting-contracting.jpg",
        imageAlt: "Professional interior and exterior painting services in Dubai villa — Euro Edge Technical Services",
        description:
          "Comprehensive interior and exterior painting services for luxury villas, commercial offices, and residential towers. We utilize premium Jotun and Caparol weather-resistant, anti-fungal, and washable coatings engineered specifically to withstand Dubai's extreme heat, UV radiation, and humidity while delivering flawless finishes.",
      },
      {
        title: "Wall & Floor Tiling",
        imageUrl: "/images/services/tiling-works.jpg",
        imageAlt: "Precision floor and wall tiling installation in Dubai — Euro Edge Technical Services",
        description:
          "Precision installation of large-format Italian and Spanish porcelain slabs, natural marble, ceramic mosaics, and exterior stone pavers. Our master tilers employ advanced laser-leveling systems to guarantee zero lippage and seal all joints with waterproof, stain-proof epoxy grouting.",
      },
      {
        title: "Plastering",
        imageUrl: "/images/services/plaster-works.jpg",
        imageAlt: "Smooth structural and decorative plastering in Dubai — Euro Edge Technical Services",
        description:
          "Complete internal and external plastering solutions, structural cementitious rendering, smooth skim-coating, screeding, and masonry crack repairs. We ensure laser-flat, flawless wall and ceiling surfaces that provide an ideal substrate for high-grade decorative paint finishes.",
      },
      {
        title: "False Ceiling & Gypsum Partitions",
        imageUrl: "/images/services/false-ceiling.jpg",
        imageAlt: "False ceiling installation and gypsum partitions in Dubai office — Euro Edge Technical Services",
        description:
          "Dubai Civil Defence (DCD) compliant fire-rated gypsum drywall partitions, moisture-resistant ceiling grids for wet areas, acoustic suspended ceilings, and custom multi-level ceiling designs with seamless recessed LED cove lighting channels and architectural shadow gaps.",
      },
      {
        title: "Carpentry & Wood Flooring",
        imageUrl: "/images/services/carpentry-flooring.jpg",
        imageAlt: "Bespoke carpentry and luxury parquet wood flooring in Dubai — Euro Edge Technical Services",
        description:
          "Bespoke architectural joinery, luxury parquet and herringbone hardwood flooring, customized floor-to-ceiling wardrobes, wooden acoustic wall paneling, solid timber door fabrication, and archival wood refinishing executed by skilled European-standard master carpenters.",
      },
    ],
    applications: [
      "Luxury Residential Villas & Penthouses",
      "Corporate Headquarters & Commercial Offices",
      "Retail Showrooms & Luxury Boutiques",
      "Hotels, Resorts & Hospitality Venues",
      "Residential Towers & Master Developments",
    ],
    titleTag: "Civil & Interior Finishing Works Dubai | Painting, Tiling & Carpentry — Euro Edge",
    whyChooseEuroEdge: [
      "Dubai Municipality code compliance and certified engineering oversight",
      "High-durability Jotun & Caparol weather-resistant paints and coatings",
      "Laser-leveled tiling with zero lippage and waterproof grout sealants",
      "Full turnkey project execution from demolition to final handover",
    ],
    relatedServices: [
      { title: "MEP & Technical Works", slug: "mep-technical-works" },
      { title: "General Maintenance", slug: "general-maintenance" },
      { title: "Swimming Pool Works", slug: "swimming-pool-works" },
    ],
    faqs: [
      {
        q: "What types of paint formulations and wall finishes do you use for Dubai properties?",
        a: "We exclusively specify high-performance, low-VOC paint formulations from leading manufacturers including Jotun (Fenomastic, Lady Design, Jotashield) and Caparol. For exterior surfaces, we apply UV-reflective, elastomeric, and crack-bridging coatings engineered to withstand Dubai's extreme summer heat and sand abrasion. For interiors, we deliver scrubbable, anti-microbial silk and matte emulsions with flawless edge cutting.",
      },
      {
        q: "How do your master tilers guarantee zero lippage on large-format porcelain slabs and marble?",
        a: "Our installation protocol begins with laser-leveling the concrete substrate to ensure flatness within 2mm over a 2-meter span. We use high-tensile polymer-modified C2TE S1/S2 adhesive mortars with complete back-buttering coverage, mechanical leveling clips, and vibration compaction tools. All perimeter expansion joints are preserved, and grout lines are filled with waterproof, non-staining epoxy grout.",
      },
      {
        q: "Are your false ceilings and gypsum drywall partitions approved by Dubai Civil Defence (DCD)?",
        a: "Yes. All our partition systems and suspended ceilings comply with Dubai Civil Defence and Dubai Municipality building codes. We install certified 1-hour and 2-hour fire-rated gypsum assemblies (Type X), moisture-resistant (MR) boards for bathrooms and kitchens, acoustic partition infills with rockwool insulation, and heavy-duty galvanized GI framing.",
      },
      {
        q: "How do you handle substrate preparation, screeding, and crack repairs during plastering?",
        a: "We systematically prepare surfaces by mechanical wire-brushing, removing friable laitance, and applying high-bond SBR bonding agents. Structural and thermal movement cracks are opened, stitched with alkali-resistant fiberglass mesh, and filled with non-shrink structural repair mortars. Multi-coat plastering is finished with laser-guided screed bars for perfect vertical alignment.",
      },
      {
        q: "Can Euro Edge manufacture bespoke woodwork, walk-in closets, and hardwood flooring?",
        a: "Yes. Our bespoke carpentry division fabricates custom architectural joinery, walk-in wardrobes, vanity cabinets, acoustic fluted timber wall panels, and engineered parquet flooring in herringbone and chevron patterns. We work with premium natural oak, walnut, teak, and moisture-resistant MDF with durable polyurethane lacquers.",
      },
      {
        q: "What warranties do you provide on civil finishing, tiling, and painting contracts?",
        a: "Every Euro Edge civil project is backed by a comprehensive 12-month workmanship defect liability guarantee. In addition, manufacturer material warranties for our exterior paint coatings extend up to 10 years, and waterproofing systems carry up to 10-year structural leak-free warranties.",
      },
    ],
  },
  {
    slug: "mep-technical-works",
    title: "MEP & Technical Works",
    shortDesc:
      "Licensed MEP contractor in Dubai offering DEWA-compliant electrical works, precision plumbing, HVAC and AC system installations, ventilation, and electromechanical contracting for villas and commercial buildings across Dubai.",
    fullDesc:
      "Euro Edge Technical Services L.L.C. is a licensed engineering contractor providing end-to-end Mechanical, Electrical, and Plumbing (MEP) solutions throughout Dubai. From load-balanced electrical distribution boards, DEWA-certified wiring, and emergency backup power to high-precision sanitary drainage, water booster pumps, central chilled-water HVAC systems, air filtration, and industrial electromechanical works, we ensure peak operational efficiency, life-safety compliance, and reduced energy consumption.",
    iconName: "Zap",
    imageUrl: "/images/services/mep-technical.jpg",
    imageAlt: "Certified MEP engineering and HVAC installation in Dubai — Euro Edge Technical Services",
    keyFeatures: [
      "Electrical Works",
      "Plumbing & Sanitary Works",
      "AC & HVAC Works",
      "Ventilation & Air Filtration",
      "Electromechanical Works",
    ],
    subServices: [
      {
        title: "Electrical Works",
        imageUrl: "/images/services/electrical-works.jpg",
        imageAlt: "DEWA-compliant electrical engineering and distribution boards in Dubai — Euro Edge Technical Services",
        description:
          "Full DEWA-compliant electrical installations, distribution board (DB) load balancing, switchgear dressing, circuit breaker upgrades, smart architectural lighting networks, and comprehensive earthing/surge protection.",
      },
      {
        title: "Plumbing & Sanitary Works",
        imageUrl: "/images/services/plumbing-sanitary.jpg",
        imageAlt: "Plumbing and sanitary installation works in Dubai villa — Euro Edge Technical Services",
        description:
          "Engineered water supply and drainage networks, high-grade PPR/PEX piping, automated booster pump sets, sanitary ware installations, and non-destructive acoustic leak detection across Dubai properties.",
      },
      {
        title: "AC & HVAC Works",
        imageUrl: "/images/services/hvac-systems.jpg",
        imageAlt: "HVAC central air conditioning and chiller systems in Dubai — Euro Edge Technical Services",
        description:
          "Turnkey HVAC climate engineering, including central chilled-water systems, VRF/VRV units, ducted split systems, precision thermostat automation, and eco-friendly R410A/R32 refrigerants for optimal cooling efficiency.",
      },
      {
        title: "Ventilation & Air Filtration",
        imageUrl: "/images/services/ventilation-filtration.jpg",
        imageAlt: "Ventilation ducting and FAHU air filtration installation in Dubai — Euro Edge Technical Services",
        description:
          "Commercial kitchen exhaust hoods, fresh air handling units (FAHU), heat recovery wheels, HEPA/UV air purification systems, and acoustic duct lagging for villas, restaurants, and commercial facilities.",
      },
      {
        title: "Electromechanical Works",
        imageUrl: "/images/services/electrical-fittings.jpg",
        imageAlt: "Electromechanical plant and pump installations in Dubai — Euro Edge Technical Services",
        description:
          "Industrial electromechanical plant installations, automated transfer switches (ATS), submersible sump pump systems, water filtration plants, and integrated Building Management System (BMS) wiring.",
      },
    ],
    applications: [
      "Commercial Towers & Mixed-Use Complexes",
      "Luxury Residential Villas & Estates",
      "Healthcare Clinics & Cleanrooms",
      "Warehouses, Data Centers & Light Industrial Plants",
      "Restaurants, Commercial Kitchens & Supermarkets",
    ],
    titleTag: "MEP Contractor Dubai | Electrical, HVAC & Plumbing Works — Euro Edge Technical Services",
    whyChooseEuroEdge: [
      "DEWA-licensed electrical engineers and certified HVAC technicians",
      "Eco-friendly, energy-efficient inverter systems and R410A/R32 refrigerants",
      "Non-destructive acoustic leak detection and load-balancing analysis",
      "24/7 emergency response for critical power, cooling, or plumbing disruptions",
    ],
    relatedServices: [
      { title: "Civil & Finishing Works", slug: "civil-finishing-works" },
      { title: "General Maintenance", slug: "general-maintenance" },
      { title: "Swimming Pool Works", slug: "swimming-pool-works" },
    ],
    faqs: [
      {
        q: "Are all your electrical installations and upgrades compliant with DEWA regulations?",
        a: "Yes, 100%. All our electrical works adhere strictly to Dubai Electricity and Water Authority (DEWA) regulations and BS 7671 standards. Our licensed electrical engineers oversee distribution board (DB) dressing, cable sizing, breaker selection, phase load balancing, and earth-fault protection testing.",
      },
      {
        q: "How frequently should central AC, ducted split, and VRF systems be serviced in Dubai?",
        a: "In Dubai's harsh climate with elevated dust and humidity, central AC systems should receive comprehensive preventive maintenance every 3 to 4 months. Our service includes chemical coil cleaning, condensate drain flushing, filter sanitization, electrical contactor testing, and refrigerant pressure checks.",
      },
      {
        q: "What non-destructive methods do you use for locating concealed water leaks?",
        a: "We employ non-destructive acoustic leak detection equipment, digital pressure drop testing, and FLIR thermal imaging cameras. This pinpoints concealed water leaks in pressurized supply lines and drainage stacks without unnecessary hacking of walls or floors.",
      },
      {
        q: "Can Euro Edge upgrade electrical capacity or balance 3-phase loads for high-power villa equipment?",
        a: "Yes. If you are experiencing frequent breaker trips or installing high-demand equipment (EV chargers, pool heat pumps, commercial kitchen equipment), we conduct power load analysis, upgrade switchgear, balance 3-phase circuits, and submit DEWA load enhancement applications.",
      },
      {
        q: "What are your emergency response times for critical MEP breakdowns in Dubai?",
        a: "We operate 24/7 emergency dispatch units across Dubai with a guaranteed on-site response time of 30 to 45 minutes for urgent emergencies such as total power outages, main pipe bursts, or central AC shutdowns in summer.",
      },
    ],
  },
  {
    slug: "swimming-pool-works",
    title: "Swimming Pool Works",
    shortDesc:
      "Complete swimming pool services in Dubai — turnkey pool construction, multi-layer waterproofing, glass mosaic pool tiling, filtration and equipment installation, and scheduled pool maintenance by Euro Edge Technical Services.",
    fullDesc:
      "A swimming pool is the crown jewel of any UAE property. Euro Edge Technical Services L.L.C. specializes in complete swimming pool lifecycle solutions, from architectural design and reinforced concrete pool construction to polyurethane waterproofing membranes, custom glass mosaic tiling, skimmer and overflow systems, energy-efficient filtration pumps, salt chlorinators, underwater LED mood lighting, and periodic chemical water balancing maintenance.",
    iconName: "Waves",
    imageUrl: "/images/services/swimming-pool-clean.jpg",
    imageAlt: "Luxury swimming pool construction and tiling in Dubai villa — Euro Edge Technical Services",
    keyFeatures: [
      "Pool Construction",
      "Waterproofing",
      "Pool Tiling & Finishing",
      "Pool Equipment Installation",
      "Pool Maintenance",
    ],
    subServices: [
      {
        title: "Pool Construction & Design",
        imageUrl: "/images/services/swimming-pool.jpg",
        imageAlt: "Reinforced concrete pool construction in Dubai — Euro Edge Technical Services",
        description:
          "Turnkey reinforced concrete swimming pool engineering, from initial 3D concept designs and Dubai Municipality civil permits to excavation, steel reinforcement, and pneumatic shotcrete casting.",
      },
      {
        title: "Multi-Layer Waterproofing",
        imageUrl: "/images/services/waterproofing.jpg",
        imageAlt: "Swimming pool waterproofing membrane testing in Dubai — Euro Edge Technical Services",
        description:
          "Multi-coat elastomeric cementitious and polyurethane waterproofing membranes with mandatory 72-hour hydrostatic flood testing to ensure 100% leak-proof structural integrity in Dubai soils.",
      },
      {
        title: "Pool Tiling & Finishing",
        imageUrl: "/images/services/pool-tiling.jpg",
        imageAlt: "Luxury glass mosaic pool tiling in Dubai villa — Euro Edge Technical Services",
        description:
          "High-end Spanish and Italian glass mosaic pool finishes, custom waterline tiles, natural stone coping, zero-edge overflow gutters, and durable anti-slip deck surfaces.",
      },
      {
        title: "Pool Equipment Installation",
        imageUrl: "/images/services/pool-equipment.jpg",
        imageAlt: "Pool filtration pumps and sanitization equipment in Dubai — Euro Edge Technical Services",
        description:
          "Energy-efficient variable-speed circulation pumps, high-rate glass media filters, automated saltwater chlorinators, underwater LED lighting, and inverter heat/cool pumps.",
      },
      {
        title: "Pool Maintenance & Water Chemistry",
        imageUrl: "/images/services/technical-support.jpg",
        imageAlt: "Weekly swimming pool maintenance and chemical balancing in Dubai — Euro Edge Technical Services",
        description:
          "Scheduled weekly and bi-weekly pool cleaning, chemical water testing (pH, free chlorine, total alkalinity), filter backwashing, underwater vacuuming, and pump basket maintenance.",
      },
    ],
    applications: [
      "Private Villa Gardens & Rooftop Pools",
      "Residential Community Clubhouses",
      "Luxury Hotel & Resort Swimming Pools",
      "Commercial Fitness Centers & Spas",
      "School & Institutional Aquatic Facilities",
    ],
    titleTag: "Swimming Pool Contractor Dubai | Construction, Tiling & Maintenance — Euro Edge",
    whyChooseEuroEdge: [
      "Turnkey design-to-handover pool engineering and civil excavation",
      "Guaranteed multi-coat elastomeric and polyurethane waterproofing",
      "Premium Spanish and Italian glass mosaic pool finishes",
      "Automated chemical dosing, salt water chlorination, and heating/cooling pumps",
    ],
    relatedServices: [
      { title: "Landscaping Works", slug: "landscaping-works" },
      { title: "General Maintenance", slug: "general-maintenance" },
      { title: "Civil & Finishing Works", slug: "civil-finishing-works" },
    ],
    faqs: [
      {
        q: "What is the typical timeline for constructing a custom swimming pool in Dubai?",
        a: "From initial 3D design and Dubai Municipality / developer (Nakheel, Emaar, Damac) NOC approvals through excavation, structural shotcreting, waterproofing, tiling, and pump commissioning, a turnkey residential pool takes approximately 6 to 10 weeks depending on custom design features.",
      },
      {
        q: "How do you guarantee that a swimming pool will not leak in Dubai's ground conditions?",
        a: "We apply a rigorous multi-tier waterproofing protocol: structural waterproof concrete admixtures, swellable water stops at construction joints, and dual-layer flexible polyurethane/cementitious membranes, followed by a mandatory 72-hour hydrostatic flood test witnessed before tile installation.",
      },
      {
        q: "What type of pool filtration and sanitization systems do you recommend for UAE villas?",
        a: "We recommend variable-speed inverter circulation pumps for up to 70% energy savings, high-rate glass media filters (superior filtration to traditional sand), and automated saltwater chlorinators or inline UV sanitizers that minimize chemical odors while maintaining crystal-clear water.",
      },
      {
        q: "Can you convert an existing chlorine pool to a saltwater system or install heating/cooling?",
        a: "Yes. We frequently retrofit existing pools with advanced salt chlorine generators and titanium inverter heat/cool pumps that maintain comfortable 28°C–30°C water temperatures year-round, even when Dubai summer water temperatures exceed 38°C.",
      },
      {
        q: "What is included in your weekly swimming pool maintenance contract?",
        a: "Our weekly and bi-weekly packages include vacuuming, surface skimming, brushing walls and tiles, backwashing the filter, testing and adjusting pH, chlorine, and alkalinity, emptying skimmer and pump baskets, and inspecting all mechanical equipment.",
      },
    ],
  },
  {
    slug: "landscaping-works",
    title: "Landscaping Works",
    shortDesc:
      "Professional landscaping services in Dubai — soft and hard landscaping, heavy-duty interlock paving, automated smart irrigation, pergolas, outdoor garden architecture, and ongoing garden maintenance by Euro Edge Technical Services.",
    fullDesc:
      "Transforming outdoor spaces into lush, functional desert sanctuaries, Euro Edge Technical Services L.L.C. offers premier hardscaping and softscaping contracting in Dubai. Our specialists design and construct durable stone and interlock paving, decorative garden pathways, natural and artificial turf lawns, desert-adapted flora planting, automated smart drip and sprinkler irrigation networks, outdoor ambient LED lighting, and ongoing garden health maintenance.",
    iconName: "Compass",
    imageUrl: "/images/services/landscaping-hedge.jpg",
    imageAlt: "Modern luxury villa landscaping and interlock paving in Dubai — Euro Edge Technical Services",
    keyFeatures: [
      "Soft & Hard Landscaping",
      "Paving & Interlock",
      "Irrigation",
      "Garden & Outdoor Works",
      "Landscape Maintenance",
    ],
    subServices: [
      {
        title: "Soft & Hard Landscaping",
        imageUrl: "/images/services/soft-hard-landscaping.jpg",
        imageAlt: "Luxury soft and hard landscaping in Dubai — Euro Edge Technical Services",
        description:
          "Complete outdoor architectural design combining native drought-tolerant palms, ornamental shrubs, and luxury lawns with natural stone retaining walls, garden steps, and custom timber pergolas.",
      },
      {
        title: "Paving & Heavy-Duty Interlock",
        imageUrl: "/images/services/landscaping-hedge.jpg",
        imageAlt: "Interlock paving and patio construction in Dubai — Euro Edge Technical Services",
        description:
          "Dubai Municipality certified 60mm and 80mm heavy-duty interlock paving for driveways, patios, and garden pathways laid on vibratory-compacted sub-bases with reinforced edge restraints.",
      },
      {
        title: "Automated Smart Irrigation",
        imageUrl: "/images/services/irrigation.jpg",
        imageAlt: "Smart automated drip irrigation systems in Dubai — Euro Edge Technical Services",
        description:
          "Water-conserving drip and micro-sprinkler networks equipped with weather-sensing smart WiFi controllers that reduce water consumption by up to 40% in UAE climate conditions.",
      },
      {
        title: "Garden & Outdoor Works",
        imageUrl: "/images/services/fit-out-renovation.jpg",
        imageAlt: "Outdoor pergolas, barbecue stations, and garden works in Dubai — Euro Edge Technical Services",
        description:
          "Custom outdoor living installations including barbecue stations, boundary wall decorative stone cladding, ambient low-voltage LED garden illumination, and artificial turf laying.",
      },
      {
        title: "Landscape Maintenance",
        imageUrl: "/images/services/building-maintenance.jpg",
        imageAlt: "Ongoing landscape maintenance and tree trimming in Dubai — Euro Edge Technical Services",
        description:
          "Year-round garden maintenance contracts: professional palm trimming, hedge shaping, deep root organic fertilizing, lawn aeration, and integrated eco-friendly pest control.",
      },
    ],
    applications: [
      "Private Villa Gardens & Courtyards",
      "Residential Communities & Parks",
      "Commercial Building Plazas & Terraces",
      "Hospitality Outdoor Dining & Lounges",
      "School Campuses & Sports Grounds",
    ],
    titleTag: "Landscaping Company Dubai | Interlock Paving & Irrigation — Euro Edge Technical Services",
    whyChooseEuroEdge: [
      "Smart weather-sensing drip irrigation reducing water consumption by up to 40%",
      "Heavy-duty, heat-resistant interlock pavers installed on compacted sub-base",
      "Curated drought-tolerant and ornamental plant palettes tailored for Dubai soils",
      "Custom outdoor living solutions: pergolas, seating zones, and ambient illumination",
    ],
    relatedServices: [
      { title: "Swimming Pool Works", slug: "swimming-pool-works" },
      { title: "Civil & Finishing Works", slug: "civil-finishing-works" },
      { title: "General Maintenance", slug: "general-maintenance" },
    ],
    faqs: [
      {
        q: "Which plant species and palms thrive best in Dubai's desert climate and soil?",
        a: "We select salt-tolerant, drought-resistant varieties proven to flourish in the UAE, including Date Palms, Washingtonia Palms, Bougainvillea, Frangipani (Plumeria), Jasmine, Olive trees, and native desert flora, matched with conditioned organic soils and moisture-retaining mulch.",
      },
      {
        q: "How does your automated smart irrigation system prevent water waste?",
        a: "Our systems use smart WiFi-enabled controllers integrated with localized weather data and soil moisture sensors. Watering is divided into micro-zones with pressure-compensating drip emitters scheduled exclusively for night or early morning hours to eliminate evaporation losses.",
      },
      {
        q: "What thickness and grade of interlock pavers do you install for driveways and patios?",
        a: "We install Dubai Municipality-certified heavy-duty 80mm interlock pavers for vehicle driveways and parking bays, and 60mm pavers for pedestrian walkways and patios, set on a laser-graded and mechanically compacted crushed aggregate sub-base with concrete edge beams.",
      },
      {
        q: "Do you design and construct turnkey outdoor living additions like pergolas and lighting?",
        a: "Yes. We design and construct aluminum and treated hardwood pergolas, outdoor barbecue counters, sunken fire pits, boundary wall stone cladding, and low-voltage architectural LED garden lighting with automated photocells.",
      },
      {
        q: "Can Euro Edge replace dying natural lawns with high-density heat-resistant artificial grass?",
        a: "Yes. We excavate deteriorated turf, install compacted aggregate drainage bases, lay geotextile weed barriers, and install high-density UV-stabilized synthetic grass (35mm–50mm pile) designed to withstand high foot traffic and direct UAE sun.",
      },
    ],
  },
  {
    slug: "general-maintenance",
    title: "General Maintenance",
    shortDesc:
      "Comprehensive building and villa maintenance in Dubai — Annual Maintenance Contracts (AMC), 24/7 emergency repairs, planned preventive maintenance (PPM), and full property renovation across Dubai and the UAE.",
    fullDesc:
      "Euro Edge Technical Services L.L.C. delivers comprehensive, reliable general maintenance services designed to preserve asset value, ensure tenant satisfaction, and prevent costly structural or mechanical breakdowns. Our dedicated mobile technician crews handle scheduled quarterly building and villa preventive maintenance (PPM), corrective repairs, round-the-clock emergency callouts, and turnkey interior/exterior renovation and restoration works for landlords, property management companies, and individual villa owners across Dubai.",
    iconName: "ShieldCheck",
    imageUrl: "/images/services/general-maintenance-plumbing.jpg",
    imageAlt: "General building and villa maintenance in Dubai — Euro Edge Technical Services",
    keyFeatures: [
      "Building & Villa Maintenance",
      "Renovation & Repair Works",
      "24/7 Emergency Repairs",
    ],
    subServices: [
      {
        title: "Building & Villa Preventive Maintenance (PPM)",
        imageUrl: "/images/services/building-maintenance.jpg",
        imageAlt: "Scheduled preventive maintenance for Dubai villas — Euro Edge Technical Services",
        description:
          "Annual Maintenance Contracts (AMC) with scheduled quarterly inspections of AC cooling units, electrical panels, plumbing networks, and roof waterproofing to prevent catastrophic failures.",
      },
      {
        title: "Rapid Emergency Repairs & Corrective Action",
        imageUrl: "/images/services/general-maintenance-plumbing.jpg",
        imageAlt: "24/7 emergency repair response in Dubai — Euro Edge Technical Services",
        description:
          "Round-the-clock 24/7 mobile emergency crews stationed across Dubai with a guaranteed 30 to 45-minute response time for critical power outages, pipe bursts, and AC breakdowns.",
      },
      {
        title: "Turnkey Renovation & Restoration",
        imageUrl: "/images/services/renovation-repair.jpg",
        imageAlt: "Turnkey villa renovation and refurbishment in Dubai — Euro Edge Technical Services",
        description:
          "Complete property refurbishments, bathroom remodeling, ceiling and wall restoration, water damage repair, and move-in tenancy preparation for landlords and villa owners.",
      },
    ],
    applications: [
      "Residential Villas & Community Townhouses",
      "Commercial Towers & Corporate Offices",
      "Residential Apartment Buildings",
      "Retail Centers & Shopping Outlets",
      "Educational & Healthcare Facilities",
    ],
    titleTag: "Building & Villa Maintenance Dubai | AMC & Emergency Repairs — Euro Edge",
    whyChooseEuroEdge: [
      "Tailored Annual Maintenance Contracts (AMC) with clear SLAs and guaranteed response times",
      "Multi-skilled technical teams covering civil, electrical, plumbing, and AC repairs",
      "Detailed digital maintenance inspection reports after every visit",
      "Complete renovation capability from single room overhauls to full property makeovers",
    ],
    relatedServices: [
      { title: "MEP & Technical Works", slug: "mep-technical-works" },
      { title: "Civil & Finishing Works", slug: "civil-finishing-works" },
      { title: "Swimming Pool Works", slug: "swimming-pool-works" },
    ],
    faqs: [
      {
        q: "What specific services are covered under a Euro Edge Annual Maintenance Contract (AMC)?",
        a: "Our comprehensive AMC packages include 3 to 4 scheduled preventive maintenance (PPM) visits per year covering complete AC servicing, electrical system audits, plumbing checks, water tank disinfection coordination, priority emergency dispatch, and unlimited free labor on corrective callouts.",
      },
      {
        q: "Do you offer maintenance services for tenants and individual homeowners without an AMC?",
        a: "Yes. While AMCs offer priority scheduling and cost savings, we provide on-demand one-off maintenance, emergency repair visits, deep AC cleaning, paint touch-ups, and plumbing repairs with upfront, transparent pricing.",
      },
      {
        q: "How do your technicians handle spare parts and replacement components?",
        a: "Our mobile service vehicles carry genuine, OEM-certified spare parts (contactors, capacitors, thermostats, valves, breakers). Before replacing any major component, our technician provides a clear itemized quote for client approval.",
      },
      {
        q: "Can Euro Edge execute full property handovers, tenancy turnarounds, and move-in makeovers?",
        a: "Yes. We specialize in fast-track tenancy turnover works: deep cleaning, complete interior repainting, grout restoration, door hinge and lock adjustments, AC duct disinfection, and electrical testing to ensure immediate move-in readiness.",
      },
      {
        q: "What are your operating hours and SLAs for emergency maintenance in Dubai?",
        a: "Our emergency maintenance control desk and rapid dispatch crews operate 24 hours a day, 7 days a week, 365 days a year, including UAE public holidays, ensuring help arrives within 30 to 45 minutes across Dubai.",
      },
    ],
  },
]

// Slug mapping for backward compatibility and redirects from legacy routes
export const legacySlugMap: Record<string, string> = {
  "electrical-works": "mep-technical-works",
  "plumbing-sanitary": "mep-technical-works",
  "hvac-systems": "mep-technical-works",
  "electrical-fittings": "mep-technical-works",
  "mep-services": "mep-technical-works",
  "carpentry-flooring": "civil-finishing-works",
  "false-ceiling": "civil-finishing-works",
  "tiling-works": "civil-finishing-works",
  "plaster-works": "civil-finishing-works",
  "civil-maintenance": "civil-finishing-works",
  "painting-contracting": "civil-finishing-works",
  "fit-out-renovation": "civil-finishing-works",
  "swimming-pool": "swimming-pool-works",
  "building-maintenance": "general-maintenance",
  "facility-management": "general-maintenance",
  "general-maintenance-amc": "general-maintenance",
  "technical-support": "general-maintenance",
  "industrial-maintenance": "general-maintenance",
  "kitchen-equipment-maintenance": "general-maintenance",
  "kitchen-installation": "civil-finishing-works",
  "aluminium-glass": "civil-finishing-works",
}
