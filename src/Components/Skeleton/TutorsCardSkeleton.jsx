import React from "react";

const TutorsCardSkeleton = ({ count = 4 }) => {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: count }).map((_, i) => (
                <div key={i} className="SectionCard p-6 rounded-xl bg-gray-100 dark:bg-gray-800  border border-gray-200 dark:border-gray-600  shadow animate-pulse flex flex-col items-center" >
                    <div className="w-20 h-20 rounded-full bg-gray-300 dark:bg-gray-600 mb-4"></div>
                    <div className="h-5 w-2/3 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
                    <div className="h-4 w-3/4 bg-gray-300 dark:bg-gray-600 rounded"></div>
                </div>
            ))}
        </div>
    );
};

export default TutorsCardSkeleton;