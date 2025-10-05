import { VscDebugBreakpointLog } from "react-icons/vsc";

const _3Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "This very portfolio project!",
      link: "",
    },
    {
      title: "Todo App",
      description: "A simple React todo app with hooks.",
      link: "https://flask-todo-app-vansh.onrender.com/",
    },
    {
      title: "SIH UI/UX designs",
      description: "Built the UI/UX for our SIH project!",
      link: "https://www.canva.com/design/DAGyoI9_TVw/vCe2uoX_tnYxHBYiCTrlWQ/edit?utm_content=DAGyoI9_TVw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
    {
      title: "Tabloid using canva",
      description:
        "Made a multiple page tabloid for which I got prize in 'Aveeshan' competition!",
      link: "https://www.canva.com/design/DAGXsO9AAdc/y_8vM2wgm1ySIKDUkruiJA/edit?utm_content=DAGXsO9AAdc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
  ];

  return (
    <section className="p-5 PROJECTS">
      <h2
        className="text-center"
        style={{ fontSize: "40px", textAlign: "center" }}
      >
        Projects
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
        {projects.map((project, index) => (
          <div
            key={index}
            className="card p-3"
            style={{ flex: 1, minWidth: "40%" }}
          >
            <h5 style={{ marginBottom: "0.20rem" }}>
              <VscDebugBreakpointLog />
              {project.title}
            </h5>
            <p style={{ marginTop: "0", marginBottom: "0" }}>
              {project.description}
            </p>
            <a href={project.link}>Click to view</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default _3Projects;
