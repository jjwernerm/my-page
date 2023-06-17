import AboutMy from '../components/AboutMy';
import Skill from '../components/Skill';

export default function About() {

  return (
    <>
      <div className="min-h-views grid gap-3 lg:grid-cols-2">
        <AboutMy />
        <Skill />
      </div>
    </>
  )
}