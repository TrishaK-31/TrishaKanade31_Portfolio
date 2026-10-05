export const PORTFOLIO_DATA = {
  personal: {
    name: 'Trisha Kanade',
    headline: 'Electronics & Telecommunication Engineering Student | Frontend Developer',
    email: 'trishakanade75@gmail.com',
    github: 'https://github.com/trishakanade',
    linkedin: 'https://www.linkedin.com/in/trisha-kanade',
    location: 'India',
    introHighlights: [
      'Frontend Development',
      'Electronics & Telecommunication',
      'Emerging Technologies',
      'Wireless Communication',
      'Research',
      'Practical Technology Projects',
    ],
    aboutText:
      'I am a B.Tech Electronics & Telecommunication Engineering student with an interest in frontend development, electronics, wireless communication, emerging technologies, and research. I enjoy learning new technologies and building practical projects that combine technical knowledge, problem-solving, and user-focused design.',
  },
  skills: [
    {
      title: 'Frontend Development',
      skills: ['React.js', 'Tailwind CSS'],
    },
    {
      title: 'Web Technologies',
      skills: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Electronics',
      skills: ['PCB Design', 'IoT'],
    },
    {
      title: 'Telecommunication',
      skills: ['Wireless Communication', 'Digital Communication', 'Analog Communication'],
    },
    {
      title: 'Technical Research',
      skills: ['Technical Research', 'Research & Analysis', 'Emerging Technologies'],
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitHub', 'Xilinx', 'MATLAB', 'Canva'],
    },
  ],
  projects: [
    {
      id: 'tourify',
      title: 'Tourify',
      type: 'Individual Project',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS'],
      description:
        'A responsive travel-focused web application designed with a user-friendly interface for exploring travel-related content. Built using React.js and Tailwind CSS with a focus on modern and responsive frontend development.',
    },
    {
      id: 'personal-portfolio',
      title: 'Personal Portfolio',
      type: 'Individual Project',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS'],
      description:
        'A responsive personal portfolio website showcasing my skills, projects, education, workshops, and professional experience in a clean and organized interface.',
    },
    {
      id: 'smart-krishi',
      title: 'Smart Krishi',
      type: 'Team Project — 3 Members',
      contribution: 'Home Page & Crop Doctor Page',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      description:
        'A team-based agriculture-focused web project designed to provide useful digital resources and support for farmers. I contributed specifically to the development of the Home Page and Crop Doctor Page as part of a three-member team.',
    },
    {
      id: 'calculator',
      title: 'Calculator',
      type: 'Individual Project',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      description:
        'A functional calculator built independently using HTML, CSS, and JavaScript, featuring an interactive interface for performing basic arithmetic operations.',
    },
    {
      id: 'paytm-clone',
      title: 'Paytm Clone',
      type: 'Individual Project',
      technologies: ['HTML', 'CSS'],
      description:
        'A frontend recreation of the Paytm website interface developed to practice webpage structure, styling, layout, and responsive frontend design using HTML and CSS.',
    },
    {
      id: 'voter-id-form',
      title: 'Voter ID Form',
      type: 'Individual Project',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      description:
        'A structured Voter ID form interface developed using HTML and CSS with slight JavaScript usage for interactive form functionality and basic client-side behavior.',
    },
  ],
  // Internships only (as specified: keep workshops attended by college in a separate section)
  experience: [
    {
      id: 'yrk-controls',
      role: 'Intern',
      organization: 'YRK Controls',
      period: '2026',
      type: 'Internship',
      description: [
        'Practical industrial training focused on PCB Designing.',
        'Hands-on experience in schematic layout, component routing, and documentation for PCB Designing.',
      ],
      skillsUsed: ['PCB Designing'],
    },
    {
      id: 'saving-dreamz',
      role: 'Intern',
      organization: 'Saving Dreamz Foundation',
      period: '2026',
      type: 'Internship',
      description: [
        'Contributed to organizational digital outreach, communications, and frontend digital asset preparation.',
        'Collaborated with fellow team members to coordinate community impact initiatives and digital presence.',
      ],
      skillsUsed: ['Team Collaboration', 'Canva', 'Digital Communication', 'Project Support'],
    },
  ],
  // Dedicated section for workshops attended through college
  workshops: [
    {
      id: 'embedded-iot-workshop',
      title: 'Embedded IoT & PCB Design Workshop',
      organizer: 'College Technical Training Workshop',
      period: 'College Workshop',
      type: 'Hands-on Technical Workshop',
      description: [
        'Attended comprehensive practical workshop organized by the college focusing on circuit schematic design, PCB layout guidelines, and component routing.',
        'Implemented IoT concepts connecting hardware sensors to communication interfaces.',
        'Prepared in-depth technical report detailing PCB design workflows and hardware verification.',
      ],
      keyTopics: ['PCB Design', 'IoT', 'Wireless Communication', 'Electronics Fundamentals'],
    },
    {
      id: 'drone-embedded-workshop',
      title: 'Drone & Embedded Systems Workshop',
      organizer: 'College Technical Training Workshop',
      period: 'College Workshop',
      type: 'Hands-on Technical Workshop',
      description: [
        'Attended specialized college-conducted training workshop exploring drone architecture, telemetry, and flight controller subsystems.',
        'Studied embedded system interfacing with wireless transceivers and electronic motor control circuits.',
      ],
      keyTopics: ['Wireless Communication', 'IoT', 'Electronics Fundamentals'],
    },
  ],
  // Education with prominent 10th, 12th, B.Tech CGPA, and Diploma scores
  education: [
    {
      id: 'btech-extc',
      degree: 'Bachelor of Technology (B.Tech) in Electronics & Telecommunication Engineering',
      institution: 'Engineering College / University',
      period: 'Undergraduate Program (Expected Graduation: 2027)',
      scoreLabel: 'Active CGPA',
      scoreValue: '9.45',
      details: 'Focusing on Electronics, Wireless Communication, Emerging Technologies, and Frontend Engineering.',
      highlights: [
        'Active Member of the IETE Students Forum (The Institution of Electronics and Telecommunication Engineers).',
        'Coursework in Wireless Communication, Digital Electronics, Circuit Design, and Technical Research.',
        'Balancing hardware engineering principles with modern web interface development.',
      ],
    },
    {
      id: 'hsc-12th',
      degree: 'Higher Secondary Certificate (12th / HSC)',
      institution: 'Junior College / Higher Secondary School',
      period: 'Higher Secondary Board',
      scoreLabel: '12th HSC Percentage',
      scoreValue: '70.50%',
      details:
        'Completed higher secondary education in Science stream with core foundation in Mathematics, Physics, and Chemistry.',
      highlights: [
        'Strong analytical grounding in Physics and Mathematics.',
        'Rigorous problem-solving preparation for engineering studies.',
      ],
    },
    {
      id: 'ssc-10th',
      degree: 'Secondary School Certificate (10th / SSC)',
      institution: 'High School',
      period: 'Secondary Board',
      scoreLabel: '10th SSC Percentage',
      scoreValue: '93.60%',
      details: 'Completed foundational secondary school education with academic excellence.',
      highlights: [
        'Earned qualification in Elementary Grade Drawing Examination (2018).',
        'Active participation in academic competitions and school science activities.',
      ],
    },
    {
      id: 'diploma-web-design',
      degree: 'Diploma in Website Designing',
      institution: 'Technical Institute',
      period: 'Completed with Distinction',
      scoreLabel: 'Certification Result',
      scoreValue: 'Distinction Grade Marksheet',
      details: 'Comprehensive curriculum covering web fundamentals, responsive styling, and modern UI creation.',
      highlights: [
        'Hands-on training in semantic HTML, modern CSS layouts, and interactive JavaScript.',
        'Secured distinction marksheet validating design execution and responsive UI principles.',
      ],
    },
  ],
  // Certifications (names & credentials)
  certifications: [
    {
      id: 'cert-yrk',
      name: 'Industrial Internship in PCB Designing',
      issuer: 'YRK Controls',
      year: '2026',
      category: 'Internship',
    },
    {
      id: 'cert-saving-dreamz',
      name: 'Internship Completion Certificate',
      issuer: 'Saving Dreamz Foundation',
      year: '2026',
      category: 'Internship',
    },
    {
      id: 'cert-pcb-iot',
      name: 'Embedded IoT and PCB Design Workshop',
      issuer: 'College Technical Training Workshop',
      year: '2024',
      category: 'Workshop & Training',
    },
    {
      id: 'cert-drone',
      name: 'Drone and Embedded System Workshop',
      issuer: 'College Technical Training Workshop',
      year: '2024',
      category: 'Workshop & Training',
    },
    {
      id: 'cert-ai-electronics',
  name: 'Artificial Intelligence for Electronics Engineers Workshop',
  year: '2026',
  category: 'Workshop & Training',
  },
  {
  id: 'cert-hackathon',
  name: 'Hackathon Participation Certificate',
  year: '2026',
  category: 'Competition',
  },
  {
  id: 'cert-web-design',
      name: 'Diploma in Website Designing',
      issuer: 'Technical Training Institute',
      year: '2023',
      category: 'Technical Diploma',
    },
    {
      id: 'cert-pragyotsav',
      name: 'Pragyotsav Project Competition 2025',
      issuer: 'Pragyotsav Engineering Competition',
      year: '2025',
      category: 'Competition',
    },
    {
      id: 'cert-iete-membership',
      name: 'Active Member of IETE Students Forum',
      issuer: 'The Institution of Electronics and Telecommunication Engineers (IETE)',
      year: '2026',
      category: 'Professional Membership',
    },
    {
      id: 'cert-iete-aptitude',
      name: 'Quantitative Aptitude Quiz Certificate',
      issuer: 'IETE Students Forum',
      year: '2026',
      category: 'Quiz & Competition',
    },
    {
      id: 'cert-reliance-quiz',
      name: 'Reliance Life Quiz Participation Certificate',
      issuer: 'Reliance Life',
      year: '2017',
      category: 'Quiz & Competition',
    },
    {
      id: 'cert-drawing',
      name: 'Elementary Grade Drawing Examination Certificate',
      issuer: 'Government Drawing Grade Examinations',
      year: '2018',
      category: 'Co-curricular',
    },
  ],
};
