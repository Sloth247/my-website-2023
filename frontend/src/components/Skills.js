import './Skills.scss';

export default function Skills({ skills }) {
  return (
    <section className="main__skills" id="skills">
      <div className="main__skills--inner">
        <h2 className="title">Skills</h2>

        <div className="main__skills--container">
          {skills.map((skill) => (
            <div className="main__skills--item">
              <img
                src={skill.image}
                alt=""
                aria-hidden="true"
                className="main__skills--icon"
              />
              <p className="main__skills--name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
