const div = document.querySelector('#normal-buttons');
const menuContainer = document.querySelector('.collapse-toolbar');
const toolBar = document.querySelector('#tool-bar');
const exit = document.createElement('img');
const footerDiv = document.createElement('div');
const footerHr = document.createElement('hr');
const links = menuContainer.querySelectorAll('a');
const seeProject = document.querySelectorAll('.btn');

function openMenu() {
  menuContainer.classList.remove('collapse-toolbar');
  menuContainer.classList.add('menu-list');
  toolBar.classList.add('hide-top');

  exit.src = './images/exit.png';
  exit.classList.add('exit-img');

  footerDiv.classList.add('last-div');
  footerHr.classList.add('footer-hr');
  footerDiv.append(footerHr);
  menuContainer.prepend(exit);
  menuContainer.append(footerDiv);
}

function closeMenu() {
  toolBar.classList.remove('hide-top');
  menuContainer.classList.add('collapse-toolbar');
  menuContainer.classList.remove('menu-list');

  footerDiv.removeChild(footerHr);
  menuContainer.removeChild(footerDiv);
}

div.addEventListener('click', openMenu);
exit.addEventListener('click', closeMenu);

links.forEach((element) => {
  element.addEventListener('click', closeMenu);
});

const projects = [
  {
    urlM: `./images/SnapshootPortfolio.png`,
    urlD: `./desktop-images/SnapshootPortfolio.png`,
    title: `Keeping track of hundreds of components`,
    technologies: {
      t1: `Ruby on rails`,
      t2: 'Css',
      t3: 'JavScript',
      t4: 'html',
    },
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    linklive: `#`,
    linkSrc: '#',
  },
  {
    urlM: `./images/SnapshootPortfolio.png`,
    urlD: `./desktop-images/SnapshootPortfolio.png`,
    title: `Keeping track of hundreds of components`,
    technologies: {
      t1: `Ruby on rails`,
      t2: 'Css',
      t3: 'JavScript',
      t4: 'html',
    },
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    linklive: `#`,
    linkSrc: '#',
  },
  {
    urlM: `./images/SnapshootPortfolio.png`,
    urlD: `./desktop-images/SnapshootPortfolio.png`,
    title: `Keeping track of hundreds of components`,
    technologies: {
      t1: `Ruby on rails`,
      t2: 'Css',
      t3: 'JavScript',
      t4: 'html',
    },
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    linklive: `#`,
    linkSrc: '#',
  },
  {
    urlM: `./images/SnapshootPortfolio.png`,
    urlD: `./desktop-images/SnapshootPortfolio.png`,
    title: `Keeping track of hundreds of components`,
    technologies: {
      t1: `Ruby on rails`,
      t2: 'Css',
      t3: 'JavScript',
      t4: 'html',
    },
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    linklive: `#`,
    linkSrc: '#',
  },
  {
    urlM: `./images/SnapshootPortfolio.png`,
    urlD: `./desktop-images/SnapshootPortfolio.png`,
    title: `Keeping track of hundreds of components`,
    technologies: {
      t1: `Ruby on rails`,
      t2: 'Css',
      t3: 'JavScript',
      t4: 'html',
    },
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    linklive: `#`,
    linkSrc: '#',
  },
  {
    urlM: `./images/SnapshootPortfolio.png`,
    urlD: `./desktop-images/SnapshootPortfolio.png`,
    title: `Keeping track of hundreds of components`,
    technologies: {
      t1: `Ruby on rails`,
      t2: 'Css',
      t3: 'JavScript',
      t4: 'html',
    },
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    linklive: `#`,
    linkSrc: '#',
  },
]


for (let i = 0; i < seeProject.length; i++) {
  seeProject[i].addEventListener('click', () => {
    const divv = document.createElement('div');
    divv.innerHTML = popConstruction(i);
    document.body.appendChild(divv);
    const cancelBtn = document.querySelector('.cancel-btn');
    cancelBtn.addEventListener('click', async () => {
      document.body.removeChild(divv);
    });
  });
}