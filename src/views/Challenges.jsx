import Navbar from '../components/Navbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare, faCodeBranch} from '@fortawesome/free-solid-svg-icons';

const challengesArray = [
  { 
    title: 'Mi Sitio Web',
    hrefTitle: '/',
    iconTitle: <FontAwesomeIcon icon={faUpRightFromSquare} />,

    github: 'jjwernerm - Github',
    hrefGithub: 'https://github.com/jjwernerm/my-page',
    iconGithub: <FontAwesomeIcon icon={faCodeBranch} />,

    alt:'React logo',    
    img: 'https://res.cloudinary.com/dqjnzfsp6/image/upload/v1689028931/logoReact_oy8gr9.png'
  },
  { 
    title: 'Validar Campos',
    hrefTitle: 'https://aquamarine-truffle-dcc5e2.netlify.app/',
    iconTitle: <FontAwesomeIcon icon={faUpRightFromSquare} />,

    github: 'jjwernerm - Github',
    hrefGithub: 'https://github.com/jjwernerm/validarCampos',
    iconGithub: <FontAwesomeIcon icon={faCodeBranch} />,

    alt:'JavaScript logo',    
    img: 'https://res.cloudinary.com/dqjnzfsp6/image/upload/v1689029337/logoJS_n0phoq.png'
  },
  { 
    title: 'Carrito de Compras',
    hrefTitle: 'https://precious-cheesecake-93e196.netlify.app/',
    iconTitle: <FontAwesomeIcon icon={faUpRightFromSquare} />,

    github: 'jjwernerm - Github',
    hrefGithub: 'https://github.com/jjwernerm/carritoCompras',
    iconGithub: <FontAwesomeIcon icon={faCodeBranch} />,

    alt:'JavaScript logo',    
    img: 'https://res.cloudinary.com/dqjnzfsp6/image/upload/v1689029337/logoJS_n0phoq.png'
  },
  { 
    title: 'Filtrar Búsqueda',
    hrefTitle: 'https://beautiful-pasca-e64be4.netlify.app/',
    iconTitle: <FontAwesomeIcon icon={faUpRightFromSquare} />,

    github: 'jjwernerm - Github',
    hrefGithub: 'https://github.com/jjwernerm/filtrarBusqueda',
    iconGithub: <FontAwesomeIcon icon={faCodeBranch} />,

    alt:'JavaScript logo',    
    img: 'https://res.cloudinary.com/dqjnzfsp6/image/upload/v1689029337/logoJS_n0phoq.png'
  },
];

export default function Challenges() {

  return (
    <>
      <div className="bg-color pt-8">
        <Navbar />
        <div className="pt-8 pb-8">
          <p 
            className="text-white title-about-my p-2 text-center font-bold text-2xl sm:text-5xl">Challenges
          </p>
          <p 
            className="text-white p-2 text-center">Aquí muestro mis propios desafíos y proyectos emergentes que generalmente puedo enfrentar en el campo del desarrollo web.
          </p>
          <div className="md:grid md:grid-cols-2">

            {challengesArray.map((a) => (

              <div key={a.title}>
                <div className="bg-slate-700 rounded-xl p-8 m-8 md:flex">

                  <p class="italic text-red text-center">Proyecto en desarrollo...</p>
                  
                  <img
                    className="w-12 h-12 mx-auto rounded-full md:w-24 md:h-24 md:mx-0 md:my-auto md:rounded-none" 
                    alt={a.alt}
                    src={a.img}
                  />
                  
                  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">                
                    <blockquote>                  
                      <a
                        href={a.hrefTitle}
                        target="_blank"
                        className="text-cyan-800 dark:text-cyan-600 font-medium">
                        {a.iconTitle} {a.title}
                      </a>
                      <br />
                      <br />
                      <a
                        href={a.hrefGithub}
                        target="_blank"
                        className="text-white">
                        {a.iconGithub} {a.github}
                      </a>
                    </blockquote>                    
                 </div>

                </div>
              </div>
            ))}
            </div>
        </div>
      </div>
    </>
  )
};