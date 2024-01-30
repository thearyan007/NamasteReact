import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count1: 1,
      count2: 2,
    };
  }
  render() {
    const { count1, count2 } = this.state;
    return (
      <div className="user-card">
        <h2> Name: Aryan</h2>
        <h3>Location: Gurgaon</h3>
        <h4>Contact No: 9123456780</h4>
        <h4>{count1 + " " + this.props.name + " " + count2}</h4>
      </div>
    );
  }
}

export default UserClass;
