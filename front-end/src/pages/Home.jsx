import { Link } from "react-router-dom";
function HomePage() {
  return (
    <>
      <h1>Rubicon Conding challenge</h1>
      <p>The coding challenge has been completed</p>
      <p>click on the button to explore it</p>
      <div>
        <Link to="/projects">
          <button>Explore</button>
        </Link>
      </div>
    </>
  );
}

export default HomePage;
