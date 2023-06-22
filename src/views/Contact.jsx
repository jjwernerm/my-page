import { useState } from "react";//Importo y utilizo el hook useState de React para declarar múltiples estados.

import Navbar from '../components/Navbar';

export default function Contact() {

  //Declaro los estado 'name', 'email' y 'comment' utilizando el hook useSate, cada estado lo inicializo con un valor vacío ("") y proporciono una función para actualizar el estado: 'setName', 'setEmail' y 'setComment'
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  
  //Declaro el estado 'warning' utilizando el hook useSate, el estado lo inicializo con un array vacío ([]) y proporciono una función para actualizar el estado: 'setWarning'
  const [warning, setWarning] = useState([]);

  //Defino la dunción handleSubmit que se ejecutará cuando se envíe el formulario, esta función toma un evento como argumento y llamo a event.preventDefault() para evitar que el formulario se borre cuando la página se recargue
  const handleSubmit = (event) => {
    event.preventDefault();

    let warnings = [];
    
    //Realizo varias comprobaciones para verificar si los campos 'name', 'email' y 'comment' están vacíos. Si alguno de ellos está vacío, se agrega un mensaje de error correspondiente al array 'warnings' y se asigna un mensaje de error específico a la propiedad correspondiente en el objeto warnings para luego usarlo en el form
    if (name === "") {
      warnings.push("Bug in name");
      warnings.name = "Olvidaste ingresar tu Nombre.";
    }
    if (email === "") {
      warnings.push("Bug in email");
      warnings.email = "Olvidaste ingresar tu Correo Electrónico.";
    }
    if (comment === "") {
      warnings.push("Bug in comment");
      warnings.comment = "Olvidaste ingresar tu Comentario.";
    }
    setWarning(warnings);//Actualizo el estado warning con el array warnings

    if (warnings.length === 0) { //Verifico que el array sea igual a cero para enviar el mensaje de envío y borrar el formulario
      warnings.message = "Gracias por escribirme, pronto nos conoceremos.";
      setName ('');
      setEmail ('');
      setComment ('');
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

                <div className="lg:columns-2">
                  <div className="mb-10">
                    <input
                      type="text"
                      placeholder="Nombre"
                      className={`text-white border-cyan-800 bg-inherit w-full rounded border-b border-e focus:outline-none focus:border-b-4 focus:border-e-4 lg:m-0 ${
                        warning.name ? "border-red-500" : "border-e"}`}
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                    />
                    {/* 
                        1. con el evento onChange detecto si existe un cambio
                        2. defino un array function anónima con el argumento event que se ejecutará cuando ocurra un cambio
                        3. dentro de la función llamo a 'setName' pasándolo como argumento con el event.target
                        4. event.target se refiere al elemento que disparó el evento (en este caso, el <input>), y .value es la propiedad que contiene el valor actual del campo de entrada
                        Resumen: En resumen, esta línea de código establece una función de controlador de eventos onChange en un elemento <input> que actualiza el estado 'name' utilizando la función 'setName' cuando el usuario realiza cambios en el campo de entrada. Cada vez que el valor del campo cambie, se actualizará el estado name con el nuevo valor ingresado por el usuario.
                    */}
                    {warning.name && (<p className="text-red-500 text-xs">{warning.name}</p>)}
                    {/* 
                      Mediante esta expresión de JS:
                      1. accedo a la propiedad 'name' del objeto warning
                      2. utilizo el operador lógico && para realizar una evaluación cortocicuitada, si la expresión de la izquierda es true se renderiza el elemento <p> por lo que devuelve el resultado de la derecha, en caso contrario, se detiene la evaluación
                    */}
                  </div>

                  <div className="mb-10">
                    <input
                      type="email"
                      placeholder="Correo Electrónico"
                      className={`text-white border-cyan-800 bg-inherit w-full rounded border-b border-e focus:outline-none focus:border-b-4 focus:border-e-4 ${
                        warning.email ? "border-red-500" : "border-e"}`}
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                    {/* 
                        1. con el evento onChange detecto si existe un cambio
                        2. defino un array function anónima con el argumento event que se ejecutará cuando ocurra un cambio
                        3. dentro de la función llamo a setEmail pasándolo como argumento con el event.target
                        4. event.target se refiere al elemento que disparó el evento (en este caso, el <input>), y .value es la propiedad que contiene el valor actual del campo de entrada
                        Resumen: En resumen, esta línea de código establece una función de controlador de eventos onChange en un elemento <input> que actualiza el estado 'email' utilizando la función 'setEmail' cuando el usuario realiza cambios en el campo de entrada. Cada vez que el valor del campo cambie, se actualizará el estado name con el nuevo valor ingresado por el usuario.
                    */}
                    {warning.email && (<p className="text-red-500 text-xs">{warning.email}</p>)}
                    {/* 
                      Mediante esta expresión de JS:
                      1. accedo a la propiedad 'email' del objeto warning
                      2. utilizo el operador lógico && para realizar una evaluación cortocicuitada, si la expresión de la izquierda es true se renderiza el elemento <p> por lo que devuelve el resultado de la derecha, en caso contrario, se detiene la evaluación
                    */}
                  </div>
                </div>

                <textarea
                  type="email"
                  placeholder="Comentario"
                  className={`text-white border-cyan-800 bg-inherit w-full rounded border-b border-e focus:outline-none focus:border-b-4 focus:border-e-4 min-h-full ${
                    warning.comment ? "border-red-500" : "border-e"}`}
                  value={comment}
                  onChange={(event) => setComment(event.target.value)}
                  
                ></textarea>
                {/* 
                        1. con el evento onChange detecto si existe un cambio
                        2. defino un array function anónima con el argumento event que se ejecutará cuando ocurra un cambio
                        3. dentro de la función llamo a 'setComment' pasándolo como argumento con el event.target
                        4. event.target se refiere al elemento que disparó el evento (en este caso, el <input>), y .value es la propiedad que contiene el valor actual del campo de entrada
                        Resumen: En resumen, esta línea de código establece una función de controlador de eventos onChange en un elemento <input> que actualiza el estado 'comment' utilizando la función 'setComment' cuando el usuario realiza cambios en el campo de entrada. Cada vez que el valor del campo cambie, se actualizará el estado name con el nuevo valor ingresado por el usuario.
                */}
                {warning.comment && (<p className="text-red-500 text-xs">{warning.comment}</p>)}
                
                {/* 
                      Mediante esta expresión de JS:
                      1. accedo a la propiedad 'comment' del objeto warning
                      2. utilizo el operador lógico && para realizar una evaluación cortocicuitada, si la expresión de la izquierda es true se renderiza el elemento <p> por lo que devuelve el resultado de la derecha, en caso contrario, se detiene la evaluación
                */}

                <div className="flex justify-center mt-10">
                  <input
                  type="submit"
                  value="Enviar"
                  className="text-white bg-cyan-600 border-cyan-600 border-2 rounded p-2 hover:bg-slate-700 transition duration-700 cursor-pointer"
                  />
                </div>
                <div>
                  {warning.message && (<p className="bg-gray-300 text-green-600 font-bold text-center mt-5 p-2 rounded">{warning.message}</p>)}
                  {/* 
                      Mediante esta expresión de JS:
                      1. accedo a la propiedad 'message' del objeto warning
                      2. utilizo el operador lógico && para realizar una evaluación cortocicuitada, si la expresión de la izquierda es true se renderiza el elemento <p> por lo que devuelve el resultado de la derecha, en caso contrario, se detiene la evaluación
                    */}
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}