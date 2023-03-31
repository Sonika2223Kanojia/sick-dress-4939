import './App.css';
import { HStack} from "@chakra-ui/react"
import Navbar from "./Components/Navbar"
import SubNavbar from './Components/SubNavbar';
import AllRouter from './Components/AllRouter';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <SubNavbar  />
      <AllRouter/>
    </div>
  );
}

export default App;
