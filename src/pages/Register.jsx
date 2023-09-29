import { useState } from 'react';
import { BsEyeFill } from 'react-icons/bs';
import { BsEyeSlashFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const handleLogin = () => navigate('/login');

    return (
        <div className="h-[80vh] flex justify-center items-center">
            <form className="flex flex-col space-y-2">
                <h2 className="text-2xl font-semibold text-red-700">Create a new account</h2>
                <input className="outline-none bg-slate-200 px-3 py-2 rounded-lg" type="text" name="name" placeholder="Name" />
                <input className="outline-none bg-slate-200 px-3 py-2 rounded-lg" type="email" name="email" placeholder="Email" id="" />
                <div className='flex relative'>
                    <input className="outline-none bg-slate-200 px-3 py-2 rounded-lg w-full" type={showPassword ? 'text' : 'password'} name="password" placeholder="Password" id="" />
                    <div onClick={() => setShowPassword(!showPassword)} className='absolute right-2 flex items-center h-full text-red-700 cursor-pointer'>
                        {showPassword ? <BsEyeSlashFill /> : <BsEyeFill />}
                    </div>
                </div>
                <input className="outline-none bg-red-700 text-white font-semibold text-lg px-5 py-2 rounded-lg cursor-pointer active:scale-95 transition-transform" type="submit" value="Register" />
                <div className="text-red-700 font-medium">
                    <p>Already have an account?</p>
                    <p onClick={handleLogin} className="text-blue-700 underline font-semibold cursor-pointer">login</p>
                </div>
            </form>
        </div>
    );
};

export default Register;