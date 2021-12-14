import { Component } from "react";
import SearchPage from "../search/SearchPage"; 

class HomePage extends Component {
    constructor(){
        super()
        this.state = {
            videoList: [],
            userInput: "",
        }
    }

    handleSearchValue = (e) => {
        this.setState({
          userInput: e.target.value,
        })
      }
    
    handleSubmit = (e) => {
      e.preventDefault();
      const { userInput } = this.state;
      if(userInput !== ""){
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${userInput}&type=video&key=${process.env.REACT_APP_API_KEY}`)
        .then((res)=>{
          return res.json();
        })
        .then((data)=>{
          // console.log("youtube data", data);
          console.log("youtube thumbnails", data.items);
          this.setState({
            videoList: data.items,
          })
        });
        this.setState({
          userInput: ""
        });
      }
    }

    render() {
        const { videoList, userInput } = this.state;
        console.log("youtube map", videoList);
        return(
            <div>
                <SearchPage 
                userInput={userInput} 
                videoList={videoList}
                handleSearchValue={this.handleSearchValue}
                handleSubmit={this.handleSubmit}
                />
            </div>
        )
    }
}

export default HomePage;