import "./App.css";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <h1>Hello World</h1>
          <Link to="register">Register</Link>
          <Link to="login">Login</Link>
        </div>
      ),
    },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "login",
      element: <Login />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
