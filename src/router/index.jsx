import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import { SignIn, SignUp, Main, Service, Home, Orders } from "@pages";
const Index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/Services" element={<Service />} />
        </Route>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};
export default Index;
