import { useState } from "react";

import Navbar from '../components/Navbar';

export default function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  
  const [warning, setWarning] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    let warnings = [];
    
    if (name === "") {
      warnings.push("Olvidaste ingresar tu Nombre.");
    }
    if (email === "") {
      warnings.push("Olvidaste ingresar tu Correo Electrónico.");
    }
    if (comment === "") {
      warnings.push("Olvidaste ingresar tu Comentario.");
    }
    setWarning(warnings);

    if (warnings.length === 0) { //Si no hay errores, doy el mensaje de envío
      console.log("Gracias por escribirme, pronto nos conoceremos.");
    }
  };

  return (
    <>
      <div className="bg-color pt-8">
        <Navbar />
        <div className="min-h-views pt-8">
          <p 
            className="text-white title-about-my p-2 text-center font-bold text-2xl sm:text-5xl">Contáctame
          </p>
          <p 
            className="text-white p-2 text-center">Pronto me pondré en contacto contigo para conocernos.
          </p>
          
          <div className="flex justify-center mt-5">
            <div className="bg-slate-700 w-4/5 rounded-lg">          
              <form
              onSubmit={handleSubmit}
              className="p-10">

                <div className="pb-10 grid lg:grid-cols-6">
                  <div className="gap-10 lg:flex lg:col-start-2 lg:col-span-4">
                    <input
                    type="text"
                    placeholder="Nombre"
                    className="text-white border-cyan-800 bg-inherit w-full rounded border-b border-e focus:outline-none focus:border-b-4 focus:border-e-4 mb-8 lg:m-0"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    />

                    <input
                    type="email"
                    placeholder="Correo Electrónico"
                    className="text-white border-cyan-800 bg-inherit w-full rounded border-b border-e focus:outline-none focus:border-b-4 focus:border-e-4"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>
                </div>

                <div className="grid lg:grid-cols-6">
                  <div className="gap-10 lg:flex lg:col-start-2 lg:col-span-4">
                    <textarea
                    type="email"
                    placeholder="Comentario"
                    className="text-white border-cyan-800 bg-inherit w-full rounded border-b border-e focus:outline-none focus:border-b-4 focus:border-e-4 min-h-full"
                    value={comment}
                    onChange={(event) => setComment(event.target.value)}
                    ></textarea>
                  </div>
                </div>

                <div className="flex justify-center mt-10">
                  <input
                  type="submit"
                  value="Enviar"
                  className="text-white bg-cyan-600 border-cyan-600 border-2 rounded p-2 hover:bg-slate-700 transition duration-700 cursor-pointer"
                  />
                </div>

              </form>
            </div>
          </div>
        </div>
        {warning.map((warn, index) => (
            <p className="text-red-500" key={index} > 
              - {warn}
            </p>
          ))}        
      </div>
    </>
  )
}