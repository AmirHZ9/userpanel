import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import Main from './Components/Main';

import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
function App() {
  return (
   <div >
     <Sidebar/>
     <Navbar/>
     <div>

     <Main/>
     </div>
   </div>
  );
}

export default App;
