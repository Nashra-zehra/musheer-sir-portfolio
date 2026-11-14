export const PROF = {
  name: 'Dr. Musheer Ahmad',
  title: 'Associate Professor',
  department: 'Dept. of Computer Engineering',
  institution: 'Jamia Millia Islamia',
  institutionShort: 'JMI',
  institutionType: 'Central University',
  tagline: 'Building mathematically provable, chaos-resilient security architectures.',
  photo: '/images/musheer.png',
  email: 'mahmad9@jmi.ac.in',
  emailAlt: 'musheer.cse@gmail.com',
  phone: '+91 11 2698 0281',
  office: 'Room 104, Second Floor, Dept. of Computer Engineering',
  officeHours: 'Mon – Fri (10:00 AM – 5:00 PM IST)',
  cv: '/files/cv.pdf',

  bio: `With over 18 years of academic teaching and research experience at Jamia Millia Islamia and Aligarh Muslim University, my work investigates the mathematical design of non-linear Substitution Boxes (S-boxes), multi-dimensional continuous and discrete hyperchaotic attractors, lightweight cryptographic frameworks for Internet of Things and smart grids, and secure biomedical multimedia transmission.`,

  roles: ['Senior Member, IEEE', 'M.Tech Coordinator', 'CBCS Advisor'],

  impact: {
    citations: '5,296+',
    hIndex: '42+',
    papers: '157+',
    stanfordTop2: true,
  },

  education: [
    { degree: 'Ph.D. Computer Engineering', institution: 'Jamia Millia Islamia', year: '' },
    { degree: 'M.Tech.', institution: 'AMU', year: '2008' },
    { degree: 'B.Tech.', institution: 'AMU', year: '2004' },
  ],

  mentorship: {
    phd: 6,
    mtech: 30,
    btech: '40+',
  },

  profiles: [
    { name: 'Google Scholar', url: 'https://scholar.google.com/citations?user=MUSHEER' },
    { name: 'Scopus', url: '#' },
    { name: 'ResearchGate', url: '#' },
    { name: 'DBLP', url: '#' },
    { name: 'JMI Faculty', url: '#' },
  ],

  researchAreas: [
    'Bijective S-Boxes',
    '2D/3D/4D Chaos',
    'DICOM Encryption',
    'PRNG Keystreams',
    'Lightweight Cryptography',
    'IoT Security',
    'Medical Image Encryption',
    'Smart Grid Security',
  ],

  researchDescription: `Continuous and discrete chaotic flows generate deterministic yet non-periodic phase trajectories with acute sensitivity to initial conditions, providing provable high entropy for cipher keystreams, medical image encryption, and substitution boxes.`,

  researchPillars: [
    {
      title: 'Positive Lyapunov Exponent',
      description: 'Exponential trajectory divergence guarantees algorithmic avalanche effect and resistance against linear cryptanalysis.',
    },
    {
      title: 'Cryptographic Keystreams & S-Boxes',
      description: 'High topological entropy feeds bijective S-box synthesis and pseudo-random bit generation passing NIST SP 800-22 suites.',
    },
    {
      title: 'Phase Space Ergodicity & Hidden Attractors',
      description: 'Non-equilibrium coexisting attractors provide extensive key spaces (> 2^256) nullifying phase-space reconstruction attacks.',
    },
  ],

  honors: [
    {
      year: '2025',
      title: 'Editorial Contribution Award 2025',
      org: 'Springer Nature (Scientific Reports)',
      description: 'Conferred for effectively handling manuscripts as Editorial Board member of Scientific Reports journal from Springer Nature.',
    },
    {
      year: '2024',
      title: 'FET Research Publication Award 2024',
      org: 'Faculty of Engineering & Technology, Jamia Millia Islamia',
      description: 'Received from Honorable Vice Chancellor Prof. Mazhar Asif, Registrar, and Dean of FET.',
    },
    {
      year: '2024',
      title: "World's Top 2% Researchers (Career-Long Category)",
      org: 'Stanford University, USA and Elsevier B.V.',
      description: 'Ranked among the top 2% of scientists globally in career-long citation database curated by Stanford and Elsevier.',
    },
    {
      year: '2022–2024',
      title: "World's Top 2% Researchers (Single-Year: 2024, 2023, 2022)",
      org: 'Stanford University, USA and Elsevier B.V.',
      description: 'Consecutively recognized three times among the World\'s Top 2% Researchers in annual citation impact lists.',
    },
    {
      year: '2023',
      title: 'Jamia Achievers Award',
      org: 'Jamia Millia Islamia (Central University)',
      description: 'Received from Honorable Vice Chancellor of JMI Prof. Najma Akhtar, Ms. Sharmila Tagore, and Dr. Shiv Kumar Sarin.',
    },
    {
      year: '2022',
      title: 'Dean FET Appreciation for Global Stanford Ranking',
      org: 'Dean, Faculty of Engineering & Technology, JMI',
      description: 'Received official commendation from Dean Prof. Mini Shaji Thomas for global ranking in Stanford / Elsevier dataset.',
    },
  ],

  editorialBoards: [
    {
      publisher: 'Nature / Springer Nature',
      role: 'Editorial Board Member',
      journal: 'Scientific Reports',
      indexing: 'SCIE-indexed',
    },
    {
      publisher: 'Springer',
      role: 'Editorial Board Member',
      journal: 'Discover Computing',
      indexing: 'SCIE-indexed',
    },
    {
      publisher: 'IGI Global',
      role: 'Associate Editor',
      journal: 'International Journal of Information Security and Privacy (IJISP)',
      indexing: 'ESCI-SCOPUS indexed',
    },
    {
      publisher: 'IGI Global',
      role: 'Associate Editor',
      journal: 'International Journal of Artificial Intelligence in Scientific Disciplines (IJAISD)',
      indexing: 'IGI Global Publication',
    },
  ],

  guestEditorships: [
    {
      publisher: 'Springer Nature',
      journal: 'Scientific Reports',
      topic: 'Post-quantum cybersecurity and cryptography',
      deadline: '28th February, 2026',
    },
    {
      publisher: 'Springer',
      journal: 'Discover Computing',
      topic: 'Securing Critical Infrastructure in Next-Generation Networks',
      deadline: '30th September, 2025',
    },
  ],

  announcements: [
    {
      date: 'Oct 2024',
      tag: 'DISTINCTION',
      title: "Recognized among World's Top 2% Scientists by Stanford University & Elsevier",
      description: 'Ranked in global top 2% across single-year and career-long citation impact in Information Security.',
    },
    {
      date: 'Jan 2025',
      tag: 'EDITORIAL',
      title: "Call for Papers: Springer 'Discover Computing' Special Collection on Chaos Cryptology",
      description: 'Guest editing special collection on Nonlinear Dynamical Systems and Advanced Cryptographic Primitives.',
    },
    {
      date: 'Dec 2024',
      tag: 'EDITORIAL',
      title: 'Special Issue Guest Editor for Nature Scientific Reports (Q1, IF: 4.6)',
      description: 'Invited Call for Papers on Secure Medical Image Processing and Lightweight S-box Cryptosystems.',
    },
    {
      date: 'Nov 2024',
      tag: 'PUBLICATION',
      title: 'New Research Paper accepted in IEEE Transactions on Consumer Electronics',
      description: 'High-throughput chaotic permutation-substitution framework for 4K video surveillance streaming.',
    },
    {
      date: 'Aug 2024',
      tag: 'AWARD',
      title: 'Faculty Excellence Recognition in Research & Mentorship at Jamia Millia Islamia',
      description: 'Honored by the Faculty of Engineering & Technology for sustained high-impact SCI journal research.',
    },
  ],

  admissions: {
    intro: "Dr. Ahmad welcomes inquiries from highly motivated prospective Ph.D. scholars, Master's thesis researchers, and student interns with rigorous foundations in discrete mathematics, nonlinear dynamical systems, and algorithm analysis.",
    positions: ['Ph.D. Scholars', 'M.Tech Thesis', 'Research Interns'],
    requirements: [
      {
        title: 'Mathematical Foundations',
        description: 'Rigorous understanding of discrete mathematics, linear algebra, modular arithmetic, and continuous/discrete dynamical systems.',
      },
      {
        title: 'Implementation Rigor',
        description: 'Strong computational proficiency in Python, C/C++, or MATLAB with demonstrated experience implementing algorithms from scratch.',
      },
      {
        title: 'Scholarly Motivation',
        description: 'Genuine dedication to publishing high-quality, reproducible papers in top-tier SCI/SCIE-indexed journals.',
      },
      {
        title: 'Application Package',
        description: "Send an email with your updated CV, academic transcripts, and a concise research note on which of Dr. Ahmad's papers you propose to extend.",
      },
    ],
  },

  address: {
    department: 'Department of Computer Engineering',
    faculty: 'Faculty of Engineering and Technology',
    institution: 'Jamia Millia Islamia',
    city: 'New Delhi 110025, India',
    locality: 'Jamia Nagar, New Delhi 110025, India',
    type: 'Central University',
  },
};
