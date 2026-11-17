// All site content lives here. Edit this file to update the text on the site;
// the components only handle layout and styling.

export const site = {
  url: "https://georgeliakopoulos.com",
  cvPath: "/GeorgeLiakopoulos_CV.pdf?v=2026-11",
};

export const person = {
  name: "George Liakopoulos",
  role: "IT & Systems Support Engineer",
  intro:
    "Electrical & computer engineer at the Institute of Biomedical Technology (INBIT) in Patras, keeping systems, data and websites running for a team that works with hospitals across Greece. Now studying for an MBA to connect technology with business decisions.",
  email: "liakopgeo@gmail.com",
  location: "Patras, Greece",
  linkedin: "https://www.linkedin.com/in/george-liakopoulos-a6a3b3364/",
  github: "https://github.com/liakopgeo",
  photo: "/profile.jpg",
};

export const status = [
  { label: "Currently", value: "IT & Systems Support Engineer at INBIT" },
  { label: "Studying", value: "MBA, University of Patras" },
  { label: "Based in", value: "Patras, Greece" },
];

export const about = [
  "I'm an electrical and computer engineer from the University of Patras. For almost nine years I worked alongside my studies, running the audiovisual and live-streaming setup for conferences at the university's Conference & Cultural Center, and later supporting the IT Research Office during my military service.",
  "Today I work in IT and systems support at INBIT, where I write Python scripts that automate routine work, look after the institute's multilingual website and support hospitals using web-Praxis, the national medical equipment management system.",
  "Alongside work I'm studying for an MBA at the University of Patras. I'm drawn to roles where technology and business meet: understanding systems in depth, and the decisions they exist to serve.",
];

export const facts = [
  { label: "Languages", value: "Greek (native), English (C2, Michigan ECPE), French (B2, DELF)" },
  { label: "Diploma thesis", value: "Graded 10/10" },
  { label: "Military service", value: "Honorary rank of Lance Corporal for outstanding performance" },
];

export const experience = [
  {
    role: "IT & Systems Support Engineer",
    org: "Institute of Biomedical Technology (INBIT)",
    place: "Patras",
    start: "Nov 2025",
    end: "Present",
    points: [
      "Develop Python scripts that automate routine data and administrative tasks, reducing manual effort and improving consistency.",
      "Redesigned and maintain the institute's multilingual WordPress website (Divi child theme, WPML).",
      "Support users and training sessions for web-Praxis, the national medical equipment management system run with EKAPY, and coordinate update campaigns to hospital contacts.",
      "Manage backups and storage on Synology NAS and handle day-to-day IT support for staff.",
    ],
  },
  {
    role: "IT Support, IT Research Office",
    org: "Hellenic Army, Signal Corps & Electronic Warfare",
    place: "Ioannina",
    start: "Jan 2025",
    end: "Aug 2025",
    points: [
      "Provided technical support and troubleshooting for the IT Research Office during military service.",
      "Awarded the honorary rank of Lance Corporal by the Brigade Commander for outstanding performance, a distinction rarely granted to conscripts.",
    ],
  },
  {
    role: "Audio Visual & IT Support Technician",
    org: "Conference & Cultural Center, University of Patras",
    place: "Patras",
    start: "Oct 2017",
    end: "Sep 2026",
    note: "Part-time, alongside my studies",
    points: [
      "Ran the AV and IT setup for conferences, ceremonies and cultural events, including live and hybrid presentations.",
      "Managed YouTube live streams for audiences of 100 to 1,000 viewers per event.",
      "Inspected, maintained and repaired AV equipment, and solved technical problems on the spot during live events.",
      "Coordinated with organisers, speakers and technical teams under tight timelines.",
    ],
  },
];

export const education = [
  {
    degree: "MSc in Business Administration (MBA)",
    school: "University of Patras",
    start: "Oct 2026",
    end: "Present",
    text: "Management, strategy, finance and marketing, taught through case studies and team projects.",
  },
  {
    degree: "Integrated Master's (MEng, 300 ECTS), Electrical & Computer Engineering",
    school: "University of Patras",
    start: "Oct 2016",
    end: "Jun 2024",
    text: "Thesis graded 10/10: an IEEE 802.11-like MAC sublayer protocol for networked automation, built with Arduino and nRF24L01 radio modules.",
    extra:
      "Coursework includes algorithms, data structures, object-oriented programming in Python, databases, computer and network security, communication networks, web programming and artificial intelligence.",
  },
];

export const activities = [
  "Model United Nations and the DEREE Invitational XLVIII: public speaking, negotiation and teamwork.",
  "Participant in the 10th Hellenic Conference on Artificial Intelligence (SETN 2018) and the 1st Panhellenic Open Robotics Competition, University of Patras (2018).",
];

export const skills = [
  {
    group: "IT support & systems",
    items: ["End-user support", "hardware & software troubleshooting", "Windows", "Synology NAS", "backup & recovery"],
  },
  {
    group: "Networking",
    items: ["TCP/IP", "Wi-Fi (IEEE 802.11)", "MAC protocols", "network troubleshooting"],
  },
  {
    group: "Programming & automation",
    items: ["Python", "JavaScript", "C", "HTML & CSS", "MATLAB", "process automation"],
  },
  {
    group: "Web",
    items: ["WordPress (Divi, WPML)", "React", "Next.js", "Tailwind CSS", "Git & GitHub", "Vercel"],
  },
  {
    group: "AV & tools",
    items: ["Live & hybrid event support", "YouTube Live", "Brevo", "Arduino", "AutoCAD"],
  },
];

export const work = [
  {
    title: "INBIT website",
    text: "Redesigned and maintain the institute's multilingual WordPress site, from structure and content to day-to-day updates.",
    tags: ["WordPress", "Divi", "WPML"],
    href: "https://www.inbit.gr",
    linkText: "Visit inbit.gr",
  },
  {
    title: "This website",
    text: "Designed and built from scratch, version-controlled on GitHub and deployed automatically to Vercel.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    href: "https://github.com/liakopgeo/Personal-Website",
    linkText: "View the code on GitHub",
  },
];
