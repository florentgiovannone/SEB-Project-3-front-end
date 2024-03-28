import React from 'react';
import axios from 'axios';
import { IUser } from "../interfaces/user";
import WinecardDashboard from "./WinecardDashboard";

interface IWine {
  _id: string;
  winery: string;
  wineName: string;
  region: string;
  country: string;
  style: string;
  vintage: number;
  grapes: string;
  image: string;
}

interface IWinecardDashboardProps extends IWine {
  children: React.ReactNode;
}

interface UserCaveProps {
  user: IUser;
  fetchUser: () => void;
}

const UserCave: React.FC<UserCaveProps> = ({ user, fetchUser }) => {
  function addWineToCave(wineId: number) {
    axios.post(`/api/user/${user._id}/cave`, { wineId })
      .then(() => fetchUser());
  }

  function deleteWineFromCave(wineId: number) {
    axios.delete(`/api/user/${user._id}/cave/${wineId}`)
      .then(() => fetchUser());
  }

  return (
    <div className="columns has-text-centered is-centered is-multiline">
      {user.myCave?.map((wine: IWine) => (
        <WinecardDashboard key={wine._id} {...wine} _id={wine._id.toString()} user={user}>          <button className="button is-danger" onClick={() => deleteWineFromCave(wine._id)}>Delete from my cave</button>
        </WinecardDashboard>
      ))}
    </div>
  );
};

export default UserCave;