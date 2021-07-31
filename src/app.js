import React from 'react';
import Footer from './components/footer';
import NavBar from './components/navbar'
import Home from './pages/home'
import Resume from './pages/resume'
import {BrowserRouter as Router, Route} from "react-router-dom";
//TRACKING
import ReactGA from 'react-ga';
import ScrollToTop from "./components/ScrollToTop";
import Portfolio from "./pages/portfolio";


export default class App extends React.Component {

  constructor() {
    super();
    ReactGA.initialize('UA-143798056-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }


  render() {

    return (
      <div className={'App'}>
        <Router>
          <ScrollToTop>
            <div>
              <NavBar/>
              <Route path="/" exact render={(props) => <Home {...props} />}/>
              <Route path="/resume" exact render={(props) => <Resume {...props} />}/>
              <Route path="/portfolio" exact render={(props) => <Portfolio {...props} />}/>
              <Footer/>
            </div>
          </ScrollToTop>
        </Router>
      </div>
    )
  }

}