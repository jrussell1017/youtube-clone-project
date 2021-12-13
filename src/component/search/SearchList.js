import { Component } from "react";


class SearchList extends Component {


  // noResults = () => {
  //   const { userInput } = this.props;
  //   if(userInput === "") return (<div className="search-results">
  //   <p>No Search Results Yet!, Please submit a search above!</p>  
  //   </div>);
  // }
  
  render() {
    const { videoElList } = this.props;
    if(videoElList === []) return (<div className="search-results">
    <p>No Search Results Yet!, Please submit a search above!</p>  
    </div>);
      return (
        <aside className="search-list">
           {videoElList.length <= 0 ? (
            <div className="search-results">
              <p>No Search Results Yet!, Please submit a search above!</p>  
            </div>) : videoElList}
        </aside>  
      )  
    }
}

export default SearchList;