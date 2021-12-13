import { Component } from "react";
import "./search.css"
import SearchList from "./SearchList";
import "./searchResults.css"


class SearchPage extends Component {
    constructor () {
      super();
      this.state = {
        array: []   
      }  
    }
    
    render () {
      const { videoList, userInput } = this.props;
      console.log("youtube data", videoList)
      let videoElList = videoList.map((vid) => (<img className="single-video" key={vid.id.videoId} src={vid.snippet.thumbnails.medium.url} alt="video-pic" />));
      console.log("youtube thumbnail search", videoElList);
        return (
          <form className="search-form">
            <input
              className="input"
              type="text"
              id="search"
              placeholder="Search..."
              onInput={this.props.handleSearchValue}
              value={userInput}
            />
            <button className="submitbtn" type="submit" onClick={this.props.handleYoutubeData}>Search</button>
            {/* <div className="search-results">
                <p>No Search Results Yet!, Please submit a search above!</p>  
            </div>  */}
            <SearchList videoElList={videoElList} />
          </form> 
        )  
    } 
}

export default SearchPage;