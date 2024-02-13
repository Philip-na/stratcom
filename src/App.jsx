import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import FavoratesPage from "./pages/FavoratesPage";
import ProfilePage from "./pages/ProfilePage";
import Login from "./pages/auth/Login";
import Sigup from "./pages/auth/Sigup";
import Pagelayout from "./Layouts/Pagelayout";
import MessagePage from "./pages/MessagePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<LandingPage />} />

      {/* adding a page laye out */}

      <Route element={<Pagelayout />}>
        <Route path="home" element={<Home />} />
        <Route path="profile/:user_id" element={<ProfilePage />} />
        <Route path="message/:user_id/:name" element={<MessagePage />} />
        <Route path="favorites" element={<FavoratesPage />} />

      </Route>

      
     

      {/* auth routs */}
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Sigup />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
