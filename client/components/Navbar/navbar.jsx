import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthUserContext";

const Links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about/about",
  },
  {
    name: "Login",
    path: "/auth/signin/",
  },
  {
    name: "Team",
    path: "/team",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { authUser, loading, signOut } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !authUser) router.push("/");
  }, [authUser, loading]);

  return (
    <div>
      <nav className=" flex flex-wrap items-center justify-between px-5 py-3 ">
        <div className=" w-full bg-transparent opacity-50 dark:opacity-80 z-20 px-4 mx-auto flex flex-wrap items-center  justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className="name font-extrabold text-3xl flex-1 flex justify-between items-center text-gray-900 dark:text-white">
              <Link href="/">MOM APP</Link>
            </div>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <label
                htmlFor="menu-toggle"
                className="pointer-cursor lg:hidden block"
              >
                <svg
                  className="fill-current text-gray-900 dark:text-gray-100"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <title>menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </label>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block rounded " : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="list-none lg:ml-auto">
              <li className="flex flex-col lg:flex-row">
                {!authUser ? (
                  <div>
                    {Links.map(({ name, path }) => (
                      <Link key={path} href={path}>
                        <a
                          onClick={() => setNavbarOpen(!navbarOpen)}
                          className="px-4 py-3 hover:text-blue-500"
                        >
                          {name}
                        </a>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col lg:flex-row">
                    <div className="px-4 py-3 hover:text-blue-500">
                      <Link href="/dashboard/">
                        <a
                          onClick={() => setNavbarOpen(!navbarOpen)}
                          className="px-4 py-3 hover:text-blue-500"
                        >
                          Dashboard
                        </a>
                      </Link>
                    </div>
                    <button
                      type="button"
                      onClick={signOut}
                      className="inline-block px-6 py-2.5 bg-gray-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-800 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
