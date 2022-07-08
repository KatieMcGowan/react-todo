import { Link } from "react-router-dom";

const Home = () => {
  return(
    <div className="home">
      <h1>Welcome to the To-Do's Home Page</h1>
      <Link to={"/todos"}>View To-Do's</Link>
    </div>
  );  
};

export default Home;