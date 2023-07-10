import Navbar from '../components/Navbar';

const challengesArray = [
  { 
    title: 'Props',
    section: 'Ejemplo de props con ReactJS',
    date: '07/2022',
    alt:'React logo',
    href: '/',
    img: 'https://res.cloudinary.com/dqjnzfsp6/image/upload/v1689028931/logoReact_oy8gr9.png'    
  },
  { 
    title: 'Condiciones',
    section: 'Ejemplo de condiciones con JavaScript',
    date: '06/2022',
    alt:'JavaScript logo',
    href: '/',
    img: 'https://res.cloudinary.com/dqjnzfsp6/image/upload/v1689029337/logoJS_n0phoq.png'
  },
  { 
    title: 'Flexbox',
    section: 'Ejemplo de flexbox con CSS',
    date: '04/2022',
    alt:'CSS logo',
    href: '/',
    img: 'https://res.cloudinary.com/dqjnzfsp6/image/upload/v1689029553/logoCSS_rync5p.png'
  }
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
            className="text-white p-2 text-center">Aquí muestro algunos ejemplos y desafíos emergentes que generalmente puedo enfrentar en el campo del desarrollo web.
          </p>
          <div className="md:grid md:grid-cols-2">

            {challengesArray.map((a) => (

              <a key={a.key} href={a.href} target="_blank">
                <div className="bg-slate-700 rounded-xl p-8 m-8 md:flex">
                  
                  <img
                    className="w-12 h-12 mx-auto rounded-full md:w-24 md:h-24 md:mx-0 md:my-auto md:rounded-none" 
                    alt={a.alt}
                    src={a.img}
                  />
                  
                  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">                
                    <blockquote>                  
                      <div
                        className="text-cyan-800 dark:text-cyan-600 font-medium">
                        {a.title}
                      </div>

                      <p
                        className="text-white text-base">
                        {a.section}
                      </p>
                    </blockquote>
                    
                    <figcaption className="font-medium">                
                      <div
                        className="text-slate-700 dark:text-slate-500">
                        {a.date}
                      </div>
                    </figcaption>
                  </div>

                </div>
              </a>
            ))}
            </div>
            <p className="text-red-600 text-center">Pronto subiré los desafíos y más...</p> 
        </div>
      </div>
    </>
  )
};