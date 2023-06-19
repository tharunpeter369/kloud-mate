import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Data from "./pages/Data/Data";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      // <Route path="/" element={<Root />}>
      //   <Route index element={<Home />} />
      //   <Route path="/data" element={<Data />} />
      // </Route>

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
      {/* <Box>
        <Home />
        <Data />
      </Box> */}
    </div>
  );
}

const Root = () => {
  return (
    <>
      {/* <div>
        <Link to="/">Home</Link>
        <Link to="/data">Data</Link>

      </div> */}
       <Navbar />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;
