import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Home from "./pages/Home"
import FavoratesPage from "./pages/FavoratesPage"
import ProfilePage from "./pages/ProfilePage"
import Login from "./pages/auth/Login"
import Sigup from "./pages/auth/Sigup"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<LandingPage />} />
      <Route path="home" element={<Home />} />
      <Route path="favorites" element={<FavoratesPage />} />
      <Route path="profile" element={<ProfilePage />} />

      {/* auth routs */}
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Sigup />} />

    </Route>
  )
)

function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
