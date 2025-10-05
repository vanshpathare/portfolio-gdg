const _4Skills = () => {
  const skills = [
    {
      category: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Tailwind"],
    },
    { category: "Database", items: ["MySQL"] },
    { category: "Other Tools", items: ["Figma (Basics)", "Canva"] },
  ];

  return (
    <section className="p-5 SKILLS">
      <h2
        className="text-center"
        style={{ fontSize: "40px", textAlign: "center" }}
      >
        Skills
      </h2>
      <div
        className="d-flex flex-wrap justify-content-center gap-4 mt-4"
        style={{
          fontSize: "20px",
          margin: "0",
          width: "150%",
          textAlign: "justify",
        }}
      >
        {skills.map((skillGroup, index) => (
          <div key={index} className="card p-3" style={{ width: "18rem" }}>
            <h5 className="text-center" style={{ marginBottom: "0px" }}>
              {skillGroup.category}
            </h5>
            <ul style={{ paddingLeft: "35px", marginTop: "7px" }}>
              {skillGroup.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default _4Skills;
