// Importaciones de las Imágenes
import nicaPage from '../assets/Img/nicaPage.png';
import delisHots from '../assets/Img/delisHots.png';
import laberinto from '../assets/Img/laberinto.png';
import clientList from '../assets/Img/clientList.png';
import apiOnePiece from '../assets/Img/apiOnePiece.png';
import loginToDo from '../assets/Img/loginToDo.png';
import abletonFM from '../assets/Img/abletonFM.png';
import podioFM from '../assets/Img/podioFM.png';
import chatBot from '../assets/Img/chatBot.png';

// Interfaces de los Proyectos
interface Proyecto {
  id: number;
  img: string;
  nombre: string;
  tecnologías: string[];
  enlaces: [
    {
      github: string;
      netlify: string;
    }
  ];
}

// Arreglo de los Proyectos
const proyectos: Proyecto[] = [
  {
    id: 1,
    img: nicaPage,
    nombre: 'Nica Page',
    tecnologías: ['HTML', 'CSS'],
    enlaces: [
      {
        github: 'https://github.com/Bryan14Saenz/NicaPage',
        netlify: 'https://nicapage.netlify.app/',
      },
    ],
  },
  {
    id: 2,
    img: abletonFM,
    nombre: 'FM Ableton',
    tecnologías: ['HTML', 'CSS'],
    enlaces: [
      {
        github: 'https://github.com/Bryan14Saenz/Ableton',
        netlify: 'https://frontendableton.netlify.app/',
      },
    ],
  },
  {
    id: 3,
    img: podioFM,
    nombre: 'FM Podio',
    tecnologías: ['HTML', 'CSS'],
    enlaces: [
      {
        github: 'https://github.com/Bryan14Saenz/Podia',
        netlify: 'https://podiafp.netlify.app/',
      },
    ],
  },
  {
    id: 4,
    img: delisHots,
    nombre: 'Delis Hots',
    tecnologías: ['HTML', 'CSS', 'Bootstraps', 'Sass'],
    enlaces: [
      {
        github: 'https://github.com/Bryan14Saenz/Delis-Hots',
        netlify: 'https://delishots.netlify.app/',
      },
    ],
  },
  {
    id: 5,
    img: chatBot,
    nombre: 'Chat Bot',
    tecnologías: ['HTML', 'CSS', 'JavaScript'],
    enlaces: [
      {
        github: 'https://github.com/Bryan14Saenz/ChatBotBASE',
        netlify: 'https://chatbotbase.netlify.app/',
      },
    ],
  },
  {
    id: 6,
    img: clientList,
    nombre: 'Client List',
    tecnologías: ['HTML', 'CSS', 'Bootstraps', 'Sass', 'JavaScript'],
    enlaces: [
      {
        github: 'https://github.com/Bryan14Saenz/ClientList',
        netlify: 'https://clienteslista.netlify.app/',
      },
    ],
  },
  {
    id: 7,
    img: laberinto,
    nombre: 'Laberinto',
    tecnologías: ['HTML', 'CSS', 'Bootstraps', 'Sass', 'JavaScript', 'JQuey'],
    enlaces: [
      {
        github: 'https://github.com/Bryan14Saenz/Laberinto',
        netlify: 'https://desafiolaberinto.netlify.app/',
      },
    ],
  },
  {
    id: 8,
    img: apiOnePiece,
    nombre: 'Api One Piece',
    tecnologías: [
      'HTML',
      'CSS',
      'Bootstraps',
      'Sass',
      'JavaScript',
      'JQuey',
      'TypeScript',
    ],
    enlaces: [
      {
        github: 'https://github.com/Bryan14Saenz/OnePieceApi',
        netlify: 'https://miniapionepice.netlify.app/',
      },
    ],
  },
  {
    id: 9,
    img: loginToDo,
    nombre: 'Login To-Do',
    tecnologías: [
      'HTML',
      'CSS',
      'Bootstraps',
      'Sass',
      'JavaScript',
      'JQuey',
      'TypeScript',
    ],
    enlaces: [
      {
        github: 'https://github.com/Bryan14Saenz/LoginToDo',
        netlify: 'https://listadetareslogin.netlify.app/',
      },
    ],
  },
];

// Exportación de los Proyectos
export default proyectos;
