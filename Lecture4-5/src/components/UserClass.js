import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };
  }
  render() {
    const { count } = this.state;
    return (
      <div className="user-card">
        <h2> Name: Aryan</h2>
        <h3>Location: Gurgaon</h3>
        <h4>Contact No: 9123456780</h4>
        <h4>{"Count: " + count}</h4>
        <button
          onClick={() => {
            this.setState({
              // updating the state variable
              count: this.state.count + 1,
            });
          }}
        >
          Increase Count
        </button>
      </div>
    );
  }
}

export default UserClass;
