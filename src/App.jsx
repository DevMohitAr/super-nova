import "./App.css";
import React from "react";
import { Drag } from "./components/Drag";
import SelectedBox from "./components/SelectedBox";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoBackground from "./components/VideoBackground";
import { Newdrag } from "./components/Newdrag";
import SignNew from "./components/SignNew";
import {MobileNewdrag} from "./components/MobileNewdrag";
import Comp1 from "./components/Comp1";
import { AppProvider } from "./components/Provider";

function App() {
  const [name, setName] = React.useState("");
  const [boxes, setBoxes] = React.useState([
    {
      id: "box1",
      text: "Consult AI-Knowledge Management ",
      desc: "Enpowering Decisions,Simplifying Solutions - Your AI-Powered Knowledge Partner",
      content: "chat",
    },
    {
      id: "box2",
      text: "Consult AI-Knowledge Generator",
      desc: "Minutes to Mastery:Revolutionizing Business Documents creation with AI Speed and Precision",
      content: "email",
    },
    {
      id: "box3",
      text: "Consult AI-Social Media Tracker",
      desc: "Mastering the social sphere:AI-Driven Insights to Amplify Your Brand and Drive Growth",
      content: "risk",
    },
  ]);
  const [boxes1, setBoxes1] = React.useState([
    {
      id: "box1",
      text: "Consult AI-Knowledge Management",
      desc: "Enpowering Decisions,Simplifying Solutions - Your AI-Powered Knowledge Partner consult ai-knowledge management personalised text generation knowledge management knowledge generation",
      content: "chat",
      color: "border-[#920f0f]",
      bgColor: "bg-[#920f0f]",
    },
    {
      id: "box2",
      text: "Consult AI-Knowledge Generator",
      desc: "Minutes to Mastery:Revolutionizing Business Documents creation with AI Speed and Precision consult ai-knowledge generator knowledge generation",
      content: "risk",
      color: "border-orange-400",
      bgColor: "bg-orange-400",
    },
    {
      id: "box3",
      text: "IGenius AI Marketing",
      desc: "Hyper-Customized, AI-Powered:Crafting Unique Customer Content at Scale igenius ai marketing",
      content: "email",
      color: "border-green-500",
      bgColor: "bg-green-500",
    },
    {
      id: "box4",
      text: "Consult AI- Executive Insights",
      desc: "Instant Intelligence, Enduring Edge:Empower Your Decisions with AI-Driven Insights consult ai- executive insights data insights dashboard summarize vendor comparison scope generation",
      content: "risk",
      color: "border-blue-400",
      bgColor: "bg-blue-400",
    },

    {
      id: "box5",
      text: "Consult AI - Social Media Tracker",
      desc: "Mastering the Social Sphere:AI-Driven Insights to Amplify Your Brand and Driven Growth consult ai - social media tracker",
      content: "risk",
      color: "border-violet-500",
      bgColor: "bg-violet-500",
    },
    {
      id: "box6",
      text: "RiskGPT",
      desc: "Empowering with AI-Driven Risk Insights, Leveraging advanced AI to identify, assess, and mitigate all potential risks riskgpt tech risk rfp",
      content: "risk",
      color: "border-pink-200",
      bgColor: "bg-pink-200",
    },
  ]);
  const [bottomBoxContent, setBottomBoxContent] = React.useState([]);
  const [text, setText] = React.useState([
    { text: "Personalised Text Generation", id: "RiskGPT" },
    { text: "Data Insights", id: "RiskGPT" },
    { text: "Dashboard", id: "Consult AI - Social Media Tracker" },
    { text: " Tech Risk", id: "Consult AI - Social Media Tracker" },
    { text: "Knowledge Management", id: "Consult AI - Social Media Tracker" },
    { text: " Knowledge Generation", id: "Consult AI - Social Media Tracker" },
    { text: "Summarize", id: "IGenius AI Marketing" },
    { text: "Vendor Comparison", id: "IGenius AI Marketing" },
    { text: "RFP", id: "IGenius AI Marketing" },
    { text: "Scope Generation", id: "IGenius AI Marketing" },
  ]);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    updateIsMobile(); // Set initial state

    window.addEventListener("resize", updateIsMobile);

    return () => {
      window.removeEventListener("resize", updateIsMobile);
    };
  }, []);
  return (
    <AppProvider>
      <BrowserRouter>
        <VideoBackground />
        <Routes>
          <Route path="/" element={<SignNew />} />
          <Route
            path="/login"
            element={<Login name={name} setName={setName} />}
          />
          <Route
            path="/drag"
            element={
              <Drag
                boxes={boxes}
                bottomBoxContent={bottomBoxContent}
                setBoxes={setBoxes}
                setBottomBoxContent={setBottomBoxContent}
              />
            }
          />
          {isMobile ? (
            <Route
              path="/new"
              element={
                <MobileNewdrag
                  boxes1={boxes1}
                  bottomBoxContent={bottomBoxContent}
                  setBoxes1={setBoxes1}
                  text={text}
                  setText={setText}
                  setBottomBoxContent={setBottomBoxContent}
                />
              }
            />
          ) : (
            <Route
              path="/new"
              element={
                <Newdrag
                  boxes1={boxes1}
                  bottomBoxContent={bottomBoxContent}
                  setBoxes1={setBoxes1}
                  text={text}
                  setText={setText}
                  setBottomBoxContent={setBottomBoxContent}
                />
              }
            />
          )}
          <Route
            path="/select"
            element={
              <SelectedBox bottomBoxContent={bottomBoxContent} name={name} />
            }
          />
          <Route path="/ss" element={<SignNew />} />
          <Route path="/one" element={<Comp1 />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
