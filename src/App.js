import Sidebar from "./components/topbar/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css"
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Brasil from "./pages/countries/Brasil";
import Eua from "./pages/countries/eua/Eua";
import India from "./pages/countries/india/India";
import Reino from "./pages/countries/reino/Reino";
import Japao from "./pages/countries/japao/Japao";
import Coreia from "./pages/countries/kor/Coreia";

function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <div className="infos">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/brasil" element={<Brasil/>}/>
            <Route path="/eua" element={<Eua/>}/>
            <Route path="/india" element={<India/>}/>
            <Route path="/reino" element={<Reino/>}/>
            <Route path="/japao" element={<Japao/>}/>
            <Route path="/coreia" element={<Coreia/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
