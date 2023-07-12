import React from "react";

const LoadingScreen = () => {
  return (
    <div className="absolute flex flex-col h-full w-full justify-center content-center bg-white">
      <label className="flex flex-col">
        <span className="loading loading-spinner loading-lg bg-primary mx-auto mb-3"></span>
        <span className="text-black mx-auto animate-bounce">Loading</span>
      </label>
    </div>
  );
};

export default LoadingScreen;
