// Buttons in inventory
const projectsID = {
  arraysJS: document.getElementById('project1'),
  rotaractWeb: document.getElementById('project2'),
}
const cvButton = document.getElementById('cvButton')
const about = document.getElementById('about')
const techStackList = document.getElementById('techStackList')
const elementsToShow = {
  // Left and right sections
  project1Left: document.getElementById('project1Left'),
  project1Right: document.getElementById('project1Right'),
  project2Left: document.getElementById('project2Left'),
  project2Right: document.getElementById('project2Right'),

  // Images
  project1Image1: document.getElementById('project1-image1'),
  project1Image2: document.getElementById('project1-image2'),
  project2Image1: document.getElementById('project2-image1'),
  project2Image2: document.getElementById('project2-image2'),
}

const menuState = {
  aboutMe: true,
  aboutGithub: false,
  someProject: false,
}

function toggleAnimation1() {
  about.classList.toggle('hiddenTop')
  techStackList.classList.toggle('hiddenRight')
  cvButton.classList.toggle('hiddenBottom')

  elementsToShow.project1Left.classList.toggle('showRight')
  elementsToShow.project1Image1.classList.toggle('showRight')
  elementsToShow.project1Right.classList.toggle('showLeft')
  elementsToShow.project1Image2.classList.toggle('showLeft')
}

function toggleAnimation2() {
  about.classList.toggle('hiddenTop')
  techStackList.classList.toggle('hiddenRight')
  cvButton.classList.toggle('hiddenBottom')

  elementsToShow.project2Left.classList.toggle('showRight')
  elementsToShow.project2Image1.classList.toggle('showRight')
  elementsToShow.project2Right.classList.toggle('showLeft')
  elementsToShow.project2Image2.classList.toggle('showLeft')
}

projectsID.arraysJS.addEventListener('click', toggleAnimation1)
projectsID.rotaractWeb.addEventListener('click', toggleAnimation2)
