const projectsDiv = document.querySelector("div.tabs__item.projects");
let projects = [  {
  name: "WonderWomen of the World Cup -- GoogleTrends",
  imgUrl: "https://i.imgur.com/xARRYgX.png",
  deployedAt: "https://womens-world-cup-google-trends.now.sh/",
  deployedIcon: {
    type: "span",
    class: "iconify",
    "data-icon": "logos-netlify",
    "data-inline": "false"
  },
  repoIcon: {
    type: "span",
    class: "iconify",
    "data-icon": "logos-github-octocat",
    "data-inline": "false"
  },
  githubRepo: "https://github.com/jtwray/womensWorldCupGoogleTrends"
},
  {
    name: "Kanyes Quotes",
    imgUrl: "https://i.imgur.com/rebjeFe.png",
    deployedAt: "https://kanyes-magic-8ball.netlify.app/",
    deployedIcon: {
      type: "span",
      class: "iconify",
      "data-icon": "logos-netlify",
      "data-inline": "false"
    },
    repoIcon: {
      type: "span",
      class: "iconify",
      "data-icon": "logos-github-octocat",
      "data-inline": "false"
    },
    githubRepo: "https://github.com/jtwray/ReactReduxThunk"
  },

  {
    name: "TheArtificialArtist",
    imgUrl: "https://i.imgur.com/lGQKb7s.png",
    deployedAt: "https://theArtificialArtist.com/",
    deployedIcon: {
      type: "span",
      class: "iconify",
      "data-icon": "logos-netlify",
      "data-inline": "false"
    },
    repoIcon: {
      type: "span",
      class: "iconify",
      "data-icon": "logos-github-octocat",
      "data-inline": "false"
    },
    githubRepo: "https://github.com/jtwray/artificial-artist-fe"
  },  
  {
    name: "rVenture",
    imgUrl: "https://i.imgur.com/GXJ8srz.jpg",
    deployedAt: "https://rventuren.herokuapp.com/api",
    deployedIcon: {
      type: "span",
      class: "iconify",
      "data-icon": "logos:netlify",
      "data-inline": "false"
    },
    repoIcon: {
      type: "span",
      class: "iconify",
      "data-icon": "logos-github-octocat",
      "data-inline": "false"
    },
    githubRepo: "https://github.com/Build-Week-RVAirBnB/Backend"
  },
  {
    name: "twittercardPreviews",
    imgUrl: "https://i.imgur.com/ue1Qmxi.png",
    deployedAt: "https://twittercardpreview.netlify.app/",
    deployedIcon: {
      type: "span",
      class: "iconify",
      "data-icon": "logos:netlify",
      "data-inline": "false"
    },
    repoIcon: {
      type: "span",
      class: "iconify",
      "data-icon": "logos-github-octocat",
      "data-inline": "false"
    },
    githubRepo: "https://github.com/jtwray/firebase-serverless-function--socialCards-api"
  },


];
function createProjectCards(projectsArr) {
  let card,
    cardImage,
    cardTitle,
    projectDeployedLink,
    projectDeployedIcon,
    projectRepo,
    projectRepoIcon,
    projectInfoBlock;
  projectsArr.map(project => {
    (card = document.createElement("div")),
      card.classList.add("card"),
      (cardImage = document.createElement("img")),
      (cardImage.src = project.imgUrl),
      card.appendChild(cardImage),
      (cardTitle = document.createElement("h3")),
      cardTitle.classList.add("cardTitle"),
      (cardTitle.style.fontSize = "2rem"),
      (cardTitle.textContent = project.name),
      card.appendChild(cardTitle),
      (projectDeployedLink = document.createElement("a")),
      (projectDeployedIcon = document.createElement(project.deployedIcon.type)),
      console.log("************(((((((()))))))))))8***", {
        projectDeployedIcon
      });
    projectDeployedIcon.classList.add([project.deployedIcon.class]),
      projectDeployedIcon.setAttribute(
        "data-icon",

        `${project.deployedIcon[`data-icon`]}`
      ),
      projectDeployedIcon.setAttribute(
        "data-inline",
        `${project.deployedIcon["data-inline"]}`
      ),
      (projectRepoIcon = document.createElement(project.repoIcon.type)),
      console.log("************(((((((()))))))))))8***", {
        projectRepoIcon
      });
    projectRepoIcon.classList.add([project.repoIcon.class]),
      projectRepoIcon.setAttribute(
        "data-icon",

        `${project.repoIcon[`data-icon`]}`
      ),
      projectRepoIcon.setAttribute(
        "data-inline",
        `${project.deployedIcon["data-inline"]}`
      ),
      (projectDeployedLink.textContent = `Demo `),
      (projectDeployedLink.href = project.deployedAt),
      (projectRepo = document.createElement("a")),
      (projectRepo.textContent = `Github `),
      (projectRepo.href = project.githubRepo),
      (projectInfoBlock = document.createElement("div")),
      projectInfoBlock.appendChild(projectDeployedLink),
      projectDeployedLink.appendChild(projectDeployedIcon),
      projectInfoBlock.appendChild(projectRepo),
      projectRepo.appendChild(projectRepoIcon),
      projectInfoBlock.classList.add("projectInfoBlock"),
      card.appendChild(projectInfoBlock),
      console.log(card),
      projectsDiv.appendChild(card);
  });
}

createProjectCards(projects);

console.log({ projects });

let tuckersProjectsItemDiv = document.querySelectorAll(".projects");

console.log("*************************", { tuckersProjectsItemDiv });
