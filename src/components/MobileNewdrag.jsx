import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { IoIosChatboxes } from "react-icons/io";
import { GiSailboat } from "react-icons/gi";
import { BsFillWebcamFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { RxCross2 } from "react-icons/rx";
import { useGlobal } from "./Provider";
import React from "react";
export const MobileNewdrag = ({
  bottomBoxContent,
  boxes1,
  setBoxes1,
  setBottomBoxContent,
  text,
  setText,
}) => {
  const [hoverBox, setHoverBox] = React.useState("");
  const [query, setQuery] = React.useState("");

const {setMobSel,mobSel} = useGlobal()

  return (
    <main className="relative h-screen  ">
      <div className="absolute z-30 top-2 left-2">
        <Link to="/login" className=" text-zinc-100 text-2xl  ">
          <FaArrowLeft />
        </Link>
      </div>

      <div className="video-container fixed top-0 left-0 w-full h-full overflow-hidden brightness-[50%]">
        <video
          loop
          muted
         
          className="w-full h-full object-cover"
        >
          <source src="../src/assets/video1.mp4" />
        </video>
      </div>

      <section className=" text-white  relative h-full w-full ">
        <section className="h-full w-full">
          <div className=" eee2   py-6   text-gray-50 border-gray-700 px-4 ">
            <div className="flex gap-4 w-full  items-center mt-4   ">
              <div className="relative flex-1  ">
                <input
                  type="text"
                  placeholder="Label here..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full  text-gray-500 eee2 rounded-md p-3 "
                />
                {query.length >= 1 ? (
                  <button
                    onClick={() => setQuery("")}
                    className="absolute right-0 top-4 text-gray-300 text-xl"
                  >
                    <RxCross2 />
                  </button>
                ) : (
                  ""
                )}
              </div>
              <div className="text-lg border-2 border-gray-600 text-gray-400 p-2 abc2">
                <button>Search</button>
              </div>
            </div>

            <div className="mt-4 flex  flex-wrap justify-center text-gray-400  text-[10px] gap-4">
              {text.map((btn, i) => {
                return (
                  <button
                    onClick={(e) => setQuery(btn.text.toLowerCase())}
                    key={i}
                    className="px-2 py-2 border-2   border-gray-400 rounded-md min-w-[80px] "
                  >
                    {btn.text}
                  </button>
                );
              })}
            </div>

            <h2 className="text-gray-50 mt-10 text-lg uppercase font-italic tracking-wide ml-3 ">
              Our AI Products
            </h2>

            <div
              id="start-box"
              className="  mt-6 py-2 h-[130px]  relative  "
             
           
            >
              {query.length >= 1 ? (
                <div className="flex gap-10 flex-wrap min-w-[280px] flex-1 justify-center ">
                  {boxes1
                    .filter((box) => {
                      return box.desc.includes(query.toLowerCase());
                    })
                    .map((box, i) => {
                      return (
                        <div
                          key={i}
                         
                          id={box.id}
                          className={`text-gray-400 text-md grid place-content-center h-[150px]     py-6 px-4   shadow-xl rounded-2xl  border-[1px] hover:border-2 hover:shadow-inner min-w-[240px] max-w-[320px]   relative -top-2 eee ${box.color} flex-1   `}
                        >
                          <p
                            className={`text-md text-gray-100 mb-2 mt-2 mine2 whitespace-nowrap ${
                              box.id === hoverBox ? "hidden" : "block"
                            }`}
                          >
                            {box.text}
                          </p>
                          <p
                            className={`text-[16px] text-gray-400 max-w-64 mine mine2  ${
                              box.id === hoverBox ? "block" : "hidden"
                            } leading-7 `}
                          >
                            {box.text === "Consult AI-Knowledge Management"
                              ? box.desc.substring(0, 78)
                              : box.text === "Consult AI-Knowledge Management"
                              ? box.desc.substring(0, 90)
                              : box.text === "Consult AI- Executive Insights"
                              ? box.desc.substring(0, 83)
                              : box.text === "IGenius AI Marketing"
                              ? box.desc.substring(0, 71)
                              : box.text === "Consult AI - Social Media Tracker"
                              ? box.desc.substring(0, 87)
                              : box.desc.substring(0, 118)}
                          </p>
                          <div
                            className={`box w-8 h-8 ${box.bgColor} absolute  -top-[15px] left-5 rounded-[50%] flex justify-center items-center`}
                          >
                            {box.content === "chat" ? (
                              <IoIosChatboxes />
                            ) : box.content === "email" ? (
                              <GiSailboat />
                            ) : (
                              <BsFillWebcamFill />
                            )}
                          </div>
                        </div>
                      );
                    })}
                </div>
              ) : (
                <div className="flex flex-wrap gap-16 flex-1 justify-center pb-6 ">
                  {boxes1?.map((box, j) => (
                    <Link
                      key={j}
                      to="/one"
                      id={box.id}
                      onClick={()=>setMobSel(box.content)}
                      className={`text-gray-400 text-md grid place-content-center h-[150px]     py-6 px-4   shadow-xl rounded-2xl  border-[1px] hover:border-2 hover:shadow-inner min-w-[240px] max-w-[320px]  relative -top-2 eee ${box.color}  flex-1`}
                    >
                      <p
                        className={`text-md text-gray-100 mb-2 mt-2 mine2 whitespace-nowrap ${
                          box.id === hoverBox ? "hidden" : "block"
                        }`}
                      >
                        {box.text}
                      </p>
                      <p
                        className={`text-[16px] text-gray-400 max-w-64 mine mine2 ${
                          box.id === hoverBox ? "block" : "hidden"
                        } leading-7`}
                      >
                        {box.text === "Consult AI-Knowledge Management"
                          ? box.desc.substring(0, 78)
                          : box.text === "Consult AI-Knowledge Management"
                          ? box.desc.substring(0, 90)
                          : box.text === "Consult AI- Executive Insights"
                          ? box.desc.substring(0, 83)
                          : box.text === "IGenius AI Marketing"
                          ? box.desc.substring(0, 71)
                          : box.text === "Consult AI - Social Media Tracker"
                          ? box.desc.substring(0, 87)
                          : box.desc.substring(0, 118)}
                      </p>
                      <div
                        className={`box w-8 h-8 ${box.bgColor} absolute  -top-[15px] left-5 rounded-[50%] flex justify-center items-center`}
                      >
                        {box.content === "chat" ? (
                          <IoIosChatboxes />
                        ) : box.content === "email" ? (
                          <GiSailboat />
                        ) : (
                          <BsFillWebcamFill />
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};



