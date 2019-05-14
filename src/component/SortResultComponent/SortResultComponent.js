import React, { Component } from 'react';
import './SortResultComponent.css';

class SortResultComponent extends Component {
  state = {
    hideElement: true
  }

  toggleSortBarContent = () => {
    this.setState((previousState) => {
      return { hideElement: !previousState.hideElement };
    });
  }

  render() {
    return (
      <div className="sort-result-container">
        <i className="fas fa-ellipsis-v" onClick={this.toggleSortBarContent}></i>
        <div className={`sort-bar-content ${this.state.hideElement? 'hide-element' : null}`}>
          <section>
            <div onClick={()=>this.props.sortNewsBy('latest')}>Sort by Latest news</div>
            <div onClick={()=>this.props.sortNewsBy('oldest')}>Sort by Oldest new</div>
            <div onClick={()=>this.props.showOldNews(1)}>Show 1 day old news</div>
            <div onClick={()=>this.props.showOldNews(7)}>Show 1 week old news</div>
            <div onClick={()=>this.props.showOldNews(30)}>Show 1 month old news</div>
          </section>
        </div>
      </div>
    );
  }
}

export default SortResultComponent;