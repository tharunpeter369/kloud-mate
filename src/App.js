import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Data from "./pages/Data/Data";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Data />} />
        {/* <Route path="/data" element={<Data />} /> */}
      </Route>
    )
  );

  return (
    <div className="App">
      {/* <h1>Hello world</h1> */}
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
  return (
    <>
      <Navbar />
      <>
        <Outlet />
      </>
    </>
  );
};

export default App;
