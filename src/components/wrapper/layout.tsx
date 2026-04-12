import "./layout.css";

import { NavLink, useLocation } from "react-router";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useLocation();

  const isPostPage = pathname.startsWith("/blog/");

  return (
    <>
      <div className={`layout-wrapper${isPostPage ? " layout-wrapper-post" : ""}`}>
        <nav>
          <div className="nav-content">
            {!isPostPage && <h1>Kuzmin Dmitry</h1>}
            <div className="nav-links">
              <NavLink to="/" className={({ isActive }) => (isActive ? "active" : undefined)}>
                Home
              </NavLink>
              <span className="separator">·</span>

              <NavLink to="/blog" className={({ isActive }) => (isActive ? "active" : undefined)}>
                Blog
              </NavLink>
              <span className="separator">·</span>
              <NavLink to="/contacts" className={({ isActive }) => (isActive ? "active" : undefined)}>
                Contacts
              </NavLink>
            </div>
          </div>
        </nav>

        {children}
      </div>
    </>
  );
};

export default Layout;
