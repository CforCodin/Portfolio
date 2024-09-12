import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import SocialMediaSidebar from "./components/SocialMediaSidebar/SocialMediaSidebar";




function App() {
  return( <div className="bg-[#171d32] h-auto w-full overflow-hidden">
       <Navbar />
       <Home />
       <About />
       <Skills />
       <Projects />
       <Footer />
       <SocialMediaSidebar />
    </div>);
}

export default App
