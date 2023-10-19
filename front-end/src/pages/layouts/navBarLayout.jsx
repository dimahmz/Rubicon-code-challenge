import { NavLink, Outlet } from "react-router-dom";
import "../../assets/styles/navBarLayout.scss";
import Button from "../../components/Button";

function NavBarLayout() {
  return (
    <div>
      <nav id="nav-bar">
        <NavLink
          to="projects"
          className={({ isActive }) => (isActive ? "activeLink" : "")}
        >
          <Button label="Projects" />
        </NavLink>
        <NavLink
          to="tasks"
          className={({ isActive }) => (isActive ? "activeLink" : "")}
        >
          <Button style={{ padding: "20px" }} label="Tasks" />
        </NavLink>
      </nav>
      <section>
        <Outlet />
      </section>
    </div>
  );
}

export default NavBarLayout;
