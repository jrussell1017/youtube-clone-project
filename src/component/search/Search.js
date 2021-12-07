import { Component } from "react";
import "./search.css"

class SearchBar extends Component {
    constructor () {
      super();
      this.state = {
        input: '',
        array: []   
      }  
    }

    //   const handleSubmit = (e) =>{
    //       e.prebentDefault();
    //       // what to do here  
    //     }

    
    render () {
        return (
            <form className="search-form">
            <input
              className="input"
              type="text"
              id="search"
              placeholder="Search..."
            />
            <button className="submitbtn" type="submit" onClick={function() {console.log('click')}}>Search</button>  
          </form> 
        )  
    }


    
    
}

export default SearchBar;