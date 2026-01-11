// import React from "react";
// import { useForm } from "react-hook-form";

// import useAuth from "../../../hooks/useAuth";
// import toast from "react-hot-toast";

// const EditProfile = () => {
//     const { user, updateUserProfile, setUser } = useAuth();

//     const {register, handleSubmit, watch, formState: { isSubmitting }, } = useForm({
//         defaultValues: {
//             name: user?.displayName || user?.providerData?.[0]?.displayName || "",
//             photo: user?.photoURL || user?.providerData?.[0]?.photoURL || "",
//         },
//     });

//     const nameValue = watch("name");
//     const photoValue = watch("photo");

//     const onSubmit = async (data) => {
//         try {
//         await updateUserProfile({ 
//             displayName: data.name,
//             photoURL: data.photo,
//             });
//             setUser({ ...user, displayName: data.name, photoURL: data.photo });
//             toast.success("Profile updated successfully!");
//         } catch (err) {
//             toast.error(err.message);
//         }
//     };

//     return (
//     <div className="min-h-screen flex justify-center items-center ">
//         <div className=" w-[88%] md:w-[40%] mx-auto bg-white dark:bg-gray-900 p-6 rounded-[0.6rem] shadow">
//             <div className="flex flex-col items-center mb-6">
//                 <h2 className="text-2xl font-bold mb-4 text-indigo-500">My Profile</h2>
//                 <img src={ photoValue || "https://i.ibb.co.com/RTyj1cSs/1559144-200.png" } className="w-24 h-24 rounded-full object-cover mb-3" />
//                 <h3 className="text-[1.3rem] font-semibold"> {nameValue || "Your Name"} </h3>
//                 <p className="text-gray-500 text-[0.8rem] dark:text-gray-50">  {user?.email || user?.providerData?.[0]?.email} </p>
//             </div>

//             <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//                 <label className="block text-sm font-medium text-gray-700 dark:text-gray-50 mb-1">Your Name</label>
//                 <input {...register("name", { required: "Name is required" })}  type="text" className="inputField inputFieldDark" placeholder="Enter your name" />

//                 <label className="block text-sm font-medium text-gray-700 dark:text-gray-50 mb-1">Photo URL</label>
//                 <input {...register("photo", { required: "Photo URL is required" })}  type="url"  className="inputField inputFieldDark" placeholder="Enter your photo URL" />

//                 <button type="submit" disabled={isSubmitting} className="w-full mt-4 bg-indigo-600 text-white rounded-md font-semibold py-2 hover:bg-indigo-700 transition duration-300 shadow-md"> 
//                 {isSubmitting ? "Updating..." : "Update Profile"}
//                 </button>
//             </form>
//         </div>
//     </div>
//     );
// };

// export default EditProfile;


import { GrUpdate } from "react-icons/gr";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { User, Mail, Camera } from "lucide-react";
import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";
import {  FaCalendarAlt, FaUserCog } from "react-icons/fa";

const Profile = () => {
    const { user, updateUserProfile, setUser } = useAuth();
    const {role} = useRole()
    const [loading, setLoading] = useState(false);
    const [displayName, setDisplayName] = useState("");
    const [photoURL, setPhotoURL] = useState("");

    useEffect(() => {
        if (user) {
            setDisplayName(user.displayName || "");
            setPhotoURL(user.photoURL || "");
        }
    }, [user]);

    const handleUpdate = async (e) => {
    e.preventDefault();

    if (!displayName.trim()) {
        toast.error("Display name is required!");
        return;
    }

    setLoading(true);

    try {
        await updateUserProfile({ displayName, photoURL });
        setUser({ ...user, displayName, photoURL });
        toast.success("Profile updated successfully!");
    } catch (error) {
        console.error(error);
        toast.error("Failed to update profile.");
    } finally {
        setLoading(false);
    }
};

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
            <div className="max-w-4xl mx-auto">

                <div className="text-center mb-10"> <h2 className="text-2xl md:text-4xl font-bold mb-4 text-indigo-500">My Profile</h2></div>

                    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                        <div className="grid md:grid-cols-5">

                        <div className="md:col-span-2 bg-sky-50 dark:bg-gray-700 p-8 text-gray-800 dark:text-white flex flex-col gap-8">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-38 h-38 rounded-full overflow-hidden border-4 border-white/30 mb-3">
                                    {photoURL || user?.photoURL ? (
                                        <img src={photoURL || user?.photoURL} alt="Profile" className="w-full h-full object-cover" onError={(e) => (e.target.src = "https://i.ibb.co.com/XrwQtrwD/User.jpg")} />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-white/10"><User size={64} /></div>
                                    )}
                                </div>
                                <h3 className="text-xl font-semibold">{displayName || "User"}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-300">{user?.email}</p>
                            </div>

                            <div className="space-y-3 w-full">
                                <div className="bg-sky-100 dark:bg-white/10 backdrop-blur rounded-xl p-3 border border-gray-200 dark:border-white/20">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-sky-200 dark:bg-white/20 rounded-lg flex items-center justify-center"><FaUserCog   size={20} /></div>
                                        <div>
                                            <p className="text-gray-700 dark:text-gray-300 text-xs">Role</p>
                                            <p className="font-semibold"> {role} </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-sky-100 dark:bg-white/10 backdrop-blur rounded-xl p-3 border border-gray-200 dark:border-white/20">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-sky-200 dark:bg-white/20 rounded-lg flex items-center justify-center"><FaCalendarAlt size={20} /></div>
                                        <div>
                                            <p className="text-gray-700 dark:text-gray-300 text-xs">Member Since</p>
                                            <p className="font-semibold"> {user?.metadata?.creationTime ? new Date(user.metadata.creationTime).toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short", year: "numeric" }) : "—"} </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-3 dark:bg-gray-900 p-8 md:p-10">
                            <form onSubmit={handleUpdate} className="space-y-6">
                                <div>
                                    <label className="text-sm font-semibold flex items-center gap-2 mb-2 text-gray-700 dark:text-gray-200"><User size={16} /> Display Name</label>
                                    <input type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} required className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:border-gray-600 outline-none text-gray-800 dark:text-white" />
                                </div>

                                <div>
                                    <label className="text-sm font-semibold flex items-center gap-2 mb-2 text-gray-700 dark:text-gray-200"><Mail size={16} /> Email (read only)</label>
                                    <input type="email" value={user?.email || ""} readOnly className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 cursor-not-allowed text-gray-800 dark:text-gray-300" />
                                </div>

                                <div>
                                    <label className="text-sm font-semibold flex items-center gap-2 mb-2 text-gray-700 dark:text-gray-200"><Camera size={16} /> Photo URL</label>
                                    <input type="url" value={photoURL} onChange={(e) => setPhotoURL(e.target.value)} placeholder="https://example.com/photo.jpg" className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:border-gray-600 outline-none text-gray-800 dark:text-white" />
                                </div>

                                <button type="submit" disabled={loading} className="btn btn-primary"><GrUpdate size={18} />{loading ? "Updating..." : "Update Profile"}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        <Toaster />
        </div>
    );
};

export default Profile;