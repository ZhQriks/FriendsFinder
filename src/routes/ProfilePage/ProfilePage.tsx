import * as React from "react";

import ContentContainer from "../../shared/layout/ContentContainer";
import { useEffect, useState } from "react";
import UserService from "../../services/user.service";
import { useSelector } from "../../hooks/useSelector";
import { IUserInterface } from "../../type/users";

import "./ProfilePage.css";

export default function ProfilePage() {
  //Getting current user from localStorage
  let userId = useSelector((state) => state.auth.user);
  const [user, setUser] = useState<IUserInterface>({
    // Current user data
    id: 0,
    avatar: "",
    first_name: "",
    last_name: "",
    email: "",
    data: "",
  });

  const [users, setUsers] = useState<IUserInterface[]>([]);

  useEffect(() => {
    // Load users and friends from localStorage
    setUsers(JSON.parse(localStorage.getItem("friends")!));
    UserService.getUser(userId)
      .then((response: any) => {
        setUser(response.data.data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, [userId]);

  return (
    <div className="ProfilePage">
      <ContentContainer className="px-1 md:p-0">
        <h1 className="text-center font-bold text-3xl mt-5">Your Info:</h1>
        <table className="table-auto  mt-5 mb-5 text-lg mx-auto md:text-xl">
          <thead>
            <tr className="text-primary-color">
              <th className="px-4 py-2">First Name</th>
              <th className="px-4 py-2">Last Name</th>
              <th className="px-4 py-2">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">{user.first_name}</td>
              <td className="border px-4 py-2">{user.last_name}</td>
              <td className="border px-4 py-2">{user.email}</td>
            </tr>
          </tbody>
        </table>
        <hr />
        <h1 className="text-center font-bold text-3xl mt-5">Your Photo:</h1>
        <div className="mt-5 ">
          <img
            src={user.avatar}
            alt="profile"
            className="rounded-full w-60 h-60 mx-auto"
          />
        </div>
        <h1 className="text-center font-bold text-3xl mt-5">Your friends:</h1>
        <div className="flex justify-center  flex-wrap md:px-72 mb-5">
          {users?.map((user, index: any) => {
            return (
              <div
                key={index}
                className="md:w-1/3 xl:w-1/6 flex justify-center"
              >
                <div className="flex items-center flex-col">
                  <img
                    src={user.avatar}
                    alt={user.first_name}
                    className="h-20 w-20 m-2 rounded-full"
                  />
                  <p>{user.first_name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </ContentContainer>
    </div>
  );
}
