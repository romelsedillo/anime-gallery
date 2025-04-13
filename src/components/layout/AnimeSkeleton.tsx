import React from "react";

const AnimeSkeleton = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4 sm:px-6 md:px-8">
      {Array.from({ length: 25 }).map((_, index) => (
        <div key={index} className="w-full max-w-[200px] mx-auto animate-pulse">
          <div className="w-[200px] h-[282px] bg-gray-300 dark:bg-gray-700 rounded" />
          <div className="mt-2 h-4 bg-gray-300 dark:bg-gray-700 rounded w-[90%]" />
          <div className="mt-1 h-4 bg-gray-300 dark:bg-gray-700 rounded w-[60%]" />
        </div>
      ))}
    </div>
  );
};

export default AnimeSkeleton;
