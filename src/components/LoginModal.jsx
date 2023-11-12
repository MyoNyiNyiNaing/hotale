import React from "react";
import { RxCross1 } from "react-icons/rx";
import { motion } from "framer-motion";

const LoginModal = ({ setOpenLoginModal }) => {
  const closeLoginModal = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setOpenLoginModal(false);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onClick={closeLoginModal}
      className="backdrop select-none z-[1000] bg-[#00000060] flex justify-center items-center h-screen fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0  max-h-full"
    >
      <div className="w-[80%] lg:w-[65%]">
        <div className="relative bg-white shadow px-8">
          <div className=" flex justify-between items-center border-b-2 py-5 border-gray-200 rounded-t">
            <span></span>
            <h3 className="uppercase text-[14px] font-[600] tracking-wider text-[#000]">
              Login
            </h3>

            <button
              type="button"
              onClick={() => setOpenLoginModal(false)}
              className=" text-[#000] bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg p-1.5"
            >
              <RxCross1 />
            </button>
          </div>

          <div className=" py-10 border-b border-gray-200 space-y-5">
            <div className=" grid md:grid-cols-2 gap-5 md:gap-10">
              <div className=" flex flex-col gap-3">
                <label
                  htmlFor=""
                  className=" text-[14px] font-[500] text-[#5c5c5c]"
                >
                  Username or E-Mail
                </label>
                <input
                  type="text"
                  className=" outline-none border-2 border-gray-300 px-5 py-3 rounded"
                />
              </div>
              <div className=" flex flex-col gap-3">
                <label
                  htmlFor=""
                  className=" text-[14px] font-[500] text-[#5c5c5c]"
                >
                  Password
                </label>
                <input
                  type="text"
                  className=" outline-none border-2 border-gray-300 px-5 py-3 rounded"
                />
              </div>
            </div>
            <div className=" text-center bg-[#141414] text-white py-3">
              <button className="  text-[14px] font-[500] uppercase">
                Sign in!
              </button>
            </div>
            <p className=" text-end  text-[14px] font-[500] text-[#5c5c5c]">
              Forget Password?
            </p>
          </div>

          <div className=" text-center py-10">
            <h1 className=" font-[700] text-[16px] text-[#141414]">
              DO NOT HAVE AN ACCOUNT?
            </h1>
            <p className=" font-[500] uppercase text-[12px] transition text-[#141414] hover:text-[#898989]">
              CREATE AN ACCOUNT
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LoginModal;
