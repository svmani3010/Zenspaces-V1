import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Zenjourney } from "./components/Zenjourney";
import Trywebapp from "./components/Trywebapp";
import { AboutSection } from "./components/AboutSection";
import { Solutions } from "./components/Solutions";
import { Blogs } from "./components/Blogs";
import { Contactus } from "./components/Contactus";
import { Howitworks } from "./components/Howitworks";
// import { FaRocket } from "react-icons/fa";

/* CODIA_HYBRID_LAYOUT_KERNEL_START */
export default function App() {
  return (
    <div
      data-codia-role="app_shell"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: 1920,
        margin: "0 auto",
        background: "#fff",
        overflowX: "hidden",
      }}
    >
      <div
        data-codia-role="scroll_content"
        style={{ flex: 1, overflowY: "auto", minHeight: 0 }}
      >
        <div data-codia-role="shared_rail">
          <Navbar />

          {/* Added IDs to every section so the Navbar can scroll to them */}
          <div id="home">
            <Home />
          </div>
          <div id="zenjourney">
            <Zenjourney />
          </div>
          <div id="trywebapp">
            <Trywebapp />
          </div>
          <div id="about">
            <AboutSection />
          </div>
          <div id="howitworks">
            <Howitworks />
          </div>
          <div id="solutions">
            <Solutions />
          </div>
          <div id="blogs">
            <Blogs />
          </div>
          <div id="contact">
            <Contactus />
          </div>
        </div>
      </div>
    </div>
  );
}
