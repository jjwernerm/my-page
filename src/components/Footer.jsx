import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithubAlt } from '@fortawesome/free-brands-svg-icons';

function Footer() {

  return (
    <>
      <div className="bg-gray-800 flex flex-col items-center min-h-footer">
        <img
          className="h-24 w-24"
          src="https://res.cloudinary.com/dqjnzfsp6/image/upload/v1685731491/logoJoa_urelec.png"
          alt="My Logo"
        />
        <div className="text-gray-800 w-full flex justify-center gap-5 mb-5">
          <a 
            className="bg-gray-300 h-10 w-10 p-2 text-center rounded-full hover:bg-gray-800 hover:text-gray-300 hover:border-2 hover:font-bold" 
            href='https://www.linkedin.com/in/joannywerner/'
            target="_blank">
              <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
          className="bg-gray-300 h-10 w-10 p-2 text-center rounded-full hover:bg-gray-800 hover:text-gray-300 hover:border-2 hover:font-bold" 
          href='https://github.com/jjwernerm'
          target="_blank"><FontAwesomeIcon icon={faGithubAlt} /></a>
        </div>
        <div className=" text-gray-300 text-center">©Copyright 2023 joannywerner. Todos los derechos reservados</div>
      </div>
    </>
  )
}

export default Footer;