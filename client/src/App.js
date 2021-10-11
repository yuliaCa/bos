// import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';



import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import ContactPage from './pages/ContactPage';
import ProfilePage from './pages/ProfilePage';
import TeamPage from './pages/TeamPage';

import Navbar from './components/NavBar/Navbar';

// Route component checks all paths and returns ALL results that start with matching path. This would result in nested pages. Not always the desired outcome.

// Switch component helps us navigate to the path that matches EXACTLY the path indicated.

function App() {
  return (
    <div className="App">


      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>
          <Route path="/features">
            <FeaturesPage />
          </Route>
          <Route path="/team">
            <TeamPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/profile">
            <ProfilePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
