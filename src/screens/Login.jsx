import React, { useEffect, useState } from "react";
import SignUpScreen from "./Signup";
import LoadingScreen from "../components/Loading";

const LoginScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an async operation
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="flex flex-col h-[100vh] bg-white justify-center">
      <dialog id="my_modal_1" className="modal modal-bottom sm:modal-middle">
        <SignUpScreen />
      </dialog>

      <div className="absolute flex h-[82vh] w-full bg-[#EBEBEB]">
        <div className="flex flex-col bg-white h-[520px] min-w-[450px] rounded-xl my-auto ml-10 shadow-xl justify-center">
          <div className="flex flex-col w-[85%] mx-auto ">
            <span className="mb-0.5 font-bold">Email</span>
            <input
              type="text"
              placeholder="Enter your Email"
              className="input input-bordered border-black input-primary w-full mb-4"
            />
            <span className="mb-0.5 font-bold">Password</span>
            <input
              type="password"
              placeholder="Enter your Password"
              className="input input-bordered border-black input-primary  w-full"
            />
            <label className="flex justify-between mb-12 mt-2">
              <span
                className="hover:underline cursor-pointer hover:text-blue-600"
                onClick={() => window.my_modal_1.showModal()}
              >
                Create New Account
              </span>
              <span className="hover:underline cursor-pointer hover:text-blue-600">
                Forgot Password?
              </span>
            </label>
          </div>
          <div className="flex  w-[85%] mx-auto">
            <button className="btn btn-active btn-primary text-white w-full font-bold">
              LOGIN
            </button>
          </div>

          {/* <div className="flex bg-rose-100 w-[85%] h-[60px] mx-auto mt-10 justify-center border border-red-400 rounded-sm">
            <p className="my-auto text-red-700 text-center m-5">
              The password you entered is incorrect! please try again
            </p>
          </div> */}
        </div>
        <div className="my-auto m-10">
          <h1 className="text-[62px] font-bold text-primary animate-bounce ">
            Login now!
          </h1>
          <p className="text-[20px]">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;

{
  /* Open the modal using ID.showModal() method */
}
