import User from "./User";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count : 0,
    };
    console.log("Parent Constructor");
  }

  // TODO : componentDidMount method will be executed after the class based component will be mounted
  //! Mounted basically means that the component will be loaded on to the screen
  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div className="about-conatiner">
        <h1>I am About Page</h1>
        <h3>Count : {this.state.count}</h3>
        <button onClick={()=>{
          this.setState({
            count : this.state.count + 1,
          })
        }}>Count</button>
        <UserClass
          name={"First"}
          location={"Sector : 5"}
          contact={"9999999999"}
        />
        <UserClass
          name={"Second"}
          location={"Sector : 5"}
          contact={"9999999999"}
        />
        <UserClass
          name={"Third"}
          location={"Sector : 5"}
          contact={"9999999999"}
        />
        <UserClass
          name={"Fourth"}
          location={"Sector : 5"}
          contact={"9999999999"}
        />
         <User
          name={"Fourth"}
          location={"Sector : 5"}
          contact={"9999999999"}
        />
      </div>
    );
  }
}

export default About;
