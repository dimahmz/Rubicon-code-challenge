import { Link, NavLink, Outlet } from "react-router-dom";

function NavBarLayout() {
  return (
    <div>
      <nav>
        <NavLink
          to="projects"
          className={({ isActive }) => (isActive ? "activeLink" : "")}
        >
          <button>Projects</button>
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
