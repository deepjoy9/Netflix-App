import { createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";

const Browse = lazy(() => import("./Browse"));
const WatchPage = lazy(() => import("./WatchPage"));

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: (
        <Suspense>
          <Browse />
        </Suspense>
      ),
    },
    {
      path: "/watch",
      element: (
        <Suspense>
          <WatchPage />
        </Suspense>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};
export default Body;
