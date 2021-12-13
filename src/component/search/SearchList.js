import { Component } from "react";
import './searchList.css';

class SearchList extends Component {
  // constructor(){
  //   super();
  // }
  
  render() {
    const { videoElList } = this.props;
    const paragraph = (<div className="search-results">
    <p>No Search Results Yet!, Please submit a search above!</p>  
</div>);
      return (
        <aside className="search-list">
           {videoElList.length ? videoElList : paragraph}
        </aside>  
      )  
    }
}

export default SearchList;