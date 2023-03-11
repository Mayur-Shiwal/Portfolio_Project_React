import {
    arrow,
    leetcode,
    gfg,
    cplusplus,
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    github,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Competitive Programmer",
      icon: creator,
    },
    {
      title: "Blockchain Enthusiast",
      icon: mobile,
    },
  ];
  
  const technologies = [
    {
      name: "C++",
      icon: cplusplus,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "LeetCode Profile",
      description:
        "My Leetcode profile, where I solved more than 600+ problems based on Data Structures and Algorithms in C++",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "DSA",
          color: "green-text-gradient",
        },
        {
          name: "Competitive Programming",
          color: "pink-text-gradient",
        },
      ],
      image: leetcode,
      source_code_link: "https://leetcode.com/mayur92828/",
    },
    {
      name: "GFG Profile",
      description:
        "My GFG profile, where I am having 1000+ coding score based on DSA in C++ also having #2 Institute rank.",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "DSA",
          color: "green-text-gradient",
        },
      ],
      image: gfg,
      source_code_link: "https://auth.geeksforgeeks.org/user/mayurshiwal",
    },
    {
      name: "Github Profile",
      description:
        "My GitHub profile, where I store all my codes of solved problems based on DSA and projects.",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "DSA",
          color: "green-text-gradient",
        },
        {
          name: "HTML-CSS-JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: github,
      source_code_link: "https://github.com/Mayur-Shiwal",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };