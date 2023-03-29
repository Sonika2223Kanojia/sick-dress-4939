import './App.css';
import { HStack} from "@chakra-ui/react"
import Navbar from "./Components/Navbar"
import SubNavbar from './Components/SubNavbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HStack>
      <SubNavbar  />
      </HStack>
    </div>
  );
}

export default App;
