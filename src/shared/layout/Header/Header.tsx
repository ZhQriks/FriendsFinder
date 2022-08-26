import React, { useEffect, useState } from "react";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import { generatePath, Link, NavLink, useNavigate } from "react-router-dom";
import {
  ROUTE_LOGIN,
  ROUTE_PROFILE,
  ROUTE_REGISTER,
  ROUTE_ROOT,
} from "../../../routes";
import { useSelector } from "../../../hooks/useSelector";

import Button from "../../components/Button";
import "./Header.css";
import UserService from "../../../services/user.service";
import { useDispatch } from "../../../hooks/useDispatch";
import { logout } from "../../../redux/auth/actions";

interface INavLink {
  title: string;
  path: string;
}
const navLinks: INavLink[] = [
  {
    title: "Home",
    path: ROUTE_ROOT,
  },
  {
    title: "Profile",
    path: ROUTE_PROFILE,
  },
  {
    title: "Login",
    path: ROUTE_LOGIN,
  },
  {
    title: "Register",
    path: ROUTE_REGISTER,
  },
];

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let userId = useSelector((state) => state.auth.user);
  const [user, setUser] = useState<any>({
    first_name: "",
    avatar: "",
  });
  const isAuthorizedUser = useSelector((state) => state.auth.isLoggedIn);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isAuthorizedUser) {
      UserService.getUser(userId)
        .then((response: any) => {
          setUser(response.data.data);
        })
        .catch((error: any) => {
          console.log(error);
        });
    }
  }, [isAuthorizedUser]);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate(ROUTE_LOGIN);
  };
  return (
    <header className="shadow md:shadow-bottom">
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
        <Link
          to={generatePath(ROUTE_ROOT, { page: "1" })}
          className="w-[60%] text-3xl font-bold"
        >
          Friends Finder
        </Link>

        <ul className="hidden md:flex items-center text-xl">
          {isAuthorizedUser ? (
            <div className="flex items-center">
              <NavLink to={generatePath(ROUTE_ROOT, { page: "1" })}>
                Home
              </NavLink>
              <a onClick={handleLogout} className="hover:cursor-pointer">
                Logout
              </a>

              <Link to={ROUTE_PROFILE}>
                <img
                  src={user.avatar}
                  alt="profile"
                  className="rounded-full w-12 h-12"
                />
              </Link>
            </div>
          ) : (
            <div>
              <NavLink to={ROUTE_LOGIN}>Login</NavLink>
              <NavLink to={ROUTE_REGISTER}>Register</NavLink>
              <Link to={ROUTE_REGISTER}>
                <Button label="Start" />
              </Link>
            </div>
          )}
          <h2 className="text-2xl">{isAuthorizedUser}</h2>
        </ul>
        <div onClick={toggleMenu} className="block md:hidden">
          {isOpen ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={22} />}
        </div>
        <div
          className={
            isOpen
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-200 bg-white ease-in-out duration-300"
              : "fixed left-[-100%] ease-in-out duration-300"
          }
        >
          <Link to={generatePath(ROUTE_ROOT, { page: "1" })}>
            <h1 className=" w-full text-2xl font-bold m-4">Friends Finder</h1>
          </Link>

          <ul className="uppercase p-4">
            {navLinks.map((link: INavLink) => {
              if (
                !isAuthorizedUser &&
                (link.title === "Home" || link.title === "Profile")
              ) {
                return null;
              } else {
                return (
                  <li
                    key={link.title}
                    className="p-4 border-b border-b-gray-200"
                  >
                    <NavLink
                      to={link.path}
                      onClick={toggleMenu}
                      style={({ isActive }) => ({
                        color: isActive ? "#F64A35" : "",
                        fontWeight: isActive ? "bold" : "",
                      })}
                    >
                      {link.title}
                    </NavLink>
                  </li>
                );
              }
            })}
            {isAuthorizedUser ? (
              <div>
                <li className="p-4 border-b border-b-gray-200">
                  <a onClick={handleLogout} className="hover:cursor-pointer">
                    Logout
                  </a>
                </li>

                <img
                  src={user.avatar}
                  alt="profile"
                  className="rounded-full w-12 h-12 m-4"
                />
              </div>
            ) : null}
          </ul>
        </div>
      </div>
    </header>
  );
}
