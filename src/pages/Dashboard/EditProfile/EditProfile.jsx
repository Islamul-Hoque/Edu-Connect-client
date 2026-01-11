import React from "react";
import { useForm } from "react-hook-form";

import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";

const EditProfile = () => {
    const { user, updateUserProfile, setUser } = useAuth();

    const {register, handleSubmit, watch, formState: { isSubmitting }, } = useForm({
        defaultValues: {
            name: user?.displayName || user?.providerData?.[0]?.displayName || "",
            photo: user?.photoURL || user?.providerData?.[0]?.photoURL || "",
        },
    });

    const nameValue = watch("name");
    const photoValue = watch("photo");

    const onSubmit = async (data) => {
        try {
        await updateUserProfile({ 
            displayName: data.name,
            photoURL: data.photo,
            });
            setUser({ ...user, displayName: data.name, photoURL: data.photo });
            toast.success("Profile updated successfully!");
        } catch (err) {
            toast.error(err.message);
        }
    };

    return (
    <div className="min-h-screen flex justify-center items-center ">
        <div className=" w-[88%] md:w-[40%] mx-auto bg-white dark:bg-gray-900 p-6 rounded-[0.6rem] shadow">
            <div className="flex flex-col items-center mb-6">
                <h2 className="text-2xl font-bold mb-4 text-indigo-500">My Profile</h2>
                <img src={ photoValue || "https://i.ibb.co.com/RTyj1cSs/1559144-200.png" } className="w-24 h-24 rounded-full object-cover mb-3" />
                <h3 className="text-[1.3rem] font-semibold"> {nameValue || "Your Name"} </h3>
                <p className="text-gray-500 text-[0.8rem] dark:text-gray-50">  {user?.email || user?.providerData?.[0]?.email} </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-50 mb-1">Your Name</label>
                <input {...register("name", { required: "Name is required" })}  type="text" className="inputField inputFieldDark" placeholder="Enter your name" />

                <label className="block text-sm font-medium text-gray-700 dark:text-gray-50 mb-1">Photo URL</label>
                <input {...register("photo", { required: "Photo URL is required" })}  type="url"  className="inputField inputFieldDark" placeholder="Enter your photo URL" />

                <button type="submit" disabled={isSubmitting} className="w-full mt-4 bg-indigo-600 text-white rounded-md font-semibold py-2 hover:bg-indigo-700 transition duration-300 shadow-md"> 
                {isSubmitting ? "Updating..." : "Update Profile"}
                </button>
            </form>
        </div>
    </div>
    );
};

export default EditProfile;