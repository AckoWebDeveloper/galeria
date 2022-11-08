import './App.css';
import Slider from './components/slide/Slider';

import Sound from './components/sound/Sound';

function App() {
  return (
    <div className="App">

      <div class='sound'><><Sound /></></div>
      <header className="App-header">     
      <Slider />
      </header>
  </div>
        
  );
}

export default App;
