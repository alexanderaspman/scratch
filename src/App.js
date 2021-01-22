import './App.css';
import Top from './components/Header'
import { withStyles } from "@material-ui/styles";
import Intro from "./Intro";
import Divar from './components/Divar'
import 'react-slideshow-image/dist/styles.css'


function App() {
  return (
    <div className="App">
      <div className="topContainer">      <Top/>

</div>
    </div>

  );
}

export default App;
