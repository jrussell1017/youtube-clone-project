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

    handleYoutubeData = (e) => {
        console.log(e)
        e.preventDefault();
        const { userInput } = this.state;
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${userInput}&type=video&key=${process.env.REACT_APP_API_KEY}`)
        .then((res)=>{
          return res.json();
        })
        .then((data)=>{
          console.log("youtube data", data);
          console.log("youtube thumbnails", data.items);
          this.setState({
            videoList: data.items,
          })
        })
      }



    render() {
        const { videoList, userInput } = this.state;
        return(
            <div>
                <h1>Home Page</h1>
                <SearchPage 
                userInput={userInput} 
                videoList={videoList}
                handleSearchValue={this.handleSearchValue}
                handleYoutubeData={this.handleYoutubeData}
      
                />
            </div>
        )
    }
}

export default HomePage;