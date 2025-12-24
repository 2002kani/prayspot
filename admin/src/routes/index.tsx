import { createBrowserRouter, type RouteObject } from "react-router-dom";

import AppLayout from "@/layouts/AppLayout";
import Dashboard from "@/pages/Dashboard";

const rootAppChildren: RouteObject[] = [
  {
    index: true,
    element: <Dashboard />,
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
