import * as React from "react";
import IndexPage from "./IndexPage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import ProfilePage from "./ProfilePage";
import NotFoundPage from "./NotFoundPage";

export interface IRouteProps {
  path: string;
  element: React.ReactNode;
  items?: IRouteProps[];
  [key: string]: any;
}

export const ROUTE_ROOT = "friends/:page";
export const ROUTE_NOT_FOUND = "*";
export const ROUTE_LOGIN = "login";
export const ROUTE_REGISTER = "register";
export const ROUTE_PROFILE = "profile";
export const publicRoutes: IRouteProps[] = [
  {
    path: ROUTE_ROOT,
    element: <IndexPage />,
    isAuthRoute: true,
  },
  {
    path: ROUTE_LOGIN,
    element: <LoginPage />,
  },
  {
    path: ROUTE_REGISTER,
    element: <RegisterPage />,
  },
  {
    path: ROUTE_PROFILE,
    element: <ProfilePage />,
    isAuthRoute: true,
  },
  {
    path: ROUTE_NOT_FOUND,
    element: <NotFoundPage />,
  },
];
