import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure.jsx";
import toast, { Toaster } from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";

const demoCredentials = {
  student: { email: "student@gmail.com", password: "123456Aa@" },
  tutor:   { email: "tutor@gmail.com",   password: "123456Aa@" },
  admin:   { email: "admin@gmail.com",   password: "123456Aa@" }
};

const Login = () => {
  const { register, handleSubmit, formState: { errors }, } = useForm();
  const { signInUser, signInGoogle, getJwtToken } = useAuth();
  const [show, setShow] = useState(false)
  const location = useLocation();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const handleLogin = (data) => {
    signInUser(data.email, data.password)
      .then((result) => {
        getJwtToken(data.email)
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

const handleGoogleSignIn = () => {
  signInGoogle()
    .then(async (result) => {
      const email = result.user?.email || result.user?.providerData?.[0]?.email;

      const userInfo = {
        email,
        displayName: result.user?.displayName,
        photoURL: result.user.photoURL || result.user?.providerData?.[0]?.photoURL,
        phone: ""
      };

      await axiosSecure.post('/users', userInfo).catch(err => {
        if (err.response?.status === 409) {
          console.log(err.response);
        }
      });
      await getJwtToken(email);

      toast.success('Logged in with Google!');
      navigate("/");
    })
    .catch(err => {
      console.error("Google login failed:", err);
    });
};

const handleDemoLogin = (role) => {
  const { email, password } = demoCredentials[role];
  signInUser(email, password)
    .then(() => {
      getJwtToken(email);
      toast.success(`Logged in as ${role}`);
      navigate("/");
    })
    .catch((err) => {
      console.error(`${role} demo login failed:`, err);
      toast.error("Demo login failed");
    });
};

  return (
    <div className="flex justify-center items-center min-h-screen  ">
      <div className="w-[88%] md:w-[50%] dark:hover:shadow-[0_0_7px_rgba(255,255,255,0.05)]  bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 pb-3 rounded-[0.7rem] overflow-hidden shadow  ">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-indigo-500 pt-10"> Login to <span className="text-gradient">EduConnect</span></h2>
        <div className="card-body text-gray-800 ">
          <form  onSubmit={handleSubmit(handleLogin)}>
            <fieldset className="fieldset">
              <label className="label dark:text-gray-50">Email</label>
              <input type="email" {...register("email", { required: true })} className="inputField dark:text-white inputFieldDark" placeholder="Email" />
              {errors.email?.type === "required" && <p className="text-red-500">Please enter a valid email address</p>}

              <div className="relative mt-1">
                <label className="label dark:text-gray-50">Password</label>
                <input type={ show ? "text" : "password" } {...register("password", { required: true, minLength: 6 })} className="inputField dark:text-white inputFieldDark" placeholder="Password" />
                <span onClick={()=> setShow(!show) } className="absolute text-[1rem] right-4 top-[1.9rem] cursor-pointer z-50 dark:text-white" > { show ? <FaEye/> : <IoEyeOff/> }  </span>
                {errors.password?.type === "required" && <p className="text-red-500">Please enter your password</p>}
              </div>

              <button className="w-full btn bg-indigo-500 text-white hover:bg-indigo-700 shadow-md mt-3">Login</button>
            </fieldset>
          </form>
          <p className="text-gray-500 dark:text-gray-50 text-center"> Don’t have an account?{" "} <Link state={location.state} to="/register" className="text-gradient font-medium hover:text-indigo-600 hover:link"> Sign Up </Link></p>

          <div className="flex items-center gap-3 ">
              <hr className="flex-1 border-gray-200 " />
              <span className="text-gray-500 dark:text-gray-50 text-sm"> Or </span>
              <hr className="flex-1 border-gray-200" />
          </div>

          <button onClick={handleGoogleSignIn} className="btn w-full dark:bg-gray-700 dark:text-gray-50 text-black rounded-md border border-[#e5e5e5] flex items-center justify-center gap-2"> 
            <FcGoogle size={18}/>Login with Google
          </button>

            <div className="mt-6">
              <div className="flex items-center mb-4">
                <div className="flex-1 h-px bg-[#E5E7EB]" ></div>
                <span className="px-4 text-sm font-medium dark:text-gray-50" > Try Demo Accounts </span>
                <div className="flex-1 h-px bg-[#E5E7EB]"  ></div> 
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <button  onClick={() => handleDemoLogin("student")} className="btn w-full bg-indigo-100 text-indigo-700 hover:bg-indigo-200" >  Login as Student  </button>
                <button  onClick={() => handleDemoLogin("tutor")} className="btn w-full bg-green-100 text-green-700 hover:bg-green-200" >  Login as Tutor </button>
                <button  onClick={() => handleDemoLogin("admin")} className="btn w-full bg-red-100 text-red-700 hover:bg-red-200" >  Login as Admin </button>
              </div>
            </div>

        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;