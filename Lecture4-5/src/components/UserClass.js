import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
      userInfo: {
        name: "",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/thearyan007");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json.name);
  }

  componentDidUpdate() {
    console.log("Component did update!!");
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  render() {
    const { count, userInfo } = this.state;
    return (
      <div className="user-card">
        <h1>Class Based</h1>
        <h2> Name: {userInfo.name}</h2>
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
