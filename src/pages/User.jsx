import { useContext } from "react";
import { UserDataContext } from "../layout/MainLayout";

const User = () => { 
    const {userData} = useContext(UserDataContext);
    document.title = userData?.name || 'User';
    return (
        <div className="h-[80vh] flex flex-col justify-center items-center">
            <h2 className="text-red-700 text-3xl md:text-4xl lg:text-5xl font-bold">Welcome {userData?.name}!</h2>
            <h3 className="mt-10 border-b border-b-red-200">Account Information</h3>
            <p className="mt-2"><strong>User Name:</strong> {userData?.name}</p>
            <p><strong>Email:</strong> {userData?.email}</p>
        </div>
    );
};

export default User;