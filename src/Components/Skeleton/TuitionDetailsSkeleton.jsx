import React from 'react';

const TuitionDetailsSkeleton = () => {
    return (
        <div className="max-w-7xl dark:bg-gray-900 mx-auto bg-white shadow-lg rounded-xl p-8 mt-10 space-y-4 animate-pulse">
            <div className="h-8 w-48 bg-gray-300 dark:bg-gray-700 rounded mb-6"> </div>
            <div className="space-y-3">
                <div className="h-5 w-40 bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div className="h-5 w-56 bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div className="h-5 w-52 bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div className="h-5 w-64 bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div className="h-5 w-44 bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div className="h-5 w-48 bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div className="h-5 w-60 bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div className="h-5 w-40 bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div className="h-5 w-72 bg-gray-300 dark:bg-gray-700 rounded"></div>
            </div>
            <div className="h-4 w-32 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="h-10 w-full bg-gray-300 dark:bg-gray-700 rounded mt-6"></div>
        </div>
    );
};


export default TuitionDetailsSkeleton;