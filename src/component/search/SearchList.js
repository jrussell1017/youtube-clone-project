import { Component } from "react";
import './searchList.css';

class SearchList extends Component {
  render() {
    const { videoElList } = this.props;
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