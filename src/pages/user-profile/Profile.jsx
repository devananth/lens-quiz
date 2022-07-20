import "./profile.css";
import { useState } from "react";
import { ProfileDetails } from "./components/details/ProfileDetails";
import { Dashboard } from "./components/dashboard/Dashboard";

const Profile = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="profile__container d-flex col align-center mt-2">
      <h3>My Profile</h3>
      <ul className="profile__tab--wrapper">
        <li
          onClick={() => setActiveTab(0)}
          className={`${activeTab === 0 ? "indicator" : ""} cursor-ptr`}
        >
          User Details
        </li>
        <li
          onClick={() => setActiveTab(1)}
          className={`${activeTab === 1 ? "indicator" : ""} cursor-ptr`}
        >
          Recent Scores
        </li>
      </ul>
      {activeTab === 0 && <ProfileDetails />}

      {activeTab === 1 && <Dashboard />}
    </section>
  );
};

export { Profile };
