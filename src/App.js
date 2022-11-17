import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './pages/homePage';
import Navbar from './components/navbar';
import FaqPage from './pages/faqPage';
import NavPage from './pages/navigatepage';
import facultyPage from './pages/facultyPage';
import Footer from './components/footer';

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
            <facultyPage/>
          </Route>
          <Route exact path="/faq">
            <FaqPage/>
          </Route>
        </Switch>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
