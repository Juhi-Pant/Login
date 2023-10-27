import PUimage from './images/pu-logodark.png'
import Navbar from './components/navbar'
import Login from './components/login'
import './App.css';

function App() {
  return (
    <div>
      <Navbar img={PUimage}/>
      <Login/>
    </div>
  );
}

export default App;
