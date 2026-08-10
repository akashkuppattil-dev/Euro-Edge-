import React from "react"

export function JsonLd() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "name": "Euro Edge Technical Services L.L.C.",
    "url": "https://euro-edge.vercel.app/",
    "logo": "https://euro-edge.vercel.app/images/logo.png",
    "description": "Reliable technical contracting, MEP installations, HVAC systems, civil maintenance, interior fit-outs, and facility management services across Dubai and the UAE.",
    "telephone": "+971543909946",
    "email": "pranoy@euroedgets.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.2048,
      "longitude": 55.2708
    },
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
