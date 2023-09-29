import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="flex justify-between items-center mt-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-red-700 font-bold">Maze Bank</h2>
            <div className="flex gap-10 text-red-700 text-lg font-medium">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/register'>Register</NavLink>
            </div>
        </div>
    );
};

export default Navbar;