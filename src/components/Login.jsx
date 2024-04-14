import React from "react";
import { Link } from "react-router-dom";
import { IoLogoGoogle } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

export default function Login({ name, setName }) {
  return (
    <section className=" relative overflow-hidden h-screen mani">
      <div className="absolute h-screen w-screen brightness-[45%]">
        {/* <video autoPlay loop muted>
          <source src="../src/assets/video1.mp4" />
        </video> */}

        <video loop muted>
          <source src="../src/assets/video1.mp4" />
        </video>
      </div>
      <div className="flex justify-between items-center px-6 py-6 relative">
        <div className="w-[180px] gradient ">
          <Link to="/">
            <img src="../src/assets/hero-2.png" alt="logo" />
          </Link>
        </div>
        <div className="mr-2 flex gap-8 text-white">
          {/* <button>For Business</button>
          <button>FAQ</button> */}
          {/* <button>Sign In</button> */}
        </div>
      </div>
      <section className=" text-white  relative ">
        <div className="main-div flex flex-col items-center justify-center mt-36   ">
          <div className="wrapper border-[rgba(255,255,255,0.5)] border-2 w-[350px] h-[auto]  px-4 py-12 text-center font-[Archivo, sans-serif] text-white  rounded-md">
            <h3 className="text-2xl font-bold mb-3">Welcome Back</h3>
            {/* <div className="border-[rgba(255,255,255,0.2)] p-2 border-2 flex items-center justify-center gap-3 rounded-md my-4">
              <span>
                <IoLogoGoogle />{" "}
              </span>
              <p>Sign in with Google</p>
            </div> */}

            {/* <div className="border-[rgba(255,255,255,0.2)] p-2 border-2 flex items-center justify-center gap-3 rounded-md my-4">
              <FaFacebook />
              <p>Sign in with Facebook</p>
            </div> */}

            {/* <div className="flex justify-center items-center gap-2">
              <span className="w-[100%] h-[.5px] bg-white"></span>
              <p>OR</p>
              <span className="w-[100%] h-[.5px] bg-white"></span>
            </div> */}

            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Name"
              className="bg-[#e6e6fa] text-black w-[100%] rounded-md p-3 outline-none border-none outline-[gray] my-4"
              onChange={(e) => setName(e.target.value)}
            />

            <div className="password relative flex justify-center items-center">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Your password"
                className="bg-[#e6e6fa] text-black w-[100%] rounded-md p-3 outline-none border-none outline-[gray] my-4 relative"
              />
              {/* <span className="fa-solid fa-eye absolute right-3">
                <FaEye />
              </span> */}
            </div>

            {/* <p className="text-right my-2 text-yellow-500 font-bold">
              forgot password?
            </p> */}

            <div className="button flex items-center relative">
              <Link
                to="/new"
                type="button"
                className={`btn border-2 border-gray-100 abc  w-full p-3 rounded-md text-gray font-bold text-xl mt-8 `}
              >
                Let's go
              </Link>
              {/* <span className="fa-solid fa-circle-right absolute right-[30%] -top-[30%]">
                <FaArrowAltCircleRight />
              </span> */}
            </div>

            {/* <p className="signup text-right font-bold">
              Not on SuperNova?
              <span className="text-yellow-500 font-bold">Sign up Now</span>
            </p> */}
          </div>
        </div>
      </section>
    </section>
  );
}
