
export const projectsService = {
    getProjects


}

const gProjects = [{
        id: 101,
        name: "appsus",
        techs: ["vue"],
        img: process.env.PUBLIC_URL + "/projectPhotos/img1.png",
        desc: "Productive app that combines mail and notes",
        github: "https://github.com/amitamar27/AppSus",
        site: "https://amitamar27.github.io/AppSus/",
    },
    {
        id: 102,
        name: "musix",
        techs: ["react", "redux", "socketio", "nodejs", "mongodb"],
        img: process.env.PUBLIC_URL + "/projectPhotos/music.png",
        desc: "Music player based on spotify app",
        github: "https://github.com/amitamar27/musix",
        site: "https://musix-player.herokuapp.com/#/app",
    },
    {
        id: 103,
        name: "trellox",
        techs: ["vue", "vuex", "nodejs", "mongodb", "socketio"],
        img: process.env.PUBLIC_URL + "/projectPhotos/img2.png",
        desc: "A team project management app, based on the Trello app",
        github: "https://github.com/amitamar27/Trellox-frontend",
        site: "https://trelloxs.herokuapp.com/#/",
    },
    {
        id: 104,
        name: "minesweeper",
        techs: ["html5", "css", "js"],
        img: process.env.PUBLIC_URL + "/projectPhotos/mineswipper.png",
        desc: "The classic game we all know",
        github: "https://github.com/amitamar27/minesweeper-",
        site: "https://amitamar27.github.io/minesweeper-/",
    },

    {
        id: 105,
        name: "memes generator",
        techs: ["html5", "css", "js", "canvas"],
        img: process.env.PUBLIC_URL + "/projectPhotos/meme.png",
        desc: "Caption memes or upload your own images to make custom memes",
        github: "https://github.com/amitamar27/Memes-Generator",
        site: "https://amitamar27.github.io/Memes-Generator/",
    },
    {
        id: 106,
        name: "mister bitcoin",
        techs: ["react", "redux", "weather api"],
        img: process.env.PUBLIC_URL + "/projectPhotos/bitcoin.png",
        desc: "Digital wallet for holding bitcoins and sending (paying) them to contacts",
        github: "https://github.com/amitamar27/mister-bitcoin",
        site: "https://amitamar27.github.io/mister-bitcoin/",
    },
];



function getProjects(filterBy = null) {
    return new Promise((resolve, reject) => {
        var projectsToReturn = gProjects;
         if (filterBy === 'all') resolve(projectsToReturn)
         if (filterBy) {
             projectsToReturn = filter(filterBy)
         }
         resolve(projectsToReturn)
     })
}


function filter(term) {
    term = term.toLocaleLowerCase()
    return gProjects.filter(project => {
        return project.techs.includes(term)
    })
}

// function filter(term) {
//     term = term.toLocaleLowerCase()
//     return gProjects.filter(project => {
//         return project.techs.toLocaleLowerCase().includes(term)
//     })
// }