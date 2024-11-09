"use client";
import { Orbitron, Poppins } from "next/font/google";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import { useState } from "react";

const orbitron = Orbitron({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  const [showWhySims, setShowWhySims] = useState(false);
  const [showJoinUs, setShowJoinUs] = useState(false);
  return (
    <div className={`${styles.homeBackground} ${orbitron.className}`}>
      <Header />
      <main className="flex flex-col items-center justify-start min-h-screen pt-32 text-center space-y-8 px-8">
        <h1 className="text-5xl font-bold ">SIMS CTO</h1>
        <h2 className="text-lg  mt-2">
          Connecting the world, one SIM at a time
        </h2>

        <section className="text-center max-w-lg">
          <h2 className={`text-4xl font-bold ${styles["text-container"]} `}>
            Welcome to SIMS CTO
          </h2>
          <p
            className={`mt-4  ${poppins.className} leading-relaxed  ${styles["text-container"]}`}
          >
            Welcome to the Sims Community Take-Over (CTO) hub! Here, we’re
            building a vibrant community centered around shared creativity and
            collective ownership. Powered by the Solana blockchain, our
            community token empowers Sims fans to participate in events,
            collaborate on projects, and earn rewards. Join us as we explore new
            ways to connect, create, and play together in the Sims universe!
          </p>
          <div className="w-full flex justify-center">
            <p
              className={`mt-10 mb-10 font-bold text-2xl ${poppins.className} text-center ${styles["text-container"]} whitespace-nowrap`}
            >
              CA: HgJN8j5QsbSKnwkthWAbEawPkXR1vB2TrAFiujV4pump
            </p>
          </div>
        </section>

        {/* Flex container for Why SIMS CTO and Join Us sections */}
        <section className="flex flex-col lg:flex-row justify-start w-full mt-16 space-x-0 lg:space-x-8">
          {/* Why SIMS CTO Section */}
          <div className="text-left w-full lg:w-1/2 pr-0 lg:pr-4 ">
            <h2
              className={`text-4xl font-bold ${styles["text-container"]} cursor-pointer`}
              onClick={() => setShowWhySims(!showWhySims)}
            >
              Why SIMS CTO?
              <span
                className={`ml-2 transform transition-transform duration-300 ${
                  showWhySims ? "rotate-180" : "rotate-0"
                }`}
              >
                ▼
              </span>
            </h2>
            {showWhySims && (
              <div
                className={`space-y-4 lg:space-y-6 ${styles["text-container"]}`}
              >
                <p className={`${poppins.className} leading-relaxed`}>
                  Sims is a community take-over (CTO) project that was taken
                  over after it launched on the Solana blockchain through
                  pump.fun and the developer of it had sold his position. It
                  bonded on to radium through a Mev bot which then crashed the
                  chart soon after it bonded.
                </p>
                <p className={`${poppins.className} leading-relaxed`}>
                  Since then, the community has rallied together to rebuild.
                  Every day growing and learning more about what fits where, and
                  who’s good at what. We have finally found a purpose here at
                  SIMS CTO and I believe that purpose is to DREAM.
                </p>
                <p className={`${poppins.className} leading-relaxed`}>
                  When you buy into this project, look at it like a blank
                  canvas. You have the possibility to imagine and create
                  whatever you can dream. We strive to support a healthy
                  community here, and everyone’s opinions matter. Be a part of
                  something that the blockchain has never seen before and come
                  create history in the making.
                </p>
              </div>
            )}
          </div>

          {/* Join Us Section */}
          <div className="text-left w-full lg:w-1/2 pl-0 lg:pl-4 mt-8 lg:mt-0">
            <h2
              className={`text-4xl font-bold  font-orbitron  ${styles["text-container"]}`}
              onClick={() => setShowJoinUs(!showJoinUs)}
            >
              Join Us in Building the Future of SIMS CTO!
              <span
                className={`ml-2 transform transition-transform duration-300 ${
                  showJoinUs ? "rotate-180" : "rotate-0"
                }`}
              >
                ▼
              </span>
            </h2>
            {showJoinUs && (
              <>
                <p
                  className={`mt-4  ${poppins.className} leading-relaxed  ${styles["text-container"]}`}
                >
                  Our community-driven journey is only just beginning, and your
                  support can make all the difference! By contributing to the{" "}
                  <span className=" font-bold">SIMS Marketing Wallet</span>,
                  you’re helping fuel our mission of transparency, inclusivity,
                  and empowerment within the decentralized finance space.
                </p>
                <p
                  className={`mt-4  ${poppins.className} leading-relaxed  ${styles["text-container"]}`}
                >
                  Every contribution—big or small—goes directly towards
                  initiatives that strengthen our community, spread awareness,
                  and showcase the unique value of SIMS CTO to the world.
                </p>
                <p
                  className={`mt-4  ${poppins.className} leading-relaxed  ${styles["text-container"]}`}
                >
                  <span className=" font-bold">
                    🔗 Marketing Wallet on Solscan
                  </span>
                </p>
                <p
                  className={`mt-4  ${poppins.className} leading-relaxed  ${styles["text-container"]}`}
                >
                  If you have any questions, ideas, or want to share how you’d
                  like to support, please feel free to reach out to us at{" "}
                  <span className=" font-bold">ctosimz@gmail.com</span>.
                  Together, let’s continue building a thriving, inclusive
                  community! 💪 🌐 ✨
                </p>
              </>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
