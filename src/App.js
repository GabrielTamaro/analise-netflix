import Sidebar from "./components/topbar/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css"

function App() {
  return (
    <div>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <div className="others"></div>
      </div>
    </div>
  );
}

export default App;