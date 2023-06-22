import Navbar from '../components/Navbar';

export default function Home() {

  return (
    <>
      <div className="bg-color pt-8">
        <Navbar />
        <div className=" min-h-views text-white tracking-widest grid grid-cols-1 items-center justify-items-center">
        
          <div>
            <p className="tracking-widest sm:text-2xl">¡Hola! Soy</p><br />
            <p className="text-white font-bold text-2xl sm:text-5xl title-my-name">JOANNY WERNER</p>
            <p className="tracking-tighter sm:text-2xl">Desarrollador Web</p><br />
            <a 
              className="bg-cyan-600 border-cyan-600 border-2 rounded p-2 hover:bg-slate-700 transition duration-700"
              href='https://drive.google.com/file/d/1D6LUxy6Jf_bU7ZhK62MqDn_HrATOVz3m/view?usp=sharing'
              target="_blank">
                Descargar CV
            </a>
          </div>
        </div>
      </div>
    </>
  )
}