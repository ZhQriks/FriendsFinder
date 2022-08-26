import * as React from "react";

import "./IndexPage.css";
import ContentContainer from "../../shared/layout/ContentContainer";
import { GrConnect } from "react-icons/gr";
import { useNavigate, useParams } from "react-router-dom";
import { useGetUsersQuery } from "../../redux/services/users.api";
import { useEffect, useState } from "react";
import { IUserInterface } from "../../type/users";
import { useSelector } from "../../hooks/useSelector";

export default function IndexPage() {
  let userId = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const [users, setUsers] = useState<IUserInterface[]>();

  let { page } = useParams();

  const {
    currentData: usersData,
    isLoading: usersIsLoading,
    error,
  } = useGetUsersQuery({ page });
  useEffect(() => {
    if (!usersIsLoading) {
      setUsers(usersData?.data);
    }
    //wait till usersIsLoading is false
  }, [usersIsLoading]);

  //on page load, get the users from the store
  useEffect(() => {});
  const increasePage = () => {
    if (page! < usersData?.total_pages) {
      let nextPage = Number(page) + 1;
      navigate(`/friends/${nextPage++}`);
      window.location.reload();
    }
  };
  const decreasePage = () => {
    if (Number(page!) > 1) {
      let prevPage = Number(page) - 1;
      navigate(`/friends/${prevPage++}`);
      window.location.reload();
    }
  };
  const addFriend = (id: number, first_name: string, avatar: string) => {
    const newFriend = {
      id: id,
      first_name: first_name,
      avatar: avatar,
    };
    if (id === userId) {
      return alert("It's you!");
    }
    const friends = JSON.parse(localStorage.getItem("friends")!);
    if (friends) {
      for (let i = 0; i < friends.length; i++) {
        if (friends[i].id === id) {
          return alert("You are already friends with this user");
        }
      }
      console.log(friends);
      const newFriendsList = [...friends, newFriend];
      localStorage.setItem("friends", JSON.stringify(newFriendsList));
    } else {
      localStorage.setItem("friends", JSON.stringify([newFriend]));
    }
    alert("Friend added");
  };

  return (
    <ContentContainer>
      <h1 className="text-2xl text-center font-bold mt-4">Users:</h1>
      <p className="md:text-xl text-lg text-center font-medium mt-2 mb-4">
        Tap <strong>Connect</strong> to add your friends to your profile!
      </p>
      <div className="flex justify-center  flex-wrap md:px-72 mb-5">
        {users?.map((user, index: any) => {
          return (
            <div key={index} className="md:w-1/3 xl:w-1/6 flex justify-center">
              <img
                src={user.avatar}
                alt={user.first_name}
                className="h-20 w-20 m-2 rounded-full"
              />
            </div>
          );
        })}
      </div>
      <hr />
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {users?.map((user, index: any) => {
            return (
              <div
                className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
                key={index}
              >
                <article className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    alt={user.first_name}
                    className="block md:h-80 w-full h-auto"
                    src={user.avatar}
                  />

                  <div className="flex items-center justify-between leading-tight p-1 md:p-4">
                    <h1 className="text-black font-bold text-xl">
                      {user.first_name} <br />
                      {user.last_name}
                    </h1>
                    <p className="text-grey-darker text-sm">{user.email}</p>
                  </div>

                  <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <a
                      className="flex items-center no-underline hover:underline text-black"
                      onClick={() =>
                        addFriend(user.id, user.first_name, user.avatar)
                      }
                    >
                      <p className="ml-2 text-sm">I know that person!</p>
                    </a>
                    <a className="no-underline text-grey-darker hover:text-red-dark">
                      <span className="hidden">Connect</span>
                      <GrConnect
                        onClick={() =>
                          addFriend(user.id, user.first_name, user.avatar)
                        }
                        className={"hover:cursor-pointer"}
                      />
                    </a>
                  </footer>
                </article>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center">
          <a
            onClick={() => decreasePage()}
            className=" py-2 px-4 text-sm font-medium text-gray-500
             bg-white rounded-lg border border-gray-300 hover:bg-gray-100
              hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700
              dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Previous
          </a>
          <a
            href="#"
            className="rounded-lg mx-2 py-2 px-3 leading-tight text-gray-500
             bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700
               dark:text-gray-400"
          >
            {page}
          </a>
          <a
            onClick={() => increasePage()}
            className=" py-2 px-4 text-sm font-medium text-gray-500 bg-white
             rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700
              dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700
              dark:hover:text-white"
          >
            Next
          </a>
        </div>
      </div>
    </ContentContainer>
  );
}
