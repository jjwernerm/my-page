import Navbar from '../components/Navbar';
import AboutMy from '../components/AboutMy';
import Skill from '../components/Skill';

export default function About() {

  return (
    <>
      <div className="bg-color pt-8">
        <Navbar />
        <div className="min-h-views pt-8 grid gap-3 lg:grid-cols-2">
          <AboutMy />
          <Skill />
        </div>
      </div>
    </>
  )
}