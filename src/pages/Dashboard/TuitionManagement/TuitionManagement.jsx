import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loading from "../../../Components/Loading/Loading";
import { format } from "date-fns";
import Swal from "sweetalert2";
import { FaBookOpen, FaGraduationCap, FaSchool, FaMapMarkerAlt, FaClock, FaMoneyBillWave, FaUser, FaPhoneAlt, FaEye, FaClipboardList, FaEnvelope, FaRegCalendarAlt } from "react-icons/fa";
import { HiCheckCircle, HiXCircle } from "react-icons/hi";

const TuitionManagement = () => {
  const axiosSecure = useAxiosSecure();
  const [selectedTuition, setSelectedTuition] = useState(null);

  const { data: tuitions = [], isLoading, refetch } = useQuery({
    queryKey: ["tuitions"],
    queryFn: async () => {
      const res = await axiosSecure.get("/tuitions");
      return res.data;
    },
  });

  const handleStatusChange = async (tuitionId, newStatus) => {
    Swal.fire({
      title: `Confirm ${newStatus}`,
      text: `Are you sure you want to mark this tuition as ${newStatus}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: `Yes, ${newStatus}`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosSecure.patch(`/tuitions/${tuitionId}`, { status: newStatus });
          if (res.data.modifiedCount > 0) {
            Swal.fire("Updated!", `Tuition marked as ${newStatus}.`, "success");
            refetch();
          }
        } catch (err) {
          Swal.fire("Error", "Failed to update tuition status", "error");
        }
      }
    });
  };

  if (isLoading) return <Loading />;

  return (
    <div className="px-6 md:px-10 py-6 md:py-10">
      <h2 className="text-2xl font-bold text-indigo-600 mb-4">Tuition Management ({tuitions.length})</h2>

      <div className="overflow-x-auto">
        <table className="table dark:bg-gray-900">
          <thead>
            <tr className="dark:text-gray-50">
              <th>#</th>
              <th>Student info</th>
              <th>Subject</th>
              <th>Class</th>
              <th>Budget</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tuitions.map((tuition, index) => {
              const isPending = tuition.status === "Pending";
              return (
                <tr key={tuition._id} className="dark:text-gray-50">
                  <td>{index + 1}</td>
                  <td>
                    <div>{tuition.studentName}</div>
                    <div className="text-sm opacity-50 dark:opacity-100">{tuition.studentEmail}</div>
                  </td>
                  <td>{tuition.subject}</td>
                  <td>{tuition.class}</td>
                  <td>{tuition.budget} Tk</td>
                  <td>
                    <span
                      className={
                        tuition.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-sm"
                          : tuition.status === "Approved"
                          ? "bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm"
                          : tuition.status === "Rejected"
                          ? "bg-red-100 text-red-700 px-2 py-1 rounded-full text-sm"
                          : "bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-sm"
                      }
                    >
                      {tuition.status}
                    </span>
                  </td>
                  <td className="flex gap-2">
                    <button onClick={() => setSelectedTuition(tuition)} className="btn btn-sm bg-blue-100 text-blue-800 hover:bg-blue-200 shadow-md" > <FaEye className="text-lg" /> </button>
                    {isPending && (
                      <>
                        <button onClick={() => handleStatusChange(tuition._id, "Approved")} className="btn btn-sm bg-green-100 text-green-700 hover:bg-green-200 shadow-md" > <HiCheckCircle className="text-lg" /> </button>
                        <button onClick={() => handleStatusChange(tuition._id, "Rejected")} className="btn btn-sm bg-red-100 text-red-700 hover:bg-red-200 shadow-md" > <HiXCircle className="text-lg" /> </button>
                      </>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {selectedTuition && (
        <dialog open className="modal">
          <div className="modal-box space-y-3">
            <h2 className="text-3xl font-bold text-indigo-600 mb-6 flex items-center gap-2"> <FaBookOpen /> {selectedTuition.subject}</h2>
            <p className="text-gray-700 dark:text-gray-50 flex items-center gap-2"><FaGraduationCap className="text-indigo-500" /> Class: {selectedTuition.class}</p>
            <p className="text-gray-700 dark:text-gray-50 flex items-center gap-2"><FaSchool className="text-indigo-500" /> Institution: {selectedTuition.institution}</p>
            <p className="text-gray-700 dark:text-gray-50 flex items-center gap-2"><FaMapMarkerAlt className="text-indigo-500" /> Location: {selectedTuition.location}</p>
            <p className="text-gray-700 dark:text-gray-50 flex items-center gap-2"><FaClock className="text-indigo-500" /> Schedule: {selectedTuition.schedule} ({selectedTuition.duration})</p>
            <p className="text-gray-700 dark:text-gray-50 flex items-center gap-2"><FaMoneyBillWave className="text-indigo-500" /> Budget: {selectedTuition.budget} Tk/Month</p>
            <p className="text-gray-700 dark:text-gray-50 flex items-center gap-2"><FaUser className="text-indigo-500" /> Student: {selectedTuition.studentName}</p>
            <p className="text-gray-700 dark:text-gray-50 flex items-center gap-2"><FaPhoneAlt className="text-indigo-500" /> Phone: {selectedTuition.phone}</p>
            <p className="text-gray-700 dark:text-gray-50 flex items-center gap-2"><FaEnvelope className="text-indigo-500" /> Email: {selectedTuition.studentEmail}</p>
            <p className="text-gray-700 dark:text-gray-50 flex items-center gap-2"><FaClipboardList className="text-indigo-500" /> Additional Requirements: {selectedTuition.additionalRequirements}</p>
            <div className="text-gray-600 dark:text-gray-50  text-sm flex items-center gap-2"><FaRegCalendarAlt className="text-indigo-500" /> {format(new Date(selectedTuition.createdAt), "dd/MM/yyyy")}</div>
            <div className="modal-action">
              <button onClick={() => setSelectedTuition(null)} className="btn dark:bg-gray-700">Close</button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default TuitionManagement;