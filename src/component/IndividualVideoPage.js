import { Component } from "react";
import YouTube from "react-youtube";

class IndividualVideoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentSection: [],
      userName: "",
      userComment: "",
    };
  }

  handleUserName = (e) => {
    this.setState({
      userName: e.target.value,
    });
  };

  handleUserComment = (e) => {
    this.setState({
      userComment: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.setState({
      commentSection: [
        ...this.state.commentSection,
        { [this.state.userName]: this.state.userComment },
      ],
      userName: "",
      userComment: "",
    });
  };

  render() {
    

    return (
      <div>
        <div><YouTube videoId={this.props?.match.params.id} /></div>
        <hr />
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor="user-name">Name</label>
          <input
            type="text"
            name="user-name"
            id="user-name"
            placeholder="Name..."
            value={this.state.userName}
            onChange={this.handleUserName}
          />
          <label htmlFor="user-comment">Comment</label>
          <input
            type="text"
            name="user-comment"
            id="user-comment"
            placeholder="..."
            value={this.state.userComment}
            onChange={this.handleUserComment}
          />
          <button type="submit">Submit</button>
        </form>
        <hr width="75%" />
        <ul>
          {this.state.commentSection.map((content) => {
            let user = Object.keys(content)[0]
            // console.log(Object.keys(content))
            return(
              <div>
                <li>
                  {user}
                  {content[user]}
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default IndividualVideoPage;
