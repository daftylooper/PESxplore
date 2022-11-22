import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './pages/homePage';
import Navbar from './components/navbar';
import FaqPage from './pages/faqPage';
import NavPage from './pages/navigatepage';
import Footer from './components/footer';
import FacultyPage from './pages/facultyPage';
import ResourcesPage from './pages/resources';

function App() {
  return (
    <Router>
      <Navbar/>
      <div>
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route exact path="/navigate">
            <NavPage/>
          </Route>
          <Route exact path="/faculty">
            <FacultyPage/>
          </Route>
          <Route exact path="/faq">
            <FaqPage/>
          </Route>
          <Route exact path="/resources">
            <ResourcesPage/>
          </Route>
        </Switch>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
