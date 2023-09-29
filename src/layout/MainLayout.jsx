import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { createContext, useState } from "react";

export const UserDataContext = createContext();

const MainLayout = () => {
    const [userData, setUserData] = useState();
    
    return (
        <div>
            <Navbar></Navbar>
            <UserDataContext.Provider value={{userData, setUserData}}>
                <Outlet></Outlet>
            </UserDataContext.Provider>
        </div>
    );
};

export default MainLayout;