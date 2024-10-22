import Webpas from "./assets/images/webpas.png"
import Webuas from "./assets/images/webuas.png"
import Project1 from "./assets/images/project1.png"
import Project2 from "./assets/images/project2.png"
import Project3 from "./assets/images/project3.png"
import Portfolio1 from "./assets/images/pfhtmlcss.png"
import Figma from "./assets/images/figma.png"
import Css from "./assets/images/css-3.png"
import html from "./assets/images/html-5.png"
import js from "./assets/images/js-file.png"
import php from "./assets/images/php.png"
import flutter from "./assets/images/icons8-flutter-48.png"
import Physics from "./assets/images/physics.png"

const logotext = "MICKHO";
const meta = {
    title: "Mickho Rifaldo",
    description: "I’m Mickho Rifaldo data scientist _ Full stack devloper,Currently a student at SMKN 1 Banjar",
};

const introdata = {
    title: "I’m Mickho Rifaldo",
    animated: {
        first: "I am a software student",
        second: "I code cool websites",
        third: "I develop mobile apps",
    },
    description: "Passionate student developer turning ideas into reality through code. Specializing in web and mobile app development, I bring fresh perspectives and innovative solutions to every project.",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "abit about my self",
    aboutme: "My name is Micko Rivaldo, I am a student of SMKN 1 Banjar majoring in software engineering, I was born in Martapura on June 26, 2006, but now I live in Banjar city precisely in Binangun village. My hobby is exercising and I also really like culinary.",
};
const worktimeline = [{
        jobtitle: "frontend web rental car",
        where: "PAS",
        date: "04/12/2023",
    },
    {
        jobtitle: "web todolist",
        where: "UAS",
        date: "09/06/2024",
    },
];

const skills = [{
        name: "html",
        img: html,
    },
    {
        name: "css",
        img: Css,
    },
    {
        name: "java script",
        img: js,
    },
    {
        name: "php",
        img: php,
    },
    {
        name: "flutter",
        img: flutter,
    },
    {
        name: "react native",
        img: Physics,
    },
    {
        name: "figma",
        img: Figma,
    },
];

const services = [{
        title: "UI & UX Design",
        description: "As a student in rpl major I am a little bit into UI/UX design, I offer services to create attractive and easy-to-use application and website displays. I can help your project with fresh and innovative designs.",
    },
    {
        title: "web development",
        description: "I also have expertise in web development. I can create websites from simple to more complex, as needed.",
    },
    {
        title: "Mobile Apps",
        description: "Although still a student, I have a little ability to develop mobile applications for Android. I am ready to help make your application ideas come true.",
    },
];

const dataportfolio = [{
        img: Project1,
        description: "this is my first html project",
        link: "https://projecpertamamickho.netlify.app/",
    },
    {
        img: Project2,
        description: "this is my first html and css project",
        link: "https://projectmickhokedua.netlify.app/",
    },
    {
        img: Project3,
        description: "this is my second html and css project",
        link: "https://projectketigamickho.netlify.app/",
    },
    {
        img: Portfolio1,
        description: "this is my html and css portfolio project",
        link: "https://mickhoportfolio.netlify.app/",
    },
    {
        img: Webpas,
        description: "This is my final semester assessment project, car rental website frontend",
        link: "https://mickhopas.netlify.app/",
    },
    {
        img: Webuas,
        description: "This is my final semester exam project, a todolist website.",
        link: "https://github.com/mickhorifaldo/todo_list.git",
    },
    
];

const contactConfig = {
    YOUR_EMAIL: "odlafir2006@gmail.com",
    YOUR_FONE: "(+62)882-2296-8996",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};