import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ronnie Isomäki | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.avatar.png',
  paragraphOne: "I started programming for the first time in 2016. My first language was Java. Eventually, I found interest in game development, and I was introduced to the C# language in the Unity game engine, which was very similar to Java. I've also experimented with some .NET Core technologies, such as ASP.NET Core. ",
  paragraphTwo: "Lately, I've been using JavaScript quite a lot in my employment which involves web development. I've also had options to use Python in a couple of integration assignments and started to appreciate using this language. When it comes to databases, my preferred is MongoDB. These are some of my preferences. Ultimately, it's about what's the best tool for the job.",
  paragraphThree: "I've tried to list the skills that I'm most comfortable with, but in my years of developing, I've become a 'generalist' in many other areas as well.",
  resume: 'https://drive.google.com/file/d/1KCb_srRPkYC8CLHpgyXLGvXirvCDQzyb/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'wormhole-surfer-lg.jpg',
    title: 'Wormhole Surfer (Work in progress)',
    info: "This is my latest game project I've been working for a while now. I'm planning to release it in the next 6 months to the google play store.",
    info2: 'Developed with: Godot engine, using C# and GDScript.',
    url: 'https://play.google.com/store/apps/dev?id=5615211606814366495',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'fastapi.logo.jpg',
    title: 'Rest API boilerplate made with FastAPI',
    info: 'A Rest API with basic CRUD, JWT authenticated endpoints and MongoDB as database.',
    info2: 'Developed with: Python and FastAPI. You can find link to the source from the link below.',
    url: 'https://github.com/Ronfer/fastapi-mongodb-restapi-boilerplate',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mockup.jpg',
    title: 'My portfolio website',
    info: 'I made this website to implement my resume and to learn more about working with Javascript and React.',
    info2: 'Developed with: React and Gatsby. You can find link to the source from the link below.',
    url: 'https://github.com/Ronfer/resume-site',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'roni.isomaki(at)gmail.com',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ronnie-isomäki/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ronfer',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
