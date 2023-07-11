import {AddLocationAltOutlined, PhoneIphone, EmailOutlined, Facebook, Twitter, Instagram, GitHub } from "@mui/icons-material"
import { Link } from 'react-router-dom';

export const navlink = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/about",
    text: "About",
  },
  {
    url: "/portfolio",
    text: "Portfolio",
  },
  {
    url: "/contact",
    text: "Contact",
  },
]
export const home = [
  {
    text: "HELLO I'M",
    name: "ANKIT ANAND",
    post: "WEB DEVELOPER"
  },
]
export const about = [
  {
    desc: "My name is Ankit Anand and I am a web developer. I graduated in 2022 in Electronics and Communication Engineering. My expertise includes HTML, CSS, JavaScript and React , and I am always eager to learn new technologies and frameworks. I strive to learn new tech stacks",
    desc1: "I can build user friendly responsive websites.",
    cover: "https://www.techopedia.com/wp-content/uploads/2023/07/man_coding_02.png",
  },
]
export const portfolio = [
  {
    id: 1,
    cover: "https://leclaireur.fnac.com/wp-content/uploads/import/news-labo/default/la-version-web-de-twitter-fait-peau-neuve-avec-sa-nouvelle-interface.jpg",
    title: "Twitter",
    link: "https://github.com/Ankit-Karn/twitter-clone1"
  },
  {
    id: 2,
    cover: "https://uploads-ssl.webflow.com/615af81f65d1ab72d2969269/62d5158971e87172e7de47e9_trello%20blog.png",
    title: "Trello-Kanban Board",
    link: "https://github.com/Ankit-Karn/Trello-kanban-board"
  },
  {
    id: 3,
    cover: "https://promoalltest.cdnpromo.com/wp-content/uploads/2021/05/meme_maker_image_desktop.jpeg",
    title: "Meme-generator",
    link: "https://github.com/Ankit-Karn/Meme-Generator"
  },
  {
    id: 4,
    cover: "https://radzion.com/static/6787494a2c7c1634ef2e0e988ef82ccb/ddb6f/main.png",
    title: "Snake Wizard",
    link: "https://github.com/Ankit-Karn/snake-game"
  },
  {
    id: 5,
    cover: "https://blennd.com/wp-content/uploads/DTC-1.png",
    title: "GYM",
    link: "https://github.com/Ankit-Karn/Gym-Website"
  },
  {
    id: 6,
    cover: "https://res.cloudinary.com/dz209s6jk/image/upload/v1606414077/Challenges/llcq9eiv3ney5tkxgdtu.jpg",
    title: "To-do",
    link: "https://github.com/Ankit-Karn/TodoList"
  }
]
export const contact = [
  {
    icon: <AddLocationAltOutlined />,
    text1: "Chaibasa, 833201",
    text2: "Jharkhand, India",
  },
  {
    icon: <PhoneIphone />,
    text1: "+91-8340623317",
  },
  {
    icon: <EmailOutlined />,
    text1: "ankitkarn10@gmail.com",
  },
]
export const social = [
  {
    icon: <Facebook />,
  },
  {
    icon: <Twitter />,
  },
  {
    icon: <Instagram />,
  },
  {
    icon: <GitHub />,
  },
]
