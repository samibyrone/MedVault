// import { useState } from 'react'
import './App.css'
import {Navbar} from "./Component/navbar/Navbar.jsx";
import {Layout} from "./Component/layout/Layout.jsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <div className="text-center text-black items-center p-0 m-0">
            <Navbar />
            <Layout />
            MedVualt
      </div>
    </>
  );
};

export default App
