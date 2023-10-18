import { Link } from "react-router-dom";
function HomePage() {
  return (
    <>
      <h1>The coding challenge has been completed</h1>
      <p>click here to see it</p>
      <div>
        <Link to="/projects">
          <button>click</button>
        </Link>
      </div>
    </>
  );
}

export default HomePage;
