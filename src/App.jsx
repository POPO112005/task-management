import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Mainlayout from "./layouts/Mainlayout";
import Notfoundpage from "./pages/Notfoundpage";




export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Mainlayout/>}>
        <Route index element={<Home />} />
        <Route path="*" element={<Notfoundpage />} />
      </Route>
    )
  );


  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
