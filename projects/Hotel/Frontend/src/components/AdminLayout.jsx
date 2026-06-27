import { Link, Outlet, useLocation } from "react-router-dom";
import "../css/Admin.css";

const navItems = [
  { path: "/admin", label: "Dashboard", icon: "📊" },
  { path: "/admin/add-room", label: "Add Room", icon: "➕" },
  { path: "/admin/manage-rooms", label: "Manage Rooms", icon: "🏨" },
  { path: "/admin/bookings", label: "View Bookings", icon: "📅" },
  { path: "/admin/users", label: "Manage Users", icon: "👤" }
];

export default function AdminLayout() {
  const location = useLocation();

  return (
    <div className="admin-page">
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <h2>Admin Panel</h2>
          <p>Hotel Management</p>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`sidebar-link ${isActive ? "active" : ""}`}
              >
                <span className="sidebar-icon">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
}
