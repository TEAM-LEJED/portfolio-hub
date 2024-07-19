import { useState, useEffect } from "react";
import React from "react";
import Lottie from "lottie-react";
import {
    FaArrowRight,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Dash } from "../../assets";
import { useNavigate } from "react-router-dom";

const container = (delay) => ({
    hidden: {
        opacity: 0,
        x: 100,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            delay: delay,
        },
    },
});

const Hero = () => {
    const navigate = useNavigate();
    const toRotate = ["Product Designer and Developer, based in Ghana", "Innovative Solutions for Your Projects", "Creating Impactful Designs and Codes"];
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => clearInterval(ticker);
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    };

    return (
        <>
            <main className="bg-[#12071F] text-white border-b border-yellow-600">
                <div className="container mx-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 min-h-[600px] place-items-center py-20 md:py-0 relative overflow-hidden">
                        {/* Image Section */}
                        <div className="grid col-span-2 relative h-full justify-center items-center">
                            <div className="w-[100px] sm:w-[100px] md:w-[650px]">
                                <motion.h1
                                    variants={container(0.5)}
                                    initial="hidden"
                                    whileInView="show"
                                    className="text-4xl md:text-6xl font-bold relative z-20"
                                >
                                    Portfolio <br /> Hub GH.
                                </motion.h1>
                                <motion.div
                                    variants={container(0.6)}
                                    initial="hidden"
                                    whileInView="show"
                                    className="h-[4px] w-[30px] bg-primary mt-4"
                                ></motion.div>
                                {/* Social Contacts Handles */}
                                <div className="flex gap-4 mt-24">
                                    <motion.div
                                        variants={container(0.7)}
                                        initial="hidden"
                                        whileInView="show"
                                    >
                                        <FaFacebook className="text-2xl hover:scale-110 cursor-pointer duration-200" />
                                    </motion.div>

                                    <motion.div
                                        variants={container(0.8)}
                                        initial="hidden"
                                        whileInView="show"
                                    >
                                        <FaInstagram
                                            className="text-2xl hover:scale-110 cursor-pointer duration-200" />
                                    </motion.div>

                                    <motion.div
                                        variants={container(0.9)}
                                        initial="hidden"
                                        whileInView="show"
                                    >
                                        <FaSquareXTwitter
                                            className="text-2xl hover:scale-110 cursor-pointer duration-200" />
                                    </motion.div>

                                    <motion.div
                                        variants={container(1)}
                                        initial="hidden"
                                        whileInView="show"
                                    >
                                        <FaLinkedin
                                            className="text-2xl hover:scale-110 cursor-pointer duration-200" />
                                    </motion.div>

                                </div>
                            </div>
                            {/* Lottie Animation */}
                            <motion.div
                                variants={container(-0.7)}
                                initial="hidden"
                                whileInView={"show"}
                                transition={{ duration: 1 }}
                                className="absolute left-6 md:left-40 bottom-0">
                                <Lottie
                                    className="scale-110 relative z-10 w-[250px] sm:w-[400px] md:w-[600px]"
                                    loop={true}
                                    animationData={Dash}
                                />
                            </motion.div>
                        </div>

                        {/* Text Content Section */}
                        <div className="space-y-8">
                            <motion.p
                                variants={container(0.5)}
                                initial="hidden"
                                whileInView={"show"}
                                className="text-sm opacity-50 tracking-widest font-serif translate-y-3">
                                Welcome to Portfolio Hub GH.!🌟
                            </motion.p>
                            <motion.h1
                                variants={container(0.6)}
                                initial="hidden"
                                whileInView={"show"}
                                className="text-3xl">{text}
                            </motion.h1>
                            <motion.p
                                variants={container(0.8)}
                                initial="hidden"
                                whileInView={"show"}
                                className="text-sm leading-6 opacity-70">
                                Dive into a world where imagination meets skill. Explore our
                                website as one can present their projects, passion, and
                                experiences. Let's help you create something extraordinary
                                together! 🚀✨
                            </motion.p>
                            <motion.button
                                onClick={() => navigate("/signup")}
                                variants={container(0.9)}
                                initial="hidden"
                                whileInView={"show"}
                                className="text-primary border-b-2 border-primary text-xl font-bold p-1 flex items-center gap-2 group">
                                Sign Up{" "}
                                <FaArrowRight className="text-sm hover:translate-x-2 transition duration-200" />
                            </motion.button>
                            <motion.button
                                onClick={() => navigate("/login")}
                                variants={container(1)}
                                initial="hidden"
                                whileInView={"show"}
                                className="text-primary border-b-2 border-primary text-xl font-bold p-1 flex items-center gap-2 group">
                                Login{" "}
                                <FaArrowRight className="text-sm hover:translate-x-2 transition duration-200" />
                            </motion.button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Hero;
