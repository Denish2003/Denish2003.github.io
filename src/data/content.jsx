export const PROJECTS = [
  {
    id: 'acmu',
    wide: true,
    year: '2025',
    tags: [{ label: 'Product Design', cls: '' }, { label: 'UX Research', cls: 'research' }, { label: 'Figma', cls: '' }, { label: 'HCI', cls: '' }],
    title: 'ACMU - Platform for African Content Moderators',
    desc: 'Princeton HCI course partnership with the African Content Moderators Union. Ran focus groups with members in Nigeria and Kenya to surface unmet needs - governance, job postings, mental health, anonymity, and crisis-response. Designed low-fidelity wireframes → high-fidelity Figma mockups with full visual identity and accessibility. Led rebrand concept design against five competitors.',
    link: 'https://github.com/Denish2003',
    linkLabel: 'Princeton HCI Project →',
    linkCls: '',
    img: '/images/images/ACMU.png',
    cat: 'design',
  },
  {
    id: 'thesis',
    year: '2025–26',
    tags: [{ label: 'Product Design', cls: '' }, { label: 'Full-Stack', cls: 'eng' }, { label: 'Research', cls: 'research' }],
    title: 'AI Companionship Data Donation Platform',
    desc: 'Senior thesis advised by Prof. Manoel Horta Ribeiro. Designed an end-to-end participant experience - consent, upload, review, redact, export, donate - for sensitive AI conversation data. Chat-style review interface (not a table) to match how participants actually read conversations, with inline PII flagging.',
    link: 'https://github.com/Denish2003',
    linkLabel: 'Senior Thesis →',
    linkCls: '',
    img: '/images/images/thesis.png',
    cat: 'design',
  },
  {
    id: 'verisk',
    year: 'May–Aug 2025',
    tags: [{ label: 'Engineering', cls: 'eng' }, { label: 'Generative AI', cls: 'eng' }, { label: 'AWS Bedrock', cls: '' }, { label: 'Streamlit', cls: '' }],
    title: 'Agentic AI Data Standardization - Verisk Analytics',
    desc: 'Software Engineering Intern on the Generative AI team. Built an agentic AI workflow with AWS Bedrock, S3, and Streamlit that reduced data standardization time by 95%. Worked closely with end users to shape the interface around their actual review process.',
    link: 'https://www.verisk.com',
    linkLabel: 'Verisk Analytics →',
    linkCls: 'eng',
    img: '/images/images/verisk.webp',
    cat: 'eng',
  },
  {
    id: 'umich',
    year: 'May–Aug 2024',
    tags: [{ label: 'Research', cls: 'research' }, { label: 'Security', cls: '' }, { label: 'Accessibility', cls: '' }],
    title: 'Security & Accessibility Empirical Study - U of M',
    desc: 'Conducted a large-scale empirical study of 2,500+ bug reports at the intersection of accessibility and security at University of Michigan. Surfaced usability gaps relevant to inclusive design - where security vulnerabilities actively harm accessible user experiences.',
    link: 'https://umich.edu',
    linkLabel: 'View Research →',
    linkCls: '',
    ph: 'ph-health',
    phEls: (
      <>
        <div className="ph-ui ph-topbar" />
        <div className="ph-ui ph-chart" style={{ position: 'absolute', left: '11%', top: '20%', width: '78%', height: '60%', zIndex: 1 }}>
          <div className="ph-bar" style={{ width: '18%', left: '10%', height: '42%', position: 'absolute', bottom: 0, borderRadius: '3px 3px 0 0', background: 'rgba(167,139,250,0.4)' }} />
          <div className="ph-bar" style={{ width: '18%', left: '35%', height: '70%', position: 'absolute', bottom: 0, borderRadius: '3px 3px 0 0', background: 'rgba(167,139,250,0.6)' }} />
          <div className="ph-bar" style={{ width: '18%', left: '60%', height: '55%', position: 'absolute', bottom: 0, borderRadius: '3px 3px 0 0', background: 'rgba(167,139,250,0.4)' }} />
        </div>
      </>
    ),
    cat: 'research',
  },
  {
    id: 'cuisine',
    year: '2023',
    tags: [{ label: 'Engineering', cls: 'eng' }, { label: 'React', cls: 'eng' }, { label: 'Full-Stack', cls: 'eng' }],
    title: 'CuisineCompass',
    desc: 'Culinary platform offering a vast collection of recipes with robust filtering and search functionalities, catering to diverse tastes and dietary preferences. Built with React and a custom backend.',
    link: 'https://github.com/Denish2003/CuisineCompass',
    linkLabel: 'GitHub →',
    linkCls: 'eng',
    img: '/images/images/CuisineCompass.PNG',
    cat: 'eng',
  },
  {
    id: 'health',
    year: '2023',
    tags: [{ label: 'Data Science', cls: 'eng' }, { label: 'Python', cls: 'eng' }, { label: 'ML', cls: 'eng' }],
    title: 'Princeton Data Bowl - Health Expenditure Prediction',
    desc: 'Predict health expenditure as a percentage of GDP using various health-related indicators. Built and evaluated ML models on real-world public health datasets for the Princeton Data Science Bowl.',
    link: 'https://github.com/Denish2003/PrincetonDataScienceBowl',
    linkLabel: 'GitHub →',
    linkCls: 'eng',
    img: '/images/images/HealthExpenditurePrediction.PNG',
    cat: 'eng',
  },
]

export const TIMELINE = [
  {
    date: 'May–Aug 2025',
    role: 'Software Engineering Intern - Generative AI',
    company: 'Verisk Analytics · Jersey City, NJ',
    desc: 'Built an agentic AI workflow with AWS Bedrock, S3, and Streamlit reducing data standardization time by 95%. Worked directly with end users to shape the interface around their actual review workflows.',
  },
  {
    date: 'May–Aug 2024',
    role: 'Software Security & Accessibility Researcher',
    company: 'University of Michigan · Flint, MI',
    desc: 'Conducted a large-scale empirical study of 2,500+ bug reports at the intersection of accessibility and security. Surfaced usability gaps relevant to inclusive design.',
  },
  {
    date: 'May–Aug 2023',
    role: 'Big Data Researcher',
    company: 'Salisbury University · Salisbury, MD',
    desc: 'Undergraduate research in big data systems. Applied data analysis to real-world datasets.',
  },
  {
    date: 'Sep 2023 – Present',
    role: 'CS & Mathematics Tutor',
    company: 'McGraw Center for Teaching & Learning · Princeton',
    desc: 'Tutoring 30+ students weekly across introductory and advanced CS and mathematics courses.',
  },
  {
    date: 'May 2024 – Present',
    role: 'Software Engineer for AI Training Data',
    company: 'Outlier · Remote',
    desc: 'Reviewing and improving AI-generated code solutions to train large language models.',
  },
  {
    date: 'Aug 2023 – May 2024',
    role: 'Program Coordinator',
    company: 'Codology - Startup Incubator for High School Students',
    desc: 'Coordinated a startup incubator helping high school students build and pitch their first technical projects.',
  },
]

export const ART_ITEMS = [
  { src: '/images/drawings/ReflectionMicrone.jpg',  label: 'Reflection Microne',      cat: 'drawing'      },
  { src: '/images/drawings/BeautyOfNature.jpg',     label: 'Beauty of Nature',        cat: 'drawing'      },
  { src: '/images/drawings/NASA.JPG',               label: 'NASA',                    cat: 'digital'      },
  { src: '/images/drawings/stilllife1.JPG',         label: 'Still Life I',            cat: 'drawing'      },
  { src: '/images/architecture/Image1.PNG',         label: 'Architectural Study I',   cat: 'architecture' },
  { src: '/images/drawings/flower_heart.PNG',       label: 'Flower Heart',            cat: 'digital'      },
  { src: '/images/drawings/SoftPastel.jpg',         label: 'Soft Pastel',             cat: 'drawing'      },
  { src: '/images/architecture/Image2.jpg',         label: 'Architectural Study II',  cat: 'architecture' },
  { src: '/images/drawings/portrait.png',           label: 'Digital Portrait',        cat: 'digital'      },
  { src: '/images/drawings/VirtualLearning.jpg',    label: 'Virtual Learning',        cat: 'drawing'      },
  { src: '/images/architecture/Image3.jpg',         label: 'Architectural Study III', cat: 'architecture' },
  { src: '/images/drawings/sketch.JPG',             label: 'Sketch Study',            cat: 'drawing'      },
  { src: '/images/architecture/Image4.PNG',         label: 'Architectural Study IV',  cat: 'architecture' },
  { src: '/images/drawings/stilllife2.jpg',         label: 'Still Life II',           cat: 'drawing'      },
  { src: '/images/architecture/Image5.jpg',         label: 'Architectural Study V',   cat: 'architecture' },
  { src: '/images/drawings/hand.jpg',               label: 'Hand Study',              cat: 'digital'      },
  { src: '/images/architecture/Image6.jpg',         label: 'Architectural Study VI',  cat: 'architecture' },
  { src: '/images/drawings/ChangesOverTime.jpg',    label: 'Changes Over Time',       cat: 'drawing'      },
  { src: '/images/drawings/Painting.jpg',           label: 'Painting Study',          cat: 'drawing'      },
]
