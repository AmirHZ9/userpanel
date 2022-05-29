import React  from 'react'
import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import SidebarSetting from "./Components/SidebarSetting";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import DasboardStatics from "./Components/DasboardStatics";
import GlobalLocation from "./Components/GlobalLocation";
function App() {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <DasboardStatics />
      <SidebarSetting />
      <GlobalLocation/>
    </div>
  );
}

export default App;
