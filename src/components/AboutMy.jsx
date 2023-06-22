export default function AboutMy() {

  return (
    <>
      <div>
        <p className="text-white p-2 font-bold text-2xl sm:text-5xl title-about-my">Sobre mí</p>
        <div className="text-gray-300 p-5">
          <blockquote>
            Hola, soy <span class="before:block before:absolute before:-inset-0 before:-skew-y-6 before:bg-cyan-800 relative inline-block">
              <span class="relative text-white font-bold"> Joanny Werner </span>
            </span> un desarrollador web apasionado por crear proyectos de diseño  que mejore la experiencia del usuario en su actividad diaria.
          </blockquote>
          <br />
          <p>
            Estoy constantemente actualizando mis conocimientos para mantenerme al día con las últimas tecnologías, entusiasmado en crecer en el campo de la tecnología y abierto a oportunidades que me permitan aplicar mis habilidades y contribuir al éxito de un equipo.
          </p>
        </div>
      </div>
    </>
  )
}