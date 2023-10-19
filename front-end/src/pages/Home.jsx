import { Link } from "react-router-dom";
import Button from "../components/Button";
import "../assets/styles/welcomePage.scss";
function HomePage() {
  return (
    <main className="welcome-section">
      <h1 className="welcome-title">Rubicon Conding challenge</h1>
      <p>The coding challenge has been completed</p>
      <p>click on the button to explore it</p>
      <div>
        <Link to="/projects">
          <Button type="submit" label="Explore" />
        </Link>
      </div>
    </main>
  );
}

export default HomePage;
