import { useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { AiFillGoogleCircle, AiFillGithub } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const handleRegister = () => navigate('/register');

    return (
        <div className="h-[80vh] flex flex-col justify-center items-center">
            <form className="flex flex-col space-y-2">
                <h2 className="text-2xl font-semibold text-red-700">Log into your account</h2>
                <input className="outline-none bg-slate-200 px-3 py-2 rounded-lg" type="email" name="email" placeholder="Email" id="" />
                <div className='flex relative'>
                    <input className="outline-none bg-slate-200 px-3 py-2 rounded-lg w-full" type={showPassword ? 'text' : 'password'} name="password" placeholder="Password" id="" />
                    <div onClick={() => setShowPassword(!showPassword)} className='absolute right-2 flex items-center h-full text-red-700 cursor-pointer'>
                        {showPassword ? <BsEyeSlashFill /> : <BsEyeFill />}
                    </div>
                </div>
                <input className=" bg-red-700 text-white font-semibold text-lg px-5 py-2 rounded-lg cursor-pointer active:scale-95 transition-transform" type="submit" value="Login" />
                <div className="flex justify-center items-center gap-2 bg-red-700 text-white font-semibold text-lg px-5 py-2 rounded-lg cursor-pointer active:scale-95 transition-transform"><AiFillGoogleCircle className="text-2xl" />Login with Google</div>
                <div className="flex justify-center items-center gap-2 bg-red-700 text-white font-semibold text-lg px-5 py-2 rounded-lg cursor-pointer active:scale-95 transition-transform"><AiFillGithub className="text-2xl" />Login with GitHub</div>
                <div className="text-red-700 font-medium">
                    <p>Don&apos;t have an account?</p>
                    <p onClick={handleRegister} className="text-blue-700 underline font-semibold cursor-pointer">Register</p>
                </div>
            </form>
        </div>
    )
};

export default Login;