import React from "react";
import Shimmer from "./Shimmer";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {},
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/canzova");
    const json = await data.json();

    this.setState({
      userData: json,
    });
  }

  // componentDidUpdate() {
  //   this.timer = setInterval(() => {
  //     console.log("I am inside component did mount");
  //   }, 1000);
  // }

  // componentWillUnmount() {
  //   // Cleaning up our setInterval
  //   clearInterval(this.timer);
  // }
  render() {
    // Do destructing inside render method and above return
    const { userData } = this.state;
    const { name, location, bio, avatar_url } = userData;

    return Object.keys(userData).length !== 0 ? (
      <div className="user-conatiner">
        <div className="user-img-conatiner">
          <img src={avatar_url} alt="" />
        </div>
        <div className="user-details">
          <h2>Name : {name}</h2>
          <h3>Location : {location}</h3>
          <h3>Bio : {bio}</h3>
        </div>
      </div>
    ) : (
      <Shimmer />
    );
  }
}
export default UserClass;
