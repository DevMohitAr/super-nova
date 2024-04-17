import React from 'react'
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import { useGlobal } from './Provider';
export default function Comp1() {
    const { setMobSel, mobSel } = useGlobal();
  
  return (
    <div>
      <div className="absolute z-30 top-6 left-4">
        <Link to="/new" className=" text-zinc-100 text-2xl  ">
          <FaArrowLeft />
        </Link>
      </div>
      <section className='grid place-content-center h-screen'>
        <div className='h-full px-6'>
          {mobSel && (
            <WebViewComponent
              src={
                mobSel === "chat" || mobSel === "email"
                  ? `https://chatapp-9694f.web.app/#/${mobSel}`
                  : "https://consult-ai.co"
              }
            />
          )}
        </div>
      </section>
    </div>
  );
}

const WebViewComponent = ({ src, title }) => {
  return (
    <div className="h-[500px] overflow-y-auto bg-white relative ">
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