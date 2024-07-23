import { Navigate, Outlet } from "react-router-dom"
import { NavBar } from "../components/nav/Navbar.jsx"

export const Authorized = () => {
  if (localStorage.getItem("pitty_token")) {
    return <>
      <NavBar />
      <main className="p-4">
        <Outlet />
      </main>
    </>
  }
  return <Navigate to='/login' replace />
}