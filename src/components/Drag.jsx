import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { IoIosChatboxes } from "react-icons/io";
import { GiSailboat } from "react-icons/gi";
import { BsFillWebcamFill } from "react-icons/bs";
import React from "react";
export const Drag = ({
  bottomBoxContent,
  boxes,
  setBoxes,
  setBottomBoxContent,
}) => {
  const [videoLoaded, setVideoLoaded] = React.useState(false);

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
      const draggedItem = boxes.find((box) => box.id === draggedItemId);

      if (draggedItem) {
        // Update state for both dropping within bottomBox and to start-box
        if (targetId === "bottomBox") {
          setBoxes((prevBoxes) =>
            prevBoxes.filter((box) => box.id !== draggedItemId)
          );
          setBottomBoxContent((prevContent) => [
            ...prevContent.filter((content) => content.id !== draggedItemId),
            draggedItem,
          ]); // Re-order content within bottomBox
        } else if (targetId === "start-box") {
          // Check if the dragged item is not already present in the start-box to avoid duplicates
          if (!boxes.find((box) => box.id === draggedItemId)) {
            setBottomBoxContent((prevContent) =>
              prevContent.filter((content) => content.id !== draggedItemId)
            );
            setBoxes((prevBoxes) => [...prevBoxes, draggedItem]);
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
        setBoxes((prevBoxes) => [...prevBoxes, draggedContentItem]);
      }
    }
  };

  return (
    <main className="relative h-screen overflow-hidden ">
      <div className="absolute z-30 top-6 left-4">
        <Link to="/login" className=" text-zinc-100 text-2xl  ">
          <FaArrowLeft />
        </Link>
      </div>

      <div className="absolute  brightness-[25%]">
        {/* <video loop muted>
          <source src="../src/assets/video1.mp4" />
        </video> */}
        {!videoLoaded && (
          <img
            src="../src/assets/poster_image.jpg"
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
          <source src="../src/assets/video1.mp4" />
        </video>
      </div>
      <div className="flex justify-between items-center px-5 pt-4 relative ">
        <div className="w-[180px] gradient ml-20 ">
          <img src="../src/assets/hero-2.png" alt="logo" />
        </div>
        <div className="mr-10 flex gap-8 text-white">
          <Link to="/">Log out</Link>
        </div>
      </div>
      <section className=" text-white  relative ">
        <section className=" py-2 ">
          <div className=" w-[1320px] mx-auto  py-3 shadow-lg rounded-lg new mt-4">
            {/* <div className="flex justify-center items-center mb-6">
          <div className="w-[180px] ">
            <img src="../src/assets/hero-2.png" alt="hello" />
          </div>
          
        </div> */}

            <div className=" bg-white px-8 mx-3 py-6 ">
              <div className="flex gap-4  items-center  ">
                <input
                  type="text"
                  placeholder="Label here..."
                  className="w-full text-gray-500 bg-white rounded-md p-2 border-2 border-[#0a0a3d] outline-none"
                />
                <span className="text-2xl bg-[#0a0a3d] text-white p-2 rounded-md">
                  Search
                </span>
              </div>
              <div className="mt-8 flex justify-between text-gray-800 font-bold text-sm ">
                <button
                  type="button"
                  className="px-4 rounded-md py-[1] border-[1px]  mr-2 border-[#920f0f]"
                >
                  Marketing
                </button>
                <button
                  type="button"
                  className="px-4 rounded-md py-2 border-[#920f0f] border-[1px]  mr-2"
                >
                  Text Reader
                </button>
                <button
                  type="button"
                  className="px-4 py-2 border-[1px] border-[#920f0f] rounded-md mr-2"
                >
                  Consult
                </button>
                <button
                  type="button"
                  className="px-4 py-2 border-[1px] border-[#920f0f] rounded-md  mr-2"
                >
                  Audit
                </button>
                <button
                  type="button"
                  className="px-4 py-2 border-[1px] border-[#920f0f] rounded-md  mr-2"
                >
                  Compliance
                </button>
                <button
                  type="button"
                  className="px-4 py-2 border-[1px] border-[#920f0f] rounded-md  mr-2"
                >
                  Testing
                </button>
                <button
                  type="button"
                  className="px-4 py-2 border-[1px] border-[#920f0f] rounded-md  mr-2"
                >
                  Summarize
                </button>
                <button
                  type="button"
                  className="px-4 py-2 border-[1px] border-[#920f0f] rounded-md  mr-2"
                >
                  Analyse
                </button>
                <button
                  type="button"
                  className="px-4 py-2 border-[1px] border-[#920f0f] rounded-md  mr-2"
                >
                  Invoicing
                </button>
                <button
                  type="button"
                  className="px-4 py-2 border-[1px] border-[#920f0f] rounded-md  mr-0"
                >
                  Compliance
                </button>
              </div>
              <h2 className="text-gray-700 mt-6 text-lg uppercase font-italic tracking-wide">
                Our AI Products
              </h2>

              <div
                id="start-box"
                className=" flex z-50 gap-5 self-center mt-6 py-2 h-[130px] relative"
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, "start-box")}
              >
                {boxes.map((box, j) => (
                  <section className="relative bg-red-400 " key={box.id}>
                    <div
                      draggable
                      onDragStart={(e) => handleDragStart(e, box.id, true)}
                      onDragOver={handleDragOver}
                      className=" rounded-2xl py-4 h-[170px] "
                    >
                      <div
                        id={box.id}
                        className={`text-gray-400 text-md relative    p-6     h-[130px] shadow-xl rounded-2xl border-[1px] hover:border-2 hover:shadow-inner bg-orange-300 opacity-100  ${
                          box.content === "chat"
                            ? "border-[#920f0f] "
                            : box.content === "email"
                            ? "border-orange-400"
                            : "border-blue-500"
                        }`}
                      >
                        <p className="text-lg text-gray-600 mb-2">{box.text}</p>
                        <p className="text-sm text-gray-500 leading-7">
                          {box.desc}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`box w-8 h-8 z-50${
                        box.content === "chat"
                          ? "bg-[#920f0f] "
                          : box.content === "email"
                          ? "bg-orange-400"
                          : "bg-blue-500"
                      } absolute top-[00px] left-[20px] rounded-[50%] flex justify-center items-center`}
                    >
                      {box.content === "chat" ? (
                        <IoIosChatboxes />
                      ) : box.content === "email" ? (
                        <GiSailboat />
                      ) : (
                        <BsFillWebcamFill />
                      )}
                    </div>
                  </section>
                ))}
              </div>

              <div
                id="bottomBox"
                className="bg-white rounded-lg flex gap-5 py-8 px-4  mt-14 shadow-xl border-2 border-gray-100 h-[190px]"
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, "bottomBox")}
              >
                {/* Bottom Box */}
                {bottomBoxContent.length >= 1 ? (
                  bottomBoxContent.map((content, j) => (
                    <section className="relative" key={j}>
                      <div
                        key={content.id}
                        id={content.id}
                        // className="bg-red-400 p-4 w-[fit-content] self-start"
                        className={`rounded-2xl  border-2 p-6 ${
                          content.content === "chat"
                            ? "border-[#920f0f] "
                            : content.content === "email"
                            ? "border-orange-400"
                            : "border-blue-500"
                        }  w-[380px]  h-[120px] shadow-xl`}
                        draggable
                        onDragStart={(e) =>
                          handleDragStart(e, content.id, false)
                        }
                        onDragOver={handleDragOver}
                      >
                        <p className="text-lg text-gray-600 mb-2">
                          {content.text}
                        </p>
                        <p className="text-sm text-gray-500 leading-7">
                          {content.desc}
                        </p>
                      </div>
                      <div
                        className={`box w-8 h-8 ${
                          content.content === "chat"
                            ? "bg-[#920f0f] "
                            : content.content === "email"
                            ? "bg-orange-400"
                            : "bg-blue-500"
                        } absolute top-[-15px] left-5 rounded-[50%] flex justify-center items-center`}
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
                  <div className="flex justify-center items-center w-full uppercase tracking-widest">
                    <h1 className="text-gray-400 text-center">
                      drop your ai products here
                    </h1>
                  </div>
                )}
              </div>
              <div
                className={`text-center px-8 py-4 text-2xl mt-6 mb-2  ${
                  bottomBoxContent.length >= 1
                    ? "border-gray-200 rounded-xl border-2 bg-[#050533]"
                    : ""
                } w-[fit-content] ml-auto mr-auto`}
              >
                {bottomBoxContent.length >= 1 && (
                  <Link to="/select">Submit</Link>
                )}
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};
