import { servicesData } from "@/lib/services-data"

export function JsonLd() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Organization"],
    "name": "Euro Edge Technical Services L.L.C.",
    "url": "https://euroedgets.com/",
    "logo": "https://euroedgets.com/images/logo.png",
    "image": "https://euroedgets.com/images/hero-dubai-skyline.jpg",
    "description": "Reliable technical contracting, MEP installations, HVAC systems, civil maintenance, interior fit-outs, and facility management services across Dubai and the UAE.",
    "telephone": "+971543909946",
    "email": "info@euroedgets.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Al Quoz Industrial Area",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.1634,
      "longitude": 55.2205
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Dubai",
        "sameAs": "https://www.wikidata.org/wiki/Q612"
      },
      {
        "@type": "Country",
        "name": "United Arab Emirates",
        "sameAs": "https://www.wikidata.org/wiki/Q878"
      }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Technical Services & Contracting Catalog",
      "itemListElement": servicesData.map((service, index) => ({
        "@type": "OfferCatalog",
        "name": service.title,
        "position": index + 1,
        "url": `https://euroedgets.com/services/${service.slug}`
      }))
    },
    "sameAs": [
      "https://wa.me/9710543909946"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
    />
  )
}
