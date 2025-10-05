import "./App.css";
import _0Image from "./components/_0Image";
import _1Header from "./components/_1Header";
import _2About from "./components/_2About";
import _3Projects from "./components/_3Projects";
import _4Skills from "./components/_4Skills";
import _5Contact from "./components/_5Contact";

function App() {
  return (
    <div className="App_component">
      <div
        style={{
          display: "flex",
          padding: "50px",
        }}
      >
        <_0Image />
        <div style={{ marginLeft: "30px", marginTop: "0px" }}>
          <_1Header />
          <_2About />
        </div>
      </div>
      <div style={{ display: "flex", padding: "50px" }}>
        <div style={{ flex: 1, marginRight: "5px" }}>
          <_3Projects />
        </div>
        <div style={{ flex: 1, marginLeft: "5px" }}>
          <_4Skills />
        </div>
      </div>

      <_5Contact />
    </div>
  );
}

export default App;
