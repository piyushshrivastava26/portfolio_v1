import Footer from "./components/layout/Footer"
import Navbar from "./components/layout/Navbar"
import About from "./sections/About"
import Contac from "./sections/Contac"
import Hero from "./sections/Hero"
import Project from "./sections/Project"

const App = () => {
    return (
        <div className="bg-black w-full min-h-screen">

            <Navbar />
            <Hero/>
            <About />
            <Project />
            <Contac />
            <Footer />

        </div>
    )
}

export default App
