import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import {
  Home,
  Address,
  Tables,
  Finans,
  Calendar,
  Maps,
  Widgets,
  UserOptions,
  Exit,
} from "../../pages/";

export default function Router() {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Navigate to="/home" replace />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/address",
      element: <Address />,
    },
    {
      path: "/table",
      element: <Tables />,
    },
    {
      path: "/calendar",
      element: <Calendar />,
    },
    {
      path: "/maps",
      element: <Maps />,
    },
    {
      path: "/widgets",
      element: <Widgets />,
    },
    {
      path: "/user-options",
      element: <UserOptions />,
    },
    {
      path: "/finans",
      element: <Finans />,
    },
    {
      path: "/exit",
      element: <Exit />,
    },
  ];

  return useRoutes(routes);
}
