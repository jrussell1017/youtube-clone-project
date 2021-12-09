import { Component } from "react";


class SearchList extends Component {
  // constructor(){
  //   super();
  // }
  
  render() {
    const { videoElList } = this.props;
      return (
        <aside className="search-list">
           {videoElList}
        </aside>  
      )  
    }
}

export default SearchList;