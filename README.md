# NRI Connects - Premium Senior Care & Property Management Platform

![NRI Connects Banner](Public/assets/logo.png)

**NRI Connects** is a state-of-the-art, high-converting web application designed specifically for Non-Resident Indians (NRIs) living abroad (US, UK, UAE, Canada, Australia, etc.). It provides a seamless, transparent, and empathetic portal to arrange **in-home parent care**, **property & asset management**, **medical emergency response**, and **concierge logistics** in India.

---

## 🌟 Key Features

### 🏢 11 Specialized NRI Services
- **Property & Asset Care**: Regular physical inspections, tenant management, legal verification, and vacancy checks.
- **Quick Medical Facility**: 24/7 emergency dispatch, hospital coordination, and ambulance assistance.
- **Provision of Attendants**: Accredited 24/7 bedside nursing staff and daily companion attendants.
- **Routine Health & Exercise**: In-home physiotherapy, vital statistics tracking, and wellness routines.
- **House Maintenance**: On-demand plumbing, electrical fixes, deep cleaning, and property repairs.
- **Pensioners Assistance**: Life Certificate (Jeevan Pramaan) submissions, bank follow-ups, and documentation.
- **Courier & Logistics**: International shipping, medicine delivery, and urgent document transfers.
- **Home-Made Pickles & Snacks**: Authentic regional culinary preparations packaged for international travel.
- **Recreation & Outings**: Chaperoned temple visits, senior outings, and social engagement.
- **Tours & Travels Abroad**: Parent flight arrangements, airport assistance, and overseas travel support.
- **Visa Assistance**: OCI card applications, passport renewals, and consulate filings.

### ✨ Premium UX & Visual Excellence
- **Emerald Green Design System**: Bespoke typography, HSL-tailored gradients, micro-animations, and glassmorphism.
- **Ken Burns Slideshow**: Dual-layer animated hero slideshow cleanly advancing service catalog photos without subpixel artifacts.
- **Custom Form Controls**: Accessible custom dropdowns (`CustomSelect`), date pickers (`CustomDatePicker`), and international flag country code pickers (`CountryCodePicker`).
- **Real Visit Proof Gallery**: Filterable visual proof gallery with lightbox zoom for on-ground field execution verification.
- **NRI Payment Portal**: Multi-currency checkout supporting PayPal, Stripe, Razorpay, US Zelle, and direct HDFC bank details.
- **Interactive Google Maps**: Embedded map navigation targeting NRI Connects headquarters in Kondapur, Hyderabad.

---

## 🛠️ Technology Stack

- **Core**: React 18 (ES6+ JSX)
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS v3, PostCSS, Custom Keyframe Animations
- **Icons**: Lucide React
- **Image Optimizer**: `vite-plugin-image-optimizer`, `sharp`
- **Utilities**: `clsx`, `tailwind-merge`

---

## 📁 Directory Structure

```
Nri_connects/
├── Public/
│   └── assets/                # Logos, payment icons, and service images (_1 and _2)
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── Navbar.jsx         # Header navigation with mobile drawer
│   │   ├── HeroSection.jsx    # Ken Burns hero slideshow with dot grid texture
│   │   ├── ServicesSection.jsx# Filterable catalog of 11 services
│   │   ├── ServiceDetailPage.jsx # Comprehensive service detail view
│   │   ├── ServiceDetailModal.jsx# Quick-view modal overlay
│   │   ├── ContactSection.jsx # Contact form & embedded Google Map
│   │   ├── PaymentPage.jsx    # NRI payment checkout portal
│   │   ├── GallerySection.jsx # Proof-of-visit lightbox gallery
│   │   ├── PricingPackages.jsx# Membership tiers & annual/monthly toggle
│   │   ├── TestimonialsSection.jsx # NRI customer reviews carousel
│   │   ├── CaregiversTeam.jsx # Verified staff profiles
│   │   ├── AboutUsSection.jsx # Company mission & feature grid
│   │   ├── NewsSection.jsx    # Articles & NRI policy updates
│   │   ├── FaqSection.jsx     # Accordion FAQ
│   │   ├── LegalPages.jsx     # Privacy Policy & Terms of Service
│   │   ├── LoginPage.jsx      # NRI & Resident authentication
│   │   ├── SignUpPage.jsx     # Account registration
│   │   ├── BookingModal.jsx   # Global consultation booking modal
│   │   ├── CustomSelect.jsx   # Accessible custom dropdown
│   │   ├── CustomDatePicker.jsx # Accessible custom calendar picker
│   │   ├── CountryCodePicker.jsx # International country code picker with flags
│   │   └── Footer.jsx         # Footer with quick links & copyright
│   ├── data/
│   │   └── nriContent.js      # Centralized data catalog & business configuration
│   ├── App.jsx                # Main layout, routing, and modal state management
│   ├── index.css              # Custom Tailwind utilities & scrollbar styling
│   └── main.jsx               # React DOM root entry
├── index.html                 # Main HTML template
├── package.json               # NPM scripts and dependencies
├── tailwind.config.js         # Tailwind theme extension & color tokens
└── vite.config.js             # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/OfzenEnt/nri_connects.git
   cd nri_connects
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for Production**:
   ```bash
   npm run build
   ```

5. **Preview Production Build**:
   ```bash
   npm run preview
   ```

### 🌐 Deploying to Vercel
This repository includes a pre-configured `vercel.json` optimized for Vite SPAs.

1. Push changes to GitHub:
   ```bash
   git add vercel.json
   git commit -m "chore: add vercel configuration for deployment"
   git push origin main
   ```
2. Import the repository in [Vercel Dashboard](https://vercel.com/new).
3. Vercel automatically detects **Vite** settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**.

---

## 📞 Business & Contact Information

- **Headquarters Address**: Venkata Sai Residency, 1-113/40 & 41, Green Hamlet, Kondapur, Hyderabad, Telangana 500084, India
- **USA Office**: NRI Connects LLC, 100 Shoreline Highway, Suite 200, Mill Valley, CA 94941, USA
- **Phone / WhatsApp**: +91 988 588 0017
- **Email**: info@nriconnects.com
- **Website**: [nriconnects.com](https://nriconnects.com)

---

## 📄 License

Made with ❤️ by [Ofzen](https://ofzen.in/). All rights reserved.
