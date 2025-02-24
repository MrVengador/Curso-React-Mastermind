import logo from './logo.svg';
import './App.css';
import Tablero from './Components/Tablero';
import Navbar from './Components/Navbar';


function App() {


  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Tablero /> {/* Pasa size como prop */}
      </header>
    </div>
  );
}


export default App;
