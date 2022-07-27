const mainP = document.querySelector('#sec2 > ul');
const mainProgramData = [
  {
    link: './assets/icons/program_icon_01.png',
    name: 'Lecture',
    text: 'Learn from Lecturers from all over the wolrd which are the best in there fields',
  },
  {
    link: './assets/icons/program_icon_02.png',
    name: 'CW Show',
    text: 'Have access to countless number of UI designs, all ready to be deployed and published in your portofolio. You can edite them too',
  },
  {
    link: './assets/icons/program_icon_03.png',
    name: 'Community',
    text: 'Join one of the biggest web education communities in the world. Talk to people that you both share the same intrests, Make new friend, wide your network',
  },
  {
    link: './assets/icons/program_icon_04.png',
    name: 'Workshops',
    text: 'Meet studends through the program and work together on real world projects',
  },
  {
    link: './assets/icons/program_icon_05.png',
    name: 'experience',
    text: 'Wide your experience, increase your hiring chances and learn how to land a job. Why waiting! join now!.',
  },
];

mainProgramData.forEach((ele) => {
  const mainPli = document.createElement('li');
  const mainPimg = document.createElement('img');
  const mainPh4 = document.createElement('h4');
  const mainPp = document.createElement('p');
  mainPimg.src = ele.link;
  mainPimg.alt = ele.name;
  mainPh4.textContent = ele.name;
  mainPp.textContent = ele.text;
  [mainPimg, mainPh4, mainPp].forEach((child) => mainPli.appendChild(child));
  mainP.appendChild(mainPli);
});

const speakersData = [
  {
    img: './assets/people/p1.jpg',
    name: 'Anthony Drawon',
    degree: 'Degree on UI & UX design',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo ad voluptas',
  },
  {
    img: './assets/people/p2.jpg',
    name: 'Wanda Brown',
    degree: 'Problem solving expert',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo ad voluptas',
  },
  {
    img: './assets/people/p3.jpg',
    name: 'Peter Vesk',
    degree: 'Opertaing system Developer',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo ad voluptas',
  },
  {
    img: './assets/people/p4.jpg',
    name: 'Conowatchy Mora',
    degree: 'Software Engineer',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo ad voluptas',
  },
  {
    img: './assets/people/p5.jpg',
    name: 'Nataly Flower',
    degree: 'Photographer',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo ad voluptas',
  },
  {
    img: './assets/people/p6.jpg',
    name: 'Solowa Delay',
    degree: 'Team manager',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo ad voluptas',
  },
];

const speakers = document.querySelector('#speakers');
speakers.innerHTML = speakersData
  .map(
    (ele) => `<li> 
       <div class="speaker-img"> 
         <img src="./assets/people/Hash.avif" alt="hash" /> 
         <img src=${ele.img} alt=${ele.name} />
       </div>
       <div class="speaker-details">
         <h4>${ele.name}</h4>
         <span>${ele.degree}</span>
         <span class="block w-8 m-1 h-[1px] bg-orange-500"></span>
         <p>${ele.text}</p>
        </div>
      </li>`,
  )
  .join('');

const mobSpeakers = document.querySelectorAll('#speakers > li:nth-child(n+3)');
const mobButton = document.querySelector('#sec3 > a');
mobSpeakers.forEach((ele) => ele.classList.toggle('speakers-hide'));

mobButton.addEventListener('click', (e) => {
  e.preventDefault();
  mobSpeakers.forEach((ele) => ele.classList.toggle('speakers-hide'));
  mobButton.children[0].innerHTML = mobButton.children[0].innerHTML === 'See More' ? 'Show Less' : 'See More';
  mobButton.children[1].classList.toggle('rotate-180');
});

const partnersData = [
  {
    img: './../assets/icons/airbnb-icon-removebg-preview.png',
    name: 'airbnb',
  },
  {
    img: './../assets/icons/google.icon-removebg-preview.png',
    name: 'google',
  },
  {
    img: './../assets/icons/kakao-icon-removebg-preview.png',
    name: 'kakao',
  },
  {
    img: './../assets/icons/naver-icon-removebg-preview.png',
    name: 'naver',
  },
  {
    img: './../assets/icons/microverse.png',
    name: 'microverse',
  },
];

const partners = document.querySelector('#partners');

partnersData.forEach((ele) => {
  const partnerli = document.createElement('li');
  const partnerimg = document.createElement('img');

  partnerimg.src = ele.img;
  partnerimg.alt = ele.name;
  partnerli.appendChild(partnerimg);
  partners.append(partnerli);
});
