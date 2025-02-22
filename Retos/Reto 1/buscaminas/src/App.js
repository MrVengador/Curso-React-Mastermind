import logo from './logo.svg';
import './App.css';
import Tablero from './Components/Tablero';
import Navbar from './Components/Navbar';
import Timer from './Components/Timer';


function App() {
  const size = 10; // Define el tamaño del tablero //MAX 10
  let score = 0;
  let time = <Timer MaxTime={60} />; // Tiempo en segundos

  console.log("timer: ", (time));


  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Tablero size={size} score={score} time={time} /> {/* Pasa size como prop */}
      </header>
    </div>
  );
}


export default App;
