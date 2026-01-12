import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast, { Toaster } from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

const Register = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const [authError, setAuthError] = useState("");
    const [show, setShow] = useState(false);


    const { registerUser, updateUserProfile, getJwtToken  } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();

    const handleRegistration = (data) => {
    const profileImg = data.photo[0];

    
    registerUser(data.email, data.password) 
        .then(() => {
        const formData = new FormData();
        formData.append("image", profileImg);

        const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`;

        axios.post(image_API_URL, formData).then((res) => {
            const photoURL = res.data.data.url;
            const userInfo = {
                email: data.email,
                displayName: data.name,
                photoURL: photoURL,
                role: data.role, 
                phone: data.phone,
            };
            axiosSecure.post("/users", userInfo).then((res) => {
                if (res.data.insertedId) {
                    // get token function
                    getJwtToken(data.email)
                    navigate( "/");
                    toast.success(`🎉 Welcome ${data.name}, your account has been created!`);
                }
            });

        // update user profile to firebase
        const userProfile = {
            displayName: data.name,
            photoURL: photoURL,
        };

        updateUserProfile(userProfile)
            .then(() => {
                navigate( "/");
            })
            .catch((error) => {
                console.log(error)
            });
        });
    })
    .catch((error) => {
        if (error.code === "auth/email-already-in-use") {setAuthError("This email is already registered!");
        } else if (error.code === "auth/weak-password") { setAuthError("Password should be at least 6 characters.");
        } else {setAuthError("Something went wrong. Please try again later.");}
});

};

return (
    <div className="flex justify-center items-center min-h-screen pt-12 pb-16  ">
        <div className="w-[88%] md:w-[50%] dark:hover:shadow-[0_0_7px_rgba(255,255,255,0.05)]  bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 dark:text-gray-800 pb-3 rounded-[0.7rem]  overflow-hidden shadow    ">
            <h2 className="text-2xl md:text-4xl font-bold text-center text-indigo-500 pt-10"> Sign Up for <span className="text-gradient">EduConnect</span></h2>   
            <div className="card-body text-gray-800 ">
                <form onSubmit={handleSubmit(handleRegistration)}>
                    <fieldset className="fieldset">
                        <label className="label dark:text-gray-50 ">Name</label>
                        <input type="text" {...register("name", { required: true })} className="inputField dark:text-gray-50 inputFieldDark" placeholder="Your Name" />
                        {errors.name?.type === "required" && <p className="text-red-500">Name is required.</p>}

                        <label className="label dark:text-gray-50">Photo</label>
                        <input type="file" {...register("photo", { required: true })}  className="file-input dark:text-gray-50 inputFieldDark w-full border border-slate-300 rounded-lg text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"  placeholder="Your Photo" />
                        {errors.photo?.type === "required" && <p className="text-red-500">Photo is required.</p>}

                        <label className="label dark:text-gray-50">Email</label>
                        <input type="email" {...register("email", { required: true })} className="inputField dark:text-gray-50 inputFieldDark" placeholder="Email" />
                        {errors.email?.type === "required" && <p className="text-red-500">Email is required.</p>}

                        <div className="relative dark:text-gray-50">
                            <label className="label dark:text-gray-50">Password</label>
                            <input type={ show ? "text" : "password" }  {...register("password", { required: true, minLength: 6, pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/, })}  className="inputField dark:text-gray-50 inputFieldDark" placeholder="Password" />
                            <span onClick={()=> setShow(!show) } className="absolute text-[1rem] right-4 top-[1.9rem] cursor-pointer z-50 " > { show ? <FaEye/> : <IoEyeOff/> }  </span>

                                {errors.password?.type === "required" && <p className="text-red-500">Password is required.</p>}
                                {errors.password?.type === "minLength" && <p className="text-red-500">Password must be 6 characters or longer</p>}
                                {errors.password?.type === "pattern" && <p className="text-red-500">Password must contain an uppercase letter, a lowercase letter, a number, and a special character.</p>}
                        </div>

                        <label className="label dark:text-gray-50">Register As</label>
                        <select {...register("role", { required: true })} className=" select dark:text-gray-50 inputField inputFieldDark" >
                            <option value="">Select Role</option>
                            <option value="Student">Student</option>
                            <option value="Tutor">Tutor</option>
                        </select>
                        {errors.role && <p className="text-red-500 text-sm">Role is required.</p>}

                        <label className="label dark:text-gray-50">Phone Number</label>
                        <input type="text" {...register("phone", { required: true })} className="inputField dark:text-gray-50 inputFieldDark" placeholder="Enter your phone number" />
                        {errors.phone && <p className="text-red-500">Phone number is required.</p>}

                        {authError && <p className="text-red-500 text-[0.8rem]">{authError}</p>}
                        <button className="w-full btn bg-indigo-500 text-white hover:bg-indigo-700 shadow-md mt-3">Register</button>
                    </fieldset>
                </form>

                <p className="text-gray-500 dark:text-gray-50  text-center">Already have an account? <Link to="/login" state={location.state}  className="text-gradient font-medium hover:text-indigo-600 hover:link" >  Login </Link></p>
            </div>
        </div>
        <Toaster />
    </div>
)
}

export default Register;