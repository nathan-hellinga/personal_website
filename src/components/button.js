import React from 'react';
import './footer.css';
import './button.css';


class Button extends React.Component {
  
  render() {
    return(
      <div className={'button'} onClick={this.props.clicked}>
        {this.props.text}
      </div>
    )
  }

  
  
}
export default Button;
