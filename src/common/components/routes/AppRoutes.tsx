import Spinner from "@atoms/spinner"
import Sidebar from "@modules/sidebar"
import NavBarClient from "@organisms/navbar/NavBarClient"
import NavBarUser from "@organisms/navbar/NavBarUser"
import CartPage from "@pages/Cart"
import FoodsPage from "@pages/Foods"
import HomePage from "@pages/Home"
import LandingPage from "@pages/Landing"
import React, { Suspense } from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import { ProtectedRoute } from "./ProtectedRoute"

const AppRoutes = (): JSX.Element => {
  const isSeller = false
  const isAdmin = true
  const isUser = false

  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <div className="w-full flex">
          {isUser && <Sidebar />}
          <Layout>
            {isUser ? <NavBarUser /> : <NavBarClient />}
            <Suspense fallback={<Spinner />}>
              <Routes>
                {!isUser && <Route index element={<LandingPage />} />}

                <Route path="/foods" element={<FoodsPage />} />
                <Route path="/cart" element={<CartPage />} />

                <Route element={<ProtectedRoute isAllowed={isUser} />}>
                  <Route index element={<HomePage />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                </Route>

                <Route
                  path="/seller"
                  element={
                    <ProtectedRoute
                      redirectTo="/403"
                      isAllowed={isUser && isSeller}
                    >
                      <Seller />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/admin"
                  element={
                    <ProtectedRoute
                      redirectTo="/403"
                      isAllowed={isUser && isAdmin}
                    >
                      <Admin />
                    </ProtectedRoute>
                  }
                />

                <Route path="/403" element={<UnauthorizedPage />} />
                <Route path="/404" element={<Error404 />} />
                <Route path="*" element={<Navigate to={"/404"} replace />} />
              </Routes>
            </Suspense>
          </Layout>
        </div>
      </Suspense>
    </Router>
  )
}

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className="min-h-screen w-4/5 flex-grow text-gray-900 bg-gray-100 flex flex-col">
      {children}
    </div>
  )
}

const Admin = (): JSX.Element => {
  return <div>Admin</div>
}

const Dashboard = (): JSX.Element => {
  return <div>Dashboard</div>
}

const Seller = (): JSX.Element => {
  return <div>Seller</div>
}

const Error404 = (): JSX.Element => {
  return <div>ERROR 404</div>
}

const UnauthorizedPage = (): JSX.Element => {
  return <div>Unauthorized page</div>
}

export default AppRoutes
