import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import Main from "./Components/Main";
import SidebarSetting from "./Components/SidebarSetting";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import DasboardStatics from "./Components/DasboardStatics";
function App() {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <DasboardStatics />
       <SidebarSetting/>
      <Main />
    </div>
  );
}

export default App;
