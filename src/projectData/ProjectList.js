import Firstwebsite from '../assets/firstwebsite.png'
import flickerClone from '../assets/flickerclone.png'
import errBnBwebsite from '../assets/errBnBwebsite.png'
import AWNhomepage from '../assets/AWN homepage.png'

export const ProjectList = [
  {
    id: 0,
    name: "Apocalypse Weather Now",
    image: AWNhomepage,
    alt: "Frontpage of AWN website",
    skills:
      "Javascript, Python, Flask, SQAlchemy, PostgreSQL, React, Redux, HTML, CSS, Node",
    gitHub: "https://github.com/SonQHoang/Apocalypse-Weather-Now",
    details:
      "Fullstack group project. As a team we developed our website from scratch utilizing our skills in JS frontend and Python backend. The site has 3 full and 2 partial CRUD features. Link is below! ",
    link: "https://awn-render.onrender.com/"
  },
  {
    id: 1,
    name: "ErrBnB",
    image: errBnBwebsite,
    alt: "frontpage of ErrBnB website",
    skills:
      "Javascript, SQL, PostgreSQL, React, Redux, HTML, CSS, Node",
    gitHub: "https://github.com/jwoff1991/API-project-ErrBnB",
    details:
      "Fullstack solo project. Designed, coded, tested and deployed both the backend and frontend.",
    link: "https://errbnb.onrender.com/"
  },
  {
    id: 2,
    name: "flickr Clone",
    image: flickerClone,
    alt: "flicker website front page clone",
    skills: "HTML/CSS",
    gitHub: "https://github.com/jwoff1991/flickr-clone",
    details: 'HTML/CSS front end project based on "wireframes".',
  },
  {
    id: 3,
    name: "First Website",
    image: Firstwebsite,
    alt: "Picture of front page of my first website",
    skills: "HTML, CSS",
    gitHub: "https://github.com/jwoff1991/firstwebsite",
    details: "First full website coding in HTML/CSS. ",
  },
];
