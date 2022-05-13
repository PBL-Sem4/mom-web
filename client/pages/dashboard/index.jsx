import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthUserContext";
import Table from "../../components/Table/table";

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
            <div className="min-h-full">
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
                <p className="mt-4 text-xl leading-7 text-gray-400 dark:text-gray-200 font-regular uppercase">
                Meetings Dashboard
                </p>
              </div>
              <Table />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Meetings;
