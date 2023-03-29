const projects = [
  {
    urlM: './images/cherry.png',
    urlD: './images/cherry.png',
    title: 'Cherry Rooms',
    workTitle: 'Cherry Rooms',
    technologies: ['Ruby on rails', 'Css', 'JavScript', 'html', 'RSwag', 'Jwt', 'React', 'Redux'],
    description: 'This app provides comprehensive information about all laureates'
    + 'and their wonderful nobel prize winning momments.Cherry Rooms is a front-end'
    + 'React project designed for the purpose of booking rooms in hotels, motels, or'
    + 'any other accommodation service. This project provides an intuitive and user-friendly'
    + 'interface that allows users to easily browse and reserve rooms based on their'
    + 'preferences and availability. The project is built using React, HTML, CSS, and JavaScript,'
    + 'with the use of APIs to fetch data from the backend.ps',
    linklive: 'https://cherryrooms.netlify.app/',
    linkSrc: 'https://github.com/adel-gu/Cherry-Rooms-front-end',
  },
  {
    urlM: './images/todolist.png',
    urlD: './images/todolist.png',
    title: 'To-do List',
    workTitle: 'To-do List',
    technologies: ['Css', 'JavScript', 'html', 'ES6', 'LocalStorage', 'Webaack'],
    description: '"To-do list" is a tool that helps to organize your day. It simply lists the things that'
    + 'you need to do and allows you to mark them as complete. Built using ES6 and Webpack',
    linklive: 'https://arabiu033-todolist.netlify.app/',
    linkSrc: 'https://github.com/arabiu033/to_do-list',
  },
  {
    urlM: './images/podcats.png',
    urlD: './images/podcats.png',
    title: 'Podcast submit webpage',
    workTitle: 'Podcast submit webpage',
    technologies: ['Css', 'JavScript', 'html', 'semantics', 'boostrap'],
    description: 'A simple pod conference landing page. my first capstone projet.',
    linklive: 'https://podcast-capstone.netlify.app/',
    linkSrc: 'https://github.com/arabiu033/pod_cast',
  },
  {
    urlM: './images/pocolee.png',
    urlD: './images/pocolee.png',
    title: 'Pocolee - Budget app',
    workTitle: 'Pocolee - Budget app',
    technologies: ['Ruby', 'Rails', 'JavScript', 'html', 'Devise', 'Boostrap', 'Postgresql', 'TDD'],
    description: 'This app provides comprehensive information about all laureates'
    + 'and their wonderful nobel prize winning momments.Pocolee is a mobile web application'
    + 'that can help you keep track of your daily financial transaction and manage your budget'
    + 'where you have a list of transactions associated with a category so that you can see how much'
    + 'money you spent and on what',
    linklive: 'https://pocolee.onrender.com/',
    linkSrc: 'https://github.com/arabiu033/budget_app',
  },
  {
    urlM: './images/space.png',
    urlD: './images/space.png',
    title: 'space-travelers-hub',
    workTitle: 'space-travelers-hub',
    technologies: ['React', 'Redux', 'Promises', 'Webpack', 'Rest Api', 'Boostrap', '', 'Jest'],
    description: 'This is a web application for a company that provides commercial and scientific'
    + 'space travel services. The application allows users to book rockets and join selected space missions.',
    linklive: 'https://space-hubs.netlify.app/',
    linkSrc: 'https://github.com/arabiu033/space_travelers_hub',
  },
  {
    urlM: './images/nobel.png',
    urlD: './images/nobel.png',
    title: 'Nobel Laureates',
    workTitle: 'Nobel Laureates',
    technologies: ['React', 'Redux', 'Promises', 'Webpack', 'Rest Api', 'Boostrap', 'Jest'],
    description: 'This app provides comprehensive information about all laureates and their wonderful nobel prize winning moments.',
    linklive: 'https://nobels.netlify.app/',
    linkSrc: 'https://github.com/arabiu033/capstone_project_0x03',
  },
  {
    urlM: './images/country.png',
    urlD: './images/country.png',
    title: 'Countries Info',
    workTitle: 'Countries Info',
    technologies: ['React', 'Redux', 'Promises', 'Webpack', 'Rest Api', 'Boostrap', 'Jest'],
    description: 'This is a simple API integration project displaying a list of countries'
    + 'and its information fetching data using API The project is bundled using webpack and'
    + 'makes use of dynamic code through Javascript. the project makes use of jest for unit testing.',
    linklive: 'https://countrie-caps.netlify.app',
    linkSrc: 'https://github.com/arabiu033/capstone_project_0x02',
  },
];

// populating the work section with automatic generated cards
const cardRow = document.querySelector('.card-row');
for (let k = 0; k < projects.length; k += 1) {
  const card = document.createElement('div');
  const maincard = document.createElement('div');
  maincard.className = 'card';
  card.className = 'white-back';

  maincard.style.backgroundImage = `url(${projects[k].urlM})`;
  const projectTitle = document.createElement('h3');
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

  const btnText = document.createElement('p');
  btnText.className = 'btn-text';
  btnText.textContent = 'See Project';

  card.append(projectTitle);
  card.append(tags1);
  card.append(btnText);

  maincard.append(card);
  cardRow.append(maincard);
}

const recentWork = document.querySelector('#recent-work');
const div = document.querySelector('#normal-buttons');
const menuContainer = document.querySelector('.collapse-toolbar');
const x = document.querySelector('#tool-bar');
const exit = document.createElement('img');
const footerDiv = document.createElement('div');
const footerHr = document.createElement('hr');
const links = menuContainer.querySelectorAll('a');
const seeProject = document.querySelectorAll('.btn-text');
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

<div class="icon-image">
<div class="back-cross">
  <img class="cross-popup-icon" src="images/cancel.png" alt="" />
</div>
<div class="popup-image">
  <img src=${projects[i].urlM} />
</div>
</div>
<div class="title-and-tech">
<div>
  <h1 class="popup-title">${projects[i].title}</h1>
</div>
<div>
  <ul class="popup-tech tech-list-${i}">
  </ul>
</div>
</div>
<div class="popup-description">${projects[i].description}</div>
<div class="popup-buttons">
<div class="live-button">
  <a class="live" target="_blank" href=${projects[i].linklive}>
    See Live
  </a>
  <img src="./images/seeLive.png" alt="" />
</div>
<div class="live-button ml">
  <a class="live" target="_blank" href=${projects[i].linkSrc}>
    See Source
  </a>
  <img src="./images/seeSrc.png" alt="" />
</div>
</div>
<script src='script.js'></script>`;

for (let i = 0; i < seeProject.length; i += 1) {
  seeProject[i].addEventListener('click', () => {
    const divv = document.createElement('div');
    divv.className = 'work-info';
    divv.innerHTML = popConstruction(i);
    document.body.appendChild(divv);
    const techContainer = document.querySelector(`.tech-list-${i}`);
    projects[i].technologies.forEach((t) => {
      techContainer.innerHTML += `<li class="popup-tech-li">${t}</li>`;
    });
    recentWork.classList.add('blurr');
    abtm.classList.add('blurr');
    const cancelBtn = document.querySelector('.cross-popup-icon');
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

  if (validateEmail(form.elements.email, 'Email should be in lower case')) {
    form.submit();
  }
});

// Using the webpage storage API
const userData = {};
const inputName = document.getElementById('input-name');
const inputEmail = document.getElementById('input-email');
const inputTextarea = document.getElementById('input-textarea');

// Function to test whether local storage is available and supported
function storageSupported(type) {
  let storage;
  try {
    storage = window[type];
    const a = '__testing_storage__';
    storage.setItem(a, a);
    storage.removeItem(a);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException
      && (e.code === 22
        || e.code === 1014
        || e.name === 'QuotaExceededError'
        || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
        && storage
        && storage.length !== 0);
  }
}

function updateSite() {
  const currentUserData = JSON.parse(localStorage.getItem('userData'));
  inputName.value = currentUserData.name ? currentUserData.name : '';
  inputEmail.value = currentUserData.email ? currentUserData.email : '';
  inputTextarea.value = currentUserData.textarea ? currentUserData.textarea : '';
}

function populateStorage() {
  userData.name = inputName.value;
  userData.email = inputEmail.value;
  userData.textarea = inputTextarea.value;
  localStorage.setItem('userData', JSON.stringify(userData));

  updateSite();
}

if (storageSupported('localStorage')) {
  if (!localStorage.getItem('userData')) {
    // check whether the storage has been populated before
    populateStorage();
  } else {
    updateSite();
  }
}

form.onchange = populateStorage;
