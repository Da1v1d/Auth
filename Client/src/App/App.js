import './App.css';
import {Switch,Route} from "react-router-dom"
import Routes from '../Routes/Routes'
import {BrowserRouter as Router} from "react-router-dom" 
import DialogsComponent from '../components/Dialog/DialogsComponent';


const App = () => {

  return (     
    <div className='App'>
      <DialogsComponent />
        <Router>
          <Routes />     
        </Router>
    </div>
  );
}

export default App;