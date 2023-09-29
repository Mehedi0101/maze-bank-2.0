import { useState } from 'react';
import { BsEyeFill } from 'react-icons/bs';
import { BsEyeSlashFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.config'

const Register = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [nameError, setNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [firebaseError, setFirebaseError] = useState('');

    const navigate = useNavigate();

    const handleLogin = () => navigate('/login');

    const handleRegister = e => {
        e.preventDefault();

        setNameError('');
        setPasswordError('');
        setFirebaseError('');

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (name.length < 6) {
            setNameError('Name should contain at least 6 characters');
            return;
        }

        if (password.length < 6) {
            setPasswordError('Password should contain at least 6 characters');
            return;
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+/.test(password)) {
            setPasswordError('Password should contain at least one uppercase, one lowercase and one number');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                sendEmailVerification(auth.currentUser)
                    .then(() => { })
                    .catch()
                updateProfile(auth.currentUser, { displayName: { name }, photoURL: "" })
                    .then(() => {

                    })
                    .catch(() => {

                    })
                    navigate('/login')
            }   
            )
            .catch(error => {
                error.message === 'Firebase: Error (auth/email-already-in-use).' && setFirebaseError('Email is already in use');
            })
    }

    return (
        <div className="h-[80vh] flex justify-center items-center">
            <form onSubmit={handleRegister} className="flex flex-col space-y-2">
                <h2 className="text-2xl font-semibold text-red-700">Create a new account</h2>
                <input className="outline-none bg-slate-200 px-3 py-2 rounded-lg" type="text" name="name" placeholder="Name" required />
                {
                    nameError && <p className='text-red-700 text-xs max-w-[220px]'>* {nameError}</p>
                }
                <input className="outline-none bg-slate-200 px-3 py-2 rounded-lg" type="email" name="email" placeholder="Email" id="" required />
                {
                    firebaseError && <p className='text-red-700 text-xs max-w-[220px]'>* {firebaseError}</p>
                }
                <div className='flex relative'>
                    <input className="outline-none bg-slate-200 px-3 py-2 rounded-lg w-full" type={showPassword ? 'text' : 'password'} name="password" placeholder="Password" id="" required />
                    <div onClick={() => setShowPassword(!showPassword)} className='absolute right-2 flex items-center h-full text-red-700 cursor-pointer'>
                        {showPassword ? <BsEyeSlashFill /> : <BsEyeFill />}
                    </div>
                </div>
                {
                    passwordError && <p className='text-red-700 text-xs max-w-[220px]'>* {passwordError}</p>
                }
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