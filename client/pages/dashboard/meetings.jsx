import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthUserContext";

const Meetings = () => {
  const { authUser, loading, signOut } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !authUser) router.push("/");
  }, [authUser, loading]);

  return (
    <div>
      {loading ? (
        <div>
          <div>Loading....</div>
        </div>
      ) : (
        <>
          <div>
            <div className="max-w-screen-md mx-auto p-5">
              <div className="text-center mb-16">
                <div>
                  
                  <div>
                    {authUser && (
                      <div>
                        Congratulations {authUser?.email}! You are logged in.
                      </div>
                    )}
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-400 font-regular uppercase">
                  MOM Generator
                </p>
                <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900 dark:text-gray-200">
                  Enter <span className="text-indigo-600">Details</span>
                </h3>
              </div>

              <form className="w-full">
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-password"
                    >
                      Meeting Id
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-email"
                      type="email"
                      placeholder="********"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-password"
                    >
                      Text
                    </label>
                    <textarea
                      rows="10"
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    ></textarea>
                  </div>
                  <div className="flex justify-between w-full px-3">
                    <button
                      className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                      type="submit"
                    >
                      Extract
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Meetings;
