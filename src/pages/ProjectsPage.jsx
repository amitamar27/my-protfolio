import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ProjectsList } from "../cmps/ProjectsList";
import { FilterProjects } from "../cmps/FilterProjects";
import { projectsService } from "../services/projectsService";

export function ProjectsPage() {

  const [projects, setProjects] = useState(null)
  const [filterBy, setfilterBy] = useState('all');


  useEffect(() => {
    async function fetchData() {
      const projects = await projectsService.getProjects(filterBy);
      setProjects(projects);
    }
    fetchData();
  }, [filterBy]);
  

  const containerVarients = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.2, duration: 1.5 },
    },
    exit: {
      x: "-100vw",
      transition: { ease: "easeInOut" },
    },
  };


  // const projects = [
  //   {
  //     id: 101,
  //     name: "appsus",
  //     techs: ["vue"],
  //     img: process.env.PUBLIC_URL + "/projectPhotos/img1.png",
  //     desc: "Productive app that combines mail and notes",
  //     github: "https://github.com/amitamar27/AppSus",
  //     site: "https://amitamar27.github.io/AppSus/",
  //   },
  //   {
  //     id: 102,
  //     name: "musix",
  //     techs: ["react", "redux", "socketio", "nodejs", "mongodb"],
  //     img: process.env.PUBLIC_URL + "/projectPhotos/music.png",
  //     desc: "Music player based on spotify app",
  //     github: "https://github.com/amitamar27/musix",
  //     site: "https://musix-player.herokuapp.com/#/app",
  //   },
  //   {
  //     id: 103,
  //     name: "trellox",
  //     techs: ["vue", "vuex", "nodejs", "mongodb", "socketio"],
  //     img: process.env.PUBLIC_URL + "/projectPhotos/img2.png",
  //     desc: "A team project management app, based on the Trello app",
  //     github: "https://github.com/amitamar27/Trellox-frontend",
  //     site: "https://trelloxs.herokuapp.com/#/",
  //   },
  //   {
  //     id: 104,
  //     name: "minesweeper",
  //     techs: ["html5", "css", "js"],
  //     img: process.env.PUBLIC_URL + "/projectPhotos/mineswipper.png",
  //     desc: "The classic game we all know",
  //     github: "https://github.com/amitamar27/minesweeper-",
  //     site: "https://amitamar27.github.io/minesweeper-/",
  //   },

  //   {
  //     id: 105,
  //     name: "memes generator",
  //     techs: ["html5", "css", "js", "canvas"],
  //     img: process.env.PUBLIC_URL + "/projectPhotos/meme.png",
  //     desc: "Caption memes or upload your own images to make custom memes",
  //     github: "https://github.com/amitamar27/Memes-Generator",
  //     site: "https://amitamar27.github.io/Memes-Generator/",
  //   },
  //   {
  //     id: 106,
  //     name: "mister bitcoin",
  //     techs: ["react", "redux", "weather api"],
  //     img: process.env.PUBLIC_URL + "/projectPhotos/bitcoin.png",
  //     desc: "Digital wallet for holding bitcoins and sending (paying) them to contacts",
  //     github: "https://github.com/amitamar27/mister-bitcoin",
  //     site: "https://amitamar27.github.io/mister-bitcoin/",
  //   },
  // ];

  const onChangeFilter = (filterBy) => {
    setfilterBy(filterBy)
  }

  if(!projects) return <div>Loading...</div>
  
  return (
    <motion.div
      className="project-container"
      variants={containerVarients}
      initial="hidden"
      animate="visible"
    >
      <h2 className="title">PROJECTS</h2>
      <h2 className="category-txt">Category</h2>
      <FilterProjects onChangeFilter={onChangeFilter} />
      <div className="cards-container">
        <ProjectsList projects={projects} />
      </div>
    </motion.div>
  );
}
