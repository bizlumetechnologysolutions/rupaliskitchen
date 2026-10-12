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
  category: string;
  description: string;
  imageSrc: string;
  aspectClass?: string;
  featured?: boolean;
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
    { label: "Home", href: "#hero" },
    { label: "Our Story", href: "#story" },
    { label: "The Food", href: "#food" },
    { label: "Why Us", href: "#why-us" },
    { label: "Find Us", href: "#find-us" },
  ] as NavItem[],

  assets: {
    logo: "/images/rupalis-kitchen/logo.png",
    logoFull: "/images/rupalis-kitchen/logo-full.png",
    logoMark: "/images/rupalis-kitchen/logo-mark.png",
    logoWordmark: "/images/rupalis-kitchen/logo-wordmark.png",
    ownersKitchen: "/images/rupalis-kitchen/owners-kitchen.png",
    thaliFeast: "/images/rupalis-kitchen/thali-feast.png",
    rotiSabzi: "/images/rupalis-kitchen/roti-sabzi.png",
    storefront: "/images/rupalis-kitchen/storefront.png",
    customerMoment: "/images/rupalis-kitchen/customer-moment.png",
  },

  story: {
    eyebrow: "THE PEOPLE BEHIND THE PLATE",
    headline: "Do log. Ek chhoti si rasoi. Bahut saara pyaar.",
    paragraphs: [
      "Some of the best meals don't come from fancy restaurants. They come from people who put a little extra care into what they cook.",
      "At Rupali's Kitchen, we believe everyday food should feel comforting, familiar, and made with love. We're here to bring a little taste of home to your everyday routine.",
    ],
    pullQuote: "A little kitchen with a whole lot of heart.",
  },

  foodGallery: {
    eyebrow: "FROM OUR KITCHEN",
    headline: "Roz ka khana. Roz ki khushi.",
    supportingText:
      "Everyday meals, familiar flavours, and the simple comfort of a proper Indian meal.",
    items: [
      {
        id: "everyday-thali",
        title: "Everyday Thali Feast",
        category: "Complete Meal",
        description:
          "Freshly rolled rotis, steaming rice, fragrant dal, hearty sabzi, crispy papad, and homemade pickle on a traditional stainless steel thali.",
        imageSrc: "/images/rupalis-kitchen/thali-feast.png",
        featured: true,
      },
      {
        id: "homestyle-roti-sabzi",
        title: "Homestyle Roti & Sabzi",
        category: "Everyday Nashta & Lunch",
        description:
          "Tender hot phulkas paired with freshly cooked seasonal sabzi and tangy pickle — simple, wholesome, and satisfying.",
        imageSrc: "/images/rupalis-kitchen/roti-sabzi.png",
        featured: false,
      },
      {
        id: "fresh-storefront-offerings",
        title: "Nashta, Meals & Everyday Snacks",
        category: "Fresh Counter",
        description:
          "From morning chai and nashta to comforting afternoon thalis, freshly prepared right in the neighbourhood.",
        imageSrc: "/images/rupalis-kitchen/storefront.png",
        featured: false,
      },
    ] as FoodItem[],
    ctaText: "Ask what's cooking today",
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
    photoConsentVerified: false, // Strict compliance: awaiting explicit customer & guardian consent
  },

  location: {
    eyebrow: "COME FIND US",
    headline: "Your neighbourhood's little food spot.",
    copy: "Looking for a comforting meal nearby? Find Rupali's Kitchen and come say hello.",
    // Business details pending owner verification for launch
    info: {
      isAddressVerified: true,
      address:
        "02, Ambegaon Pathar Rd, opp. TORNA SANKUL, near CHINTAMANI PRIME ENGLISH SCH5, Tanaji Nagar, Ambegaon Budruk, Pune, Maharashtra 411046",
      addressNote:
        "Opposite Torna Sankul, near Chintamani Prime English School, Ambegaon Budruk, Pune.",
      isOpenHoursVerified: true,
      openingHours: [
        { days: "Monday – Sunday", timings: "Morning Nashta to Dinner" },
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
