import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import Main from './Components/Main';

import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import DasboardStatics from './Components/DasboardStatics';
function App() {
  return (
   <div >
     <Sidebar/>
     <Navbar/>
    <DasboardStatics/>

     <Main/>
    
   </div>
  );
}

export default App;
