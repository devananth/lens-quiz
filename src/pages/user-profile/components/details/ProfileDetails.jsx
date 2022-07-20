import { useEffect, useState } from "react";
import { getUserDetails } from "../../../../services";
import { useAuth } from "../../../../contexts";

const ProfileDetails = () => {
  const [userDetails, setUserDetails] = useState({});

  const [loader, setLoader] = useState(false);

  const {
    authState: { isUserLoggedIn, uid },
    logoutHandler,
  } = useAuth();

  useEffect(() => {
    if (isUserLoggedIn && uid) {
      (async () => {
        setLoader(true);
        try {
          let userData = await getUserDetails();
          if (userData) {
            setUserDetails({
              email: userData?.data?.email,
              userName:
                userData?.data?.firstName + " " + userData?.data?.lastName,
            });
          }
        } catch (error) {
          console.error(error.message);
        } finally {
          setLoader(false);
        }
      })();
    }
  }, []);

  return loader ? (
    <h2>Loading...</h2>
  ) : (
    <div className="profile__body ml-2">
      <div className="d-flex gap-1">
        <span className="txt-bold">User Name :</span>
        <span>{userDetails?.userName}</span>
      </div>
      <div className="d-flex gap-1">
        <span className="txt-bold">Email ID :</span>
        <span>{userDetails?.email}</span>
      </div>
      <button className="btn btn-primary" onClick={logoutHandler}>
        Logout
      </button>
    </div>
  );
};

export { ProfileDetails };
