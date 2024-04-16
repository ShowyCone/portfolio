// Buttons in inventory
const projectsID = {
  arraysJS: document.getElementById('project1'),
}
const cvButton = document.getElementById('cvButton')
const about = document.getElementById('about')
const techStackList = document.getElementById('techStackList')
const elementsToShow = {
  project1Left: document.getElementById('project1Left'),
  project1Right: document.getElementById('project1Right'),
  image1: document.getElementById('image1'),
  image2: document.getElementById('image2'),
}

const menuState = {
  aboutMe: true,
  aboutGithub: false,
  someProject: false,
}

function toggleAnimation() {
  about.classList.toggle('hiddenTop')
  techStackList.classList.toggle('hiddenRight')
  cvButton.classList.toggle('hiddenBottom')

  elementsToShow.project1Left.classList.toggle('showRight')
  elementsToShow.image1.classList.toggle('showRight')
  elementsToShow.project1Right.classList.toggle('showLeft')
  elementsToShow.image2.classList.toggle('showLeft')
}

projectsID.arraysJS.addEventListener('click', toggleAnimation)
