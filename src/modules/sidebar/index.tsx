import { NavLink } from "react-router-dom"

const Sidebar = (): JSX.Element => {
  return (
    <div className="w-1/5 h-screen sticky top-0 border-r border-gray-200 bg-primary-800 text-white flex flex-col py-12 text-md">
      {/* <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-white bg-blue-900 py-4 px-4"
            : "text-gray-300 py-4 px-4"
        }
        to="/"
      >
        DASHBOARD
      </NavLink> */}
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-white bg-primary-900/40 py-4 px-4"
            : "text-gray-300 py-4 px-4"
        }
        to="/"
      >
        DASHBOARD
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-white bg-primary-900/40 py-4 px-4"
            : "text-gray-300 py-4 px-4"
        }
        to="/seller"
      >
        SELLER
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-white bg-primary-900/40 py-4 px-4"
            : "text-gray-300 py-4 px-4"
        }
        to="/admin"
      >
        ADMIN
      </NavLink>
    </div>
  )
}

export default Sidebar
