"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./VideoBanner.scss";

export default function VideoBanner() {
    const [isMobile, setIsMobile] = useState(false);
    const text = "Architecture of Being";
    const letters = text.split("");

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.3,
                staggerChildren: 0.04
            }
        }
    };

    const child: any = {
        hidden: { opacity: 0, y: 24 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.6, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <section className="videoBanner">
                <video className="video" autoPlay loop muted playsInline>
                    <source src="/videos/banner_4.mp4" type="video/mp4" />
                </video>
            {/* {!isMobile ? (
                <video className="video" autoPlay loop muted playsInline>
                    <source src="/videos/banner_4.mp4" type="video/mp4" />
                </video>
            ) : (
                <img src="/images/home-banner-mobile.jpg" className="fallbackImage" alt="Banner" />
            )} */}

            <div className="overlay"></div>

            <div className="content">
                <motion.h1
                    className="modernTitle"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    {letters.map((char, idx) => {
                        const isAccent = text.indexOf("Being") <= idx;
                        return (
                            <motion.span
                                key={idx}
                                variants={child}
                                className={isAccent ? "accent" : ""}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        );
                    })}
                </motion.h1>
            </div>
        </section>
    );
}


// "use client";

// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import "./VideoBanner.scss"

// export default function VideoBanner() {
//     const [isMobile, setIsMobile] = useState(false);

//     useEffect(() => {
//         setIsMobile(window.innerWidth < 768);
//     }, []);

//     return (
//         <section className="videoBanner">
//             {!isMobile ? (
//                 <video className="video" autoPlay loop muted playsInline>
//                     {/* <source src="/videos/banner_3.mp4" type="video/mp4" /> */}
//                     <source src="/videos/banner_4.mp4" type="video/mp4" />
//                 </video>
//             ) : (
//                 <img src="/images/home-banner-mobile.jpg" alt="Banner" className="fallbackImage" />
//             )}

//             <div className="overlay"></div>

//             <div className="content">
//                 <motion.h1
//                     initial={{ opacity: 0, y: 40 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.7 }}
//                     className="title"
//                 >
//                     <h1 className='text-[clamp(48px, 2vw, 84px)] text-white z-10' style={{ fontSize: "clamp(48px, 4vw, 84px)", textAlign: "center" }} >
//                         Architecture of <span className='text-[#3CBBCE]'>Being</span>
//                     </h1>
//                 </motion.h1>
//             </div>
//         </section>
//     );
// }
