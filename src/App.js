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

function App() {
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path="/" element={<Root />}>
  //       <Route index element={<Home />} />
  //       <Route path="/data" element={<Data />} />
  //     </Route>
  //   )
  // );
  return (
    <div className="App">
      {/* <h1>Hello world</h1> */}
      {/* <RouterProvider router={router} /> */}
      <Box
        // sx={{
        //   height: "100vh",
        // }}
      >
        <Home />
        <Data />
      </Box>
    </div>
  );
}

// const Root = () => {
//   return (
//     <>
//       <div>
//         <Link to="/">Home</Link>
//         <Link to="/data">Data</Link>

//       </div>
//       <div>
//         <Outlet />
//       </div>
//     </>
//   );
// };

export default App;
