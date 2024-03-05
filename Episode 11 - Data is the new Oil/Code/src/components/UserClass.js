import React from "react";
import Shimmer from "./Shimmer";
import UserContext from "../utils/UserContext";
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

  render() {
    // Do destructing inside render method and above return
    const { userData } = this.state;
    const { name, location, bio, avatar_url } = userData;

    return Object.keys(userData).length !== 0 ? (
      <div className="user-conatiner">
        <div className="user-img-conatiner">
          <img src={avatar_url} alt="" />
        </div>
        <UserContext.Consumer>
          {(data) => {
            return (
              <div className="font-bold text-lg">
                User Name : {data.userName} <br />
                User Id : {data.id}
              </div>
            );
          }}
        </UserContext.Consumer>
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
