import React from 'react';
import Footer from './components/footer';
import NavBar from './components/navbar'
import Home from './pages/home'


class App extends React.Component {
  
  constructor() {
    super();
    
    this.changePage = this.changePage.bind(this);
  }
  
  render() {
    return(
      <div className={'App'}>
        <NavBar/>
        <Home changePage={this.changePage}/>
        <Footer/>
      </div>
    )
  }
  
  
  changePage(page) {
    console.log(page);
  }
  
  
}
export default App;
