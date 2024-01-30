import { useState } from "react";

const User = (props) => {
  const [count1] = useState(1);
  const [count2] = useState(2);
  return (
    <div className="user-card">
      <h2>Name: Aryan</h2>
      <h3>Location: Gurgaon</h3>
      <h4>Contact No: 9123456780</h4>
      <h4>{count1 + " " + props.name + " " + count2}</h4>
    </div>
  );
};

export default User;
