const projects = [
  {
    urlM: './images/SnapshootPortfolio.png',
    urlD: './desktop-images/SnapshootPortfolio.png',
    title: 'Keeping track of hundreds of components',
    workTitle: 'Multi-Post Stories<br />Gain+Glory',
    technologies: [
      'Ruby on rails',
      'Css',
      'JavScript',
      'html',
    ],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea`',
    linklive: 'https://arabiu033.github.io/Portfolio-Project/',
    linkSrc: 'https://github.com/arabiu033/Portfolio-Project',
  },
  {
    urlM: './images/SnapshootPortfolio.png',
    urlD: './desktop-images/SnapshootPortfolio.png',
    title: 'Keeping track of hundreds of components',
    workTitle: 'Multi-Post Stories<br />Gain+Glory',
    technologies: [
      'Ruby on rails',
      'Css',
      'JavScript',
      'html',
    ],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea`',
    linklive: 'https://arabiu033.github.io/Portfolio-Project/',
    linkSrc: 'https://github.com/arabiu033/Portfolio-Project',
  },
  {
    urlM: './images/SnapshootPortfolio.png',
    urlD: './desktop-images/SnapshootPortfolio.png',
    title: 'Keeping track of hundreds of components',
    workTitle: 'Multi-Post Stories<br />Gain+Glory',
    technologies: [
      'Ruby on rails',
      'Css',
      'JavScript',
      'html',
    ],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea`',
    linklive: 'https://arabiu033.github.io/Portfolio-Project/',
    linkSrc: 'https://github.com/arabiu033/Portfolio-Project',
  },
  {
    urlM: './images/SnapshootPortfolio.png',
    urlD: './desktop-images/SnapshootPortfolio.png',
    title: 'Keeping track of hundreds of components',
    workTitle: 'Multi-Post Stories<br />Gain+Glory',
    technologies: [
      'Ruby on rails',
      'Css',
      'JavScript',
      'html',
    ],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea`',
    linklive: 'https://arabiu033.github.io/Portfolio-Project/',
    linkSrc: 'https://github.com/arabiu033/Portfolio-Project',
  },
  {
    urlM: './images/SnapshootPortfolio.png',
    urlD: './desktop-images/SnapshootPortfolio.svg',
    title: 'Keeping track of hundreds of components',
    workTitle: 'Multi-Post Stories<br />Gain+Glory',
    technologies: [
      'Ruby on rails',
      'Css',
      'JavScript',
      'html',
    ],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea`',
    linklive: 'https://arabiu033.github.io/Portfolio-Project/',
    linkSrc: 'https://github.com/arabiu033/Portfolio-Project',
  },
  {
    urlM: './images/SnapshootPortfolio.png',
    urlD: './desktop-images/SnapshootPortfolio.svg',
    title: 'Keeping track of hundreds of components',
    workTitle: 'Multi-Post Stories<br />Gain+Glory',
    technologies: [
      'Ruby on rails',
      'Css',
      'JavScript',
      'html',
    ],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea`',
    linklive: 'https://arabiu033.github.io/Portfolio-Project/',
    linkSrc: 'https://github.com/arabiu033/Portfolio-Project',
  },
];

// populating the work section with automatic generated cards
const cardRow = document.querySelector('#card-row');
for (let k = 0; k < projects.length; k += 1) {
  const card = document.createElement('div');
  card.className = 'card';

  const cardText = document.createElement('div');
  cardText.className = 'card-text';
  const projectTitle = document.createElement('h2');
  projectTitle.className = 'project-title';
  projectTitle.insertAdjacentHTML('beforeend', projects[k].workTitle);
  const tags1 = document.createElement('ul');
  tags1.className = 'tags1';

  for (let l = 0; l < projects[k].technologies.length; l += 1) {
    const li = document.createElement('li');
    li.className = 'inner-tag1';
    const h5 = document.createElement('h5');
    h5.textContent = projects[k].technologies[l];
    li.append(h5);
    tags1.append(li);
  }

  const seeProj = document.createElement('div');
  seeProj.className = 'see-project';
  const btn = document.createElement('button');
  btn.className = 'btn';
  btn.setAttribute('type', 'button');
  const btnText = document.createElement('span');
  btnText.className = 'btn-text';
  btnText.textContent = 'See Project';
  btn.append(btnText);
  seeProj.append(btn);

  cardText.append(projectTitle);
  cardText.append(tags1);
  cardText.append(seeProj);
  card.append(cardText);

  const imgHolder = document.createElement('div');
  imgHolder.className = 'img-holder';
  card.append(imgHolder);
  cardRow.append(card);
}

const recentWork = document.querySelector('#recent-work');
const div = document.querySelector('#normal-buttons');
const menuContainer = document.querySelector('.collapse-toolbar');
const x = document.querySelector('#tool-bar');
const exit = document.createElement('img');
const footerDiv = document.createElement('div');
const footerHr = document.createElement('hr');
const links = menuContainer.querySelectorAll('a');
const seeProject = document.querySelectorAll('.btn');
const abtm = document.querySelector('#about-me');
const form = document.querySelector('#sign');
const small = form.querySelector('small');

div.addEventListener('click', () => {
  menuContainer.classList.remove('collapse-toolbar');
  menuContainer.classList.add('menu-list');
  x.classList.add('hide-top');

  exit.src = './images/exit.png';
  exit.classList.add('exit-img');

  footerDiv.classList.add('last-div');
  footerHr.classList.add('footer-hr');
  footerDiv.append(footerHr);
  menuContainer.prepend(exit);
  menuContainer.append(footerDiv);
});

function closeMenu() {
  x.classList.remove('hide-top');
  menuContainer.classList.add('collapse-toolbar');
  menuContainer.classList.remove('menu-list');

  footerDiv.removeChild(footerHr);
  menuContainer.removeChild(footerDiv);
}

exit.addEventListener('click', closeMenu);

links.forEach((element) => {
  element.addEventListener('click', closeMenu);
});

const popConstruction = (i) => `
  <section class="work-info">
    <button type="btn" class="cancel-btn">
      <img src="./images/cancel.png" alt="icon"/>
    </button>
    <div class="work-image">
    <img class="Mobile-img" src=${projects[i].urlM} alt="icon"/>
    </div>
    <h1 class="work-title">
      ${projects[i].title}
    </h1>
    <ul class="tech-list">
      <li class="list1">${projects[i].technologies[0]}</li>
      <li class="list1">${projects[i].technologies[1]}</li>
      <li class="list1">${projects[i].technologies[2]}</li>
      <li class="list1">${projects[i].technologies[3]}</li>
      <li class="list1">${projects[i].technologies[0]}</li>
    </ul>
    <p class='description'>
      ${projects[i].description}
    </p>
    <div class="work-buttons">
      <a href=${projects[i].linklive} class="wrk-btn">
        See Live
        <img src='./images/seeLive.png' alt="see live"/>
      </a>
      <a href=${projects[i].linkSrc} class="wrk-btn">
        See Source
        <img src='./images/seeSrc.png' alt="see live"/>
      </a>
    </div>
    <script src="script.js"></script>
  </section>`;

for (let i = 0; i < seeProject.length; i += 1) {
  seeProject[i].addEventListener('click', () => {
    const divv = document.createElement('div');
    divv.innerHTML = popConstruction(i);
    document.body.appendChild(divv);
    recentWork.classList.add('blurr');
    abtm.classList.add('blurr');
    const cancelBtn = document.querySelector('.cancel-btn');
    cancelBtn.addEventListener('click', async () => {
      document.body.removeChild(divv);
      abtm.classList.remove('blurr');
      recentWork.classList.remove('blurr');
    });
  });
}

// Validating user inputs on the contact me section
function showError(input, msg) {
  small.textContent = msg;
  small.className = 'email-valid';
}

function validateEmail(input, msg) {
  if (input.value === input.value.toLowerCase()) {
    small.classList.remove('email-valid');
    small.textContent = '';
    return true;
  }

  showError(input, msg);
  return false;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (validateEmail(form.elements['email'], 'Email should be in lower case')) {
    form.submit();
  }
})