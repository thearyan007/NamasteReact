import { useEffect, useState } from "react";

const User = (props) => {
  let [count, setCount] = useState(1);

  return (
    <div className="user-card">
      <h2>Name: Aryan</h2>
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
