import { Component } from "react";
import "./search.css";
import SearchList from "./SearchList";
import "./searchResults.css";
import { Link } from "react-router-dom";

class SearchPage extends Component {
    render () {
      const { videoList, userInput } = this.props;
      console.log("youtube data", videoList)

      let videoElList = videoList.map((vid) => (
        <Link to={`/videos/${vid.id.videoId}`}>
          <img
            key={vid.id.videoId}
            src={vid.snippet.thumbnails.high.url}
            alt="video-pic"
          />
        </Link>
      ));
      // console.log("youtube thumbnail search", videoElList);
      console.log("input", userInput)
      return (
        <form className="search-form" onSubmit={this.props.handleSubmit}>
          <input
            className="input"
            type="text"
            id="search"
            placeholder="Search..."
            onChange={this.props.handleSearchValue}
            value={userInput}
          />
          <button 
          className="submitbtn" 
          type="submit" 
          // onClick={this.props.handleYoutubeData}
          >
            Search
          </button>
          <SearchList videoElList={videoElList} />
        </form> 
      )  
    } 
}

export default SearchPage;
