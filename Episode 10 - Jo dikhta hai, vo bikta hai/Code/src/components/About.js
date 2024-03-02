import User from "./User";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // TODO : componentDidMount method will be executed after the class based component will be mounted
  //! Mounted basically means that the component will be loaded on to the screen
  componentDidMount() {}

  render() {
    return (
      <div className="about-conatiner">
        <h1 style={{ textAlign: "center" }}>Meet our team</h1>

        <div className="about-flex">
          <UserClass />
          <UserClass />
          <UserClass />
          <UserClass />
          <UserClass />
          <UserClass />
          <UserClass />
          <UserClass />
          <UserClass />
        </div>
      </div>
    );
  }
}

export default About;
