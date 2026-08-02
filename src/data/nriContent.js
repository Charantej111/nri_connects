// Comprehensive Authoritative Content for NRI Connects

import { getAssetUrl } from '../utils/assets';

export const CONTACT_INFO = {
  companyName: "NRI Connects",
  companyLegalName: "Nova Resources of India Connects Private Limited",
  phone: "+91 988 588 0017",
  whatsapp: "+919885880017",
  email: "info@nriconnects.com",
  emergencyPhone: "+91 988 588 0017",
  headquarters: "NRI Connects, Mallampet Road, Bachupally, Hyderabad, Telangana 500090, India",
  usaOffice: "NRI Connects LLC, 100 Shoreline Highway, Suite 200, Mill Valley, CA 94941, USA",
  workingHours: "24/7 Operations & Emergency Support",
  tagline: "Caring for What Matters, Anywhere.",
  socials: {
    facebook: "https://www.facebook.com/NRIConnects/?ref=pages_you_manage",
    instagram: "https://www.instagram.com/nri_connects/",
    linkedin: "https://www.linkedin.com/in/nri-connects",
    twitter: "#"
  }
};

export const BANK_DETAILS = {
  bankName: "HDFC BANK",
  accountType: "Current Account",
  accountNumber: "50200066361023",
  ifscCode: "HDFC0006979",
  branch: "Mallampet Road Bachupally",
  holderName: "Polisetti Sivaji Kumar",
  upiPhone: "+91 988 588 0017",
  upiApps: ["Paytm", "PhonePe", "Google Pay (GPay)"]
};

export const CITIES_SERVICED = [
  "Hyderabad & Cyberabad",
  "Bengaluru",
  "Chennai",
  "Mumbai & Thane",
  "Delhi NCR",
  "Kochi & Trivandrum",
  "Pune",
  "Ahmedabad",
  "Visakhapatnam",
  "Vijayawada"
];

export const SERVICES_CATALOG = [
  {
    id: "property-care",
    title: "Property Care",
    category: "property",
    badge: "Property",
    priceRange: "From $99/mo",
    rating: 4.9,
    reviewsCount: 342,
    shortDesc: "Complete physical monitoring, boundary security, legal documentation, tenant management, and periodic photo/video inspection reports for your land & homes in India.",
    image: getAssetUrl('Property Care_2.png'),
    features: [
      "Bi-weekly & Monthly Physical Plot Inspections",
      "High-Resolution HD Photo/Video Inspection Reports",
      "Tenant Screening & Agreement Formalization",
      "Property Tax & Water/Electricity Bill Clearing",
      "Boundary Wall Safeguard & Encroachment Audits",
      "Legal Ownership & Title Deed Verification Support"
    ],
    detailedDescription: "Distance shouldn't compromise your hard-earned assets in India. Our Property Care service assigns a dedicated asset officer who physically inspects your vacant land, luxury villas, or rental apartments. We ensure your boundaries are secure, taxes paid on time, and tenants managed transparently with digital reports accessible anytime.",
    workflow: [
      "Property Audit & Key Handover Protocol",
      "Scheduled Field Visit by Assigned Officer",
      "Comprehensive HD Photo & Geotagged Video Upload",
      "Monthly Financial & Maintenance Statement to NRI Dashboard"
    ]
  },
  {
    id: "quick-medical-facility",
    title: "Quick Medical Facility",
    category: "healthcare",
    badge: "Healthcare",
    priceRange: "Instant Support",
    rating: 5.0,
    reviewsCount: 489,
    shortDesc: "Immediate medical response, emergency hospital admission, doctor visits at home, and real-time medical updates to NRIs abroad.",
    image: getAssetUrl('Quick Medical Facility_2.png'),
    features: [
      "Guaranteed Emergency SOS Rapid Response",
      "Preferred Hospital Bed Reservation & Admission",
      "Qualified Doctor & Tele-Consultation at Home",
      "Diagnostic Sample Collection from Doorstep",
      "Medicine Delivery within 2 Hours",
      "Real-time WhatsApp & Video Call Updates to Kids Overseas"
    ],
    detailedDescription: "Never feel helpless across oceans during a medical emergency. Our 24/7 Quick Medical Facility coordinates immediate ambulance dispatch, hospital bed allocation in top accredited hospitals (Apollo, Fortis, Max, Manipal), and assigns a personal medical attendant to stay beside your parents.",
    workflow: [
      "SOS Alarm Activated via App or Dedicated Call Line",
      "Nearest Ambulance & Paramedic Dispatched",
      "Hospital Admission Formalities Handled by Our Representative",
      "Continuous Medical Vitals Tracking Shared with NRI"
    ]
  },
  {
    id: "provision-of-attendants",
    title: "Provision of Attendants",
    category: "healthcare",
    badge: "Attendants",
    priceRange: "From $120/wk",
    rating: 4.9,
    reviewsCount: 295,
    shortDesc: "Compassionate, background-verified full-time or part-time caregivers, bedside nurses, and companion attendants for daily elderly support in India.",
    image: getAssetUrl('Provision Of Attendants_2.png'),
    features: [
      "Rigorous Police Verification & Background Checks",
      "Full-Time (24/7) or Part-Time (Shift-based) Options",
      "Mobility Support, Bathing & Personal Hygiene Assistance",
      "Medication Timely Administration & Vitals Logbook",
      "Nutritious Meal Serving & Emotional Companionship",
      "Regular Supervisor Audits & Staff Replacement Guarantee"
    ],
    detailedDescription: "Provide your aging parents with affectionate, dignified care right in their comfortable home environment. Our attendants are professionally trained in senior care, empathetic conversation, mobility assistance, and emergency response.",
    workflow: [
      "Parent Care Requirement Assessment",
      "Caregiver Profile Selection & Video Interview",
      "Trial Period & Home Orientation",
      "Daily Caregiver Activity Logging"
    ]
  },
  {
    id: "routine-health-exercise",
    title: "Routine Health Exercise",
    category: "healthcare",
    badge: "Wellness",
    priceRange: "From $49/visit",
    rating: 4.8,
    reviewsCount: 210,
    shortDesc: "Personalized wellness routines, certified home physiotherapists, gentle senior yoga instructors, and regular BP/Sugar/Pulse health monitoring.",
    image: getAssetUrl('Routine Health Exercise_2.png'),
    features: [
      "Certified Physiotherapists for Joint & Post-Stroke Recovery",
      "Gentle Senior Yoga & Breathing Mobility Training",
      "Weekly Health Parameter Audit (BP, Sugar, SpO2, Heart Rate)",
      "Dietary & Nutritional Consultation for Elders",
      "Digital Health Trend Graph on NRI Portal"
    ],
    detailedDescription: "Keep your parents active, flexible, and pain-free. Our certified physiotherapists and health coaches visit home regularly to assist with arthritis management, gait training, post-surgery rehabilitation, and low-impact senior exercises.",
    workflow: [
      "Physiotherapy Initial Assessment",
      "Customized Exercise Protocol Design",
      "Guided In-Home Physical Therapy Sessions",
      "Monthly Progress & Range-of-Motion Report"
    ]
  },
  {
    id: "house-maintenance",
    title: "House Maintenance",
    category: "property",
    badge: "Maintenance",
    priceRange: "On-demand Quote",
    rating: 4.9,
    reviewsCount: 380,
    shortDesc: "Electrical repairs, plumbing solutions, carpentry, painting, deep home cleaning, and pest control managed by verified technicians.",
    image: getAssetUrl('House Maintenance_2.png'),
    features: [
      "Verified Plumbers, Electricians & AC Technicians",
      "Full House Deep Cleaning & Sanitization",
      "Roof Waterproofing & Wall Painting Solutions",
      "Pest Control & Termite Treatment",
      "Transparent Material Cost Invoicing without Markups"
    ],
    detailedDescription: "No longer worry about a leaking pipe or broken AC making your parents uncomfortable. NRI Connects deploys vetted home repair technicians who solve household issues safely and efficiently.",
    workflow: [
      "Maintenance Work Request Logged",
      "Technician Inspection & Cost Estimate Approval",
      "Professional Repair Execution",
      "Quality Check & Payment Confirmation"
    ]
  },
  {
    id: "pensioners-assistance",
    title: "Pensioners Assistance",
    category: "concierge",
    badge: "Documentation",
    priceRange: "Flat Fee $35",
    rating: 4.9,
    reviewsCount: 175,
    shortDesc: "Doorstep assistance for Indian digital life certificates (Jeevan Pramaan), pension bank account issues, tax filing support, and legal documentation.",
    image: getAssetUrl('Pensioners Assistance_2.png'),
    features: [
      "Digital Life Certificate (Jeevan Pramaan) Doorstep Bio-metric Submission",
      "Bank Pension Portal Updates & KYC Verification",
      "Senior Citizen Income Tax Return (ITR) Filing",
      "Ayushman Bharat & Senior Health Card Application",
      "Nomination Update & Pension Transfer Facilitation"
    ],
    detailedDescription: "Standing in long bank queues or navigating complex govt portals is difficult for elderly parents. We send trained assistance executives with biometric scanners directly to their home to complete life certificates and pension documentation.",
    workflow: [
      "Doorstep Bio-metric Verification Booking",
      "Executive Visit with Secure Govt Terminal",
      "Instant Life Certificate Generation",
      "Digital Receipt Sent to NRI Email & Bank"
    ]
  },
  {
    id: "courier-services",
    title: "Courier Services",
    category: "concierge",
    badge: "Logistics",
    priceRange: "Per Weight Rate",
    rating: 4.8,
    reviewsCount: 420,
    shortDesc: "Express doorstep pickup and international dispatch for essential medicines, homemade delicacies, land documents, and personal packages.",
    image: getAssetUrl('Courier Services_2.png'),
    features: [
      "Doorstep Pickup from Any City in India",
      "Customs-Compliant International Medicine Shipping",
      "Tamper-Proof Vacuum Packaging for Foods",
      "Real-Time Airway Bill GPS Tracking",
      "Discounted Rates with DHL, FedEx & Aramex"
    ],
    detailedDescription: "Send essential medicines, official power-of-attorney documents, or sentimental family gifts without stress. We handle doorstep collection, custom clearance paperwork, and express door-to-door delivery globally.",
    workflow: [
      "Parcel Pickup Scheduled at Doorstep",
      "Customs Inspection & Vacuum Sealed Packing",
      "Express Air Shipping Dispatch",
      "Live GPS Tracking link delivered to sender"
    ]
  },
  {
    id: "home-made-pickles",
    title: "Home Made Pickles",
    category: "concierge",
    badge: "Delicacies",
    priceRange: "From $25/kg",
    rating: 5.0,
    reviewsCount: 512,
    shortDesc: "Craving home flavors? Freshly prepared traditional mango, chicken, mutton, lemon pickles, ghee sweets, and spices crafted with traditional recipes.",
    image: getAssetUrl('Home Made Pickles_2.png'),
    features: [
      "100% Traditional Hygiene Hand-Crafted Recipes",
      "Avakaya Mango, Gongura, Non-Veg Chicken & Mutton Pickles",
      "Pure Cow Ghee Sweets & Telangana/Andhra Delicacies",
      "Triple-Layer Food Grade Leak-Proof Vacuum Sealing",
      "Direct Air Export to USA, UK, Canada, Australia & Gulf"
    ],
    detailedDescription: "Tired of mass-produced store pickles? We connect you with traditional home chefs who prepare authentic, mouth-watering regional pickles and sweets using cold-pressed oils and pure spices, vacuum packed for safe international delivery.",
    workflow: [
      "Fresh Batch Preparation upon Order Placement",
      "Hygiene Vacuum Sealing & Quality Inspection",
      "International Express Dispatch",
      "Delivered fresh to your doorstep overseas"
    ]
  },
  {
    id: "recreation-and-outing",
    title: "Recreation and Outing",
    category: "travel",
    badge: "Outings",
    priceRange: "From $65/outing",
    rating: 4.9,
    reviewsCount: 165,
    shortDesc: "Chaperoned temple visits, peaceful park walks, senior club meetups, and local city excursions for your parents' mental refreshment.",
    image: getAssetUrl('Recreation and Outing_2.png'),
    features: [
      "Chauffeur-Driven AC Vehicle with Wheelchair Accessibility",
      "Dedicated Escort Companion throughout the Journey",
      "VIP Darshan Assistance at Prominent Temples",
      "Senior-Friendly Dining & Movie Outing Arrangements",
      "Photo Memories Album shared with NRI Children"
    ],
    detailedDescription: "Prevent social isolation for your parents in India. Our Recreation & Outing service curates safe, enjoyable day tours to local places of worship, cultural events, botanical gardens, and dining spots under friendly companion care.",
    workflow: [
      "Outing Preferences & Mobility Check",
      "AC Vehicle Pickup with Companion Escort",
      "Enjoyable Guided Outing with Meal & Refreshments",
      "Safe Return Home & Photo Digest Sent to NRI"
    ]
  },
  {
    id: "tours-and-travels-abroad",
    title: "Tours and Travels Abroad",
    category: "travel",
    badge: "Travel",
    priceRange: "Custom Travel Plan",
    rating: 4.9,
    reviewsCount: 230,
    shortDesc: "Complete travel support for parents visiting you overseas: airport drop-offs, wheelchair booking, flight companion assistance, and travel insurance.",
    image: getAssetUrl('Tours and Travels Abroad_2.png'),
    features: [
      "Optimal Route Flight Ticket Booking with Senior Discount",
      "Airport Escort, Porter & Wheelchair Pre-Booking",
      "Comprehensive Overseas Medical Travel Insurance",
      "Transit Airport Meet & Assist Coordination",
      "Custom International Vacation Packages for Seniors"
    ],
    detailedDescription: "Ensure your parents travel comfortably and safely when flying to visit you in the US, Europe, or Australia. We handle flight bookings, wheelchair requests, immigration card assistance, and emergency travel insurance.",
    workflow: [
      "Itinerary Selection & Senior Ticket Booking",
      "Airline Wheelchair & Meal Preference Tagging",
      "Travel Insurance Issuance & Document Kit Handover",
      "Airport Departure Assistance on Travel Day"
    ]
  },
  {
    id: "visa-assistance",
    title: "Visa Assistance",
    category: "travel",
    badge: "Visa",
    priceRange: "From $85",
    rating: 4.9,
    reviewsCount: 310,
    shortDesc: "Hassle-free OCI card processing, Indian passport renewals, US/UK visa applications for parents, document attestation, and consulate filing.",
    image: getAssetUrl('Visa Assistance_2.png'),
    features: [
      "Form DS-160 / Online Visa Application Completion",
      "US Consulate Interview Slot Appointment Booking",
      "Sponsor Invitation Letter Drafting Support",
      "Mock Visa Interview Practice Sessions for Elderly Parents",
      "Passport Pickup & Doorstep Delivery"
    ],
    detailedDescription: "Navigating international visa requirements can be confusing for senior citizens. Our experienced visa specialists guide parents through every step, ensuring accurate documentation, invitation letters, and interview confidence.",
    workflow: [
      "Document Audit & Invitation Review",
      "Application Filing & Biometric Appointment Slot",
      "Parent Mock Interview Preparation",
      "Passport Collection Post Visa Approval"
    ]
  },
  {
    id: "false-ceiling-installation-and-design",
    title: "False Ceiling Installation and Design",
    category: "property",
    badge: "Interiors",
    priceRange: "On-demand Quote",
    rating: 4.9,
    reviewsCount: 184,
    shortDesc: "Customized false ceiling design, Gypsum board installation, ambient LED strip lighting, acoustic insulation, and complete home interior ceiling solutions in India.",
    image: getAssetUrl('False Ceiling Installation_1.png.jpeg'),
    features: [
      "Turnkey Gypsum & POP False Ceiling Architectural Design",
      "Cove & Indirect Ambient LED Strip Light Integration",
      "Acoustic Soundproofing & Thermal Insulation",
      "High-Quality Fire & Moisture-Resistant Ceiling Boards",
      "Dust-Free Professional Execution & Cleanup",
      "Detailed Cost Breakdown & Material Warranty Certificate"
    ],
    detailedDescription: "Transform your residential property's interiors with state-of-the-art false ceiling designs. Whether updating your parents' home or renovating an investment property in India, our interior experts handle everything from modern architectural blueprints and electrical wiring to LED light installation and dust-free finishing.",
    workflow: [
      "In-Home Measurement & Design Consultation",
      "3D Design Mockup & Transparent Cost Estimate",
      "Precision Gypsum Board & Electrical Installation",
      "Final Quality Inspection & Geotagged Completion Report"
    ]
  },
  {
    id: "commercial-land-leasing",
    title: "Commercial Land Leasing",
    category: "property",
    badge: "Land Leasing",
    priceRange: "Custom Lease Terms",
    rating: 4.9,
    reviewsCount: 226,
    shortDesc: "Monetize vacant commercial plots and industrial land in India with verified corporate tenants, legally registered lease agreements, and hassle-free rent collection.",
    image: getAssetUrl('Commercial Land Leasing_1.png'),
    features: [
      "MNC & Corporate Tenant Prospecting & Background Vetting",
      "Legally Binding Commercial Lease Agreement Drafting & Registration",
      "Local Municipal Zoning Laws & N.O.C Compliance Support",
      "Automated Monthly Rental Remittance to NRE/NRO Accounts",
      "Regular Boundary Audits & Encroachment Protection",
      "Annual Rent Escalation & Property Tax Management"
    ],
    detailedDescription: "Unlock recurring passive income from your commercial plots, retail sites, or industrial land in India. NRI Connects connects your land assets with reputable corporate tenants, logistics hubs, retail brands, or solar operators while managing legal documentation, tenant screening, and direct rental remittance.",
    workflow: [
      "Commercial Site Valuation & Zoning Assessment",
      "Corporate Tenant Marketing & Background Audit",
      "Lease Term Negotiation & Sub-Registrar Filing",
      "Automated Monthly Rent Deposit & Site Inspections"
    ]
  },
  {
    id: "site-preparation-and-grading",
    title: "Site Preparation and Grading",
    category: "property",
    badge: "Site Prep",
    priceRange: "On-demand Quote",
    rating: 4.9,
    reviewsCount: 195,
    shortDesc: "Professional land clearing, leveling, earthwork grading, excavation, soil compaction, and site readiness solutions for construction & plot development in India.",
    image: getAssetUrl('Site preparation and grading_2.png'),
    features: [
      "Land Clearing, Debris Removal & Tree Stump Excavation",
      "Precision Bulldozer & Excavator Earthwork Grading",
      "Plot Leveling, Topsoil Stripping & Slope Stabilization",
      "Soil Compaction, Testing & Sub-grade Preparation",
      "Stormwater Drainage Channeling & Erosion Control",
      "Geotagged Progress Photos & On-site Supervisor Inspections"
    ],
    detailedDescription: "Prepare your raw plot, residential site, or commercial layout for construction or investment readiness. NRI Connects provides end-to-end site preparation and land grading services in India, utilizing heavy machinery (JCB, excavators, compactors) to clear brush, level terrain, establish proper drainage, and prevent soil erosion while keeping you informed with detailed digital site reports.",
    workflow: [
      "Site Survey & Topographical Assessment",
      "Debris Clearing & Vegetation Removal",
      "Earthwork Heavy Excavation & Precision Grading",
      "Soil Compaction, Quality Inspection & Video Report Handover"
    ]
  }
];



export const TESTIMONIALS = [
  {
    id: 1,
    name: "Aswanth",
    role: "Software Professional, California, USA",
    avatar: "",
    quote: "Thank you so much NRI Connects for helping us find a perfect investment plot in Hyderabad and assisting with the registration process. The team accompanied my parents to the registration office and made the entire process incredibly smooth & easy. Strongly recommend!",
    rating: 5,
    city: "Hyderabad"
  },
  {
    id: 2,
    name: "Sateesh & Saritha",
    role: "Healthcare Professionals, New Jersey, USA",
    avatar: "",
    quote: "We were very stressed about sourcing and shipping Indian decor, sweets, and pickles for our housewarming party in New Jersey. NRI Connects was extremely prompt, sourced high-quality items, and handled the delivery smoothly. Excellent service!",
    rating: 5,
    city: "New Jersey"
  },
  {
    id: 3,
    name: "Dr. Srinivas Rao",
    role: "Consultant Cardiologist, London, UK",
    avatar: "",
    quote: "NRI Connects helped my elderly parents in Hyderabad submit their digital Life Certificate (Jeevan Pramaan) right from home. Their executive was extremely professional and handled the biometric scanning with care. Highly recommend their pensioner services!",
    rating: 5,
    city: "Hyderabad"
  }
];

export const CAREGIVERS_TEAM = [
  {
    id: 1,
    name: "Sujatha Reddy, RN",
    title: "Senior Home Health Specialist",
    experience: "12+ Years Experience",
    photo: "https://images.unsplash.com/photo-1594824813572-c2889e498c8c?auto=format&fit=crop&w=400&q=80",
    specialty: "Elderly Post-Op Care & Chronic Health Vitals"
  },
  {
    id: 2,
    name: "Ramesh Sharma",
    title: "Property & Asset Security Officer",
    experience: "10+ Years Experience",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    specialty: "Plot Inspections, Encroachment & Legal Audits"
  },
  {
    id: 3,
    name: "Priya Nair, B.Sc Nursing",
    title: "Patient Care Coordinator",
    experience: "8+ Years Experience",
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
    specialty: "Emergency Hospital Triage & Attendant Management"
  }
];

export const FAQS = [
  {
    q: "How fast does your Emergency Medical Response operate?",
    a: "Our Emergency SOS helpline (+91 988 588 0017) is monitored 24/7/365. When triggered, our local city team dispatches an emergency vehicle and representative within 15–30 minutes in tier-1 cities like Hyderabad, Bengaluru, Chennai, and Delhi NCR."
  },
  {
    q: "How do I receive updates on property inspections or parent health visits?",
    a: "After every visit, your assigned care officer uploads high-definition geotagged photos, videos, and vitals logs directly to your secure NRI Connects Dashboard, with instant WhatsApp and email notifications sent to your international phone number."
  },
  {
    q: "Can I customize a care plan for my parents' unique needs?",
    a: "Absolutely! We offer customized family plans combining property management, daily attendant care, health exercise, and legal assistance tailored to your parents' exact health conditions and city location."
  },
  {
    q: "How does the doorstep Life Certificate (Jeevan Pramaan) filing work?",
    a: "Our certified biometric executive visits your parents' home with a secure UIDAI-approved fingerprint scanner. We generate the digital life certificate instantly on the Govt portal and email you a verified PDF receipt."
  },
  {
    q: "What are your service rates and how does payment work?",
    a: "Our basic charge to initiate any service task is ₹999. After reviewing the specific work requirements and calculating the full costs, the initial ₹999 initiation deposit is deducted from your final billing statement. All international transactions are securely processed via the PayPal gateway, and we never store credit card records."
  },
  {
    q: "Which geographical regions do you support in India?",
    a: "We currently support Hyderabad and Khammam in Telangana, India. Additional surrounding regions or cities may be considered depending on service priority and custom request details."
  },
  {
    q: "How do I get started with a task or booking?",
    a: "You can sign up for an account and submit an inquiry, or submit a request directly on our contact form. Once received, our operations manager will reach out to you via WhatsApp or email within 2 hours to coordinate the next steps."
  }
];

export const GALLERY_IMAGES = [
  {
    id: 1,
    title: "In-Home Senior Health Vitals Check",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80",
    location: "Jubilee Hills, Hyderabad"
  },
  {
    id: 2,
    title: "Geotagged Property Boundary Inspection",
    category: "Property",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    location: "Gachibowli, Hyderabad"
  },
  {
    id: 3,
    title: "24/7 Emergency Ambulance Dispatch",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    location: "Whitefield, Bengaluru"
  },
  {
    id: 4,
    title: "Guided Temple & Pilgrimage Outing",
    category: "Outings",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=800&q=80",
    location: "Tirupati & Local Temples"
  },
  {
    id: 5,
    title: "Doorstep Jeevan Pramaan Life Certificate",
    category: "Documentation",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
    location: "Banjara Hills, Hyderabad"
  },
  {
    id: 6,
    title: "Traditional Homemade Avakaya Pickle Packing",
    category: "Food",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
    location: "Export Desk, Hyderabad"
  }
];

export const NEWS_ARTICLES = [
  {
    id: 1,
    title: "How NRIs Can Manage and Protect Their Properties in India",
    category: "PROPERTY CARE",
    date: "July 2026",
    readTime: "5 min read",
    snippet: "Physical boundary inspection protocols, geotagged video audits, legal Power of Attorney (PoA) registration, and municipal tax clearing guidelines for property owned by non-resident Indians.",
    source: "Financial Express",
    url: "https://www.financialexpress.com/nri/",
    image: getAssetUrl('Property Care_1.jpg')
  },
  {
    id: 2,
    title: "Doorstep Digital Life Certificate & Health Care Coverage for NRI Parents",
    category: "PENSION & ELDER CARE",
    date: "June 2026",
    readTime: "4 min read",
    snippet: "Latest RBI and government updates on digital life certificate submissions, doorstep biometric verification, and health insurance coverage for aging parents in India.",
    source: "Google News",
    url: "https://news.google.com/search?q=NRI+parent+care+India",
    image: getAssetUrl('Pensioners Assistance_1.png')
  },
  {
    id: 3,
    title: "Community News & Diaspora Guidance for Indian Families Living Overseas",
    category: "COMMUNITY & HEALTH",
    date: "May 2026",
    readTime: "6 min read",
    snippet: "Comprehensive reports on family support systems, NRI community initiatives, medical emergency coordination, and travel advice for diaspora families in North America & Europe.",
    source: "NRI Pulse",
    url: "https://nripulse.com/",
    image: getAssetUrl('Quick Medical Facility_1.jpeg')
  },
  {
    id: 4,
    title: "FEMA Compliance, Property Transfers & Tax Updates for Non-Resident Indians",
    category: "FINANCE & TAXATION",
    date: "February 2026",
    readTime: "5 min read",
    snippet: "Financial Express expert analysis on TDS deductions on property sales, repatriation of funds, NRE/NRO banking guidelines, and estate planning for NRIs.",
    source: "Financial Express",
    url: "https://www.financialexpress.com/money/",
    image: getAssetUrl('Property Care_2.png')
  },
  {
    id: 5,
    title: "Latest Trends in Real Estate & Senior Elder Care in India",
    category: "TRENDS & INSIGHTS",
    date: "November 2025",
    readTime: "4 min read",
    snippet: "Explore current Google News articles on remote property management tools, senior wellness check-ins, and emergency response infrastructure across tier-1 Indian cities.",
    source: "Google News",
    url: "https://news.google.com/search?q=NRI+property+management+India",
    image: getAssetUrl('Routine Health Exercise_1.jpg')
  }
];
