import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";

const SignUpScreen = () => {
  const [modalScreen, setModalScreen] = useState("details");

  return (
    <form method="dialog" className="modal-box">
      <div className="flex flex-row justify-between">
        <h1 className="text-[42px] font-bold text-primary ">Sign Up</h1>
        <button className=" h-7 text-[33px]">
          <BiArrowBack />
        </button>
      </div>

      {modalScreen === "details" ? (
        <Details />
      ) : modalScreen === "account" ? (
        <Account />
      ) : null}

      <div className="modal-action">
        {/* if there is a button in form, it will close the modal */}
        <label
          className="btn text-black"
          onClick={() => {
            setModalScreen("details");
          }}
        >
          Back
        </label>
        <label
          className="btn btn-primary text-white"
          onClick={() => {
            setModalScreen("account");
          }}
        >
          Continue
        </label>
      </div>
    </form>
  );
};

export default SignUpScreen;

export const Details = () => {
  return (
    <>
      <div className="w-[90%] mx-auto mt-5">
        <span className="mb-0.5 font-bold">First Name</span>
        <input
          type="text"
          placeholder="Enter your First Name"
          className="input input-bordered border-black input-primary w-full mb-2"
        />
        <span className="mb-0.5 font-bold">Last Name</span>
        <input
          type="text"
          placeholder="Enter your Last Name"
          className="input input-bordered border-black input-primary w-full mb-2"
        />
        <span className="mb-0.5 font-bold">Full Address</span>
        <input
          type="text"
          placeholder="Enter your Full Address"
          className="input input-bordered border-black input-primary w-full mb-2"
        />
      </div>
      <ul className="steps w-full mt-10 mb-4">
        <li className="step step-primary">Details</li>
        <li className="step">Account</li>
      </ul>
    </>
  );
};

export const Account = () => {
  return (
    <>
      <div className="w-[90%] mx-auto mt-5">
        <span className="mb-0.5 font-bold">First Name</span>
        <input
          type="email"
          placeholder="Enter your Email"
          className="input input-bordered border-black input-primary w-full mb-2"
        />
        <span className="mb-0.5 font-bold">Last Name</span>
        <input
          type="password"
          placeholder="Enter your Password"
          className="input input-bordered border-black input-primary w-full mb-2"
        />
      </div>
      <ul className="steps w-full mt-10 mb-4">
        <li className="step step-primary">Details</li>
        <li className="step step-primary">Account</li>
      </ul>
    </>
  );
};
