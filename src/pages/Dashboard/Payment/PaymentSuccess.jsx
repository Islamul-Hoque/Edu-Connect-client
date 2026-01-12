import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { FaArrowLeft } from "react-icons/fa";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [paymentInfo, setPaymentInfo] = useState({});
  const sessionId = searchParams.get('session_id');
  const axiosSecure = useAxiosSecure();

useEffect(() => {
  if (sessionId) {
    axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
      .then(res => {
        setPaymentInfo(res.data);
      })
      .catch(() => {
        Swal.fire("Error", "Failed to verify payment", "error");
      });
  }
}, [sessionId, axiosSecure]);

return (
  <div className='p-6  bg-base-100 min-h-screen'>
    <div className="text-center ">
      <h2 className="text-4xl font-bold text-success mb-4">Payment Successful 🎉</h2>
      <div className="text-lg dark:text-gray-50">Transaction ID: <span className="font-mono">{paymentInfo.transactionId}</span></div>
      <div className="text-lg dark:text-gray-50">Tutor: {paymentInfo.tutorName} ({paymentInfo.tutorEmail})</div>
      <div className="text-lg dark:text-gray-50">Tuition: {paymentInfo.subject} ({paymentInfo.class})</div>
      <div className="text-lg dark:text-gray-50">Paid Amount: ${paymentInfo.amount}</div>
      <div className="text-sm dark:text-gray-50 text-gray-500 mt-2">Paid At: {new Date(paymentInfo.paidAt).toLocaleString()}</div>
      <p className="mt-4 text-gray-600 dark:text-gray-50">Thank you! You’ve successfully approved the tutor’s application with payment.</p>
      <Link to="/dashboard/applied-tutors"> <button className="btn bg-indigo-600 text-white rounded-md font-semibold py-2 hover:bg-indigo-700 transition duration-300 shadow-md mt-4">
        <FaArrowLeft className="text-white" /> Back to My Applications</button> </Link>
    </div>
  </div>
);
}

export default PaymentSuccess;