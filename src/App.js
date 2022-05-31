import React  from 'react'
import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import Sidebar from "./Components/Sidebar";
import MainDashboard from './Components/MainDashboard';
function App() {
  return (
    <div>
      <Sidebar />
      <MainDashboard/>
      
    </div>
  );
}

export default App;
