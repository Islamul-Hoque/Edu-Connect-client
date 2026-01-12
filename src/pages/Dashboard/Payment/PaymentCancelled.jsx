import React from "react";
import { Link } from "react-router";
import { MdReplay } from "react-icons/md";

const PaymentCancelled = () => {
  return (
    <div className=" bg-base-100 min-h-screen">
      <div className="p-10 text-center">
        <h2 className="text-3xl font-bold text-error mb-4"> Payment Cancelled </h2>
        <p className="text-gray-600 dark:text-gray-50"> Your payment was cancelled. To approve the tutor’s application, please try again.</p>

        <Link to="/dashboard/applied-tutors"> 
          <button className="btn bg-indigo-600 text-white rounded-md font-semibold py-2 hover:bg-indigo-700 transition duration-300 shadow-md mt-4">
          <MdReplay className="text-white text-lg" />Try Again
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentCancelled;