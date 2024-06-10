import "./App.css";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import WorkExp from "./pages/workExp/WorkExp";
import Education from "./pages/Educations/Education";
import Techstack from "./pages/Techstack/Techstack";
import Projects from "./pages/Projects/Projects";
import Layout from "./components/Layout/Layout";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import Tada from "react-reveal/Tada";
import MobileNav from "./components/MobileNav/MobileNav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <ToastContainer />
        <MobileNav />
        <Layout />
        <div className="container">
          <About />
          <Education />
          <Techstack />
          <Projects />
          <WorkExp />
          <Contact />
        </div>
        <div className="footer pb-3 ms-3">
          <Tada>
            <h4 className="mr-2 text-center">Made With Nikhil &copy; 2024</h4>
          </Tada>
        </div>
      </div>
      <ScrollToTop
        color="#fff"
        smooth
        style={{ backgroundColor: "#1e1e2c", borderRadius: "50px" }}
      />
    </>
  );
}

export default App;
