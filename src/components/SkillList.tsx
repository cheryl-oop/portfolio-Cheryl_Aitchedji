import "./SkillList.css";

type Skill = {
  title: string;
  items: string[];
};

const skills: Skill[] = [
  {
    title: "Frontend",
    items: ["Html", "CSS", "Javascript", "Typescript", "React", "Vue.js"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "PHP", "MongoDB", "MySQL"],
  },
  {
    title: "Design",
    items: [
      "Figma",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe Premier Pro",
      "Adobe After Effects",
    ],
  },
];

export const SkillsList = () => {
  return (
    <section className="skills-section">
      <h3 className="skills-heading">What I do?</h3>
      <p className="desc-technologies">
        Current technologies I use for my projects
      </p>
      <ul className="skills-list">
        {skills.map((skill) => (
          <li key={skill.title} className="skill-row">
            <h4 className="skill-title">{skill.title}</h4>
            <p className="skill-items">{skill.items.join(" · ")}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
