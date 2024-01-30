import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <User name={"Aryan"} />
      <UserClass name={"Aryan"} />
    </div>
  );
};

export default About;
