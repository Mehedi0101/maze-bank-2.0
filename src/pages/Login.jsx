import { useContext, useRef, useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { AiFillGoogleCircle, AiFillGithub } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { GithubAuthProvider, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { UserDataContext } from "../layout/MainLayout";

const Login = () => {
    document.title = 'Login';
    const [showPassword, setShowPassword] = useState(false);

    const [firebaseError, setFirebaseError] = useState('');

    const [forgotText, setForgotText] = useState('');

    const { setUserData } = useContext(UserDataContext);

    const emailRef = useRef();

    const navigate = useNavigate();

    const handleRegister = () => navigate('/register');

    const handleLogin = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        setFirebaseError('');
        setForgotText('');

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                if (!userCredential.user.emailVerified) {
                    setFirebaseError('Email is not verified');
                    return;
                }
                setUserData({ name: userCredential.user.displayName, email: userCredential.user.email })
                navigate('/user');
            })
            .catch((error) => {
                if (error.code === 'auth/invalid-login-credentials') {
                    setFirebaseError('Invalid email and password');
                }
            });
    }

    const handleForgotPassword = () => {
        const email = emailRef.current.value;
        if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            sendPasswordResetEmail(auth, email)
                .then(() => setForgotText('Check Your Email'))
                .catch(() => { })
        }
    }

    const handleLoginWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then(userCredential => {
                setUserData({ name: userCredential.user.displayName, email: userCredential.user.email })
                navigate('/user');
            })
            .catch(error => console.log(error))
    }

    const handleLoginWithGitHub = () => {
        const provider = new GithubAuthProvider();
        signInWithPopup(auth, provider)
            .then(userCredential => {
                setUserData({name: userCredential.user.displayName, email: userCredential.user.email})
                navigate('/user');
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="h-[80vh] flex flex-col justify-center items-center">
            <form onSubmit={handleLogin} className="flex flex-col space-y-2">
                <h2 className="text-2xl font-semibold text-red-700">Log into your account</h2>
                <input className="outline-none bg-slate-200 px-3 py-2 rounded-lg" ref={emailRef} type="email" name="email" placeholder="Email" id="" required />
                <div className='flex relative'>
                    <input className="outline-none bg-slate-200 px-3 py-2 rounded-lg w-full" type={showPassword ? 'text' : 'password'} name="password" placeholder="Password" id="" required />
                    <div onClick={() => setShowPassword(!showPassword)} className='absolute right-2 flex items-center h-full text-red-700 cursor-pointer'>
                        {showPassword ? <BsEyeSlashFill /> : <BsEyeFill />}
                    </div>
                </div>
                {
                    firebaseError && <p className='text-red-700 text-xs max-w-[220px]'>* {firebaseError}</p>
                }
                <input className=" bg-red-700 text-white font-semibold text-lg px-5 py-2 rounded-lg cursor-pointer active:scale-95 transition-transform" type="submit" value="Login" />
                <div onClick={handleLoginWithGoogle} className="flex justify-center items-center gap-2 bg-red-700 text-white font-semibold text-lg px-5 py-2 rounded-lg cursor-pointer active:scale-95 transition-transform"><AiFillGoogleCircle className="text-2xl" />Login with Google</div>
                <div onClick={handleLoginWithGitHub} className="flex justify-center items-center gap-2 bg-red-700 text-white font-semibold text-lg px-5 py-2 rounded-lg cursor-pointer active:scale-95 transition-transform"><AiFillGithub className="text-2xl" />Login with GitHub</div>
                <div onClick={handleForgotPassword} className="text-red-700 font-medium cursor-pointer hover:underline">Forgot password?</div>
                {
                    forgotText && <p className='text-green-700 text-xs max-w-[220px]'>* {forgotText}</p>
                }
                <div className="text-red-700 font-medium">
                    <p>Don&apos;t have an account?</p>
                    <p onClick={handleRegister} className="text-blue-700 underline font-semibold cursor-pointer">Register</p>
                </div>
            </form>
        </div>
    )
};

export default Login;