# Euro Edge Technical Services L.L.C.

A modern, high-performance web application and client portal for **Euro Edge Technical Services L.L.C.**, a premier engineering contracting and technical services provider based in Dubai, United Arab Emirates.

---

## 🏢 About Euro Edge Technical Services

Euro Edge Technical Services L.L.C. specializes in MEP contracting, HVAC systems installation & maintenance, electrical works, plumbing, civil maintenance, interior fit-outs, and facility management across Dubai and the UAE.

### Core Capabilities
- **MEP Services**: Mechanical, Electrical, and Plumbing engineering conforming to DEWA standards.
- **HVAC Solutions**: Central AC, ventilation, and air conditioning installation, maintenance, and emergency repair.
- **Interior Fit-Out & Civil Works**: Gypsum partitions, false ceilings, flooring, carpentry, and turnkey renovations.
- **Annual Maintenance Contracts (AMC)**: Tailored residential, commercial, and industrial maintenance packages with 24/7 emergency response.

---

## 🚀 Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **UI & Components**: [React 19](https://react.dev/), [Tailwind CSS v4](https://tailwindcss.com/), [Lucide Icons](https://lucide.dev/)
- **Carousels & Animation**: [Embla Carousel](https://www.embla-carousel.com/), `tw-animate-css`
- **Typography**: Google Fonts via `next/font` (Inter, Outfit, Plus Jakarta Sans, Playfair Display)
- **Analytics & SEO**: `@vercel/analytics`, dynamic XML sitemap, and rich JSON-LD schema markup (LocalBusiness, Organization)

---

## 📁 Repository Structure

```
├── app/
│   ├── layout.tsx                      # Root layout, fonts, SEO schema, and Vercel Analytics
│   ├── page.tsx                        # Homepage with Hero, Services, AMC, and Quote Estimator
│   ├── globals.css                     # Brand theme styling and Tailwind design tokens
│   ├── sitemap.ts                      # Dynamic XML sitemap generator
│   ├── about/page.tsx                  # Company overview, mission, and certifications
│   ├── services/
│   │   ├── page.tsx                    # Services directory
│   │   └── [slug]/page.tsx             # Dynamic detailed service pages
│   ├── projects/page.tsx               # Filterable projects portfolio
│   ├── contact/page.tsx                # Inquiries form, contact info, and Google Maps location
│   └── careers/page.tsx                # Careers and candidate application portal
├── components/
│   ├── header.tsx                      # Main navigation header with responsive mobile drawer
│   ├── footer.tsx                      # Comprehensive footer with quick links & certifications
│   ├── amc-packages.tsx                # Annual Maintenance Contract pricing tiers
│   ├── quote-estimator.tsx             # Interactive instant price calculation tool
│   ├── projects-portfolio.tsx          # Filterable showcase of completed projects
│   ├── core-service-pillars-carousel.tsx # Interactive service pillars carousel
│   ├── featured-services-carousel.tsx  # Featured service showcase carousel
│   ├── service-quote-form.tsx          # Modal quote request form
│   ├── contact-form.tsx                # Contact inquiry submission form
│   ├── careers-form.tsx                # Career opportunity application form
│   ├── faq-section.tsx                 # Searchable FAQ accordion
│   ├── service-faq-accordion.tsx       # Service-specific technical FAQs
│   ├── why-choose-us-accordion.tsx     # Value propositions and quality guarantees
│   ├── sticky-contact-widget.tsx       # Floating WhatsApp and call action buttons
│   └── json-ld.tsx                     # Structured data for Google Search SEO
├── hooks/
│   ├── use-mobile.ts                   # Viewport breakpoint detection hook
│   └── use-toast.ts                    # Notification state management
├── lib/
│   ├── services-data.ts                # Master service catalog, specs, FAQs, and metadata
│   └── utils.ts                        # Tailwind class merge utilities (clsx + twMerge)
└── public/
    ├── images/                         # Brand logos, service photography, and hero imagery
    ├── icon.svg                        # Favicon SVG
    └── robots.txt                      # Search engine crawl instructions
```

---

## 🛠️ Getting Started

### Prerequisites
- Node.js 18.18+ or 20+
- npm 9+

### Installation
```bash
npm install
```

### Running Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production
```bash
npm run build
npm run start
```

### Type Checking & Linting
```bash
npx tsc --noEmit
npm run lint
```

---

## 🌐 Deployment

The application is optimized for deployment on [Vercel](https://vercel.com).
Ensure environment variables are configured in the deployment project settings if required.

---

## 📄 License

Proprietary — All rights reserved © Euro Edge Technical Services L.L.C.
