import { useEffect, useState } from "react";

const User = (props) => {
  let [count, setCount] = useState(1);
  let [user, setUser] = useState("");
  const userName = "thearyan007";

  useEffect(async () => {
    const data = await fetch("https://api.github.com/users/" + userName);
    const json = await data.json();
    console.log("json.name");
    setUser(json.name);
  }, []);

  return (
    <div className="user-card">
      <h1>Function Based</h1>
      <h2>Name: {user}</h2>
      <h3>Location: Gurgaon</h3>
      <h4>Contact No: 9123456780</h4>
      <h4>{"Count: " + count}</h4>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase Count
      </button>
    </div>
  );
};

export default User;
