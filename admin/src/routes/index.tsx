import { createBrowserRouter, type RouteObject } from "react-router-dom";

import AppLayout from "@/layouts/AppLayout";
import Dashboard from "@/pages/Dashboard";
import AllSpotsPage from "@/pages/AllSpotsPage";
import CreatePage from "@/pages/CreatePage";
import Settings from "@/pages/Settings";

const rootAppChildren: RouteObject[] = [
  {
    index: true,
    element: <Dashboard />,
  },
  {
    path: "/all-spots",
    element: <AllSpotsPage />,
  },
  {
    path: "/create-new",
    element: <CreatePage />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: rootAppChildren,
  },
]);

export default router;
