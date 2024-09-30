import React from "react";
import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <p className="text-3xl">
        Hi, Welcome {user?.displayName ? user.displayName : "Back!"}
      </p>
    </div>
  );
};

export default UserHome;
