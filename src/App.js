import Shop from "../src/components/shop"
import Laptop from '../src/components/hooksContainer'
import './App.css';
import Mobile from "../src/components/mobile"
import MobileHook from "./components/mobileHooks";
import UserList from '../src/components/users'
function App() {
  return (
    <div className="App">
      <UserList/>
     <Shop/>
      <MobileHook/>
      <Laptop/>
  <Mobile/>
    </div>
  );
}

export default App;
