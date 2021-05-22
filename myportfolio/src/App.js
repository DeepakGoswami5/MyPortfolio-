import './App.scss';
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage'
import {Switch,Route} from 'react-router-dom';
import AboutPage from './components/AboutPage/AboutPage';
import Experience from './components/Experience/Experience';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <NavBar/>
      </div> 
      <div className="main-content">
        <div className="content">
        <Switch>
          <Route path="/" exact>
            <HomePage/>
          </Route>
          <Route path="/about" exact>
            <AboutPage/>
          </Route>
          <Route path="/experience" exact>
            <Experience/>
          </Route>
          <Route path="/work" exact>
            <Work/>
          </Route>
          <Route path="/contact" exact>
            <Contact/>
          </Route>
        </Switch>
          
        </div>
      </div>
    </div>
  );
}

export default App;
