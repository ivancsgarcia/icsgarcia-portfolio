import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import useDarkMode from "./hooks/useDarkMode";
import BackToTopButton from "./components/BackToTopButton";

function App() {
    useDarkMode();
    return (
        <>
            <div className="relative container mx-auto">
                <Navbar />
                <Hero />
                <AboutMe />
                <Projects />
                <Contact />
                <Footer />
                <div className="fixed right-4 bottom-4">
                    <BackToTopButton />
                </div>
            </div>
        </>
    );
}

export default App;
