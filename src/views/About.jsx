function About() {

  return (
    <>
      <div className="min-h-views">
        <div className="grid grid-cols-1 p-3 gap-10 md:grid-cols-2">
          
          <div className="text-white">
            <p className="text-white font-bold text-2xl sm:text-5xl title-about">Sobre mí</p>
            <p>
              Hola, soy Joanny Werner, un desarrollador web apasionado por crear proyectos de diseño  que mejore la experiencia del usuario en su actividad diaria.
            </p>
            <p>
              Estoy constantemente actualizando mis conocimientos para mantenerme al día con las últimas tecnologías, entusiasmado en crecer en el campo de la tecnología y abierto a oportunidades que me permitan aplicar mis habilidades y contribuir al éxito de un equipo.
            </p>
          </div>
        
          <div class="space-y-4 text-sm">
            <p 
              className="text-white tracking-widest text-2xl sm:text-3xl">
              Habilidades
            </p>
            <div class="w-3/5 bg-white shadow rounded">
              HTML5 <span>60%</span>
            </div>
            <div class="w-1/2 bg-white shadow rounded">
              CSS3 <span>50%</span>
            </div>
            <div class="w-1/3 bg-white shadow rounded">
              JS <span>35%</span>
            </div>
            <div class="w-1/4 bg-white shadow rounded">
              React <span>30%</span>
            </div>
            <div class="w-5/12 bg-white shadow rounded">
              SQL <span>45%</span>
            </div>
            <div class="w-1/4 bg-white shadow rounded">
              Node <span>20%</span>
            </div>
          </div>
        
        </div>
      </div>
    </>
  )
}

export default About;