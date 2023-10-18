import { NavLink, Outlet } from "react-router-dom";
import "./navBarLayout.scss";
import { Button } from "reactstrap";

function NavBarLayout() {
  return (
    <div>
      <nav>
        <NavLink
          to="projects"
          className={({ isActive }) => (isActive ? "activeLink" : "")}
        >
          <Button>Projects</Button>
        </NavLink>
        <NavLink
          to="tasks"
          className={({ isActive }) => (isActive ? "activeLink" : "")}
        >
          <button>Tasks</button>
        </NavLink>
      </nav>
      <section>
        <Outlet />
      </section>
    </div>
  );
}

export default NavBarLayout;
