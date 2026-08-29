export const PROJECTS = [
  {
    id: 'acmu',
    wide: true,
    year: '2025',
    tags: [{ label: 'Product Design', cls: '' }, { label: 'UX Research', cls: 'research' }, { label: 'Figma', cls: '' }, { label: 'HCI', cls: '' }],
    title: 'ACMU - Platform for African Content Moderators',
    desc: 'Princeton HCI course partnership with the African Content Moderators Union. Ran focus groups with members in Nigeria and Kenya to surface unmet needs - governance, job postings, mental health, anonymity, and crisis-response. Designed low-fidelity wireframes → high-fidelity Figma mockups with full visual identity and accessibility. Led rebrand concept design against five competitors.',
    img: '/images/images/ACMU.png',
    cat: 'design',
  },
  {
    id: 'thesis',
    year: '2025–26',
    tags: [{ label: 'Product Design', cls: '' }, { label: 'Full-Stack', cls: 'eng' }, { label: 'Research', cls: 'research' }],
    title: 'AI Companionship Data Donation Platform',
    desc: 'Senior thesis advised by Prof. Manoel Horta Ribeiro. Designed an end-to-end participant experience - consent, upload, review, redact, export, donate - for sensitive AI conversation data. Chat-style review interface (not a table) to match how participants actually read conversations, with inline PII flagging.',
    img: '/images/images/thesis.png',
    cat: 'design',
  },
  {
    id: 'verisk',
    year: 'May–Aug 2025',
    tags: [{ label: 'Engineering', cls: 'eng' }, { label: 'Generative AI', cls: 'eng' }, { label: 'AWS Bedrock', cls: '' }, { label: 'Streamlit', cls: '' }],
    title: 'Agentic AI Data Standardization - Verisk Analytics',
    desc: 'Software Engineering Intern on the Generative AI team. Built an agentic AI workflow with AWS Bedrock, S3, and Streamlit that reduced data standardization time by 95%. Worked closely with end users to shape the interface around their actual review process.',
    img: '/images/images/verisk.webp',
    cat: 'eng',
  },
  {
    id: 'umich',
    year: 'May–Aug 2024',
    tags: [{ label: 'Research', cls: 'research' }, { label: 'Security', cls: '' }, { label: 'Accessibility', cls: '' }],
    title: 'Security & Accessibility Empirical Study - University of Michigan',
    desc: 'Conducted a large-scale empirical study of 2,500+ bug reports at the intersection of accessibility and security at University of Michigan. Surfaced usability gaps relevant to inclusive design - where security vulnerabilities actively harm accessible user experiences.',
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
    img: '/images/images/CuisineCompass.PNG',
    cat: 'eng',
  },
  {
    id: 'health',
    year: '2023',
    tags: [{ label: 'Data Science', cls: 'eng' }, { label: 'Python', cls: 'eng' }, { label: 'ML', cls: 'eng' }],
    title: 'Princeton Data Bowl - Health Expenditure Prediction',
    desc: 'Predict health expenditure as a percentage of GDP using various health-related indicators. Built and evaluated ML models on real-world public health datasets for the Princeton Data Science Bowl.',
    img: '/images/images/HealthExpenditurePrediction.PNG',
    cat: 'eng',
  },
]

export const TIMELINE = [
  {
    date: 'September 2026 – Present',
    role: 'Software Engineering',
    company: 'BlackRock · Atlanta, GA',
    desc: '',
  },
  {
    date: 'May – August 2025',
    role: 'Software Engineering Intern - Multi-Agents Systems Team',
    company: 'Verisk Analytics · Jersey City, NJ',
    desc: 'Evaluated 3 multi-agent architecture patterns via working PoCs for loss-cost rating, selecting the optimal design that balanced latency, cost, and accuracy while maintaining 100% uptime. Automated multi-agent recommendation system using MCP for real-time API data retrieval and A2A for agent coordination, reducing manual rating review time by 40%.',
  },
  {
    date: 'September 2023 – April 2026',
    role: 'CS & Mathematics Tutor',
    company: 'McGraw Center for Teaching & Learning · Princeton, NJ',
    desc: 'Tutoring 30+ students weekly across introductory and advanced CS and mathematics courses.',
  },
  {
    date: 'May – August 2025',
    role: 'Software Engineering Intern - Generative AI Team',
    company: 'Verisk Analytics · Jersey City, NJ',
    desc: 'Built an agentic AI workflow with AWS Bedrock, S3, and Streamlit reducing data standardization time by 95%. Worked directly with end users to shape the interface around their actual review workflows.',
  },
  {
    date: 'January 2024 – May 2025',
    role: 'Programming Systems Grader',
    company: 'Princeton Computer Science Department · Princeton, NJ',
    desc: 'Conduct code reviews in C and ARM assembly language and provide feedback on projects for 200+ students. Evaluate code submissions based on time complexity, memory management, and style.',
  },
  {
    date: 'May – August 2024',
    role: 'Software Security & Accessibility Researcher',
    company: 'University of Michigan · Flint, MI',
    desc: 'Conducted a large-scale empirical study of 2,500+ bug reports at the intersection of accessibility and security. Surfaced usability gaps relevant to inclusive design.',
  },
  {
    date: 'May – August 2024',
    role: 'Software Engineer for AI Training Data',
    company: 'Outlier · Remote',
    desc: 'Reviewing and improving AI-generated code solutions to train large language models.',
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
