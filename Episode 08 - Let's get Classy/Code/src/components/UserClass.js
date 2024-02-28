import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Child Constructor");
    this.state = {
      count: 1,
      count2: 2,
    };
  }
  componentDidMount() {
    console.log("Child Component Did Mount");
  }
  render() {
    console.log("Child Render");
    // Do destructing inside render method and above return
    const { name, location, contact } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-conatiner">
        <div className="user-details">
          <h2>Name : {name}</h2>
          <h3>Location : {location}</h3>
          <h3>Contact No : {contact}</h3>
          <h3>State Varibale one : {count}</h3>
          <h3>State Varibale two : {count2}</h3>
          <button
            onClick={() => {
              this.setState({
                count: count + 1,
                count2: count2 + 1,
              });
            }}
          >
            Increase Count
          </button>
        </div>
      </div>
    );
  }
}
export default UserClass;
