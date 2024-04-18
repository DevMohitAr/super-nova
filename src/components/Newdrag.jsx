import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { IoIosChatboxes } from "react-icons/io";
import { GiSailboat } from "react-icons/gi";
import { BsFillWebcamFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { RxCross2 } from "react-icons/rx";
import React from "react";
export const Newdrag = ({
  bottomBoxContent,
  boxes1,
  setBoxes1,
  setBottomBoxContent,
  text,
  setText,
}) => {
  const [videoLoaded, setVideoLoaded] = React.useState(false);
  const [hoverBox, setHoverBox] = React.useState("");
  const [query, setQuery] = React.useState("");
  const videoLoadedHandler = () => {
    setVideoLoaded(true);
  };
  const handleDragStart = (e, id, isBox) => {
    e.dataTransfer.setData("text/plain", id);
    e.dataTransfer.setData("isBox", isBox);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetId) => {
    e.preventDefault();
    const draggedItemId = e.dataTransfer.getData("text/plain");
    const isBox = e.dataTransfer.getData("isBox") === "true";

    if (isBox) {
      const draggedItem = boxes1?.find((box) => box.id === draggedItemId);

      if (draggedItem) {
        // Update state for both dropping within bottomBox and to start-box
        if (targetId === "bottomBox") {
          setBoxes1((prevBoxes) =>
            prevBoxes.filter((box) => box.id !== draggedItemId)
          );
          setBottomBoxContent((prevContent) => [
            ...prevContent.filter((content) => content.id !== draggedItemId),
            draggedItem,
          ]); // Re-order content within bottomBox
        } else if (targetId === "start-box") {
          // Check if the dragged item is not already present in the start-box to avoid duplicates
          if (!boxes1?.find((box) => box.id === draggedItemId)) {
            setBottomBoxContent((prevContent) =>
              prevContent.filter((content) => content.id !== draggedItemId)
            );
            setBoxes1((prevBoxes) => [...prevBoxes, draggedItem]);
          }
        }
      }
    } else {
      const draggedContentItem = bottomBoxContent.find(
        (content) => content.id === draggedItemId
      );
      if (draggedContentItem) {
        setBottomBoxContent((prevContent) =>
          prevContent.filter((content) => content.id !== draggedItemId)
        );
        setBoxes1((prevBoxes) => [...prevBoxes, draggedContentItem]);
      }
    }
  };
  const handleEnter = (id) => {
    setHoverBox(id);
  };
  return (
    <main className="hero relative h-screen overflow-hidden brightness-[80%] ">
      <div className="absolute z-30 top-6 left-4">
        <Link to="/login" className=" text-zinc-100 text-lg  ">
          <FaArrowLeft />
        </Link>
      </div>

      {/* <div className="absolute  brightness-[50%]">
        {!videoLoaded && (
          <img
            src="/assets/poster_image.jpg"
            alt="Poster Image"
            className="w-full h-full object-cover"
          />
        )}
        <video
          loop
          muted
          onLoadedData={videoLoadedHandler}
          className={videoLoaded ? "block" : "hidden"}
        >
          <source src="/assets/video1.mp4" />
        </video>
      </div> */}
      <section className="grid grid-rows-[auto_1fr] w-screen h-screen gap-3 p-6">
        <div className="flex justify-between items-center relative h-full  ">
          <div className="w-[120px] gradient ml-6 ">
            <img src="/assets/hero-2.png" alt="logo" />
          </div>
          <div className="text-sm flex gap-8 text-white abc2 border-2 border-gray-700">
            <Link to="/">Log out</Link>
          </div>
        </div>
        <section className=" text-white  relative h-full ">
          <section className="h-full">
            <div className="flex     shadow-lg rounded-lg new h-full gap-4">
              {/* <div className="flex justify-center items-center mb-6">
          <div className="w-[180px] ">
            <img src="../src/assets/hero-2.png" alt="hello" />
          </div>
          
        </div> */}
              <div className="h-full relative">
                <div
                  id="bottomBox"
                  className=" eee3 w-[180px]  text-gray-50 border-2 border-gray-400 flex flex-col gap-5 py-4 px-4    shadow-xl h-full relative  "
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, "bottomBox")}
                >
                  {/* Bottom Box */}
                  {bottomBoxContent.length >= 1 ? (
                    bottomBoxContent?.map((content, j) => (
                      <section className="relative " key={j}>
                        <div
                          key={content.id}
                          id={content.id}
                          // className="bg-red-400 p-4 w-[fit-content] self-start"
                          className={`rounded-2xl eee border-2 px-4 py-6  ${content.color} grid place-content-center   h-[50px] shadow-xl`}
                          draggable
                          onDragStart={(e) =>
                            handleDragStart(e, content.id, false)
                          }
                          onDragOver={handleDragOver}
                        >
                          <p className="text-[10px] text-gray-200 mb-1  mt-2">
                            {content.text}
                          </p>
                        </div>
                        <div
                          className={`box w-6 h-6 ${content.bgColor} absolute top-[-12px] left-5 rounded-[50%] flex justify-center items-center`}
                        >
                          {j === 0 ? (
                            <IoIosChatboxes />
                          ) : j === 1 ? (
                            <GiSailboat />
                          ) : (
                            <BsFillWebcamFill />
                          )}
                        </div>
                      </section>
                    ))
                  ) : (
                    <div className="flex justify-center items-center w-full uppercase tracking-widest h-full">
                      <h3 className="text-gray-200 text-sm text-center">
                        drop your ai products here
                      </h3>
                    </div>
                  )}
                </div>

                <Link
                  to="/select"
                  className={`text-center px-4 py-2  text-[12px] abc2 absolute bottom-2 left-[23%] font-bold ${
                    bottomBoxContent.length >= 1
                      ? "border-gray-200  border-2 "
                      : ""
                  } w-[fit-content] ml-auto mr-auto`}
                >
                  {bottomBoxContent.length >= 1 && "Submit"}
                </Link>
              </div>

              <div className=" eee2 px-8  py-2  flex-1 text-gray-50 border-gray-400 border-2">
                <div className="flex gap-2  items-center  ">
                  <div className="relative w-full">
                    <input
                      type="text"
                      placeholder="Label here..."
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      className="w-full text-sm  text-gray-500 eee2 rounded-md p-3 "
                    />
                    {query.length >= 1 ? (
                      <button
                        onClick={() => setQuery("")}
                        className="absolute right-10 top-4 text-gray-300 text-md"
                      >
                        <RxCross2 />
                      </button>
                    ) : (
                      ""
                    )}
                  </div>

                  <span className="text-md border-2 border-gray-400 bg-gray-600 text-gray-200 p-2 abc2">
                    Search
                  </span>
                </div>

                <div className="mt-4 flex justify-between text-gray-200  text-[10px] ">
                  {text.map((btn, i) => {
                    return (
                      <button
                        onClick={(e) => setQuery(btn.text.toLowerCase())}
                        key={i}
                        className="px-4 py-2 border-2 text-white bg-gray-600  border-gray-200 rounded-md  mr-2"
                      >
                        {btn.text}
                      </button>
                    );
                  })}
                </div>

                <h2 className="text-gray-50 mt-4 text-md uppercase font-italic tracking-wide mb-4 ">
                  Choose your AI Products
                </h2>

                <div
                  id="start-box"
                  className="  mt-3 py-2 h-[130px]  relative  "
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, "start-box")}
                >
                  {query.length >= 1 ? (
                    <div className="flex gap-8 flex-wrap min-w-[280px] flex-1 justify-center ">
                      {boxes1
                        .filter((box) => {
                          return box.desc.includes(query.toLowerCase());
                        })
                        .map((box, i) => {
                          return (
                            <div
                              key={i}
                              draggable
                              onDragStart={(e) =>
                                handleDragStart(e, box.id, true)
                              }
                              onDragOver={handleDragOver}
                              onMouseEnter={(e) => handleEnter(e.target.id)}
                              onMouseLeave={() => handleEnter(null)}
                              id={box.id}
                              className={`text-gray-400 text-md grid place-content-center h-[120px]     py-6 px-4   shadow-xl rounded-2xl  border-[1px] hover:border-2 hover:shadow-inner min-w-[150px] max-w-[270px]   relative -top-2 eee ${box.color} flex-1   `}
                            >
                              <p
                                className={`text-[12px] text-gray-100 mb-2 mt-2 mine2 text-center ${
                                  box.id === hoverBox ? "hidden" : "block"
                                }`}
                              >
                                {box.text}
                              </p>
                              <p
                                className={`text-[12px] text-gray-400 max-w-64 mine mine2  ${
                                  box.id === hoverBox ? "block" : "hidden"
                                }  `}
                              >
                                {box.text === "Consult AI-Knowledge Management"
                                  ? box.desc.substring(0, 78)
                                  : box.text ===
                                    "Consult AI-Knowledge Management"
                                  ? box.desc.substring(0, 90)
                                  : box.text ===
                                    "Consult AI- Executive Insights"
                                  ? box.desc.substring(0, 83)
                                  : box.text === "IGenius AI Marketing"
                                  ? box.desc.substring(0, 71)
                                  : box.text ===
                                    "Consult AI - Social Media Tracker"
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
                    <div className="flex flex-wrap gap-8 flex-1 justify-center ">
                      {boxes1?.map((box, j) => (
                        <div
                          key={j}
                          draggable
                          onDragStart={(e) => handleDragStart(e, box.id, true)}
                          onDragOver={handleDragOver}
                          onMouseEnter={(e) => handleEnter(e.target.id)}
                          onMouseLeave={() => handleEnter(null)}
                          id={box.id}
                          className={`text-gray-400 text-md grid place-content-center h-[120px]     py-6 px-4   shadow-xl rounded-2xl  border-[1px] hover:border-2 hover:shadow-inner min-w-[150px] max-w-[320px]  relative -top-2 eee ${box.color}  flex-1`}
                        >
                          <p
                            className={`text-[12px] text-gray-100 mb-2 mt-2 mine2 text-center ${
                              box.id === hoverBox ? "hidden" : "block"
                            }`}
                          >
                            {box.text}
                          </p>
                          <p
                            className={`text-[10px] text-gray-400 max-w-64 mine mine2 ${
                              box.id === hoverBox ? "block" : "hidden"
                            } `}
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
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
    </main>
  );
};
