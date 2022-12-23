import React, {useEffect, useState} from "react";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import {NavLink} from "react-router-dom";

import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Nav from "../common/Nav";
import {register} from "../redux/actions/authAction";



const Register = () => {
    const auth = useSelector(state => state.authReducer)
    console.log("auth",auth)
    const [eye, setEye] = useState(false);
    const [reEye, setReEye] = useState(false);
    const dispath = useDispatch()
    const navigate = useNavigate()
    // const {dark, user,} = useAppContext();
    const dark = true

    const [loading, setLoading] = useState(false);
    const initialState = {
        fullname: '', username: '', email: '', password: '', rePassword: '', gender: 'male'
    }
    const [userData, setUserData] = useState(initialState);
    console.log("initialState",initialState)
    const handleChangeInput = (e) => {
        const  { name, value} = e.target;
        setUserData({...userData,[name]:value})
    };

    const handleSubmit = async () => {
        setLoading(true);
        dispath(register(userData))
    };

    useEffect(() =>{
        if(auth.token){
            navigate("/")
        }
    },[auth.token, navigate])
    return (
        <div>
            <Nav/>
            <div
                className={`bg-[#5c7bd1] dark:bg-[#4E4F50] h-screen w-screen flex items-center relative transition-50 overflow-hidden md:grid-cols-3 `}
                style={{
                    backgroundImage: !dark ? "none" : "url(/images/bg.png)",
                }}>
                {/* image background */}
                <div className='hidden md:flex h-full items-center justify-center relative md:col-span-1 '>
                    <img
                        src='/images/cloud.png'
                        alt='cloud'
                        className='absolute bottom-0 left-0 opacity-70 w-full h-full '
                    />
                    <img
                        src='/images/heart.png'
                        alt='cloud'
                        className='absolute left-[10%] top-[20%] opacity-70 cursor-pointer rotate-90 '
                    />
                    <img
                        src='/images/heart.png'
                        alt='cloud'
                        className='absolute left-[30%] bottom-[5%] opacity-70 cursor-pointer rotate-[36 deg] '
                    />
                    <img
                        src='/images/heart.png'
                        alt='cloud'
                        className='absolute left-[10%] opacity-70 cursor-pointer '
                    />
                    <img
                        src='/images/heart.png'
                        alt='cloud'
                        className='absolute top-[10%] left-[20%] opacity-70 cursor-pointer '
                    />

                    <img
                        src={`/images/ship-space.png`}
                        alt='chicken'
                        className='w-[70%] h-auto object-contain z-10'
                    />
                </div>
                {/* form */}
                <div className='flex md:col-span-2 w-full items-center justify-center z-10'>
                    <div className='bg-[#ffffff]/80 mx-[5%] md:mx-0 w-full mt-9 dark:bg-[#3a3a3a]/80 dark:text-white/70 md:w-auto px-[20px] md:px-[80px] py-[15px] sm:py-[30px] md:py-[40px] rounded-3xl transition-50 '>
                        <div className=' mb-[18px] text-xl sm:text-2xl md:text-[30px] text-[#5b38bc] dark:text-[#9b7cee] font-extrabold '>
                            Register
                        </div>
                        <form
                            className='mt-[13px] sm:mt-[15px] md:mt-[20px] font-bold '
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleSubmit();
                            }}>
                            {/* name and email */}
                            <div className='grid grid-cols-2 gap-x-2 md:gap-x-3 '>
                                <div className='col-span-1'>
                                    <div className='text-sm md:text-[16px] mb-1 md:mb-2'>
                                        Full Name
                                    </div>
                                    <input
                                        disabled={loading}
                                        type='text'
                                        className='input-register '
                                        placeholder='Jack Frost'
                                        name='fullname'
                                        onChange={(e) => handleChangeInput(e)}
                                    />
                                </div>
                                <div className='col-span-1'>
                                    <div className='text-sm md:text-[16px] mb-1 md:mb-2'>
                                        User  Name
                                    </div>
                                    <input
                                        disabled={loading}
                                        type='text'
                                        className='input-register '
                                        placeholder='Jack Frost'
                                        name='username'
                                        onChange={(e) => handleChangeInput(e)}
                                    />
                                </div>

                            </div>
                            {/* password and confirm password */}
                            <div className='mt-4 md:mt-[25px] grid grid-cols-2 gap-x-2 md:gap-x-3'>
                                {/* Password */}
                                <div className='col-span-1'>
                                    <div className='text-sm md:text-[16px] mb-1 md:mb-2'>
                                        Password
                                    </div>
                                    <div className='flex items-center relative'>
                                        <input
                                            disabled={loading}
                                            type={eye ? "text" : "password"}
                                            className=' input-register '
                                            placeholder='Password'
                                            name='password'
                                            onChange={(e) =>
                                                handleChangeInput(e)
                                            }
                                        />
                                        {eye ? (
                                            <AiOutlineEye
                                                className='text-black/20 text-[20px] absolute right-2 cursor-pointer h-full dark:text-white/40'
                                                onClick={() => setEye(!eye)}
                                            />
                                        ) : (
                                            <AiOutlineEyeInvisible
                                                className='text-black/20 text-[20px] absolute right-2 cursor-pointer h-full dark:text-white/40'
                                                onClick={() => setEye(!eye)}
                                            />
                                        )}
                                    </div>
                                </div>
                                {/* Confirm password */}
                                <div className='col-span-1'>
                                    <div className='text-sm md:text-[16px] mb-1 md:mb-2'>
                                        Confirm password
                                    </div>
                                    <div className='flex items-center relative'>
                                        <input
                                            disabled={loading}
                                            type={reEye ? "text" : "password"}
                                            className=' input-register '
                                            placeholder='Password'
                                            name='rePassword'
                                            onChange={(e) =>
                                                handleChangeInput(e)
                                            }
                                        />
                                        {reEye ? (
                                            <AiOutlineEye
                                                className='text-black/20 text-[20px] absolute right-2 cursor-pointer h-full dark:text-white/40'
                                                onClick={() => setReEye(!reEye)}
                                            />
                                        ) : (
                                            <AiOutlineEyeInvisible
                                                className='text-black/20 text-[20px] absolute right-2 cursor-pointer h-full dark:text-white/40'
                                                onClick={() => setReEye(!reEye)}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                            {/* Question and answer */}
                            <div className='mt-4 md:mt-[25px] sm:grid grid-cols-2 gap-x-2 md:gap-x-3'>
                                <div className='col-span-full'>
                                    <div className='text-sm md:text-[16px] mb-1 md:mb-2'>
                                        Email address
                                    </div>
                                    <input
                                        disabled={loading}
                                        type='email'
                                        className=' input-register'
                                        placeholder='User@gmail.com'
                                        name='email'
                                        onChange={(e) => handleChangeInput(e)}
                                    />
                                </div>
                            </div>
                            <div className='mt-4 md:mt-[25px] sm:grid grid-cols-2 gap-x-2 md:gap-x-3'>

                                <div className="flex items-center">
                                    <label htmlFor="male">
                                        Male: <input type="radio" id="male" name="gender"
                                                     value="male" defaultChecked onChange={handleChangeInput} />
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <label htmlFor="female">
                                        Female: <input type="radio" id="female" name="gender"
                                                       value="female" onChange={handleChangeInput} />
                                    </label>
                                </div>

                            </div>
                            <div className='mt-[12px] md:mt-[17px] text-[13px] font-normal flex justify-between items-center '>
                                <NavLink to='/forget-password'>
                                    Forget password?
                                </NavLink>
                            </div>
                            <button
                                className={`mt-[30px] md:mt-[35px] w-full font-extrabold text-[20px] md:text-2xl bg-[#46289A]/80 hover:bg-[#46289A] border text-white py-[8px] md:py-[13px] rounded-[5px] transition-50 ${
                                    loading ? "loading" : ""
                                } `}
                                type='submit'
                                disabled={loading}>
                                {loading ? "Loading..." : "Register"}
                            </button>
                        </form>

                        <div className='mt-[8px] md:mt-[16px] text-[13px] md:text-[15px] text-center '>
                            <span className='block md:inline '>
                                If u have an account,{" "}
                            </span>
                            <NavLink
                                to='/login'
                                className='font-bold text-[17px]  '>
                                let's login
                            </NavLink>
                        </div>
                    </div>
                </div>
                {!dark && (
                    <>
                        <div className='fixed bottom-0 right-0'>
                            <img
                                src={`/images/dark-cloud-2.png`}
                                alt='cloud-2'
                                className='object-contain translate-y-2'
                            />
                        </div>
                        <div className='fixed top-0 right-0'>
                            <img
                                src={`/images/dark-cloud-3.png`}
                                alt='cloud-2'
                                className='object-contain translate-y-2'
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Register;