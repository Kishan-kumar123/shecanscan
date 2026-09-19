export const asset = (name) => `/assets/${name}`;
export const logo = asset("logo.png");

export const navLinks = [
  ["Home", "home"],
  ["Screening", "screening"],
  ["Services", "services"],
  ["Who Should Screen", "who-should-screen"],
  ["Founder", "founder"],
  ["About Us", "about"],
];

export const initialFaqs = [
  {
    id: "faq-1",
    question: "What is She Can Scan?",
    answer:
      "She Can Scan is a dedicated women's health initiative focused on making breast and cervical cancer screening accessible, comfortable, and empowering. We use modern technology, evidence-based protocols, and compassionate care to help detect cancer early — when treatment is most effective.",
  },
  {
    id: "faq-2",
    question: "What screening services do you offer?",
    answer:
      "We offer comprehensive breast cancer screening (clinical examination, AI-assisted thermal screening, risk assessment, self-examination education, and referral for mammography/ultrasound) as well as cervical cancer screening (Pap smear, visual inspection, colposcopy evaluation, and specialist referral).",
  },
  {
    id: "faq-3",
    question: "Who should get screened?",
    answer:
      "Screening is recommended for women aged 21+ (cervical screening), women aged 20+ (breast screening), women with a family history of breast or cervical cancer, women with persistent concerns, and every woman who values preventive healthcare. Talk to our team to find the right screening plan for you.",
  },
  {
    id: "faq-4",
    question: "Is the screening process comfortable?",
    answer:
      "Absolutely. We've designed every aspect of the experience to be comfortable, private, and respectful. Our compassionate female healthcare professionals guide you through each step, and our modern facilities are purpose-built for a calm, reassuring environment.",
  },
  {
    id: "faq-5",
    question: "How do I book a screening?",
    answer:
      "You can book your screening by clicking the 'Book Your Screening' button on this page, calling our team directly at 8800633291, or requesting a callback. We'll work with you to find a convenient time and answer any questions you may have before your visit.",
  },
  {
    id: "faq-6",
    question: "What happens after my screening?",
    answer:
      "After your screening, our team will review your results and provide personalized guidance. If further investigation or specialist referral is needed, we'll coordinate everything for you. We also offer follow-up support to ensure you feel informed and empowered about your health.",
  },
];

export const initialProfiles = [
  {
    id: "medical-consultant",
    image: asset("dr-rajesh.webp"),
    alt: "Dr. Rajesh Kumar Mishra",
    label: "Senior Medical Consultant",
    name: "Dr. Rajesh Kumar Mishra",
    role: "Senior Medical Consultant",
    bio: "Dr. Rajesh Kumar Mishra is a highly distinguished medical professional with a robust background in Critical Care Medicine and Anesthesiology. Bringing over a decade of clinical experience, he is committed to delivering exceptional patient care and implementing rigorous medical standards. As a vital contributor to the She Can Scan initiative, Dr. Mishra leverages his expertise to provide compassionate, high-quality screening and diagnostic services.",
    quote:
      "“Preventive care is the foundation of lasting health — early screening and personalized attention save lives.”",
    columns: [
      {
        heading: "Education & Credentials",
        items: [
          "D.M. Critical Care Medicine — AIIMS New Delhi",
          "M.D. NEIGRIHMS Shillong",
          "M.B.B.S. — Patna Medical College",
          "Registration No: 93734 (Delhi Medical Council)",
        ],
      },
    ],
  },
  {
    id: "founder",
    image: asset("medical-professional.png"),
    alt: "Medical professional representing She Can Scan",
    label: "Meet Our Founder",
    name: "Mr. Madan Mohit Bhardwaj",
    role: "Founder – She Can Scan",
    bio: "Mr. Madan Mohit Bhardwaj is the visionary founder of She Can Scan. He leads the initiative with a commitment to making preventive healthcare and cancer screening accessible, supportive, and empowering for every woman.",
    quote:
      "“Every woman deserves access to early detection, timely intervention, and preventive healthcare—regardless of where she lives.”",
    columns: [
      {
        heading: "Founder Vision",
        items: [
          "Accessible preventive healthcare for women",
          "Empowering communities through screening and education",
          "Supporting early detection and compassionate care",
        ],
      },
      {
        heading: "Leadership Highlights",
        items: [
          "Founder of She Can Scan",
          "Focused on preventive health and early cancer detection",
          "Committed to community-oriented healthcare initiatives",
        ],
      },
    ],
  },
  {
    id: "dr-megha",
    image: asset("dr-megha.webp"),
    alt: "Dr. Megha Joshi Pandey",
    label: "Medical Officer",
    name: "Dr. Megha Joshi Pandey",
    role: "Medical Officer – She Can Scan",
    bio: "Dr. Megha Joshi Pandey is an experienced medical officer who supports women's preventive health initiatives and cancer screening programs at She Can Scan. She brings clinical oversight, patient-focused care, and health education to the team.",
    quote:
      "“Every woman deserves healthcare that is respectful, proactive, and guided by clinical excellence.”",
    columns: [
      {
        heading: "Clinical Contributions",
        items: [
          "Women's preventive health expertise",
          "Screening program coordination",
          "Patient education and counseling",
        ],
      },
      {
        heading: "Patient Focus",
        items: [
          "Compassionate clinical support",
          "Community health advocacy",
          "Compassionate, evidence-based care",
        ],
      },
    ],
  },
  {
    id: "dr-anita",
    image: asset("dr-anita.webp"),
    alt: "Dr. Anita Puri (Bhardwaj)",
    label: "Medical Consultant",
    name: "Dr. Anita Puri (Bhardwaj)",
    role: "Medical Consultant",
    bio: "Dr. Anita Puri (Bhardwaj) is an accomplished medical professional with over three decades of clinical experience, including extensive service in government and hospital-based healthcare settings. She provides comprehensive pediatric care with a strong emphasis on accurate diagnosis, preventive healthcare, patient education, and long-term child wellness.",
    quote:
      "“To provide compassionate, evidence-based healthcare while promoting prevention, early intervention, health awareness, and lifelong wellness.”",
    columns: [
      {
        heading: "Professional Highlights",
        items: [
          "30+ Years of Clinical & Government Healthcare Experience",
          "M.B.B.S. – M.L.B. Medical College, Jhansi",
          "M.D. – M.L.B. Medical College, Jhansi",
          "Expertise in preventive care, nutrition, immunization, and family health education",
        ],
      },
    ],
  },
];

export const initialServices = [
  {
    id: "srv-1",
    title: "Breast Cancer Screening",
    icon: "🩷",
    category: "breast",
    items: [
      "Clinical Breast Examination",
      "AI-assisted Breast Thermal Screening",
      "Breast Health Risk Assessment",
      "Self-Breast Examination Education",
      "Referral for Mammography when required",
    ],
  },
  {
    id: "srv-2",
    title: "Cervical Cancer Screening",
    icon: "🩺",
    category: "cervical",
    items: [
      "Pap Smear (Liquid-Based Cytology)",
      "Visual Inspection (VIA/VILI) when appropriate",
      "Colposcopy Evaluation (if recommended)",
      "Risk Assessment & Prevention Counseling",
      "Follow-up and Specialist Referral",
    ],
  },
];

export const initialStats = [
  { id: "s1", number: "90%+", label: "Survival with Early Detection" },
  { id: "s2", number: "2", label: "Cancer Types Screened" },
  { id: "s3", number: "100%", label: "Confidential Care" },
  { id: "s4", number: "5+", label: "Screening Methods" },
];
