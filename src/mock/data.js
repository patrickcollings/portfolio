import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi my name is",
  name: 'Patrick Collings,',
  subtitle: "I'm a full-stack web developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Yes, this website is a template I found online.',
  paragraphTwo: '',
  paragraphThree: 'Yes, design is not my strong point.',
  paragraphFour: "No, I do love building things. I'm a Computer Science Undergrad with 4+ years experience building websites. If I had to describe my style it would be `cool shit that works` || `Function over Form`.",
  resume: 'https://www.resumemaker.online/es.php',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    title: 'Founder',
    company: 'My Aquarium Builder',
    info: "Designed, developed and deployed a platform to help users compare prices and plan their aquarium.",
    info2: 'Marketed and improved SEO of the platform to increase organic reach. Currently received just over 5000 unique visitors, with 300 registered accounts.',
    info3: 'Scraped and analysed data for over 10,000 items from various websites.',
    img: 'myaquariumbuilder.png',
    startDate: '2020',
    endDate: 'now',
    url: 'https://myaquariumbuilder.com',
    repo: 'https://github.com/cobidev/react-simplefolio',
    technologies: ['angular', 'aws', 'node', 'mongodb', 'devops', 'cloudfront', 'machine learning', 'scrapy', 'python', 'CI/CD', 'spacy', 'ec2']
  },
    {
    id: nanoid(),
    title: 'Co-Founder',
    company: 'Oxyde Technologies',
    companyDescription: 'Providing phishing awareness through simulation and training',
    startDate: '2018',
    endDate: '2019',
    img: 'oxyde.png',
    info: 'Led the early stages of direction and development of the product.',
    info2: 'Created a MEAN stack application and deployed using Heroku. Also took charge in setting up a marketing website for prospective investors.',
    info3: 'Developed a working prototype before parting ways to progress my career.',
    technologies: ['heroku', 'node', 'angular', 'mongodb', 'html', 'css', 'javascript'],
  },
  {
    id: nanoid(),
    title: 'President',
    img: 'exeter.png',
    company: 'Computer Science Society of Exeter',
    startDate: 'June 2018',
    endDate: 'June 2019',
    info: 'Managed a 10 person committee to organise and run events for 150 students.',
    info2: 'Worked with a variety of partners including an extremely successful Met Office hackathon.',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio',
    technologies: ['leadership', 'sponsorship', 'management']
  },
  {
    id: nanoid(),
    title: 'Organiser and Lead Tutor',
    company: 'Excode',
    img: 'excode.png',
    startDate: 'Aug 2018',
    endDate: 'Dec 2018',
    info: 'Prepared, organised and presented a web development course to 200+ students across six sessions.',
    info2: 'Taught students the basics of CSS, Javascript and HTML with the end goal to create a weather page.',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio',
    technologies: ['public speaking', 'html', 'css', 'javascript']
  }
];

export const experiencesData = [
    {
    id: nanoid(),
    title: 'Full-stack Software Developer',
    company: 'Glisser',
    companyDescription: 'An award winning audience engagement and hybrid virtual event platform.',
    startDate: 'Dec 2019',
    endDate: 'now',
    img: 'glisser.jpg',
    info: 'Part of a small team of developers working on an enterprise grade platform with peak levels of 100K+ simultaneous clients. Given huge amounts of responsibility with the product. Planned, archictected and implemented an entire new authentication system from scratch.',
    info2: 'Driving force behind setting up automated integration tests within the CI/CD pipeline.',
    info2: 'Driving force behind setting up automated integration tests within the CI/CD pipeline using Mocha, Chai and Supertest.',
    url: 'https://glisser.com',
    technologies: ['angular', 'react', 'node', 'git', 'websockets', 'sql', 'bookshelf', 'postman']
  },
  {
    id: nanoid(),
    title: 'Full-stack Software Developer',
    company: 'LEEP',
    img: 'exeter.png',
    companyDescription: 'LEEP informs governments, businesses and communities on how to manage land and environment.',
    startDate: 'May 2017',
    endDate: 'Dec 2019',
    info: 'Website commisioned by DEFRA through the University of Exeter.',
    info2: 'Built the entire front and backend together with one other developer. ',
    info3: 'Still involved with the maintenance and future proofing of the website in spare time.',
    url: 'https://www.leep.exeter.ac.uk/nevo',
    repo: 'https://github.com/cobidev/react-simplefolio',
    technologies: ['angular', 'PHP', 'postgreSQL', 'geoserver', 'openlayers']
  }
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/patrick-collings/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/patrickcollings',
    }
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
