export interface NavItem {
  label: string;
  href: string;
}

export interface ValueProposition {
  id: string;
  title: string;
  description: string;
  iconName: 'EverydayComfort' | 'MadeWithCare' | 'NeighbourhoodKitchen';
}

export interface FoodItem {
  id: string;
  title: string;
  category: 'Thalis & Meals' | 'Nashta & Snacks' | 'Homestyle Sabzi & Dal';
  description: string;
  imageSrc: string;
  dietary?: string;
  priceDisplay?: string;
  portionNote?: string;
  tags?: string[];
  aspectClass?: string;
  featured?: boolean;
}

export interface CustomerReview {
  id: string;
  name: string;
  role?: string;
  rating: number;
  text: string;
  tag?: string;
  source: "Google Maps";
}

export interface LocalityInfo {
  slug: string;
  name: string;
  headline: string;
  landmarks: string[];
  description: string;
  studentPGContext: string;
  officeTiffinContext: string;
  directionsText: string;
  popularDishes: string[];
  faq: { q: string; a: string }[];
}

export interface ServiceCluster {
  id: string;
  clusterName: string;
  distanceRange: string;
  description: string;
  leadLocalitySlug?: string;
  pockets: string[];
}

export interface BusinessInfo {
  // Published/verified flags. When false/undefined, the production UI omits or adapts gracefully.
  isAddressVerified: boolean;
  address?: string;
  addressNote?: string;

  isOpenHoursVerified: boolean;
  openingHours?: {
    days: string;
    timings: string;
  }[];

  isPhoneVerified: boolean;
  phoneNumber?: string;
  phoneDisplay?: string;

  isWhatsAppVerified: boolean;
  whatsAppNumber?: string;
  whatsAppPrompt?: string;

  isGoogleMapsVerified: boolean;
  googleMapsUrl?: string;

  serviceOptions?: {
    dineIn: boolean;
    takeaway: boolean;
    tiffinService?: boolean;
  };

  customerPhotoConsentVerified: boolean;
}

export const SITE_DATA = {
  brand: {
    name: "Rupali's Kitchen",
    tagline: "A little taste of home.",
    subtagline: "HOMEMADE • HEARTFELT • EVERYDAY",
    heroEyebrow: "MADE WITH LOVE, SERVED WITH WARMTH",
    heroHeadline: "Door ghar se ho? Khane mein nahi.",
    heroSupporting:
      "Simple, comforting ghar ka khana, made with care. Everyday meals that bring a little comfort to your day.",
    heroSmallSupporting: "A little taste of home, every day.",
  },

  navigation: [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "Our Story", href: "/story" },
    { label: "Find Us", href: "/find-us" },
  ] as NavItem[],

  assets: {
    logo: "/images/rupalis-kitchen/logo-full.png",
    logoFull: "/images/rupalis-kitchen/logo-full.png",
    logoMark: "/images/rupalis-kitchen/logo-mark.png",
    ownersKitchen: "/images/rupalis-kitchen/owners-kitchen.png",
    storefront: "/images/rupalis-kitchen/storefront.png",

    // Real Kitchen Food Photography
    rupalisSpecialThali: "/images/rupalis-kitchen/rupalis-special-thali.jpeg",
    palakPaneerThali: "/images/rupalis-kitchen/palak-paneer-thali.jpeg",
    bhakriSpecialThali: "/images/rupalis-kitchen/bhakri-special-thali.jpeg",
    deluxePaneerThali: "/images/rupalis-kitchen/deluxe-paneer-thali.jpeg",
    homestyleRajmaThali: "/images/rupalis-kitchen/homestyle-rajma-thali.jpeg",
    chapatiPaneerBhurji: "/images/rupalis-kitchen/chapati-paneer-bhurji.jpeg",
    chaiTheplaNashta: "/images/rupalis-kitchen/chai-thepla-nashta.jpeg",
    jeeraRiceDal: "/images/rupalis-kitchen/jeera-rice-dal.jpeg",
    varanBhaat: "/images/rupalis-kitchen/varan-bhaat.jpeg",
    matkiUsal: "/images/rupalis-kitchen/matki-usal.jpeg",
    dalPalak: "/images/rupalis-kitchen/dal-palak.jpeg",
    methiDalSabzi: "/images/rupalis-kitchen/methi-dal-sabzi.jpeg",
    vegetableMasalaMaggi: "/images/rupalis-kitchen/vegetable-masala-maggi.png",
    sabudanaKhichdi: "/images/rupalis-kitchen/sabudana-khichdi.png",
    whatsappIcon: "/images/rupalis-kitchen/whatsapp-icon.png",
  },

  story: {
    eyebrow: "THE PEOPLE BEHIND THE PLATE",
    headline: "Do log. Ek chhoti si rasoi. Bahut saara pyaar.",
    paragraphs: [
      "Some of the best meals don't come from fancy restaurants. They come from people who put a little extra care into what they cook.",
      "Meet Rupali and Shankar. Together in their kitchen, they prepare everyday home-cooked meals with warmth and care. At Rupali's Kitchen, we believe everyday food should feel comforting, familiar, and made with love.",
    ],
    pullQuote: "A little kitchen with a whole lot of heart.",
  },

  foodGallery: {
    eyebrow: "FROM OUR KITCHEN",
    headline: "Roz ka khana. Roz ki khushi.",
    supportingText:
      "Freshly prepared everyday meals, authentic Maharashtrian & North Indian flavours, and the simple comfort of honest ghar ka khana.",
    items: [
      {
        id: "rupalis-special-thali",
        title: "Rupali's Signature Special Thali",
        category: "Thalis & Meals",
        description:
          "Our house-favourite thali featuring soft phulkas, roasted papad, steamed rice, homestyle dal, flavour-packed Bharli Vangi (stuffed baby brinjals), sprouted Matki Usal, and fresh vegetables.",
        imageSrc: "/images/rupalis-kitchen/rupalis-special-thali.jpeg",
        featured: true,
      },
      {
        id: "palak-paneer-thali",
        title: "Palak Paneer Executive Thali",
        category: "Thalis & Meals",
        description:
          "Rich homestyle palak paneer served with freshly made chapatis, jeera rice, slow-tempered yellow dal, cool spiced raita/koshimbir, roasted papad, and crunchy bhindi masala.",
        imageSrc: "/images/rupalis-kitchen/palak-paneer-thali.jpeg",
        featured: true,
      },
      {
        id: "bhakri-special-thali",
        title: "Traditional Til Bhakri Special Thali",
        category: "Thalis & Meals",
        description:
          "Authentic Maharashtrian feast with sesame-crusted Til Bhakri, fragrant Masale Bhat, steamed rice, homestyle dal/kadhi, stuffed Bharli Vangi, and spiced mixed sabzi.",
        imageSrc: "/images/rupalis-kitchen/bhakri-special-thali.jpeg",
        featured: true,
      },
      {
        id: "deluxe-paneer-thali",
        title: "Deluxe Paratha & Paneer Bhurji Thali",
        category: "Thalis & Meals",
        description:
          "Golden flaky triangle parathas, comforting spiced paneer bhurji, rich kali dal, tempered yellow dal, steamed rice, onion rings, and homemade pickle.",
        imageSrc: "/images/rupalis-kitchen/deluxe-paneer-thali.jpeg",
        featured: false,
      },
      {
        id: "homestyle-rajma-thali",
        title: "Homestyle Rajma & Dal Thali",
        category: "Thalis & Meals",
        description:
          "Comforting slow-simmered rajma gravy with warm chapatis, full roasted papad, mild cabbage sabzi, tempered yellow dal, and steamed rice.",
        imageSrc: "/images/rupalis-kitchen/homestyle-rajma-thali.jpeg",
        featured: false,
      },
      {
        id: "chapati-paneer-bhurji",
        title: "Tawa Chapatis & Paneer Bhurji",
        category: "Thalis & Meals",
        description:
          "Hot layered chapatis straight from the tawa served with savory spiced paneer bhurji and comforting dal gravy.",
        imageSrc: "/images/rupalis-kitchen/chapati-paneer-bhurji.jpeg",
        featured: false,
      },
      {
        id: "varan-bhaat",
        title: "Comforting Varan Bhaat Plate",
        category: "Thalis & Meals",
        description:
          "The soul of Maharashtrian comfort: fluffy steamed rice with a bowl of golden tuvar dal varan, raw onion slices, and spicy red thecha pickle.",
        imageSrc: "/images/rupalis-kitchen/varan-bhaat.jpeg",
        featured: false,
      },
      {
        id: "jeera-rice-dal",
        title: "Fragrant Jeera Rice & Dal Tadka",
        category: "Thalis & Meals",
        description:
          "Fragrant cumin-tempered long-grain rice paired with rich, slow-simmered lentil dal garnished with fresh coriander leaves.",
        imageSrc: "/images/rupalis-kitchen/jeera-rice-dal.jpeg",
        featured: false,
      },
      {
        id: "chai-thepla-nashta",
        title: "Morning Masala Chai & Methi Thepla",
        category: "Nashta & Snacks",
        description:
          "Steaming hot frothy milk chai served alongside warm, soft, fenugreek-infused theplas — a wholesome neighbourhood breakfast.",
        imageSrc: "/images/rupalis-kitchen/chai-thepla-nashta.jpeg",
        featured: false,
      },
      {
        id: "sabudana-khichdi",
        title: "Authentic Sabudana Khichdi",
        category: "Nashta & Snacks",
        description:
          "Traditional Maharashtrian fasting favourite: soft sago pearls tossed with roasted crunchy peanuts, cumin seeds, green chillies, and potatoes.",
        imageSrc: "/images/rupalis-kitchen/sabudana-khichdi.png",
        featured: false,
      },
      {
        id: "vegetable-masala-maggi",
        title: "Hot Vegetable Masala Maggi",
        category: "Nashta & Snacks",
        description:
          "Piping hot, spiced homestyle noodles loaded with diced onions, tomatoes, crunchy bell peppers, and herbs.",
        imageSrc: "/images/rupalis-kitchen/vegetable-masala-maggi.png",
        featured: false,
      },
      {
        id: "matki-usal",
        title: "Authentic Sprouted Matki Usal",
        category: "Homestyle Sabzi & Dal",
        description:
          "Healthy sprouted moth beans sautéed with mustard seeds, fresh curry leaves, mild spices, and coriander.",
        imageSrc: "/images/rupalis-kitchen/matki-usal.jpeg",
        featured: false,
      },
      {
        id: "dal-palak",
        title: "Tadka Dal Palak (Patal Bhaji)",
        category: "Homestyle Sabzi & Dal",
        description:
          "Wholesome spinach and lentils tempered with whole roasted dried red chillies, peanuts, and mustard seeds.",
        imageSrc: "/images/rupalis-kitchen/dal-palak.jpeg",
        featured: false,
      },
      {
        id: "methi-dal-sabzi",
        title: "Homestyle Methi Moong Dal Bhaji",
        category: "Homestyle Sabzi & Dal",
        description:
          "Tender green fenugreek leaves stir-fried with yellow moong lentils and sliced green chillies — light, nutritious, and comforting.",
        imageSrc: "/images/rupalis-kitchen/methi-dal-sabzi.jpeg",
        dietary: "100% Pure Veg",
        portionNote: "Seasonal green vegetable portion",
        tags: ["Healthy", "Homestyle", "High Fibre"],
        featured: false,
      },
    ] as FoodItem[],
    ctaText: "Ask what's cooking today",
  },

  seo: {
    baseUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://rupaliskitchen.vercel.app",
    siteName: "Rupali's Kitchen",
    defaultTitle: "Rupali's Kitchen | Pure Veg Homestyle Food in Ambegaon Budruk, Pune",
    titleTemplate: "%s | Rupali's Kitchen Pune",
    defaultDescription:
      "Comforting, homemade Indian meals, authentic thalis, and daily tiffins in Ambegaon Budruk, Pune. Run with love by Rupali & Shankar.",
    ogImage: "/images/rupalis-kitchen/palak-paneer-thali.jpeg",
  },

  localities: {
    "ambegaon-budruk": {
      slug: "ambegaon-budruk",
      name: "Ambegaon Budruk",
      headline: "Authentic Ghar Ka Khana & Pure Veg Tiffin in Ambegaon Budruk, Pune",
      landmarks: [
        "Opposite Torna Sankul",
        "Near Chintamani Prime English School",
        "Ambegaon Pathar Road",
        "Tanaji Nagar",
        "Near Sinhgad College & Katraj-Ambegaon corridor",
      ],
      description:
        "Located in the heart of Tanaji Nagar on Ambegaon Pathar Road, Rupali's Kitchen brings wholesome, home-cooked Maharashtrian and North Indian thalis to the local neighbourhood.",
      studentPGContext:
        "Living away from home in a PG or hostel in Ambegaon Budruk? We prepare healthy, non-greasy, everyday food that feels just like mom cooked it — keeping students nourished without high restaurant prices.",
      officeTiffinContext:
        "Working professionals can pack hot takeaways or subscribe to reliable daily lunch and dinner tiffin services straight from our kitchen.",
      directionsText:
        "Head towards Ambegaon Pathar Road. We are at Shop 02, directly opposite Torna Sankul, just a quick 2-minute walk from Chintamani Prime English School.",
      popularDishes: [
        "rupalis-special-thali",
        "palak-paneer-thali",
        "bhakri-special-thali",
        "varan-bhaat",
      ],
      faq: [
        {
          q: "Where exactly is Rupali's Kitchen in Ambegaon Budruk?",
          a: "We are located at 02, Ambegaon Pathar Rd, opp. TORNA SANKUL, near Chintamani Prime English School, Tanaji Nagar, Ambegaon Budruk, Pune 411046.",
        },
        {
          q: "Do you offer daily tiffin service for college students and working professionals in Ambegaon?",
          a: "Yes! We provide fresh, home-cooked daily lunch and dinner tiffins with phulkas, dal, fresh sabzi, and rice.",
        },
        {
          q: "What are your kitchen timings?",
          a: "We are open Monday through Sunday, serving lunch and dinner daily.",
        },
        {
          q: "Is dine-in seating available?",
          a: "Yes, we have clean neighbourhood cafe seating for dine-in as well as quick takeaway.",
        },
      ],
    } as LocalityInfo,
    "katraj": {
      slug: "katraj",
      name: "Katraj & Bharati Vidyapeeth",
      headline: "Homestyle Meals & Student Tiffins for Katraj & Bharati Vidyapeeth",
      landmarks: [
        "Bharati Vidyapeeth Deemed University",
        "Katraj Dairy & Chowk",
        "Wonder City area",
        "Sukhsagar Nagar",
        "Rajiv Gandhi Zoological Park",
      ],
      description:
        "Just a short 5-minute ride from Katraj Chowk and Bharati Vidyapeeth Campus, Rupali's Kitchen serves pure-veg homestyle thalis and monthly mess alternatives for students and families.",
      studentPGContext:
        "Studying at Bharati Vidyapeeth or living in PGs around Wonder City and Sukhsagar Nagar? Get healthy, non-oily daily meals that remind you of home.",
      officeTiffinContext:
        "Packed hot meal boxes and takeaway options for offices and shops along Katraj-Kondhwa Road and Satara Road.",
      directionsText:
        "From Katraj Chowk, take Katraj-Ambegaon Road towards Ambegaon Pathar. Turn onto Ambegaon Pathar Road; Rupali's Kitchen is at Shop 02, opposite Torna Sankul.",
      popularDishes: [
        "rupalis-special-thali",
        "bhakri-special-thali",
        "chapati-paneer-bhurji",
      ],
      faq: [
        {
          q: "Can Bharati Vidyapeeth students order tiffins from Rupali's Kitchen?",
          a: "Yes, we regularly cater to college students and hostellers looking for healthy, hygienic ghar ka khana away from home.",
        },
        {
          q: "How far is Rupali's Kitchen from Katraj Chowk?",
          a: "It is approximately 2 to 3 km away, easily accessible via Katraj-Ambegaon Road in about 5 to 7 minutes.",
        },
      ],
    } as LocalityInfo,
    "narhe": {
      slug: "narhe",
      name: "Narhe & Vadgaon",
      headline: "Fresh Homestyle Food & Tiffin Service for Narhe & Vadgaon Budruk",
      landmarks: [
        "Sinhgad Institutes Narhe Campus",
        "Manaji Nagar",
        "Vadgaon Budruk Bridge",
        "Narhe Gaon Chowk",
      ],
      description:
        "Directly bordering Ambegaon, Narhe is home to thousands of engineering students and young IT professionals. Rupali's Kitchen provides honest, home-cooked Maharashtrian and North Indian daily food.",
      studentPGContext:
        "Close to Sinhgad Technical Education campus and Narhe hostels. Fresh chapatis, tasty dal, and seasonal vegetables cooked like family.",
      officeTiffinContext:
        "Quick lunch pickups and reliable evening dinners for professionals residing in Narhe and Vadgaon societies.",
      directionsText:
        "From Narhe, take Narhe-Ambegaon Road towards Tanaji Nagar. We are situated opposite Torna Sankul on Ambegaon Pathar Road.",
      popularDishes: [
        "palak-paneer-thali",
        "rupalis-special-thali",
        "varan-bhaat",
      ],
      faq: [
        {
          q: "Do you serve students from Sinhgad Narhe campus?",
          a: "Yes! Many Sinhgad Narhe students visit our counter for lunch, dinner, or pick up monthly meal tiffins.",
        },
        {
          q: "What vegetarian thalis are available?",
          a: "We offer Rupali's Special Thali, Bhakri Special Thali, Executive Palak Paneer Thali, and everyday homestyle meal boxes.",
        },
      ],
    } as LocalityInfo,
    "dhankawadi": {
      slug: "dhankawadi",
      name: "Dhankawadi & Balaji Nagar",
      headline: "Wholesome Ghar Ka Khana for Dhankawadi & Balaji Nagar Residents",
      landmarks: [
        "Trimurti Chowk",
        "Balaji Nagar",
        "Chaitanya Nagar",
        "Sahakar Nagar corridor",
      ],
      description:
        "For families, working couples, and students in Dhankawadi, Rupali's Kitchen offers wholesome, 100% vegetarian meals made with unhurried care and authentic Maharashtrian warmth.",
      studentPGContext:
        "Priced reasonably for students living in Dhankawadi hostels and PGs who crave clean, hygienic maa ke haath ka khana.",
      officeTiffinContext:
        "Convenient tiffin packs for working couples seeking wholesome home food after busy workdays.",
      directionsText:
        "From Trimurti Chowk or Balaji Nagar, head towards Katraj-Ambegaon Pathar Road. Rupali's Kitchen is opposite Torna Sankul, near Chintamani Prime English School.",
      popularDishes: [
        "rupalis-special-thali",
        "bhakri-special-thali",
        "jeera-rice-dal",
      ],
      faq: [
        {
          q: "Is takeaway available for Dhankawadi residents?",
          a: "Yes, you can drop by our Ambegaon counter for hot takeaways or arrange convenient tiffins via WhatsApp.",
        },
      ],
    } as LocalityInfo,
  } as Record<string, LocalityInfo>,

  serviceClusters: [
    {
      id: "ambegaon-pockets",
      clusterName: "Ambegaon & Immediate Neighbourhood",
      distanceRange: "Within 0–2 km • Walking & Quick Pickup",
      leadLocalitySlug: "ambegaon-budruk",
      description: "Our primary neighbourhood corridor around Tanaji Nagar and Ambegaon Pathar Road.",
      pockets: [
        "Ambegaon Budruk",
        "Ambegaon Khurd",
        "Ambegaon Pathar",
        "Ambegaon Pathar Road",
        "Manaji Nagar",
        "Dattanagar",
        "Dattanagar Road",
        "Chandrabhaga Nagar",
        "Phale Nagar",
        "Dalavi Nagar",
        "Kalubai Nagar",
        "Bhintade Nagar",
        "Vetal Nagar",
        "Shani Nagar",
        "Tukaram Nagar",
        "Jambhulwadi",
        "Jambhulwadi Road",
        "Katraj–Ambegaon Road",
        "Narhe–Ambegaon Road",
        "Shivshrushti area",
      ],
    },
    {
      id: "katraj-pockets",
      clusterName: "Katraj & Bharati Vidyapeeth Campus",
      distanceRange: "Within 2–4 km • Quick Commute & Tiffin Corridor",
      leadLocalitySlug: "katraj",
      description: "Student hostels, Bharati Vidyapeeth colleges, and residential societies along Katraj corridor.",
      pockets: [
        "Katraj",
        "Katraj Dairy area",
        "Wonder City area",
        "Sukhsagar Nagar",
        "Sukhsagar Nagar Phase 1",
        "Sukhsagar Nagar Phase 2",
        "Rajiv Gandhi Zoological Park area",
        "Katraj Kondhwa Road",
        "Gokul Nagar",
        "Mangdewadi",
        "Gujarwadi",
        "Gokulnagar Road",
        "Bharti Vidyapeeth area",
        "Bharati Vidyapeeth Campus area",
        "Balaji Nagar",
        "Padmavati Nagar",
        "Vasant Baug",
        "Yashwantrao Chavan Nagar",
        "Shriram Nagar",
        "Sainagar",
      ],
    },
    {
      id: "dhankawadi-pockets",
      clusterName: "Dhankawadi & Balaji Nagar Belt",
      distanceRange: "Within 3–5 km • Daily Tiffin & Family Diners",
      leadLocalitySlug: "dhankawadi",
      description: "Thriving residential and educational neighbourhoods from Trimurti Chowk to Sahakar Nagar.",
      pockets: [
        "Dhankawadi",
        "Ambedkar Nagar",
        "Chaitanya Nagar",
        "Keshav Nagar",
        "Trimurti Chowk area",
        "Aranyeshwar area",
        "Taware Colony",
        "Sahakar Nagar",
        "Sahakar Nagar 1",
        "Sahakar Nagar 2",
        "Padmavati",
        "Bibwewadi Road",
        "Upper Indira Nagar",
        "Lower Indira Nagar",
        "Market Yard",
        "Gultekdi",
        "Mukund Nagar",
        "Maharshi Nagar",
        "Parvati Darshan",
        "Laxmi Nagar",
      ],
    },
    {
      id: "narhe-sinhagad-pockets",
      clusterName: "Narhe & Sinhagad Road Corridor",
      distanceRange: "Within 2–6 km • Engineering Campus & Residences",
      leadLocalitySlug: "narhe",
      description: "Major engineering institutes, tech parks, and growing family communities from Narhe to Dhayari.",
      pockets: [
        "Narhe",
        "Narhe Gaon",
        "Narhe Road",
        "Vadgaon Budruk",
        "Vadgaon Khurd",
        "Hingne Khurd",
        "Anand Nagar",
        "Manik Baug",
        "Sinhagad Road",
        "Dhayari",
        "Dhayari Phata",
        "Dhayari Gaon",
        "Nanded",
        "Nanded City",
        "Kirkatwadi",
        "Khadakwasla",
        "Kudje",
        "Donje",
        "Kolhewadi",
        "Vitthalwadi",
      ],
    },
    {
      id: "bibwewadi-kondhwa-pockets",
      clusterName: "Bibwewadi, Kondhwa & South Pune",
      distanceRange: "Within 4–8 km • Family Tiffins & Direct Commute",
      description: "Southern Pune family and commercial belt accessible via Katraj-Kondhwa & Satara Road corridors.",
      pockets: [
        "Bibwewadi",
        "Gangadham",
        "Kondhwa Budruk",
        "Kondhwa Khurd",
        "Kondhwa",
        "Yewalewadi",
        "Undri",
        "Pisoli",
        "Khadi Machine Chowk area",
        "Mohammedwadi",
        "Wanowrie",
        "NIBM Road",
        "Lulla Nagar",
        "Salunke Vihar",
        "Kausar Baugh",
        "Tilekar Nagar",
        "Satara Road",
        "Swargate",
        "Gultekdi–Market Yard area",
        "Parvati",
      ],
    },
  ] as ServiceCluster[],

  share: {
    title: "Rupali's Kitchen — Authentic Ghar Ka Khana in Pune",
    text: "Missing ghar ka khana in Pune? Check out Rupali's Kitchen in Ambegaon Budruk for honest, home-cooked thalis and tiffins:",
    url: "https://rupaliskitchen.vercel.app",
  },

  values: [
    {
      id: "everyday-comfort",
      title: "Everyday Comfort",
      description: "Familiar Indian meals for your everyday routine.",
      iconName: "EverydayComfort",
    },
    {
      id: "made-with-care",
      title: "Made with Care",
      description: "Food prepared with attention to the little things.",
      iconName: "MadeWithCare",
    },
    {
      id: "neighbourhood-kitchen",
      title: "Your Neighbourhood Kitchen",
      description: "A friendly local place to discover and return to.",
      iconName: "NeighbourhoodKitchen",
    },
  ] as ValueProposition[],

  customerMoment: {
    heading: "A place to share a meal.",
    supportingCopy: "Good food has a way of bringing people together.",
    photoConsentVerified: false,
  },

  googleReviews: {
    rating: 4.9,
    reviewCount: 107,
    googleMapsUrl: "https://share.google/Hilc0OJ0Lsl5hYA0l",
    summary: "Rated 4.9 / 5 with 107 verified reviews on Google Maps",
    items: [
      {
        id: "saee-gaikwad",
        name: "Saee Gaikwad",
        rating: 5,
        text: "Feels like maa ke haath ka khana! Every meal here reminds me of home — simple, delicious and clean. Food cooked with love and served with care.",
        tag: "Feels like mom's cooking",
        source: "Google Maps",
      },
      {
        id: "amit-bhandare",
        name: "Amit Bhandare",
        rating: 5,
        text: "Rupali’s Kitchen is a perfect place for families, especially for working couples! The food has a wonderful homemade taste, the service is excellent, and the warm, homely treatment makes you feel completely at ease.",
        tag: "Working couples & families",
        source: "Google Maps",
      },
      {
        id: "mansi-kulkarni",
        name: "Mansi Kulkarni",
        rating: 5,
        text: "Food is awesome and uncle aunty are very much kind and friendly. I get home vibes there.",
        tag: "Home vibes",
        source: "Google Maps",
      },
      {
        id: "pratik-wani",
        name: "Pratik Wani",
        rating: 5,
        text: "The food was delicious, fresh, and full of authentic flavours. Everything was prepared with care, and the taste really stood out. Highly recommended!",
        tag: "Authentic flavours",
        source: "Google Maps",
      },
      {
        id: "bhushan-sonawane",
        name: "Bhushan Sonawane",
        role: "Local Guide",
        rating: 5,
        text: "Rupali's Kitchen is a fantastic spot for vegetarians! The menu is entirely vegetarian, which is amazing and makes ordering super easy. Every dish is prepared with real care.",
        tag: "100% Vegetarian",
        source: "Google Maps",
      },
      {
        id: "asawari-kulkarni",
        name: "Asawari Kulkarni",
        rating: 5,
        text: "Felt as if a family member is serving with warmth and care.",
        tag: "Warm hospitality",
        source: "Google Maps",
      },
    ] as CustomerReview[],
  },

  location: {
    eyebrow: "COME FIND US",
    headline: "Your neighbourhood's little food spot.",
    copy: "Looking for a comforting meal nearby? Find Rupali's Kitchen and come say hello.",
    info: {
      isAddressVerified: true,
      address:
        "02, Ambegaon Pathar Rd, opp. TORNA SANKUL, near CHINTAMANI PRIME ENGLISH SCH5, Tanaji Nagar, Ambegaon Budruk, Pune, Maharashtra 411046",
      addressNote:
        "Opposite Torna Sankul, near Chintamani Prime English School, Ambegaon Budruk, Pune.",
      isOpenHoursVerified: true,
      openingHours: [
        { days: "Monday – Sunday", timings: "Lunch and Dinner" },
      ],
      isPhoneVerified: true,
      phoneNumber: "+917841988070",
      phoneDisplay: "078419 88070",
      isWhatsAppVerified: true,
      whatsAppNumber: "917841988070",
      whatsAppPrompt: "Hello Rupali's Kitchen, what is cooking today?",
      isGoogleMapsVerified: true,
      googleMapsUrl: "https://share.google/Hilc0OJ0Lsl5hYA0l",
      serviceOptions: {
        dineIn: true,
        takeaway: true,
        tiffinService: true,
      },
      customerPhotoConsentVerified: false,
    } as BusinessInfo,
  },

  finalCta: {
    headline: "Missing ghar ka khana?",
    supportingCopy:
      "Maybe your next comforting meal is closer than you think.",
    buttonText: "Find Rupali's Kitchen",
  },
};

export function getRestaurantSchema() {
  const domain = SITE_DATA.seo.baseUrl;
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${domain}#restaurant`,
    name: "Rupali's Kitchen",
    alternateName: "Rupali Homely Meals",
    description: SITE_DATA.seo.defaultDescription,
    url: domain,
    image: `${domain}${SITE_DATA.seo.ogImage}`,
    logo: `${domain}/images/rupalis-kitchen/logo-full.png`,
    telephone: SITE_DATA.location.info.phoneNumber,
    servesCuisine: ["Indian", "Maharashtrian", "Pure Vegetarian", "Homestyle"],
    priceRange: "₹100–₹300",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "107",
      bestRating: "5",
      worstRating: "1",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "02, Ambegaon Pathar Rd, opp. TORNA SANKUL, near CHINTAMANI PRIME ENGLISH SCH5, Tanaji Nagar",
      addressLocality: "Ambegaon Budruk, Pune",
      addressRegion: "Maharashtra",
      postalCode: "411046",
      addressCountry: "IN",
    },
    hasMap: SITE_DATA.location.info.googleMapsUrl,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "11:30",
        closes: "22:30",
      },
    ],
    menu: `${domain}/menu`,
    acceptsReservations: "False",
  };
}
