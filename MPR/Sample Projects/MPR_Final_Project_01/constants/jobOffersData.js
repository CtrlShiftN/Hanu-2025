import metaIcon from "../assets/job/com_meta.png";
import amazonIcon from "../assets/job/com_amazon.png";
import appleIcon from "../assets/job/com_apple.png";
import googleIcon from "../assets/job/com_goog.png";

import metaCover from "../assets/job/MetaCover.png";
import amazonCover from "../assets/job/AmazonCover.png";
import appleCover from "../assets/job/AppleCover.png";
import googleCover from "../assets/job/GoogleCover.png";

import javaSkill from "../assets/skills/skill_java.png";
import goodHealth from "../assets/skills/skill_health.png";
import htmlCss from "../assets/skills/skill_htmlcss.png";
import javaScript from "../assets/skills/skill_js.png";
import after30age from "../assets/skills/skill_after30.png";

const java = {
  id: "1",
  image: javaSkill,
  title: "Proficiency in Java",
};

const health = {
  id: "2",
  image: goodHealth,
  title: "Health > 80",
};

const htmlCSS = {
  id: "3",
  image: htmlCss,
  title: "Proficiency in HTML, CSS",
};

const javascript = {
  id: "4",
  image: javaScript,
  title: "Proficiency in JavaScript",
};

const after30 = {
  id: "5",
  image: after30age,
  title: "Age from 30",
};

const offer1 = {
  id: "1",
  company: "Meta",
  logo: metaIcon,
  cover: metaCover,
  title: "FE Developer",
  location: "Seattle, US",
  description:
    "In this role, you'll be responsible for creating and maintaining visually appealing, user-friendly websites and web applications. Your primary focus will be on front-end development, ensuring seamless integration of design and functionality. You'll collaborate closely with designers and back-end developers to implement responsive designs and optimize user experiences.",
  salary: 400,
  required: [htmlCSS, javascript],
  bg: "#eef7fe",
  dateAgo: 2,
};

const offer2 = {
  id: "2",
  company: "Amazon",
  logo: amazonIcon,
  cover: amazonCover,
  title: "BE Developer",
  location: "San Francisco, US",
  description:
    "The ideal candidate will be responsible for designing, implementing, and maintaining Java -based applications. You will collaborate with cross-functional teams to analyze user requirements and translate them into software solutions. Strong problem-solving skills and the ability to work in a fast-paced environment are essential.",
  salary: 600,
  required: [java, health],
  bg: "#feeeee",
  dateAgo: 1,
};

const offer3 = {
  id: "3",
  company: "Apple",
  logo: appleIcon,
  cover: appleCover,
  title: "UI Designer",
  location: "Seattle, US",
  description:
    "In this role, you'll be responsible for creating and maintaining visually appealing, user-friendly websites and web applications. Your primary focus will be on front-end development, ensuring seamless integration of design and functionality. You'll collaborate closely with designers and back-end developers to implement responsive designs and optimize user experiences.",
  salary: 650,
  required: [htmlCSS, javascript],
  bg: "#fffbec",
  dateAgo: 1,
};

const offer4 = {
  id: "4",
  company: "Google",
  logo: googleIcon,
  cover: googleCover,
  title: "Data Engineer",
  location: "Los Angeles, US",
  description:
    "In this role, you will be responsible for ensuring the security, availability, and performance of our database systems. You will handle database design, implementation, and maintenance tasks, including data backup and recovery, user access management, and performance tuning.",
  salary: 2000,
  required: [java, after30, health],
  bg: "#f1f1f1",
  dateAgo: 3,
};

export const jobOffersData = [offer1, offer2, offer3, offer4];
