import { VscDebugBreakpointLog } from "react-icons/vsc";

const _3Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "This very portfolio project!",
      link: "",
    },
    {
      title: "Amazon-Hope_Page",
      description: "Amazon home page using HTML ans CSS only.",
      link: "https://vanshpathare.github.io/Amazon_Home_page/",
    },
    {
      title: "SIH UI/UX designs",
      description: "Built the UI/UX for our SIH project!",
      link: "https://www.canva.com/design/DAGyoI9_TVw/vCe2uoX_tnYxHBYiCTrlWQ/edit?utm_content=DAGyoI9_TVw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
    {
      title: "Amazon_Clone",
      description:
        "A Clone of Amazon made using with HTML and JavaScript. Includes delivery, cart, tracking,etc. ",
      link: "https://vanshpathare.github.io/Amazon_Clone/",
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
