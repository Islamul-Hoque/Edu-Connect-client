import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const UpdateTuitionPost = () => {
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    useEffect(() => {
        axiosSecure.get(`/tuition/${id}`).then(res => {
        reset(res.data);
    });
    }, [id, axiosSecure, reset]);

    const handleUpdateTuition = async (data) => {
    try {
        const res = await axiosSecure.patch(`/tuition/${id}`, data);
        if (res.data.modifiedCount > 0) { 
            toast.success("Tuition post updated successfully!");
        } else { 
            toast.error("No changes detected!") }
        } 
    catch (err) { toast.error("Failed to update tuition post!");  
    }
}
    return (
        <div className="p-10 md:p-20 bg-gray-50">
            <div className="mx-auto bg-white shadow-lg rounded-lg p-8">
                <h3 className="text-2xl font-bold text-indigo-600 mb-6 text-center">Update Tuition Post</h3>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit(handleUpdateTuition)}>
                    <div>
                        <label className="label">Subject</label>
                        <input type="text" {...register("subject", { required: true })} className="input w-full" placeholder="Enter subject" />
                        {errors.subject && <p className="text-red-500">Subject is required.</p>}
                    </div>
                    <div>
                        <label className="label">Class</label>
                        <input type="text" {...register("class", { required: true })} className="input w-full" placeholder="Enter class" />
                        {errors.class && <p className="text-red-500">Class is required.</p>}
                    </div>
                    <div>
                        <label className="label">Medium</label>
                        <input type="text" {...register("medium", { required: true })} className="input w-full" placeholder="Enter medium" />
                        {errors.medium && <p className="text-red-500">Medium is required.</p>}
                    </div>
                    <div>
                        <label className="label">Institution</label>
                        <input type="text" {...register("institution", { required: true })} className="input w-full" placeholder="Enter institution" />
                        {errors.institution && <p className="text-red-500">Institution is required.</p>}
                    </div>
                    <div>
                        <label className="label">Location</label>
                        <input type="text" {...register("location", { required: true })} className="input w-full" placeholder="Enter location" />
                        {errors.location && <p className="text-red-500">Location is required.</p>}
                    </div>
                    <div>
                        <label className="label">Address</label>
                        <input type="text" {...register("address", { required: true })} className="input w-full" placeholder="Enter address" />
                        {errors.address && <p className="text-red-500">Address is required.</p>}
                    </div>
                    <div>
                        <label className="label">Schedule</label>
                        <input type="text" {...register("schedule", { required: true })} className="input w-full" placeholder="Enter schedule" />
                        {errors.schedule && <p className="text-red-500">Schedule is required.</p>}
                    </div>
                    <div>
                        <label className="label">Duration</label>
                        <input type="text" {...register("duration", { required: true })} className="input w-full" placeholder="Enter duration" />
                        {errors.duration && <p className="text-red-500">Duration is required.</p>}
                    </div>
                    <div>
                        <label className="label">Days per Week</label>
                        <input type="number" {...register("daysPerWeek", { required: true })} className="input w-full" placeholder="Enter days per week" />
                        {errors.daysPerWeek && <p className="text-red-500">Days per week is required.</p>}
                    </div>
                    <div>
                        <label className="label">Budget</label>
                        <input type="number" {...register("budget", { required: true })} className="input w-full" placeholder="Enter budget" />
                        {errors.budget && <p className="text-red-500">Budget is required.</p>}
                    </div>
                    <div>
                        <label className="label">Phone Number</label>
                        <input type="text" {...register("phone", { required: true })} className="input w-full" placeholder="Enter phone number" />
                        {errors.phone && <p className="text-red-500">Phone number is required.</p>}
                    </div>
                    <div className="md:col-span-2">
                        <label className="label">Additional Requirements</label>
                        <textarea {...register("additionalRequirements", { required: true })} className="textarea w-full" placeholder="Enter requirements" />
                        {errors.additionalRequirements && <p className="text-red-500">Additional requirements are required.</p>}
                    </div>

                    <div className="md:col-span-2"> <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300 font-semibold shadow-md mt-3">Update Tuition Post</button> </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateTuitionPost;