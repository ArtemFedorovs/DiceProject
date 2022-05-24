import './normalize.css';
import './App.css';
import GameTable from './Components/GameTable';
import ControlPanel from './Components/ControlPanel';




export function App() {
 
  return (
    <div className='main-container'>
      <GameTable/>
      <ControlPanel/>
    </div>

  );
}

