import './App.css'
import {Navbar} from "./Component/navbar/Navbar.jsx";
import Home from "./Component/home/Home.jsx";
import About from "./Component/about/About.jsx";
import Appointment from "./Component/appointment/Appointment.jsx";
import Services from "./Component/service/Services.jsx";
import Blogs from "./Component/blog/Blogs.jsx";
// import {Layout} from "./Component/layout/Button.jsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <div className="text-center text-black items-center p-0 m-0">
            <Navbar />
            <main>
                <div id="home">
                    <Home/>
                </div>

                <div id="about">
                    <About/>
                </div>

                <div id="service">
                    <Services/>
                </div>

                <div id="appointment">
                    <Appointment/>
                </div>

                <div id="blog">
                    <Blogs/>
                </div>
            </main>

            MedVualt
        </div>
    </>
  );
}

export default App
