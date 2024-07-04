import "./Layout.css";
import { Outlet, Link } from "react-router-dom";

const Layout = () => (
  <>
    <Outlet />
    <nav className="Navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/search">search</Link>
        </li>
        <li>
          <Link to="/overview">overview</Link>
        </li>
      </ul>
    </nav>
  </>
);

export default Layout;
