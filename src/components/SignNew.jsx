import React from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useAnimation, animate } from "framer-motion";

export default function SignNew() {
  const ref = React.useRef();
  const isInView = useInView(ref, { threshold: 0.5, once: true });
  const ref1 = React.useRef();
  const isInView1 = useInView(ref1, { threshold: 0.5, once: true });

  const textVariants = {
    initial: {
      opacity: 0,
      x: "-100%",
    },
    animate: {
      opacity: 0.9,
      x: 0,

      transition: {
        duration: 2,
        staggerChildren: 0.1,
        delay: 4,
      },
    },
  };
  const headVariants = {
    initial: {
      y: "200%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 0.9,

      transition: {
        duration: 2,
        staggerChildren: 0.1,
        delay: 4,
      },
    },
  };
  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",

      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 20,
      },
    },
  };
  const svgVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 0.9,

      transition: {
        duration: 2,
        staggerChildren: 0.1,
        delay: 3,
      },
    },
  };
  return (
    <div>
      <main className=" relative w-screen h-screen overflow-hidden bbc ">
        {/* <div className="absolute h-screen w-screen brightness-[60%] ">
          <video autoPlay loop muted  >
            <source src="../src/assets/video1.mp4" />
          </video>
        </div> */}
        <motion.section
          className="relative  h-full  text-white  "
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          <motion.div
            className="menu flex justify-between items-center px-6 py-6"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            <motion.div className="w-[180px] gradient" variants={textVariants}>
              <motion.img
                src="../src/assets/hero-2.png"
                alt="logo"
                variants={textVariants}
              />
            </motion.div>
            <div className="mr-2 flex gap-8">
              {/* <button>For Business</button>
            <button>FAQ</button> */}
              {/* <button>Sign In</button> */}
            </div>
          </motion.div>
          <motion.div
            className="kaka grid place-content-center h-[94vh]   text-center"
            variants={headVariants}
            initial="initial"
            animate="animate"
          >
            <motion.h1
              className=" mb-3 text-[32px] custom-font md:text-[48px] "
              variants={headVariants}
            >
              Driving the Future of Business Intelligence{" "}
            </motion.h1>
            <h2 className="text-xl italic font-semibold custom-font1 md:text-2xl ">
              Powered By Ai
            </h2>
            <motion.p className="text-2xl mb-7" variants={headVariants}>
              {/* Harness The Power of Data, With our Domain-Specific AI agents{" "} */}
            </motion.p>
            <motion.p className="text-xl mb-8" variants={headVariants}>
              {/* Ready to get started?Enter your business email to start. */}
            </motion.p>
            <motion.div
              className="flex gap-2 items-center justify-center"
              variants={headVariants}
            >
              {/* <input
              type="text"
              placeholder="Email address"
              className="border-2 border-[gray] py-2 px-4 w-[320px] text-gray-500"
            /> */}
              <Link
                to="/login"
                type="button"
                className=" text-white border-2 border-white px-12 py-4  abc"
              >
                Get Started
              </Link>
            </motion.div>
          </motion.div>

          {/* <motion.div
        className="text-[35vh]   absolute -bottom-[50px] whitespace-nowrap uppercase w-[50%] mix-blend-burn"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Supernova
      </motion.div> */}
        </motion.section>

        <motion.div
          className="set  "
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 0.9 : 0 }}
          //whileInView={{ opacity: 0 }}
          transition={{ duration: 7 }}
        >
          <svg
            className="svg w-[500px] h-[85px] md:h-[125px]"
            stroke="white"
            viewBox="0 0 500 125"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              className="one"
              strokeWidth={1}
              initial={{ pathLength: 0, opacity: 3 }}
              animate={isInView && { pathLength: 1, opacity: 0 }}
              transition={{ duration: 6, delay: 1 }}
              ref={ref}
              d="M87.036 85.196L84.552 84.62C82.944 84.236 81.744 83.552 80.952 82.568C80.184 81.56 79.8 80.372 79.8 79.004C79.8 77.996 80.016 77.072 80.448 76.232C80.904 75.368 81.612 74.684 82.572 74.18C83.532 73.652 84.78 73.388 86.316 73.388C87.972 73.388 89.316 73.652 90.348 74.18C91.38 74.708 92.112 75.404 92.544 76.268C92.976 77.132 93.108 78.056 92.94 79.04L88.98 79.76C89.316 78.128 89.22 76.868 88.692 75.98C88.188 75.092 87.336 74.648 86.136 74.648C85.296 74.648 84.6 74.9 84.048 75.404C83.496 75.884 83.22 76.58 83.22 77.492C83.22 78.332 83.46 79.076 83.94 79.724C84.42 80.348 85.128 80.768 86.064 80.984L88.548 81.56C90.324 81.968 91.608 82.616 92.4 83.504C93.192 84.368 93.588 85.448 93.588 86.744C93.588 88.352 92.988 89.696 91.788 90.776C90.612 91.832 88.848 92.36 86.496 92.36C85.68 92.36 84.78 92.24 83.796 92C82.836 91.736 81.948 91.268 81.132 90.596C80.34 89.924 79.764 88.964 79.404 87.716L81.744 86.78C81.912 88.364 82.452 89.48 83.364 90.128C84.3 90.776 85.344 91.1 86.496 91.1C87.576 91.1 88.452 90.86 89.124 90.38C89.82 89.876 90.168 89.156 90.168 88.22C90.168 87.572 89.94 86.984 89.484 86.456C89.052 85.904 88.236 85.484 87.036 85.196ZM116.537 90.992V92H109.841V88.832C109.169 90.056 108.305 90.956 107.249 91.532C106.193 92.084 105.125 92.36 104.045 92.36C102.341 92.36 100.985 91.796 99.9769 90.668C98.9689 89.516 98.4649 87.92 98.4649 85.88V76.772C98.4649 75.956 98.4289 75.476 98.3569 75.332C98.2849 75.164 98.0569 75.056 97.6729 75.008L95.6929 74.756V73.748H102.605V85.844C102.605 87.5 102.833 88.712 103.289 89.48C103.769 90.224 104.453 90.596 105.341 90.596C105.725 90.596 106.169 90.5 106.673 90.308C107.201 90.092 107.729 89.72 108.257 89.192C108.785 88.64 109.241 87.86 109.625 86.852V76.772C109.625 75.956 109.589 75.464 109.517 75.296C109.445 75.128 109.217 75.032 108.833 75.008L106.133 74.756V73.748H113.765V88.976C113.765 89.792 113.801 90.284 113.873 90.452C113.945 90.596 114.173 90.692 114.557 90.74L116.537 90.992ZM117.705 74.756V73.748H124.401V76.736C125.097 75.608 125.853 74.768 126.669 74.216C127.485 73.664 128.457 73.388 129.585 73.388C131.601 73.388 133.197 74.192 134.373 75.8C135.573 77.384 136.173 79.616 136.173 82.496V83.216C136.173 86 135.489 88.22 134.121 89.876C132.753 91.532 130.857 92.36 128.433 92.36C126.993 92.36 125.721 92 124.617 91.28V96.644C124.617 97.46 124.653 97.94 124.725 98.084C124.797 98.252 125.025 98.36 125.409 98.408L128.109 98.66V99.668H117.705V98.66L119.685 98.408C120.069 98.36 120.297 98.252 120.369 98.084C120.441 97.94 120.477 97.46 120.477 96.644V76.772C120.477 75.956 120.441 75.476 120.369 75.332C120.297 75.164 120.069 75.056 119.685 75.008L117.705 74.756ZM128.649 74.972C128.049 74.972 127.413 75.224 126.741 75.728C126.093 76.208 125.385 77.204 124.617 78.716V89.588C125.529 90.5 126.645 90.956 127.965 90.956C129.309 90.956 130.269 90.368 130.845 89.192C131.445 87.992 131.745 86.36 131.745 84.296V81.416C131.745 79.184 131.469 77.552 130.917 76.52C130.365 75.488 129.609 74.972 128.649 74.972ZM155.252 87.716C154.82 89.396 154.016 90.596 152.84 91.316C151.664 92.012 150.296 92.36 148.736 92.36C145.856 92.36 143.696 91.532 142.256 89.876C140.816 88.196 140.096 85.976 140.096 83.216V82.496C140.096 79.736 140.768 77.528 142.112 75.872C143.48 74.216 145.448 73.388 148.016 73.388C149.456 73.388 150.728 73.676 151.832 74.252C152.96 74.804 153.836 75.608 154.46 76.664C155.108 77.72 155.432 79.004 155.432 80.516C155.432 80.876 155.408 81.26 155.36 81.668C155.336 82.076 155.276 82.484 155.18 82.892H144.524V83.936C144.524 86.48 144.884 88.316 145.604 89.444C146.324 90.548 147.488 91.1 149.096 91.1C150.128 91.1 151.004 90.8 151.724 90.2C152.444 89.576 152.852 88.532 152.948 87.068L155.252 87.716ZM148.016 74.648C146.84 74.648 145.964 75.188 145.388 76.268C144.812 77.348 144.524 79.136 144.524 81.632H151.04C151.136 81.152 151.196 80.708 151.22 80.3C151.268 79.868 151.292 79.472 151.292 79.112C151.292 77.576 150.992 76.448 150.392 75.728C149.792 75.008 149 74.648 148.016 74.648ZM158.07 74.756V73.748H164.766V76.7C166.23 74.492 167.97 73.388 169.986 73.388C170.73 73.388 171.45 73.628 172.146 74.108C172.842 74.564 173.418 75.428 173.874 76.7L170.67 78.428C170.334 77.444 169.938 76.784 169.482 76.448C169.05 76.088 168.582 75.908 168.078 75.908C167.55 75.908 167.034 76.076 166.53 76.412C166.026 76.748 165.51 77.372 164.982 78.284V88.976C164.982 89.792 165.018 90.284 165.09 90.452C165.162 90.596 165.39 90.692 165.774 90.74L168.474 90.992V92H158.07V90.992L160.05 90.74C160.434 90.692 160.662 90.596 160.734 90.452C160.806 90.284 160.842 89.792 160.842 88.976V76.772C160.842 75.956 160.806 75.476 160.734 75.332C160.662 75.164 160.434 75.056 160.05 75.008L158.07 74.756Z"
              fill="white"
            />
            <motion.path
              className="two"
              strokeWidth={5}
              initial={{ pathLength: 0, opacity: 2 }}
              animate={isInView1 && { pathLength: 1, opacity: 0 }}
              transition={{ duration: 5, delay: 2 }}
              ref={ref1}
              d="M218.64 31.408V28.72H237.264V31.408L231.984 32.08C230.96 32.208 230.352 32.496 230.16 32.944C229.968 33.328 229.872 34.608 229.872 36.784V94H224.592L189.36 37.072V85.936C189.36 88.112 189.456 89.424 189.648 89.872C189.84 90.256 190.448 90.512 191.472 90.64L196.752 91.312V94H178.128V91.312L183.408 90.64C184.432 90.512 185.04 90.256 185.232 89.872C185.424 89.424 185.52 88.112 185.52 85.936V36.784C185.52 34.608 185.424 33.328 185.232 32.944C185.04 32.496 184.432 32.208 183.408 32.08L178.128 31.408V28.72H197.424L226.032 74.704V36.784C226.032 34.608 225.936 33.328 225.744 32.944C225.552 32.496 224.944 32.208 223.92 32.08L218.64 31.408ZM298.274 58.288V64.336C298.274 74.192 296.066 81.776 291.65 87.088C287.298 92.336 280.834 94.96 272.258 94.96C263.682 94.96 257.186 92.336 252.77 87.088C248.418 81.776 246.242 74.192 246.242 64.336V58.288C246.242 48.432 248.418 40.88 252.77 35.632C257.186 30.384 263.682 27.76 272.258 27.76C280.834 27.76 287.298 30.384 291.65 35.632C296.066 40.88 298.274 48.432 298.274 58.288ZM285.986 53.488C285.986 47.856 285.506 43.44 284.546 40.24C283.586 36.976 282.082 34.64 280.034 33.232C278.05 31.824 275.458 31.12 272.258 31.12C269.122 31.12 266.53 31.824 264.482 33.232C262.434 34.64 260.93 36.976 259.97 40.24C259.01 43.44 258.53 47.856 258.53 53.488V69.136C258.53 74.704 259.01 79.12 259.97 82.384C260.93 85.648 262.434 88.016 264.482 89.488C266.53 90.896 269.122 91.6 272.258 91.6C275.458 91.6 278.05 90.896 280.034 89.488C282.082 88.016 283.586 85.648 284.546 82.384C285.506 79.12 285.986 74.704 285.986 69.136V53.488ZM354.392 36.784L336.248 94H327.992L309.752 36.784C309.304 35.312 308.952 34.288 308.696 33.712C308.44 33.072 308.152 32.656 307.832 32.464C307.512 32.272 307 32.144 306.296 32.08L301.015 31.408V28.72H327.704V31.408L322.424 32.08C321.4 32.208 320.856 32.496 320.792 32.944C320.728 33.328 321.016 34.608 321.656 36.784L336.248 82.576L350.648 36.784C351.352 34.608 351.64 33.328 351.512 32.944C351.448 32.496 350.904 32.208 349.88 32.08L344.6 31.408V28.72H363.032V31.408L357.752 32.08C357.112 32.144 356.632 32.272 356.312 32.464C355.992 32.656 355.704 33.072 355.448 33.712C355.192 34.288 354.84 35.312 354.392 36.784ZM373.546 91.312V94H355.018V91.312L360.298 90.64C361.002 90.512 361.514 90.384 361.834 90.256C362.154 90.064 362.442 89.648 362.698 89.008C362.954 88.368 363.306 87.344 363.754 85.936L382.09 28.72H390.346L408.778 85.936C409.226 87.344 409.578 88.368 409.834 89.008C410.09 89.648 410.378 90.064 410.698 90.256C411.082 90.384 411.594 90.512 412.234 90.64L417.514 91.312V94H391.018V91.312L396.298 90.64C397.322 90.512 397.866 90.256 397.93 89.872C398.058 89.424 397.77 88.112 397.066 85.936L393.418 74.032H371.242L367.498 85.936C366.858 88.112 366.57 89.424 366.634 89.872C366.698 90.256 367.242 90.512 368.266 90.64L373.546 91.312ZM372.394 70.672H392.362L382.474 38.8L372.394 70.672Z"
              fill="white"
            />
          </svg>
        </motion.div>
      </main>
    </div>
  );
}
