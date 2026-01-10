import React from "react";

const TuitionCardSkeleton = ({ count = 8 }) => {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: count }).map((_, i) => (
                <div key={i} className="flex flex-col justify-between p-6 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 shadow animate-pulse" >
                    <div className="space-y-3 flex-1">
                        <div className="h-5 w-2/3 bg-gray-300 dark:bg-gray-600 rounded"></div>
                        <div className="h-4 w-1/2 bg-gray-300 dark:bg-gray-600 rounded"></div>
                        <div className="h-4 w-3/4 bg-gray-300 dark:bg-gray-600 rounded"></div>
                        <div className="h-4 w-2/3 bg-gray-300 dark:bg-gray-600 rounded"></div>
                        <div className="h-4 w-1/3 bg-gray-300 dark:bg-gray-600 rounded"></div>
                        <div className="h-4 w-1/2 bg-gray-300 dark:bg-gray-600 rounded"></div>
                    </div>
                    <div className="mt-4 h-9 w-full bg-gray-300 dark:bg-gray-600 rounded"></div>
                </div>
            ))}
        </div>
    );
};

export default TuitionCardSkeleton;
