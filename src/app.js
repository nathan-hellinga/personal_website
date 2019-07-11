import React from 'react';
import Footer from './components/footer';
import NavBar from './components/navbar'
import Home from './pages/home'
import Resume from './pages/resume'


class App extends React.Component {
  
  constructor() {
    super();
    this.changePage = this.changePage.bind(this);
      this.state = {
          page: 'Home'
      };
  }
  
  render() {
    return(
      <div className={'App'}>
        <NavBar changePage={this.changePage}/>
          {this.state.page === 'Home' ? <Home changePage={this.changePage}/>: null}
          {this.state.page === 'Resume' ? <Resume changePage={this.changePage}/>: null}
        <Footer/>
      </div>
    )
  }
  
  
  changePage(page) {
    this.setState({page:page});
    window.scrollTo(0, 0);
  }
  
  
}
export default App;
