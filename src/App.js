import React, {Component} from 'react';
import './App.css';
import HeaderComponent from './component/HeaderComponent/HeaderComponent';
import MenuBarComponent from './component/MenuBarComponent/MenuBarComponent';
import SearchBarComponent from './component/SearchBarComponent/SearchBarComponent';
import SortResultComponent from './component/SortResultComponent/SortResultComponent';
import ResultsComponent from './component/ResultsComponent/ResultsComponent';
import api from './utils/api';
import filterCardData from './utils/filterCardData';

class App extends Component {

  state = {
    mostPopularResults: [],
    mostPopularFilteredResults: [],
  }

  filterResultBySearchTerm = (e) => {
    let filteredNewsResults = this.state.mostPopularResults.filter((result)=>{
      return result.newsDescription.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
    })

    console.log(filteredNewsResults);
    this.setState({
      mostPopularFilteredResults: filteredNewsResults
    })
  }

  refreshNewsFeed = (newsResult) => {
    this.setState({
      mostPopularResults: filterCardData(newsResult.data.results),
      mostPopularFilteredResults: filterCardData(newsResult.data.results)
    })
  }

  showOldNews = (daysOldDataRequired) => {
    console.log('sort', daysOldDataRequired);
    api.getPopularArticles('viewed', daysOldDataRequired)
    .then((response) => {
      this.refreshNewsFeed(response);
    });
  }

  componentDidMount() {
    api.getPopularArticles('viewed', '7')
    .then((response) => {
      this.refreshNewsFeed(response);
    });
  }

  render() {
    return (
      <div className="App">
        <HeaderComponent>
          <MenuBarComponent></MenuBarComponent>
          <SearchBarComponent filterResultBySearchTerm={this.filterResultBySearchTerm}></SearchBarComponent>
          <SortResultComponent showOldNews={this.showOldNews}></SortResultComponent>
        </HeaderComponent>
        <ResultsComponent mostPopularResults={this.state.mostPopularFilteredResults}></ResultsComponent>
      </div>
    );
  }
}

export default App;
