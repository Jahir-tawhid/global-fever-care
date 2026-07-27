// src/data/medicineData.js

export const countryMedicines = {
  // ১. বাংলাদেশ (Bangladesh)
  BD: {
    child: {
      infant: [
        {
          brand: "Napa Paediatric Drops",
          generic: "Paracetamol",
          power: "80mg/ml",
          company: "Beximco",
          dose: "0.25 ml to 0.5 ml",
        },
        {
          brand: "Ace Paediatric Drops",
          generic: "Paracetamol",
          power: "80mg/ml",
          company: "Square",
          dose: "0.25 ml to 0.5 ml",
        },
      ],
      infant_older: [
        {
          brand: "Napa Paediatric Drops",
          generic: "Paracetamol",
          power: "80mg/ml",
          company: "Beximco",
          dose: "0.5 ml to 1 ml",
        },
        {
          brand: "Ace Paediatric Drops",
          generic: "Paracetamol",
          power: "80mg/ml",
          company: "Square",
          dose: "0.5 ml to 1 ml",
        },
        {
          brand: "Pyralgin Paediatric Drops",
          generic: "Paracetamol",
          power: "80mg/ml",
          company: "Incepta",
          dose: "0.5 ml to 1 ml",
        },
      ],
      toddler: [
        {
          brand: "Napa Syrup",
          generic: "Paracetamol",
          power: "120mg/5ml",
          company: "Beximco",
          dose: "1 tsp (5ml)",
        },
        {
          brand: "Ace Syrup",
          generic: "Paracetamol",
          power: "120mg/5ml",
          company: "Square",
          dose: "1 tsp (5ml)",
        },
        {
          brand: "Renova Syrup",
          generic: "Paracetamol",
          power: "120mg/5ml",
          company: "Opso Saline",
          dose: "1 tsp (5ml)",
        },
      ],
      olderChild: [
        {
          brand: "Ace Suspension",
          generic: "Paracetamol",
          power: "120mg/5ml",
          company: "Square",
          dose: "2 tsp (10ml)",
        },
        {
          brand: "Napa Extra Syrup",
          generic: "Paracetamol",
          power: "120mg/5ml",
          company: "Beximco",
          dose: "2 tsp (10ml)",
        },
        {
          brand: "Flamyd Suspension",
          generic: "Ibuprofen",
          power: "100mg/5ml",
          company: "Square",
          dose: "1.5 tsp (7.5ml)",
        },
      ],
    },
    adultMale: {
      mild: [
        {
          brand: "Napa",
          generic: "Paracetamol",
          power: "500mg",
          company: "Beximco",
          dose: "1 tablet",
        },
      ],
      moderate: [
        {
          brand: "Napa Extend",
          generic: "Paracetamol (SR)",
          power: "665mg",
          company: "Beximco",
          dose: "1-2 tablets",
        },
      ],
      severe: [
        {
          brand: "Napa Extra",
          generic: "Paracetamol + Caffeine",
          power: "500mg+65mg",
          company: "Beximco",
          dose: "2 tablets",
        },
      ],
    },
    adultFemale: {
      mild: [
        {
          brand: "Napa",
          generic: "Paracetamol",
          power: "500mg",
          company: "Beximco",
          dose: "1 tablet",
        },
      ],
      moderate: [
        {
          brand: "Napa Extend",
          generic: "Paracetamol (SR)",
          power: "665mg",
          company: "Beximco",
          dose: "1 tablet",
        },
      ],
      severe: [
        {
          brand: "Napa Extra",
          generic: "Paracetamol + Caffeine",
          power: "500mg+65mg",
          company: "Beximco",
          dose: "1-2 tablets",
        },
      ],
    },
    gastric: [
      {
        brand: "Seclo",
        generic: "Omeprazole",
        power: "20mg",
        company: "Square",
        dose: "1 capsule before meal",
      },
      {
        brand: "Sergel",
        generic: "Esomeprazole",
        power: "20mg",
        company: "Healthcare",
        dose: "1 capsule before meal",
      },
    ],
  },

  // ২. পাকিস্তান (Pakistan)
  PK: {
    child: {
      infant: [
        {
          brand: "Panadol Baby Drops",
          generic: "Paracetamol",
          power: "100mg/ml",
          company: "GSK",
          dose: "0.25 ml",
        },
      ],
      toddler: [
        {
          brand: "Panadol Baby",
          generic: "Paracetamol",
          power: "120mg/5ml",
          company: "GSK",
          dose: "1 tsp",
        },
      ],
      olderChild: [
        {
          brand: "Calpol Suspension",
          generic: "Paracetamol",
          power: "250mg/5ml",
          company: "GSK",
          dose: "1 tsp",
        },
      ],
    },
    adultMale: {
      mild: [
        {
          brand: "Panadol",
          generic: "Paracetamol",
          power: "500mg",
          company: "GSK Pakistan",
          dose: "1 tablet",
        },
      ],
      moderate: [
        {
          brand: "Panadol Extra",
          generic: "Paracetamol + Caffeine",
          power: "500mg+65mg",
          company: "GSK Pakistan",
          dose: "1 tablet",
        },
      ],
      severe: [
        {
          brand: "Panadol CF",
          generic: "Paracetamol + Decongestant",
          power: "500mg",
          company: "GSK Pakistan",
          dose: "2 tablets",
        },
      ],
    },
    adultFemale: {
      mild: [
        {
          brand: "Panadol",
          generic: "Paracetamol",
          power: "500mg",
          company: "GSK Pakistan",
          dose: "1 tablet",
        },
      ],
      moderate: [
        {
          brand: "Panadol Extra",
          generic: "Paracetamol + Caffeine",
          power: "500mg+65mg",
          company: "GSK Pakistan",
          dose: "1 tablet",
        },
      ],
      severe: [
        {
          brand: "Panadol CF",
          generic: "Paracetamol + Decongestant",
          power: "500mg",
          company: "GSK Pakistan",
          dose: "2 tablets",
        },
      ],
    },
    gastric: [
      {
        brand: "Risek",
        generic: "Omeprazole",
        power: "20mg",
        company: "Getz Pharma",
        dose: "1 capsule before meal",
      },
    ],
  },

  // ৩. সৌদি আরব (Saudi Arabia)
  SA: {
    child: {
      infant: [
        {
          brand: "Fevadol Drops",
          generic: "Paracetamol",
          power: "100mg/ml",
          company: "SPIMACO",
          dose: "0.25 ml",
        },
      ],
      toddler: [
        {
          brand: "Fevadol Syrup",
          generic: "Paracetamol",
          power: "160mg/5ml",
          company: "SPIMACO",
          dose: "5 ml",
        },
      ],
      olderChild: [
        {
          brand: "Fevadol Plus",
          generic: "Paracetamol",
          power: "250mg/5ml",
          company: "SPIMACO",
          dose: "10 ml",
        },
      ],
    },
    adultMale: {
      mild: [
        {
          brand: "Fevadol",
          generic: "Paracetamol",
          power: "500mg",
          company: "SPIMACO",
          dose: "1 tablet",
        },
      ],
      moderate: [
        {
          brand: "Fevadol Extra",
          generic: "Paracetamol + Caffeine",
          power: "500mg+65mg",
          company: "SPIMACO",
          dose: "1-2 tablets",
        },
      ],
      severe: [
        {
          brand: "Panadol Extra",
          generic: "Paracetamol + Caffeine",
          power: "500mg+65mg",
          company: "GSK",
          dose: "2 tablets",
        },
      ],
    },
    adultFemale: {
      mild: [
        {
          brand: "Fevadol",
          generic: "Paracetamol",
          power: "500mg",
          company: "SPIMACO",
          dose: "1 tablet",
        },
      ],
      moderate: [
        {
          brand: "Fevadol Extra",
          generic: "Paracetamol + Caffeine",
          power: "500mg+65mg",
          company: "SPIMACO",
          dose: "1 tablet",
        },
      ],
      severe: [
        {
          brand: "Panadol Extra",
          generic: "Paracetamol + Caffeine",
          power: "500mg+65mg",
          company: "GSK",
          dose: "2 tablets",
        },
      ],
    },
    gastric: [
      {
        brand: "Omeprex",
        generic: "Omeprazole",
        power: "20mg",
        company: "SPIMACO",
        dose: "1 capsule before meal",
      },
    ],
  },

  // ৪. মার্কিন যুক্তরাষ্ট্র (USA)
  US: {
    child: {
      infant: [
        {
          brand: "Infants' Tylenol",
          generic: "Acetaminophen",
          power: "160mg/5ml",
          company: "Kenvue",
          dose: "1.25 ml",
        },
      ],
      toddler: [
        {
          brand: "Children's Tylenol",
          generic: "Acetaminophen",
          power: "160mg/5ml",
          company: "Kenvue",
          dose: "5 ml",
        },
      ],
      olderChild: [
        {
          brand: "Children's Motrin",
          generic: "Ibuprofen",
          power: "100mg/5ml",
          company: "Kenvue",
          dose: "7.5 ml",
        },
      ],
    },
    adultMale: {
      mild: [
        {
          brand: "Tylenol Regular Strength",
          generic: "Acetaminophen",
          power: "325mg",
          company: "Kenvue",
          dose: "2 tablets",
        },
      ],
      moderate: [
        {
          brand: "Tylenol Extra Strength",
          generic: "Acetaminophen",
          power: "500mg",
          company: "Kenvue",
          dose: "2 caplets",
        },
      ],
      severe: [
        {
          brand: "Advil Dual Action",
          generic: "Acetaminophen + Ibuprofen",
          power: "250mg+125mg",
          company: "Haleon",
          dose: "2 caplets",
        },
      ],
    },
    adultFemale: {
      mild: [
        {
          brand: "Tylenol Regular Strength",
          generic: "Acetaminophen",
          power: "325mg",
          company: "Kenvue",
          dose: "2 tablets",
        },
      ],
      moderate: [
        {
          brand: "Tylenol Extra Strength",
          generic: "Acetaminophen",
          power: "500mg",
          company: "Kenvue",
          dose: "1-2 caplets",
        },
      ],
      severe: [
        {
          brand: "Advil Dual Action",
          generic: "Acetaminophen + Ibuprofen",
          power: "250mg+125mg",
          company: "Haleon",
          dose: "2 caplets",
        },
      ],
    },
    gastric: [
      {
        brand: "Prilosec OTC",
        generic: "Omeprazole",
        power: "20mg",
        company: "Procter & Gamble",
        dose: "1 tablet before meal",
      },
    ],
  },

  // ৫. যুক্তরাজ্য (UK - London)
  UK: {
    child: {
      infant: [
        {
          brand: "Calpol Infant Suspension",
          generic: "Paracetamol",
          power: "120mg/5ml",
          company: "Kenvue UK",
          dose: "2.5 ml",
        },
      ],
      toddler: [
        {
          brand: "Calpol Infant Suspension",
          generic: "Paracetamol",
          power: "120mg/5ml",
          company: "Kenvue UK",
          dose: "5 ml",
        },
      ],
      olderChild: [
        {
          brand: "Calpol Six Plus",
          generic: "Paracetamol",
          power: "250mg/5ml",
          company: "Kenvue UK",
          dose: "5 ml",
        },
      ],
    },
    adultMale: {
      mild: [
        {
          brand: "Panadol Original",
          generic: "Paracetamol",
          power: "500mg",
          company: "Haleon UK",
          dose: "1-2 tablets",
        },
      ],
      moderate: [
        {
          brand: "Panadol Extra Advance",
          generic: "Paracetamol + Caffeine",
          power: "500mg+65mg",
          company: "Haleon UK",
          dose: "2 tablets",
        },
      ],
      severe: [
        {
          brand: "Nurofen Plus",
          generic: "Ibuprofen + Codeine",
          power: "200mg+12.8mg",
          company: "Reckitt",
          dose: "1-2 tablets",
        },
      ],
    },
    adultFemale: {
      mild: [
        {
          brand: "Panadol Original",
          generic: "Paracetamol",
          power: "500mg",
          company: "Haleon UK",
          dose: "1 tablet",
        },
      ],
      moderate: [
        {
          brand: "Panadol Extra Advance",
          generic: "Paracetamol + Caffeine",
          power: "500mg+65mg",
          company: "Haleon UK",
          dose: "1-2 tablets",
        },
      ],
      severe: [
        {
          brand: "Nurofen Express",
          generic: "Ibuprofen Lysine",
          power: "342mg",
          company: "Reckitt",
          dose: "1-2 caplets",
        },
      ],
    },
    gastric: [
      {
        brand: "Nexium Control",
        generic: "Esomeprazole",
        power: "20mg",
        company: "Haleon UK",
        dose: "1 tablet before meal",
      },
    ],
  },

  // ৬. কাতার (Qatar)
  QA: {
    child: {
      infant: [
        {
          brand: "Adol Drops",
          generic: "Paracetamol",
          power: "100mg/ml",
          company: "Julphar",
          dose: "0.5 ml",
        },
      ],
      toddler: [
        {
          brand: "Adol Suspension",
          generic: "Paracetamol",
          power: "120mg/5ml",
          company: "Julphar",
          dose: "5 ml",
        },
      ],
      olderChild: [
        {
          brand: "Adol DS",
          generic: "Paracetamol",
          power: "250mg/5ml",
          company: "Julphar",
          dose: "5 ml",
        },
      ],
    },
    adultMale: {
      mild: [
        {
          brand: "Adol",
          generic: "Paracetamol",
          power: "500mg",
          company: "Julphar",
          dose: "1-2 tablets",
        },
      ],
      moderate: [
        {
          brand: "Adol Extra",
          generic: "Paracetamol + Caffeine",
          power: "500mg+65mg",
          company: "Julphar",
          dose: "2 tablets",
        },
      ],
      severe: [
        {
          brand: "Panadol Joint",
          generic: "Paracetamol SR",
          power: "665mg",
          company: "GSK",
          dose: "2 tablets",
        },
      ],
    },
    adultFemale: {
      mild: [
        {
          brand: "Adol",
          generic: "Paracetamol",
          power: "500mg",
          company: "Julphar",
          dose: "1 tablet",
        },
      ],
      moderate: [
        {
          brand: "Adol Extra",
          generic: "Paracetamol + Caffeine",
          power: "500mg+65mg",
          company: "Julphar",
          dose: "1-2 tablets",
        },
      ],
      severe: [
        {
          brand: "Panadol Joint",
          generic: "Paracetamol SR",
          power: "665mg",
          company: "GSK",
          dose: "2 tablets",
        },
      ],
    },
    gastric: [
      {
        brand: "Esonorm",
        generic: "Esomeprazole",
        power: "20mg",
        company: "Qatar Pharma",
        dose: "1 capsule before meal",
      },
    ],
  },

  // ৭. সংযুক্ত আরব আমিরাত (UAE)
  AE: {
    child: {
      infant: [
        {
          brand: "Panadol Baby Drops",
          generic: "Paracetamol",
          power: "100mg/ml",
          company: "GSK UAE",
          dose: "0.5 ml",
        },
      ],
      toddler: [
        {
          brand: "Adol Suspension",
          generic: "Paracetamol",
          power: "120mg/5ml",
          company: "Julphar UAE",
          dose: "5 ml",
        },
      ],
      olderChild: [
        {
          brand: "Cetamol Syrup",
          generic: "Paracetamol",
          power: "250mg/5ml",
          company: "Neopharma",
          dose: "5 ml",
        },
      ],
    },
    adultMale: {
      mild: [
        {
          brand: "Adol",
          generic: "Paracetamol",
          power: "500mg",
          company: "Julphar UAE",
          dose: "1-2 tablets",
        },
      ],
      moderate: [
        {
          brand: "Panadol Extra",
          generic: "Paracetamol + Caffeine",
          power: "500mg+65mg",
          company: "GSK UAE",
          dose: "2 tablets",
        },
      ],
      severe: [
        {
          brand: "Adol Compound",
          generic: "Paracetamol + Caffeine + Codeine",
          power: "500mg+30mg+10mg",
          company: "Julphar UAE",
          dose: "1-2 tablets",
        },
      ],
    },
    adultFemale: {
      mild: [
        {
          brand: "Adol",
          generic: "Paracetamol",
          power: "500mg",
          company: "Julphar UAE",
          dose: "1 tablet",
        },
      ],
      moderate: [
        {
          brand: "Panadol Extra",
          generic: "Paracetamol + Caffeine",
          power: "500mg+65mg",
          company: "GSK UAE",
          dose: "1-2 tablets",
        },
      ],
      severe: [
        {
          brand: "Panadol Joint",
          generic: "Paracetamol SR",
          power: "665mg",
          company: "GSK UAE",
          dose: "2 tablets",
        },
      ],
    },
    gastric: [
      {
        brand: "Gasec",
        generic: "Omeprazole",
        power: "20mg",
        company: "Mepha UAE",
        dose: "1 capsule before meal",
      },
    ],
  },

  // ৮. কুয়েত (Kuwait)
  KW: {
    child: {
      infant: [
        {
          brand: "Adol Drops",
          generic: "Paracetamol",
          power: "100mg/ml",
          company: "Julphar Kuwait",
          dose: "0.5 ml",
        },
      ],
      toddler: [
        {
          brand: "Fevadol Syrup",
          generic: "Paracetamol",
          power: "160mg/5ml",
          company: "SPIMACO Kuwait",
          dose: "5 ml",
        },
      ],
      olderChild: [
        {
          brand: "Adol DS",
          generic: "Paracetamol",
          power: "250mg/5ml",
          company: "Julphar Kuwait",
          dose: "5 ml",
        },
      ],
    },
    adultMale: {
      mild: [
        {
          brand: "Adol",
          generic: "Paracetamol",
          power: "500mg",
          company: "Julphar Kuwait",
          dose: "1-2 tablets",
        },
      ],
      moderate: [
        {
          brand: "Fevadol Extra",
          generic: "Paracetamol + Caffeine",
          power: "500mg+65mg",
          company: "SPIMACO Kuwait",
          dose: "2 tablets",
        },
      ],
      severe: [
        {
          brand: "Panadol Extra",
          generic: "Paracetamol + Caffeine",
          power: "500mg+65mg",
          company: "GSK",
          dose: "2 tablets",
        },
      ],
    },
    adultFemale: {
      mild: [
        {
          brand: "Adol",
          generic: "Paracetamol",
          power: "500mg",
          company: "Julphar Kuwait",
          dose: "1 tablet",
        },
      ],
      moderate: [
        {
          brand: "Fevadol Extra",
          generic: "Paracetamol + Caffeine",
          power: "500mg+65mg",
          company: "SPIMACO Kuwait",
          dose: "1-2 tablets",
        },
      ],
      severe: [
        {
          brand: "Panadol Extra",
          generic: "Paracetamol + Caffeine",
          power: "500mg+65mg",
          company: "GSK",
          dose: "2 tablets",
        },
      ],
    },
    gastric: [
      {
        brand: "Omeprex",
        generic: "Omeprazole",
        power: "20mg",
        company: "Kuwait Pharma",
        dose: "1 capsule before meal",
      },
    ],
  },

  // ৯. চীন (China)
  CN: {
    child: {
      infant: [
        {
          brand: "Tylenol Infant Drops",
          generic: "Acetaminophen",
          power: "100mg/ml",
          company: "Sino-American J&J",
          dose: "0.5 ml",
        },
      ],
      toddler: [
        {
          brand: "Tylenol Children Suspension",
          generic: "Acetaminophen",
          power: "160mg/5ml",
          company: "Sino-American J&J",
          dose: "5 ml",
        },
      ],
      olderChild: [
        {
          brand: "Motrin Children Liquid",
          generic: "Ibuprofen",
          power: "100mg/5ml",
          company: "Sino-American J&J",
          dose: "7.5 ml",
        },
      ],
    },
    adultMale: {
      mild: [
        {
          brand: "Tylenol Adult",
          generic: "Acetaminophen",
          power: "500mg",
          company: "Sino-American J&J",
          dose: "1 tablet",
        },
      ],
      moderate: [
        {
          brand: "Fenbid",
          generic: "Ibuprofen Sustained-Release",
          power: "300mg",
          company: "GSK China",
          dose: "1 capsule",
        },
      ],
      severe: [
        {
          brand: "Bufferin",
          generic: "Aspirin + Acetaminophen + Caffeine",
          power: "250mg+250mg+65mg",
          company: "Bristol-Myers Squibb China",
          dose: "2 tablets",
        },
      ],
    },
    adultFemale: {
      mild: [
        {
          brand: "Tylenol Adult",
          generic: "Acetaminophen",
          power: "500mg",
          company: "Sino-American J&J",
          dose: "1 tablet",
        },
      ],
      moderate: [
        {
          brand: "Fenbid",
          generic: "Ibuprofen Sustained-Release",
          power: "300mg",
          company: "GSK China",
          dose: "1 capsule",
        },
      ],
      severe: [
        {
          brand: "Fenbid",
          generic: "Ibuprofen Sustained-Release",
          power: "400mg",
          company: "GSK China",
          dose: "1 capsule",
        },
      ],
    },
    gastric: [
      {
        brand: "Losec",
        generic: "Omeprazole",
        power: "20mg",
        company: "AstraZeneca China",
        dose: "1 capsule before meal",
      },
    ],
  },

  // ১০. ভারত (India)
  IN: {
    child: {
      infant: [
        {
          brand: "Calpol Paediatric Drops",
          generic: "Paracetamol",
          power: "100mg/ml",
          company: "GSK India",
          dose: "0.5 ml",
        },
      ],
      toddler: [
        {
          brand: "Crocin 120 Suspension",
          generic: "Paracetamol",
          power: "120mg/5ml",
          company: "GSK India",
          dose: "5 ml",
        },
      ],
      olderChild: [
        {
          brand: "Crocin 240 DS Suspension",
          generic: "Paracetamol",
          power: "240mg/5ml",
          company: "GSK India",
          dose: "5 ml",
        },
      ],
    },
    adultMale: {
      mild: [
        {
          brand: "Crocin 500",
          generic: "Paracetamol",
          power: "500mg",
          company: "GSK India",
          dose: "1 tablet",
        },
      ],
      moderate: [
        {
          brand: "Dolo 650",
          generic: "Paracetamol",
          power: "650mg",
          company: "Micro Labs",
          dose: "1 tablet",
        },
      ],
      severe: [
        {
          brand: "Saridon",
          generic: "Paracetamol + Propyphenazone + Caffeine",
          power: "250mg+150mg+50mg",
          company: "Piramal",
          dose: "1 tablet",
        },
      ],
    },
    adultFemale: {
      mild: [
        {
          brand: "Crocin 500",
          generic: "Paracetamol",
          power: "500mg",
          company: "GSK India",
          dose: "1 tablet",
        },
      ],
      moderate: [
        {
          brand: "Dolo 650",
          generic: "Paracetamol",
          power: "650mg",
          company: "Micro Labs",
          dose: "1 tablet",
        },
      ],
      severe: [
        {
          brand: "Saridon",
          generic: "Paracetamol + Propyphenazone + Caffeine",
          power: "250mg+150mg+50mg",
          company: "Piramal",
          dose: "1 tablet",
        },
      ],
    },
    gastric: [
      {
        brand: "Pan 20",
        generic: "Pantoprazole",
        power: "20mg",
        company: "Alkem",
        dose: "1 tablet before meal",
      },
    ],
  },
};
