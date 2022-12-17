import { ITEMS_NAVBAR_USER } from "mock/navbar-user"
import { Link, NavLink } from "react-router-dom"

const NavBarClient = (): JSX.Element => {
  return (
    <header className="bg-white sticky top-0">
      <div className="sticky top-0 container-section border-b border-gray-200 flex items-center justify-between">
        <Link to="/">
          <span className="text-2xl font-bold text-light-color-title">
            FAST FOOD
          </span>
        </Link>
        <nav>
          <ul className="flex gap-8">
            {ITEMS_NAVBAR_USER.map((nav) => {
              return (
                <NavLink
                  key={nav.id}
                  className={({ isActive }) =>
                    (isActive
                      ? "text-light-color-title"
                      : "text-primary-500"
                    ).concat(" font-bold")
                  }
                  to={nav.url}
                >
                  {nav.name}
                </NavLink>
              )
            })}
          </ul>
        </nav>
        <div className="flex gap-6">
          <button className="py-2 px-4 bg-primary-300 rounded-md text-primary-800 hover:bg-primary-400">
            Iniciar sesión
          </button>
          <button className="py-2 px-4 bg-light-color-title rounded-md text-white hover:bg-blue-800">
            Registrarme
          </button>
        </div>
      </div>
    </header>
  )
}

export default NavBarClient
