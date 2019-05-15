import React, { Component } from 'react';
import './MenuBarComponent.css';

class MenuBarComponent extends Component {
  state = {
    hideElement: true
  }

  toggleMenuBarContent = () => {
    this.setState((previousState) => {
      return { hideElement: !previousState.hideElement };
    });
  }

  render() {
    return (
      <div className='menu-bar-container'>
        <i className='fas fa-bars' onClick={this.toggleMenuBarContent}></i>
        <div className={`menu-bar-content ${this.state.hideElement? 'hide-element' : null}`}>
        <i className="fas fa-times closeIcon" onClick={this.toggleMenuBarContent}></i>
          <section>
            <div>About</div>
            <div>Help</div>
            <div>Logout</div>
          </section>
        </div>
      </div>
    );
  }
}

export default MenuBarComponent;
