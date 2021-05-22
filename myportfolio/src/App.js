import './App.scss';
import NavBar from './components/NavBar/NavBar';
import HomePage from './Pages/HomePage/HomePage'
import {Switch,Route} from 'react-router-dom';
import AboutPage from './Pages/AboutPage/AboutPage';
import Experience from './Pages/Experience/Experience';
import Work from './Pages/Work/Work';
import Contact from './Pages/Contact/Contact';
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
