import React, { Component } from 'react';
import AvatarComponent from '../AvatarComponent/AvatarComponent';
import './ResultsComponent.css';
import { get } from 'lodash';

class ResultsComponent extends Component {

  state = {
    showNewsDetails: {}
  }

  showDetails = (id) => {
    this.setState(prevState => ({
      ...prevState,
      showNewsDetails: {
        ...prevState.showNewsDetails,
        [id]: !prevState.showNewsDetails[id]
      }
    }))
  }

    render() {
      return (
        <div className="result-container">
          {this.props.mostPopularResults.map((result, index)=>{
            let avatar_url = get(result, "media[0]['media-metadata'][0].url", 'NA');
            return (
              <div className='result-card' key={`result.id${index}`}> {/* result.id is not unique in few cases, hence using index */}
                <section className='avatar-container'>
                  <AvatarComponent imageUrl={avatar_url}></AvatarComponent>
                </section>
                <section className='card-text'>
                  <p className={`card-news-title`}>{result.newsTitle}</p>
                  {this.state.showNewsDetails[result.id] && <p className='card-news-description'>{result.newsDescription}</p>} 
                  <div className='published-data'>
                    <p className='card-news-posted-by'>{result.newsPostedBy}</p>
                    <div className='card-date-container'>
                      <i className="far fa-calendar-minus"></i>
                      <p className='card-news-published-date'>{result.newPublishedDate}</p>
                    </div>
                  </div> 
                </section>
                <section className='card-accordion-arrow'>
                  <i className={`fas fa-chevron-right ${this.state.showNewsDetails[result.id] ? 'downChevron' : ''}`} onClick={()=>this.showDetails(result.id)}></i>
                </section>
              </div>
            )
          })}
        </div>
      )
    }
}

export default ResultsComponent;
