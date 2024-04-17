import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import { FaBarsStaggered } from "react-icons/fa6";
import { IoIosChatboxes } from "react-icons/io";
import { GiSailboat } from "react-icons/gi";
import { BsFillWebcamFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
export default function SelectedBox({ bottomBoxContent, name }) {
  const [selectedBox, setSelectedBox] = React.useState(null);
  const [show, setShow] = React.useState(true);

  const textVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 0.9,

      transition: {
        duration: 5,
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <main className="relative grid grid-rows-[auto_1fr] h-screen w-screen p-6 gap-3 ">
      <video className="absolute brightness-[50%] h-screen " loop muted>
        <source src="../src/assets/video1.mp4" />
      </video>
      <div className="flex justify-between items-center relative ">
        <Link
          to="/new"
          className="absolute text-zinc-100 text-2xl top-0 left-0"
        >
          <FaArrowLeft />
        </Link>
        <div className="w-[200px] gradient pl-10 ">
          <img src="../src/assets/hero-2.png" alt="logo" />
        </div>
        <div className="flex gap-8 abc2 border-2 border-gray-700 text-white">
          {/* <button>For Business</button>
          <button>FAQ</button> */}
          <Link to="/">Log out</Link>
        </div>
      </div>

      <div className="relative flex gap-5 h-full overflow-hidden ">
        <div className="relative border-2 h-full  border-gray-700 eee3 box3 ">
          {/* <div className="px-8 py-2  text-2xl ">
            <div className="w-[180px] mt-4">
              <img src="../src/assets/hero-2.png" alt="loo" />
            </div>
          </div> */}

          <div
            onClick={() => setShow(!show)}
            className="text-gray-200 text-2xl  relative p-2 "
          >
            <button
              className={`${show ? "block" : "hidden"} inline-block ml-1`}
            >
              <FaBarsStaggered />
            </button>
            <button
              className={`${show ? "hidden" : "block"} inline-block ml-1`}
            >
              <FaBars />
            </button>
            <div className={`${show ? "hidden" : "block"}   h-full `}>
              {bottomBoxContent.map((c, i) => {
                return (
                  <div
                    key={i}
                    className={`box w-8 h-8 mb-[90px] mt-[130px]  ${c.bgColor} rounded-[50%] flex justify-center items-center`}
                  >
                    {i === 0 ? (
                      <IoIosChatboxes />
                    ) : i === 1 ? (
                      <GiSailboat />
                    ) : (
                      <BsFillWebcamFill />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className={`${show ? "block" : "hidden"} h-full `}>
            <div className=" pt-8 pb-8  text-gray-50 font-italic ">
              <p className="text-center text-2xl px-2">Selected Fields</p>
            </div>
            <div className=" px-6   ">
              {bottomBoxContent.map((c, i) => {
                return (
                  <section key={i} className="flex items-center gap-5">
                    <div
                      key={i}
                      className={`relative rounded-2xl border-2 p-4 mt-8 text-gray-50 whitespace-nowrap ${
                        c.color
                      } w-[280px] h-[60px] grid place-content-center ${
                        show ? "block" : "hidden"
                      }`}
                    >
                      <button onClick={() => setSelectedBox(c.content)}>
                        {c.text}
                      </button>
                      <div
                        className={`box w-8 h-8 ${c.bgColor}  absolute top-[-15px] left-5 rounded-[50%] flex justify-center items-center`}
                      >
                        {i === 0 ? (
                          <IoIosChatboxes />
                        ) : i === 1 ? (
                          <GiSailboat />
                        ) : (
                          <BsFillWebcamFill />
                        )}
                      </div>
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        </div>
        <div className="eee3 box3  border-2 h-full  border-gray-700 flex-1 ">
          <div className="border-gray-700 h-full">
            {selectedBox ? (
              <WebViewComponent
                src={
                  selectedBox === "chat" || selectedBox === "email"
                    ? `https://chatapp-9694f.web.app/#/${selectedBox}`
                    : "https://consult-ai.co"
                }
              />
            ) : (
              <div className=" grid place-content-center h-full">
                <p className="text-zinc-200 text-4xl">Choose Any Agent</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

const WebViewComponent = ({ src, title }) => {
  return (
    <div className="h-full overflow-y-auto ">
      <iframe
        src={src}
        title={title}
        width="100%"
        height="780px"
        frameBorder="0"
        allow="encrypted-media"
        className=""
      />
    </div>
  );
};
