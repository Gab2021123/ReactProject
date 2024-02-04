import { createRoot } from "react-dom/client";
import App from "./src/App";
import ErrorBoundary from "./src/components/Error/ErrorBoundary";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/about",
  },
  {
    path: "contactUs",
    /*    element: <ContactUs />, */
  },
]);
createRoot(document.getElementById("app")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
