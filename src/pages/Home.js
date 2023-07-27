import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div>
      <h1>HOME PAGE</h1>
      <Link to="/profile">Go to Profile Page</Link>
    </div>
  );
};
