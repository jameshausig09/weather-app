import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Outlet />
      <nav className="Navigation">
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search">search</Link>
          </li>
          <li>
            <Link to="/overview">overview</Link>
          </li>
        </ol>
      </nav>
    </>
  );
};

export default Layout;
