const skillsData = [
  { tecnology: 'HTML', percentage: 70 },
  { tecnology: 'CSS', percentage: 60 },
  { tecnology: 'JS', percentage: 35 },
  { tecnology: 'REACT', percentage: 30 },
  { tecnology: 'SQL', percentage: 25 },
  { tecnology: 'NODE', percentage: 20 }
];

function Skills() {

  return (
    <>
      <p className="text-gray-300 p-5 tracking-widest text-base sm:text-2xl">Habilidades</p>
      <div className="p-2">
        <div className="space-y-4">
          {skillsData.map((skill) => (
            <div 
              key={skill.tecnology}
              style={{width: `${skill.percentage}%`}}
              className="text-white bg-gray-700 p-0.5 text-center rounded shadow-sm shadow-cyan-700">
              <span>{skill.tecnology} {skill.percentage}%</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Skills;