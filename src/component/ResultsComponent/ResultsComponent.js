import React from 'react';
import AvatarComponent from '../AvatarComponent/AvatarComponent';
import './ResultsComponent.css';
import { get } from 'lodash';

const ResultsComponent = (props) => {
    return (
      <div className="result-container">
        {props.mostPopularResults.map((result)=>{
          let avatar_url = get(result, "media[0]['media-metadata'][0].url", 'NA');
          return (
            <div className='result-card' key='result.id'>
              <section className='avatar-container'>
                <AvatarComponent imageUrl={avatar_url}></AvatarComponent>
              </section>
              <section className='card-text'>
                <p className='card-news-title'>{result.newsTitle}</p>
                <p className='card-news-description'>{result.newsDescription}</p>
                <div className='published-data'>
                  <p className='card-news-posted-by'>{result.newsPostedBy}</p>
                  <div className='card-date-container'>
                    <i className="far fa-calendar-minus"></i>
                    <p className='card-news-published-date'>{result.newPublishedDate}</p>
                  </div>
                </div> 
              </section>
              <section className='card-accordion-arrow'>
                <i className="fas fa-chevron-right"></i>
              </section>
            </div>
          )
        })}
      </div>
    );
}

export default ResultsComponent;
