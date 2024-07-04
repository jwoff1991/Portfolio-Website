import Firstwebsite from '../assets/firstwebsite.png'
import flickerClone from '../assets/flickerclone.png'
import errBnBwebsite from '../assets/errBnBwebsite.png'
import AWNhomepage from '../assets/AWNhomepage.png'
import OverLoadhomepage from '../assets/overLoadhomepage.png.png'
import LunchHero from '../assets/lunchHeroHomepage.png'
import HacknLead from '../assets/actualImpactPulshDash.png'
import DevPair from '../assets/devPairhomepage.png'
import VueExpense from '../assets/vueExpense.png'

export const ProjectList = [
  {
    id: 0,
    name: "Expense Tracker - VueJS",
    image: VueExpense,
    alt: "Dashboard for Expense Tracker",
    skills:
      "VueJs, Vue Router, HTML, CSS",
    github: 'https://github.com/jwoff1991/vue-expense-tracker',
    details: "First project completed in a new freontend framework. A user is able to add/remove income/expenses and the UI updates the totals automatically based on the value amount.",
  },
  {
    id: 1,
    name: "DevPair *WINNER*",
    image: DevPair,
    tag: "hackathon",
    alt: "Dashboard for DevPair",
    skills:
      "Typescript, React, HTML, CSS, Vite, Python, Flask, OpenCV, Agora-RTC ",
    gitHub: 'https://github.com/alexrollings/women_plusplus',
    details: "App Academy Winter Hackathon 2024 winners. Accessibility and how to help every access the internet was the focus of this hackathon. We decided as a team to help developers with social anxiety by creating a platform that would allow them to pair program with someone else without having to be in the same room. It was a great experience working with other graduates from the program. I was also able to solidify my sillks in Typoescript and help others that were less confident in the language.",
  },
  {
    id: 2,
    name: "ImpactPulse *WINNER*",
    image: HacknLead,
    tag: "hackathon",
    alt: "Dashboard for ImpactPulse",
    skills:
      "Javascript, React, MaterialUI, HTML, CSS, Vite",
    gitHub: 'https://github.com/alexrollings/women_plusplus',
    details: "Hack'n'Lead 2023 challenge winners. We were tasked to create an app that was able to measure impact. As a team we developed a website that utilized an algorithm to measure impact based on the initative inputs and outputs. We were able to rapidly develop a working prototype in less than 48 hours and pitch our idea within two minuets. It was great to work closly with such an amazing group of individuals. As the solo web developer I took wireframe from cocept to reality and worked with the data scientists to display information in a way that was easy to understand.",
  },
    {
    id: 3,
    name: "Lunch Hero",
    image: LunchHero,
    tag: "hackathon",
    alt: "Frontpage of Lunch Hero website",
    skills:
      "Javascript, React, Redux, HTML, CSS, Node",
    gitHub: "https://github.com/TobiasSchaeuble-EH/LunchHeroes",
    details: "BaselHack 2023 project. This was a 48 hour hackathon where we were able to create a website that would allow users to just click a button and be matched up with someone else from the organization. This was a great experience because it was my first hackathon and I was able to work with a team of 9 other people. As one of two frontend developers, I worked with design to take wireframes from concept to code, and with backend to ensure the data was retrieved and displayed correctly.",
  },
  {
    id: 4,
    name: "OverLoad",
    image: OverLoadhomepage,
    tag: "project",
    alt: "Frontpage of OverLoad website",
    skills:
      "Typescript, Python, Flask, SQLAlchemy, PostgreSQL, React, Redux, HTML, CSS, Node",
    gitHub: "https://github.com/jwoff1991/OverLoad",
    details:
      "Fullstack solo Capstone project built in just over one week. This project includes 4 features: Articles, Comments, Like, and Reading Lists. This was by far one of my favorite because I was able to build the full project on my own and it really helped me solidify a lot of the concept I have been taught throughout the course.",
    link: "https://aacapstoneproj.onrender.com/"
  },
  {
    id: 5,
    name: "Apocalypse Weather Now",
    image: AWNhomepage,
    tag: "project",
    alt: "Frontpage of AWN website",
    skills:
      "Javascript, Python, Flask, SQLAlchemy, PostgreSQL, React, Redux, HTML, CSS, Node",
    gitHub: "https://github.com/SonQHoang/Apocalypse-Weather-Now",
    details:
      "Fullstack group project. As a team we developed our website from scratch utilizing our skills in JS frontend and Python backend. The site has 3 full and 2 partial CRUD features. This was exciting becasue we were building something from scratch from an idea that we had. It was fun to build something through till production after it started as just an idea.",
    link: "https://awn-render.onrender.com/"
  },
  {
    id: 6,
    name: "ErrBnB",
    image: errBnBwebsite,
    tag: "project",
    alt: "frontpage of ErrBnB website",
    skills:
      "Javascript, SQL, PostgreSQL, React, Redux, HTML, CSS, Node",
    gitHub: "https://github.com/jwoff1991/API-project-ErrBnB",
    details:
      "Fullstack solo project. This is my Airbnb clone, and was my first full project after learning about software engineering. It was challenging because everything seamed so fresh at the time. But I was able to go back and refactor a lot of the code for optimization and also add other features. Currently, you can Create, Book, and Review spots.  ",
    link: "https://errbnb.onrender.com/"
  },
  {
    id: 7,
    name: "flickr Clone",
    image: flickerClone,
    tag: "project",
    alt: "flicker website front page clone",
    skills: "HTML/CSS",
    gitHub: "https://github.com/jwoff1991/flickr-clone",
    details: 'This was a nose-dive into css! I had a lot of fun trying to figure out the differnet ways css worked, especially with itself. It was also challenging but made me realize that I really do like codinbg and figureing out how things works on a computer. It was a huge astonishment when I went back and looked at my first webpage too! Woo what a differnece.',
  },
  {
    id: 8,
    name: "First Website",
    image: Firstwebsite,
    tag: "project",
    alt: "Picture of front page of my first website",
    skills: "HTML, CSS",
    gitHub: "https://github.com/jwoff1991/firstwebsite",
    details: "I wanted to include this project as it was the first website I had coded. I think it really demonstrates how much I have learned and how far I have come in just a few short months. This is just the beginning of my career and I have a lot more to learn but I am excited about where it will take me! ",
  },
];
