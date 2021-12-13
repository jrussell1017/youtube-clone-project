import { Component } from "react";

class IndividualVideoPage extends Component {
  // constructor() {
  //   super();
  // }
  render() {
    return (
      <div>
        <div>Individual Video</div>
        <hr />
        <form>
            <label htmlFor="user-name">Name</label>
            <input 
                type="text"
                name="user-name"
                id="user-name"
                placeholder="Name..."
            />
            <label htmlFor="user-comment">Comment</label>
            <input 
                type="text"
                name="user-comment"
                id="user-comment"
                placeholder="..."
            />
            <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default IndividualVideoPage;
